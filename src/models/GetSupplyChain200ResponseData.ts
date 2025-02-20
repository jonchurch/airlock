/* tslint:disable */
/* eslint-disable */
/**
 * SpaceTraders API
 * SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.  The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.  ```json http {   \"method\": \"GET\",   \"url\": \"https://api.spacetraders.io/v2\", } ```  Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.  We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.   
 *
 * The version of the OpenAPI document: 2.3.0
 * Contact: joel@spacetraders.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GetSupplyChain200ResponseData
 */
export interface GetSupplyChain200ResponseData {
    /**
     * 
     * @type {any}
     * @memberof GetSupplyChain200ResponseData
     */
    exportToImportMap: any | null;
}

/**
 * Check if a given object implements the GetSupplyChain200ResponseData interface.
 */
export function instanceOfGetSupplyChain200ResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "exportToImportMap" in value;

    return isInstance;
}

export function GetSupplyChain200ResponseDataFromJSON(json: any): GetSupplyChain200ResponseData {
    return GetSupplyChain200ResponseDataFromJSONTyped(json, false);
}

export function GetSupplyChain200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSupplyChain200ResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exportToImportMap': json['exportToImportMap'],
    };
}

export function GetSupplyChain200ResponseDataToJSON(value?: GetSupplyChain200ResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exportToImportMap': value.exportToImportMap,
    };
}

