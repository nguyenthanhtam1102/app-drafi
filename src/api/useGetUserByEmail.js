import {useQuery} from "@tanstack/react-query";
import QueryKey from "../constants/QueryKey";


const getUserByEmail = (email) => {
    const {data: userInfo, isLoading} = useQuery({
        queryKey:[QueryKey.GET_USER_INFO],
        queryFn: () => getUserByEmail(email),
        initialData:[],
        onError: (error) => {
            console.error(error);
        }
    });
    return {userInfo: userInfo?.data, isLoading};
}

export default getUserByEmail;