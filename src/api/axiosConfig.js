import axios from "axios";

export const authServiceApi = axios.create({
    baseURL: "http://localhost:8080/api/v1/auth",
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    }
});

export const chatServiceApi = axios.create({
    baseURL: "http://localhost:8082/api/chats",
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    }
});

export const notificationServiceApi = axios.create({
    baseURL: "http://localhost:8081/api/requests",
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    }
});