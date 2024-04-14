import {useQuery} from "@tanstack/react-query";
import QueryKey from "../constants/QueryKey";
import {listAllChats} from "./chatApi";

const useListAllChats = () => {
    const { data } = useQuery({
        queryKey: [QueryKey.LIST_ALL_CHATS],
        queryFn: listAllChats,
    });

    console.log('DATA', data);

    return {
        data: data ? data.data : null,
    }
}

export default useListAllChats;