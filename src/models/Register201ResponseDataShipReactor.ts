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
import type { Register201ResponseDataShipFrameRequirements } from './Register201ResponseDataShipFrameRequirements';
import {
    Register201ResponseDataShipFrameRequirementsFromJSON,
    Register201ResponseDataShipFrameRequirementsFromJSONTyped,
    Register201ResponseDataShipFrameRequirementsToJSON,
} from './Register201ResponseDataShipFrameRequirements';

/**
 * The reactor of the ship. The reactor is responsible for powering the ship's systems and weapons.
 * @export
 * @interface Register201ResponseDataShipReactor
 */
export interface Register201ResponseDataShipReactor {
    /**
     * Symbol of the reactor.
     * @type {any}
     * @memberof Register201ResponseDataShipReactor
     */
    symbol: Register201ResponseDataShipReactorSymbolEnum;
    /**
     * Name of the reactor.
     * @type {any}
     * @memberof Register201ResponseDataShipReactor
     */
    name: any | null;
    /**
     * Description of the reactor.
     * @type {any}
     * @memberof Register201ResponseDataShipReactor
     */
    description: any | null;
    /**
     * The repairable condition of a component. A value of 0 indicates the component needs significant repairs, while a value of 1 indicates the component is in near perfect condition. As the condition of a component is repaired, the overall integrity of the component decreases.
     * @type {any}
     * @memberof Register201ResponseDataShipReactor
     */
    condition: any | null;
    /**
     * The overall integrity of the component, which determines the performance of the component. A value of 0 indicates that the component is almost completely degraded, while a value of 1 indicates that the component is in near perfect condition. The integrity of the component is non-repairable, and represents permanent wear over time.
     * @type {any}
     * @memberof Register201ResponseDataShipReactor
     */
    integrity: any | null;
    /**
     * The amount of power provided by this reactor. The more power a reactor provides to the ship, the lower the cooldown it gets when using a module or mount that taxes the ship's power.
     * @type {any}
     * @memberof Register201ResponseDataShipReactor
     */
    powerOutput: any | null;
    /**
     * 
     * @type {Register201ResponseDataShipFrameRequirements}
     * @memberof Register201ResponseDataShipReactor
     */
    requirements: Register201ResponseDataShipFrameRequirements;
    /**
     * The overall quality of the component, which determines the quality of the component. High quality components return more ships parts and ship plating when a ship is scrapped. But also require more of these parts to repair. This is transparent to the player, as the parts are bought from/sold to the marketplace.
     * @type {any}
     * @memberof Register201ResponseDataShipReactor
     */
    quality: any | null;
}


/**
 * @export
 */
export const Register201ResponseDataShipReactorSymbolEnum = {
    SolarI: 'REACTOR_SOLAR_I',
    FusionI: 'REACTOR_FUSION_I',
    FissionI: 'REACTOR_FISSION_I',
    ChemicalI: 'REACTOR_CHEMICAL_I',
    AntimatterI: 'REACTOR_ANTIMATTER_I'
} as const;
export type Register201ResponseDataShipReactorSymbolEnum = typeof Register201ResponseDataShipReactorSymbolEnum[keyof typeof Register201ResponseDataShipReactorSymbolEnum];


/**
 * Check if a given object implements the Register201ResponseDataShipReactor interface.
 */
export function instanceOfRegister201ResponseDataShipReactor(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "symbol" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "condition" in value;
    isInstance = isInstance && "integrity" in value;
    isInstance = isInstance && "powerOutput" in value;
    isInstance = isInstance && "requirements" in value;
    isInstance = isInstance && "quality" in value;

    return isInstance;
}

export function Register201ResponseDataShipReactorFromJSON(json: any): Register201ResponseDataShipReactor {
    return Register201ResponseDataShipReactorFromJSONTyped(json, false);
}

export function Register201ResponseDataShipReactorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Register201ResponseDataShipReactor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'symbol': json['symbol'],
        'name': json['name'],
        'description': json['description'],
        'condition': json['condition'],
        'integrity': json['integrity'],
        'powerOutput': json['powerOutput'],
        'requirements': Register201ResponseDataShipFrameRequirementsFromJSON(json['requirements']),
        'quality': json['quality'],
    };
}

export function Register201ResponseDataShipReactorToJSON(value?: Register201ResponseDataShipReactor | null): any {
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
        'condition': value.condition,
        'integrity': value.integrity,
        'powerOutput': value.powerOutput,
        'requirements': Register201ResponseDataShipFrameRequirementsToJSON(value.requirements),
        'quality': value.quality,
    };
}

