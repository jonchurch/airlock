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
 * Ship cargo details.
 * @export
 * @interface Register201ResponseDataShipCargo
 */
export interface Register201ResponseDataShipCargo {
    /**
     * The max number of items that can be stored in the cargo hold.
     * @type {any}
     * @memberof Register201ResponseDataShipCargo
     */
    capacity: any | null;
    /**
     * The number of items currently stored in the cargo hold.
     * @type {any}
     * @memberof Register201ResponseDataShipCargo
     */
    units: any | null;
    /**
     * The items currently in the cargo hold.
     * @type {any}
     * @memberof Register201ResponseDataShipCargo
     */
    inventory: any | null;
}

/**
 * Check if a given object implements the Register201ResponseDataShipCargo interface.
 */
export function instanceOfRegister201ResponseDataShipCargo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "capacity" in value;
    isInstance = isInstance && "units" in value;
    isInstance = isInstance && "inventory" in value;

    return isInstance;
}

export function Register201ResponseDataShipCargoFromJSON(json: any): Register201ResponseDataShipCargo {
    return Register201ResponseDataShipCargoFromJSONTyped(json, false);
}

export function Register201ResponseDataShipCargoFromJSONTyped(json: any, ignoreDiscriminator: boolean): Register201ResponseDataShipCargo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'capacity': json['capacity'],
        'units': json['units'],
        'inventory': json['inventory'],
    };
}

export function Register201ResponseDataShipCargoToJSON(value?: Register201ResponseDataShipCargo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'capacity': value.capacity,
        'units': value.units,
        'inventory': value.inventory,
    };
}

