import {useSelector} from "react-redux";
import socket, {notificationSocket} from "./config/SocketIOConfig";
import QueryKey from "./src/constants/QueryKey";
import {useEffect} from "react";
import {useQueryClient} from "@tanstack/react-query";

const MainApp = () => {
    const queryClient = useQueryClient();
    const user = useSelector((state) => state.userData);
    const userId = user.id;

    useEffect(() => {
        console.log('AAAAAAAAAAAAAAAAAAAA');

        if (socket) {
            socket.emit("add-user", userId);
            notificationSocket.emit("add-user", userId);

            socket.on("msg-recieve-private", (data) => {
                console.log('SOCKET PRIVATE MESSAGE RECEIVED', data)

                const chatId = data.from;
                queryClient.invalidateQueries({ queryKey: [QueryKey.LIST_ALL_PARTICIPANTS] });
                queryClient.invalidateQueries({ queryKey: [`${QueryKey.LIST_ALL_MESSAGES}_${chatId}`] });
            });

            socket.on("msg-recieve-public", (data) => {
                console.log('SOCKET PUBLIC MESSAGE RECEIVED', data);

                const chatId = data.from;
                queryClient.invalidateQueries({ queryKey: [QueryKey.LIST_ALL_PARTICIPANTS] });
                queryClient.invalidateQueries({ queryKey: [`${QueryKey.LIST_ALL_MESSAGES}_${chatId}`] });
            });

            notificationSocket.on("friendRequest", (data) => {
                console.log('FRIEND REQUEST', data);
                queryClient.invalidateQueries({ queryKey: [QueryKey.LIST_ALL_ADD_FRIEND_REQUEST_RECEIVED] });
            });

            notificationSocket.on("acceptFriend", (data) => {
                console.log('ACCEPT FRIEND', data);
            });
        }
    }, [user]);

    return <></>
}

export default MainApp;