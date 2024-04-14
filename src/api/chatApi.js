import {chatServiceApi, notificationServiceApi} from "./axiosConfig";

export const listAllChats = async () => {
    try {
        return await chatServiceApi.get('');
    } catch (error) {
        throw error;
    }
}

export const listAllMessages = async (chatId) => {
    try {
        return await chatServiceApi.get(`/${chatId}/messages`);
    } catch (error) {
        throw error;
    }
}

export const sendMessage = async ({ messageId, chatId, senderId, senderName, senderPicture, type, content, timestamp }) => {
    try {
        return await chatServiceApi.put(`/${chatId}/messages`, {
            newMessage: {
                messageId,
                senderId, senderName, senderPicture, type, content, timestamp
            }
        })
    } catch (error) {
        throw error;
    }
}

export const listAllAddFriendRequestReceived = async (userId) => {
    try {
        return await notificationServiceApi.get(`/getListReceiverRequest/${userId}`);
    } catch (error) {
        throw error;
    }
}

export const deleteMessage = async ({ chatId, messageId }) => {
    try {
        return await chatServiceApi.delete(`/${chatId}/messages/${messageId}`);
    } catch (error) {
        throw error;
    }
}