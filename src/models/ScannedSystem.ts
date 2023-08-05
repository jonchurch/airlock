/* tslint:disable */
/* eslint-disable */
/**
 * SpaceTraders API
 * SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.  The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.  ```json http {   \"method\": \"GET\",   \"url\": \"https://api.spacetraders.io/v2\", } ```  Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.  We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.   
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: joel@spacetraders.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SystemType } from './SystemType';
import {
    SystemTypeFromJSON,
    SystemTypeFromJSONTyped,
    SystemTypeToJSON,
} from './SystemType';

/**
 * Details of a system was that scanned.
 * @export
 * @interface ScannedSystem
 */
export interface ScannedSystem {
    /**
     * Symbol of the system.
     * @type {string}
     * @memberof ScannedSystem
     */
    symbol: string;
    /**
     * Symbol of the system's sector.
     * @type {string}
     * @memberof ScannedSystem
     */
    sectorSymbol: string;
    /**
     * 
     * @type {SystemType}
     * @memberof ScannedSystem
     */
    type: SystemType;
    /**
     * Position in the universe in the x axis.
     * @type {number}
     * @memberof ScannedSystem
     */
    x: number;
    /**
     * Position in the universe in the y axis.
     * @type {number}
     * @memberof ScannedSystem
     */
    y: number;
    /**
     * The system's distance from the scanning ship.
     * @type {number}
     * @memberof ScannedSystem
     */
    distance: number;
}

/**
 * Check if a given object implements the ScannedSystem interface.
 */
export function instanceOfScannedSystem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "symbol" in value;
    isInstance = isInstance && "sectorSymbol" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "x" in value;
    isInstance = isInstance && "y" in value;
    isInstance = isInstance && "distance" in value;

    return isInstance;
}

export function ScannedSystemFromJSON(json: any): ScannedSystem {
    return ScannedSystemFromJSONTyped(json, false);
}

export function ScannedSystemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScannedSystem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'symbol': json['symbol'],
        'sectorSymbol': json['sectorSymbol'],
        'type': SystemTypeFromJSON(json['type']),
        'x': json['x'],
        'y': json['y'],
        'distance': json['distance'],
    };
}

export function ScannedSystemToJSON(value?: ScannedSystem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'symbol': value.symbol,
        'sectorSymbol': value.sectorSymbol,
        'type': SystemTypeToJSON(value.type),
        'x': value.x,
        'y': value.y,
        'distance': value.distance,
    };
}

