import QueryKey from "../constants/QueryKey";
import {listAllParticipants} from "./participantsApi";
import {useQuery} from "@tanstack/react-query";

const useListParticipants = (id) => {
    const { data: participants, isLoading, refetch} = useQuery({
        queryKey: [QueryKey.LIST_ALL_PARTICIPANTS],
        queryFn: () => listAllParticipants(id),
        initialData: [],
        onError: (error) => {
            console.error(error);
        }
    });

    return { participants: participants?.data, isLoading, refetch }
}

export default useListParticipants;