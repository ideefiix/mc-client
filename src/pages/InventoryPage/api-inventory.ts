import axiosClient from "../../apiClient.ts";


export function getPlayerItems(playerId:string){
    return axiosClient.get(`/item/${playerId}`)
}