import { APIRequestContext} from "@playwright/test";
import { API_BASE_URL } from "src/config/api_variables";
import { getJsonResponse, assertResponseMatches } from './common'


export default class AccountApi{
    private readonly request:APIRequestContext;
    constructor(request:APIRequestContext){
        this.request=request;
    }
    async createAccount(payLoad:any){
        const reponse = await this.request.post(API_BASE_URL+"/createAccount",{form:payLoad})
        assertResponseMatches(await getJsonResponse(reponse), { responseCode: 201, message: 'User created!' })
        return reponse
    }
}