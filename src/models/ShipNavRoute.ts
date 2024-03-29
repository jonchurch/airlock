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
import type { ShipNavRouteWaypoint } from './ShipNavRouteWaypoint';
import {
    ShipNavRouteWaypointFromJSON,
    ShipNavRouteWaypointFromJSONTyped,
    ShipNavRouteWaypointToJSON,
} from './ShipNavRouteWaypoint';

/**
 * The routing information for the ship's most recent transit or current location.
 * @export
 * @interface ShipNavRoute
 */
export interface ShipNavRoute {
    /**
     * 
     * @type {ShipNavRouteWaypoint}
     * @memberof ShipNavRoute
     */
    destination: ShipNavRouteWaypoint;
    /**
     * 
     * @type {ShipNavRouteWaypoint}
     * @memberof ShipNavRoute
     */
    departure: ShipNavRouteWaypoint;
    /**
     * 
     * @type {ShipNavRouteWaypoint}
     * @memberof ShipNavRoute
     */
    origin: ShipNavRouteWaypoint;
    /**
     * The date time of the ship's departure.
     * @type {string}
     * @memberof ShipNavRoute
     */
    departureTime: string;
    /**
     * The date time of the ship's arrival. If the ship is in-transit, this is the expected time of arrival.
     * @type {string}
     * @memberof ShipNavRoute
     */
    arrival: string;
}

/**
 * Check if a given object implements the ShipNavRoute interface.
 */
export function instanceOfShipNavRoute(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "destination" in value;
    isInstance = isInstance && "departure" in value;
    isInstance = isInstance && "origin" in value;
    isInstance = isInstance && "departureTime" in value;
    isInstance = isInstance && "arrival" in value;

    return isInstance;
}

export function ShipNavRouteFromJSON(json: any): ShipNavRoute {
    return ShipNavRouteFromJSONTyped(json, false);
}

export function ShipNavRouteFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipNavRoute {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'destination': ShipNavRouteWaypointFromJSON(json['destination']),
        'departure': ShipNavRouteWaypointFromJSON(json['departure']),
        'origin': ShipNavRouteWaypointFromJSON(json['origin']),
        'departureTime': json['departureTime'],
        'arrival': json['arrival'],
    };
}

export function ShipNavRouteToJSON(value?: ShipNavRoute | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'destination': ShipNavRouteWaypointToJSON(value.destination),
        'departure': ShipNavRouteWaypointToJSON(value.departure),
        'origin': ShipNavRouteWaypointToJSON(value.origin),
        'departureTime': value.departureTime,
        'arrival': value.arrival,
    };
}

