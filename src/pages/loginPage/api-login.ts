import axiosClient from "../../apiClient.ts";


export function login(userName, password){
    return axiosClient.post(
        '/login',
        {
            name: userName,
            password: password
        }
    )
}

export function fetchPlayerFromAPI(playerId){
    return axiosClient.get<Player>(`/player/${playerId}`)
}

