import {chatServiceApi} from "./axiosConfig";

export const createGroupChat = async ({ groupName, participantIdList, type }) => {
    try {
        return await chatServiceApi.post("", {
            name: groupName,
            participants: participantIdList,
            type: type,
        })
    } catch(error) {
        throw error;
    }
}