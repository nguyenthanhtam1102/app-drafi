import {useQuery} from "@tanstack/react-query";
import QueryKey from "../constants/QueryKey";
import {getUserInfo} from "./userApi";
import {listAllAddFriendRequestReceived} from "./chatApi";

const useListAllAddFriendRequestReceived = (userId) => {
    const { data: addFriendRequestList, isLoading} = useQuery({
        queryKey: [QueryKey.LIST_ALL_ADD_FRIEND_REQUEST_RECEIVED],
        queryFn: () => listAllAddFriendRequestReceived(userId),
        initialData: [],
        onError: (error) => {
            console.error(error);
        }
    });

    return { addFriendRequestList: addFriendRequestList?.data, isLoading }
}

export default useListAllAddFriendRequestReceived;