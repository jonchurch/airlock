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
import type { Register201ResponseDataAgent } from './Register201ResponseDataAgent';
import {
    Register201ResponseDataAgentFromJSON,
    Register201ResponseDataAgentFromJSONTyped,
    Register201ResponseDataAgentToJSON,
} from './Register201ResponseDataAgent';
import type { Register201ResponseDataContract } from './Register201ResponseDataContract';
import {
    Register201ResponseDataContractFromJSON,
    Register201ResponseDataContractFromJSONTyped,
    Register201ResponseDataContractToJSON,
} from './Register201ResponseDataContract';
import type { Register201ResponseDataFaction } from './Register201ResponseDataFaction';
import {
    Register201ResponseDataFactionFromJSON,
    Register201ResponseDataFactionFromJSONTyped,
    Register201ResponseDataFactionToJSON,
} from './Register201ResponseDataFaction';
import type { Register201ResponseDataShip } from './Register201ResponseDataShip';
import {
    Register201ResponseDataShipFromJSON,
    Register201ResponseDataShipFromJSONTyped,
    Register201ResponseDataShipToJSON,
} from './Register201ResponseDataShip';

/**
 * 
 * @export
 * @interface Register201ResponseData
 */
export interface Register201ResponseData {
    /**
     * 
     * @type {Register201ResponseDataAgent}
     * @memberof Register201ResponseData
     */
    agent: Register201ResponseDataAgent;
    /**
     * 
     * @type {Register201ResponseDataContract}
     * @memberof Register201ResponseData
     */
    contract: Register201ResponseDataContract;
    /**
     * 
     * @type {Register201ResponseDataFaction}
     * @memberof Register201ResponseData
     */
    faction: Register201ResponseDataFaction;
    /**
     * 
     * @type {Register201ResponseDataShip}
     * @memberof Register201ResponseData
     */
    ship: Register201ResponseDataShip;
    /**
     * A Bearer token for accessing secured API endpoints.
     * @type {any}
     * @memberof Register201ResponseData
     */
    token: any | null;
}

/**
 * Check if a given object implements the Register201ResponseData interface.
 */
export function instanceOfRegister201ResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "agent" in value;
    isInstance = isInstance && "contract" in value;
    isInstance = isInstance && "faction" in value;
    isInstance = isInstance && "ship" in value;
    isInstance = isInstance && "token" in value;

    return isInstance;
}

export function Register201ResponseDataFromJSON(json: any): Register201ResponseData {
    return Register201ResponseDataFromJSONTyped(json, false);
}

export function Register201ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): Register201ResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'agent': Register201ResponseDataAgentFromJSON(json['agent']),
        'contract': Register201ResponseDataContractFromJSON(json['contract']),
        'faction': Register201ResponseDataFactionFromJSON(json['faction']),
        'ship': Register201ResponseDataShipFromJSON(json['ship']),
        'token': json['token'],
    };
}

export function Register201ResponseDataToJSON(value?: Register201ResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'agent': Register201ResponseDataAgentToJSON(value.agent),
        'contract': Register201ResponseDataContractToJSON(value.contract),
        'faction': Register201ResponseDataFactionToJSON(value.faction),
        'ship': Register201ResponseDataShipToJSON(value.ship),
        'token': value.token,
    };
}

