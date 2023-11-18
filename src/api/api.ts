import axios from "axios";
import { constants } from "@/constants/constants";
import TokenService from "@/service/tokenService";

const publicApi = axios.create({
    baseURL: constants.API_URL,
});

const privateApi = axios.create({
    baseURL: constants.API_URL,
    headers: {
        "Authorization": `Bearer ${TokenService.getToken(constants.ACCESS_TOKEN)}`,
        "Refresh": `Refresh ${TokenService.getToken(constants.REFRESH_TOKEN)}`
    }
});

export {
    publicApi, privateApi
}