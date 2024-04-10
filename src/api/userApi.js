import {authServiceApi} from "./axiosConfig";

export const getUserInfo = async (uid) => {
    try {
        return await authServiceApi.get(`/users/${uid}`);
    } catch (error) {
        throw error;
    }
};