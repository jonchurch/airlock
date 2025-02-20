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


// May contain unused imports in some cases
// @ts-ignore
import { GetStatus200ResponseLeaderboards } from './get-status200-response-leaderboards';
// May contain unused imports in some cases
// @ts-ignore
import { GetStatus200ResponseServerResets } from './get-status200-response-server-resets';
// May contain unused imports in some cases
// @ts-ignore
import { GetStatus200ResponseStats } from './get-status200-response-stats';

/**
 * 
 * @export
 * @interface GetStatus200Response
 */
export interface GetStatus200Response {
    /**
     * The current status of the game server.
     * @type {any}
     * @memberof GetStatus200Response
     */
    'status': any;
    /**
     * The current version of the API.
     * @type {any}
     * @memberof GetStatus200Response
     */
    'version': any;
    /**
     * The date when the game server was last reset.
     * @type {any}
     * @memberof GetStatus200Response
     */
    'resetDate': any;
    /**
     * 
     * @type {any}
     * @memberof GetStatus200Response
     */
    'description': any;
    /**
     * 
     * @type {GetStatus200ResponseStats}
     * @memberof GetStatus200Response
     */
    'stats': GetStatus200ResponseStats;
    /**
     * 
     * @type {GetStatus200ResponseLeaderboards}
     * @memberof GetStatus200Response
     */
    'leaderboards': GetStatus200ResponseLeaderboards;
    /**
     * 
     * @type {GetStatus200ResponseServerResets}
     * @memberof GetStatus200Response
     */
    'serverResets': GetStatus200ResponseServerResets;
    /**
     * 
     * @type {any}
     * @memberof GetStatus200Response
     */
    'announcements': any;
    /**
     * 
     * @type {any}
     * @memberof GetStatus200Response
     */
    'links': any;
}

