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
import type { Register201ResponseDataShipCooldown } from './Register201ResponseDataShipCooldown';
import {
    Register201ResponseDataShipCooldownFromJSON,
    Register201ResponseDataShipCooldownFromJSONTyped,
    Register201ResponseDataShipCooldownToJSON,
} from './Register201ResponseDataShipCooldown';

/**
 * 
 * @export
 * @interface CreateShipWaypointScan201ResponseData
 */
export interface CreateShipWaypointScan201ResponseData {
    /**
     * 
     * @type {Register201ResponseDataShipCooldown}
     * @memberof CreateShipWaypointScan201ResponseData
     */
    cooldown: Register201ResponseDataShipCooldown;
    /**
     * List of scanned waypoints.
     * @type {any}
     * @memberof CreateShipWaypointScan201ResponseData
     */
    waypoints: any | null;
}

/**
 * Check if a given object implements the CreateShipWaypointScan201ResponseData interface.
 */
export function instanceOfCreateShipWaypointScan201ResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cooldown" in value;
    isInstance = isInstance && "waypoints" in value;

    return isInstance;
}

export function CreateShipWaypointScan201ResponseDataFromJSON(json: any): CreateShipWaypointScan201ResponseData {
    return CreateShipWaypointScan201ResponseDataFromJSONTyped(json, false);
}

export function CreateShipWaypointScan201ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateShipWaypointScan201ResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cooldown': Register201ResponseDataShipCooldownFromJSON(json['cooldown']),
        'waypoints': json['waypoints'],
    };
}

export function CreateShipWaypointScan201ResponseDataToJSON(value?: CreateShipWaypointScan201ResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cooldown': Register201ResponseDataShipCooldownToJSON(value.cooldown),
        'waypoints': value.waypoints,
    };
}

