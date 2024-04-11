import {authServiceApi} from "./axiosConfig";

export const getUserInfo = async (uid) => {
    try {
        return await authServiceApi.get(`/users/${uid}`);
    } catch (error) {
        throw error;
    }
};

export const getUserByEmail = async (email) => {
    try {
        return await authServiceApi.get(`/users/${email}`);
    } catch (error){
        throw error;
    }
}