import { test, expect } from '../../fixtures/baseFixtures'
import { generateCreateAccountPayload } from '../../api/common'
import {getJsonResponse,assertResponseMatches} from '../../api/common'


test.describe('API Test', () => {
    test('POST To Create/Register User Account', async ({ accountApi }) => {
        const api_Response = await accountApi.createAccount(generateCreateAccountPayload());
        expect(api_Response.status()).toBe(200);
        expect(api_Response.statusText()).toBe("OK");
        const jsonResponse=await getJsonResponse(api_Response);
        console.log(jsonResponse)
        expect(jsonResponse.responseCode).toBe(201);
        expect(jsonResponse.message).toBe('User created!')
        assertResponseMatches(jsonResponse,{responseCode:201,message:'User created!'})
    })
})
