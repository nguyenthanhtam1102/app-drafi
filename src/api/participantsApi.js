import {chatServiceApi} from "./axiosConfig";

export const listAllParticipants = async (id) => {
    try {
        return await chatServiceApi.get(`/participants/${id}`);
    } catch (error) {
        throw error;
    }
}