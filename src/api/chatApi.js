import {chatServiceApi} from "./axiosConfig";

export const listAllMessages = async (chatId) => {
    try {
        return await chatServiceApi.get(`/${chatId}/messages`);
    } catch (error) {
        throw error;
    }
}