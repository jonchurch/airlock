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
import type { ExtractResources201ResponseDataExtraction } from './ExtractResources201ResponseDataExtraction';
import {
    ExtractResources201ResponseDataExtractionFromJSON,
    ExtractResources201ResponseDataExtractionFromJSONTyped,
    ExtractResources201ResponseDataExtractionToJSON,
} from './ExtractResources201ResponseDataExtraction';
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
 * @interface ExtractResources201ResponseData
 */
export interface ExtractResources201ResponseData {
    /**
     * 
     * @type {Register201ResponseDataShipCooldown}
     * @memberof ExtractResources201ResponseData
     */
    cooldown: Register201ResponseDataShipCooldown;
    /**
     * 
     * @type {ExtractResources201ResponseDataExtraction}
     * @memberof ExtractResources201ResponseData
     */
    extraction: ExtractResources201ResponseDataExtraction;
    /**
     * 
     * @type {Register201ResponseDataShipCargo}
     * @memberof ExtractResources201ResponseData
     */
    cargo: Register201ResponseDataShipCargo;
    /**
     * 
     * @type {any}
     * @memberof ExtractResources201ResponseData
     */
    events: any | null;
}

/**
 * Check if a given object implements the ExtractResources201ResponseData interface.
 */
export function instanceOfExtractResources201ResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cooldown" in value;
    isInstance = isInstance && "extraction" in value;
    isInstance = isInstance && "cargo" in value;
    isInstance = isInstance && "events" in value;

    return isInstance;
}

export function ExtractResources201ResponseDataFromJSON(json: any): ExtractResources201ResponseData {
    return ExtractResources201ResponseDataFromJSONTyped(json, false);
}

export function ExtractResources201ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtractResources201ResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cooldown': Register201ResponseDataShipCooldownFromJSON(json['cooldown']),
        'extraction': ExtractResources201ResponseDataExtractionFromJSON(json['extraction']),
        'cargo': Register201ResponseDataShipCargoFromJSON(json['cargo']),
        'events': json['events'],
    };
}

export function ExtractResources201ResponseDataToJSON(value?: ExtractResources201ResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cooldown': Register201ResponseDataShipCooldownToJSON(value.cooldown),
        'extraction': ExtractResources201ResponseDataExtractionToJSON(value.extraction),
        'cargo': Register201ResponseDataShipCargoToJSON(value.cargo),
        'events': value.events,
    };
}

