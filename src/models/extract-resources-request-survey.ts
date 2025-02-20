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



/**
 * A resource survey of a waypoint, detailing a specific extraction location and the types of resources that can be found there.
 * @export
 * @interface ExtractResourcesRequestSurvey
 */
export interface ExtractResourcesRequestSurvey {
    /**
     * A unique signature for the location of this survey. This signature is verified when attempting an extraction using this survey.
     * @type {any}
     * @memberof ExtractResourcesRequestSurvey
     */
    'signature': any;
    /**
     * The symbol of the waypoint that this survey is for.
     * @type {any}
     * @memberof ExtractResourcesRequestSurvey
     */
    'symbol': any;
    /**
     * A list of deposits that can be found at this location. A ship will extract one of these deposits when using this survey in an extraction request. If multiple deposits of the same type are present, the chance of extracting that deposit is increased.
     * @type {any}
     * @memberof ExtractResourcesRequestSurvey
     */
    'deposits': any;
    /**
     * The date and time when the survey expires. After this date and time, the survey will no longer be available for extraction.
     * @type {any}
     * @memberof ExtractResourcesRequestSurvey
     */
    'expiration': any;
    /**
     * The size of the deposit. This value indicates how much can be extracted from the survey before it is exhausted.
     * @type {any}
     * @memberof ExtractResourcesRequestSurvey
     */
    'size': ExtractResourcesRequestSurveySizeEnum;
}

export const ExtractResourcesRequestSurveySizeEnum = {
    Small: 'SMALL',
    Moderate: 'MODERATE',
    Large: 'LARGE'
} as const;

export type ExtractResourcesRequestSurveySizeEnum = typeof ExtractResourcesRequestSurveySizeEnum[keyof typeof ExtractResourcesRequestSurveySizeEnum];


