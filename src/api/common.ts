import {expect} from '../fixtures/baseFixtures'

export async function getJsonResponse(reponse:any){
        return reponse.json();
    } 

export async function assertResponseMatches(actualJsonResponse:Record<string, any>,expectedJsonResponse:Record<string, any>){
    expect(actualJsonResponse).toMatchObject(expectedJsonResponse);
}