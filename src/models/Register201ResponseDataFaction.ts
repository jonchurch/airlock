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
 * Faction details.
 * @export
 * @interface Register201ResponseDataFaction
 */
export interface Register201ResponseDataFaction {
    /**
     * The symbol of the faction.
     * @type {any}
     * @memberof Register201ResponseDataFaction
     */
    symbol: Register201ResponseDataFactionSymbolEnum;
    /**
     * Name of the faction.
     * @type {any}
     * @memberof Register201ResponseDataFaction
     */
    name: any | null;
    /**
     * Description of the faction.
     * @type {any}
     * @memberof Register201ResponseDataFaction
     */
    description: any | null;
    /**
     * The waypoint in which the faction's HQ is located in.
     * @type {any}
     * @memberof Register201ResponseDataFaction
     */
    headquarters?: any | null;
    /**
     * List of traits that define this faction.
     * @type {any}
     * @memberof Register201ResponseDataFaction
     */
    traits: any | null;
    /**
     * Whether or not the faction is currently recruiting new agents.
     * @type {any}
     * @memberof Register201ResponseDataFaction
     */
    isRecruiting: any | null;
}


/**
 * @export
 */
export const Register201ResponseDataFactionSymbolEnum = {
    Cosmic: 'COSMIC',
    Void: 'VOID',
    Galactic: 'GALACTIC',
    Quantum: 'QUANTUM',
    Dominion: 'DOMINION',
    Astro: 'ASTRO',
    Corsairs: 'CORSAIRS',
    Obsidian: 'OBSIDIAN',
    Aegis: 'AEGIS',
    United: 'UNITED',
    Solitary: 'SOLITARY',
    Cobalt: 'COBALT',
    Omega: 'OMEGA',
    Echo: 'ECHO',
    Lords: 'LORDS',
    Cult: 'CULT',
    Ancients: 'ANCIENTS',
    Shadow: 'SHADOW',
    Ethereal: 'ETHEREAL'
} as const;
export type Register201ResponseDataFactionSymbolEnum = typeof Register201ResponseDataFactionSymbolEnum[keyof typeof Register201ResponseDataFactionSymbolEnum];


/**
 * Check if a given object implements the Register201ResponseDataFaction interface.
 */
export function instanceOfRegister201ResponseDataFaction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "symbol" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "traits" in value;
    isInstance = isInstance && "isRecruiting" in value;

    return isInstance;
}

export function Register201ResponseDataFactionFromJSON(json: any): Register201ResponseDataFaction {
    return Register201ResponseDataFactionFromJSONTyped(json, false);
}

export function Register201ResponseDataFactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Register201ResponseDataFaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'symbol': json['symbol'],
        'name': json['name'],
        'description': json['description'],
        'headquarters': !exists(json, 'headquarters') ? undefined : json['headquarters'],
        'traits': json['traits'],
        'isRecruiting': json['isRecruiting'],
    };
}

export function Register201ResponseDataFactionToJSON(value?: Register201ResponseDataFaction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'symbol': value.symbol,
        'name': value.name,
        'description': value.description,
        'headquarters': value.headquarters,
        'traits': value.traits,
        'isRecruiting': value.isRecruiting,
    };
}

