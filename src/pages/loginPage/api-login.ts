import axiosClient from "../../apiClient.ts";

interface loginResponse {
    token: string,
    userId: string
}
export function login(userName, password){
    return axiosClient.post<loginResponse>(
        '/login',
        {
            userName: userName,
            password: password
        }
    )
}

