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
 * A cooldown is a period of time in which a ship cannot perform certain actions.
 * @export
 * @interface Register201ResponseDataShipCooldown
 */
export interface Register201ResponseDataShipCooldown {
    /**
     * The symbol of the ship that is on cooldown
     * @type {any}
     * @memberof Register201ResponseDataShipCooldown
     */
    shipSymbol: any | null;
    /**
     * The total duration of the cooldown in seconds
     * @type {any}
     * @memberof Register201ResponseDataShipCooldown
     */
    totalSeconds: any | null;
    /**
     * The remaining duration of the cooldown in seconds
     * @type {any}
     * @memberof Register201ResponseDataShipCooldown
     */
    remainingSeconds: any | null;
    /**
     * The date and time when the cooldown expires in ISO 8601 format
     * @type {any}
     * @memberof Register201ResponseDataShipCooldown
     */
    expiration?: any | null;
}

/**
 * Check if a given object implements the Register201ResponseDataShipCooldown interface.
 */
export function instanceOfRegister201ResponseDataShipCooldown(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "shipSymbol" in value;
    isInstance = isInstance && "totalSeconds" in value;
    isInstance = isInstance && "remainingSeconds" in value;

    return isInstance;
}

export function Register201ResponseDataShipCooldownFromJSON(json: any): Register201ResponseDataShipCooldown {
    return Register201ResponseDataShipCooldownFromJSONTyped(json, false);
}

export function Register201ResponseDataShipCooldownFromJSONTyped(json: any, ignoreDiscriminator: boolean): Register201ResponseDataShipCooldown {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'shipSymbol': json['shipSymbol'],
        'totalSeconds': json['totalSeconds'],
        'remainingSeconds': json['remainingSeconds'],
        'expiration': !exists(json, 'expiration') ? undefined : json['expiration'],
    };
}

export function Register201ResponseDataShipCooldownToJSON(value?: Register201ResponseDataShipCooldown | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'shipSymbol': value.shipSymbol,
        'totalSeconds': value.totalSeconds,
        'remainingSeconds': value.remainingSeconds,
        'expiration': value.expiration,
    };
}

