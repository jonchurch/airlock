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
import type { Register201ResponseDataShipCargo } from './Register201ResponseDataShipCargo';
import {
    Register201ResponseDataShipCargoFromJSON,
    Register201ResponseDataShipCargoFromJSONTyped,
    Register201ResponseDataShipCargoToJSON,
} from './Register201ResponseDataShipCargo';
import type { Register201ResponseDataShipCooldown } from './Register201ResponseDataShipCooldown';
import {
    Register201ResponseDataShipCooldownFromJSON,
    Register201ResponseDataShipCooldownFromJSONTyped,
    Register201ResponseDataShipCooldownToJSON,
} from './Register201ResponseDataShipCooldown';

/**
 * 
 * @export
 * @interface ShipRefine201ResponseData
 */
export interface ShipRefine201ResponseData {
    /**
     * 
     * @type {Register201ResponseDataShipCargo}
     * @memberof ShipRefine201ResponseData
     */
    cargo: Register201ResponseDataShipCargo;
    /**
     * 
     * @type {Register201ResponseDataShipCooldown}
     * @memberof ShipRefine201ResponseData
     */
    cooldown: Register201ResponseDataShipCooldown;
    /**
     * Goods that were produced by this refining process.
     * @type {any}
     * @memberof ShipRefine201ResponseData
     */
    produced: any | null;
    /**
     * Goods that were consumed during this refining process.
     * @type {any}
     * @memberof ShipRefine201ResponseData
     */
    consumed: any | null;
}

/**
 * Check if a given object implements the ShipRefine201ResponseData interface.
 */
export function instanceOfShipRefine201ResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cargo" in value;
    isInstance = isInstance && "cooldown" in value;
    isInstance = isInstance && "produced" in value;
    isInstance = isInstance && "consumed" in value;

    return isInstance;
}

export function ShipRefine201ResponseDataFromJSON(json: any): ShipRefine201ResponseData {
    return ShipRefine201ResponseDataFromJSONTyped(json, false);
}

export function ShipRefine201ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipRefine201ResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cargo': Register201ResponseDataShipCargoFromJSON(json['cargo']),
        'cooldown': Register201ResponseDataShipCooldownFromJSON(json['cooldown']),
        'produced': json['produced'],
        'consumed': json['consumed'],
    };
}

export function ShipRefine201ResponseDataToJSON(value?: ShipRefine201ResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cargo': Register201ResponseDataShipCargoToJSON(value.cargo),
        'cooldown': Register201ResponseDataShipCooldownToJSON(value.cooldown),
        'produced': value.produced,
        'consumed': value.consumed,
    };
}

