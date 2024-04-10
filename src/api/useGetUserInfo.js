import {useQuery} from "@tanstack/react-query";
import QueryKey from "../constants/QueryKey";
import {getUserInfo} from "./userApi";

const useGetUserInfo = (id) => {
    const { data: userInfo, isLoading} = useQuery({
        queryKey: [QueryKey.GET_USER_INFO],
        queryFn: () => getUserInfo(id),
        initialData: [],
        onError: (error) => {
            console.error(error);
        }
    });

    return { userInfo: userInfo?.data, isLoading }
}

export default useGetUserInfo;