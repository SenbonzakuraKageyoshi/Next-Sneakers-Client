import { TokenNames } from "@/types/Tokens";

class TokenService {
    getToken = (tokenName: string) => localStorage.getItem(tokenName);

    setToken = (tokenName: string, token: string) => localStorage.setItem(tokenName, token);
    
    removeToken = (tokenName: string) => localStorage.removeItem(tokenName);
}

export default new TokenService();