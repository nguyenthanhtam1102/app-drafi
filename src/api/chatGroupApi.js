import {chatServiceApi} from "./axiosConfig";

export const createGroupChat = async ({ groupName, participantIdList, type, picture, managerId }) => {
    try {
        return await chatServiceApi.post("", {
            name: groupName,
            participants: participantIdList,
            type: type,
            picture: picture,
            managerId: managerId,
        })
    } catch(error) {
        throw error;
    }
}