import {useMutation, useQueryClient} from "@tanstack/react-query";
import {sendMessage} from "./chatApi";
import QueryKey from "../constants/QueryKey";
import socket from "../../config/SocketIOConfig";

export const useSendMessage = (chatId) => {
    const queryClient = useQueryClient();

    const { mutate: sendMessageMutate } = useMutation({
        mutationFn: (data) => sendMessage(data),
        onSuccess: (res) => {
            console.log(res);

            const message = res?.data?.data?.newMessage;

            if(message) {
                socket.emit("send-msg-private", {
                    receiveId: chatId,
                    newMessage: {
                        senderId: message?.senderId,
                        senderName: message?.senderName,
                        senderPicture: message?.senderPicture,
                        type: message?.type,
                        content: message?.content,
                        timestamp: message?.timestamp
                    }
                })

                console.log('refresh all message');
                queryClient.invalidateQueries({ queryKey: [`${QueryKey.LIST_ALL_MESSAGES}_${chatId}`] });
            }
        },
        onError: (errors) => {
            console.error(errors);
        },
    });

    return sendMessageMutate;
}