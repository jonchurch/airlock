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
 * Results of a transaction with a shipyard.
 * @export
 * @interface PurchaseShip201ResponseDataTransaction
 */
export interface PurchaseShip201ResponseDataTransaction {
    /**
     * The symbol of the waypoint.
     * @type {any}
     * @memberof PurchaseShip201ResponseDataTransaction
     */
    waypointSymbol: any | null;
    /**
     * The symbol of the ship that was the subject of the transaction.
     * @type {any}
     * @memberof PurchaseShip201ResponseDataTransaction
     * @deprecated
     */
    shipSymbol: any | null;
    /**
     * The symbol of the ship that was the subject of the transaction.
     * @type {any}
     * @memberof PurchaseShip201ResponseDataTransaction
     */
    shipType: any | null;
    /**
     * The price of the transaction.
     * @type {any}
     * @memberof PurchaseShip201ResponseDataTransaction
     */
    price: any | null;
    /**
     * The symbol of the agent that made the transaction.
     * @type {any}
     * @memberof PurchaseShip201ResponseDataTransaction
     */
    agentSymbol: any | null;
    /**
     * The timestamp of the transaction.
     * @type {any}
     * @memberof PurchaseShip201ResponseDataTransaction
     */
    timestamp: any | null;
}

/**
 * Check if a given object implements the PurchaseShip201ResponseDataTransaction interface.
 */
export function instanceOfPurchaseShip201ResponseDataTransaction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "waypointSymbol" in value;
    isInstance = isInstance && "shipSymbol" in value;
    isInstance = isInstance && "shipType" in value;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "agentSymbol" in value;
    isInstance = isInstance && "timestamp" in value;

    return isInstance;
}

export function PurchaseShip201ResponseDataTransactionFromJSON(json: any): PurchaseShip201ResponseDataTransaction {
    return PurchaseShip201ResponseDataTransactionFromJSONTyped(json, false);
}

export function PurchaseShip201ResponseDataTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PurchaseShip201ResponseDataTransaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'waypointSymbol': json['waypointSymbol'],
        'shipSymbol': json['shipSymbol'],
        'shipType': json['shipType'],
        'price': json['price'],
        'agentSymbol': json['agentSymbol'],
        'timestamp': json['timestamp'],
    };
}

export function PurchaseShip201ResponseDataTransactionToJSON(value?: PurchaseShip201ResponseDataTransaction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'waypointSymbol': value.waypointSymbol,
        'shipSymbol': value.shipSymbol,
        'shipType': value.shipType,
        'price': value.price,
        'agentSymbol': value.agentSymbol,
        'timestamp': value.timestamp,
    };
}

