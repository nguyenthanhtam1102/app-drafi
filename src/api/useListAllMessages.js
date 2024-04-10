import {useQuery} from "@tanstack/react-query";
import QueryKey from "../constants/QueryKey";
import {listAllParticipants} from "./participantsApi";
import {listAllMessages} from "./chatApi";

const useListAllMessage = (chatId) => {
    const { data: messages, isLoading} = useQuery({
        queryKey: [QueryKey.LIST_ALL_MESSAGES],
        queryFn: () => listAllMessages(chatId),
        initialData: [],
        onError: (error) => {
            console.error(error);
        }
    });

    return { messages: messages?.data, isLoading }
}

export default useListAllMessage;