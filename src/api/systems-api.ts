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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { GetJumpGate200Response } from '../models';
// @ts-ignore
import { GetMarket200Response } from '../models';
// @ts-ignore
import { GetShipyard200Response } from '../models';
// @ts-ignore
import { GetSystem200Response } from '../models';
// @ts-ignore
import { GetSystemWaypoints200Response } from '../models';
// @ts-ignore
import { GetSystems200Response } from '../models';
// @ts-ignore
import { GetWaypoint200Response } from '../models';
/**
 * SystemsApi - axios parameter creator
 * @export
 */
export const SystemsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.  The response will return all systems that are have a Jump Gate in range of this Jump Gate. Those systems can be jumped to from this Jump Gate.
         * @summary Get Jump Gate
         * @param {string} systemSymbol The system symbol
         * @param {string} waypointSymbol The waypoint symbol
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJumpGate: async (systemSymbol: string, waypointSymbol: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'systemSymbol' is not null or undefined
            assertParamExists('getJumpGate', 'systemSymbol', systemSymbol)
            // verify required parameter 'waypointSymbol' is not null or undefined
            assertParamExists('getJumpGate', 'waypointSymbol', waypointSymbol)
            const localVarPath = `/systems/{systemSymbol}/waypoints/{waypointSymbol}/jump-gate`
                .replace(`{${"systemSymbol"}}`, encodeURIComponent(String(systemSymbol)))
                .replace(`{${"waypointSymbol"}}`, encodeURIComponent(String(waypointSymbol)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AgentToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.  Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.
         * @summary Get Market
         * @param {string} systemSymbol The system symbol
         * @param {string} waypointSymbol The waypoint symbol
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMarket: async (systemSymbol: string, waypointSymbol: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'systemSymbol' is not null or undefined
            assertParamExists('getMarket', 'systemSymbol', systemSymbol)
            // verify required parameter 'waypointSymbol' is not null or undefined
            assertParamExists('getMarket', 'waypointSymbol', waypointSymbol)
            const localVarPath = `/systems/{systemSymbol}/waypoints/{waypointSymbol}/market`
                .replace(`{${"systemSymbol"}}`, encodeURIComponent(String(systemSymbol)))
                .replace(`{${"waypointSymbol"}}`, encodeURIComponent(String(waypointSymbol)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AgentToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.
         * @summary Get Shipyard
         * @param {string} systemSymbol The system symbol
         * @param {string} waypointSymbol The waypoint symbol
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getShipyard: async (systemSymbol: string, waypointSymbol: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'systemSymbol' is not null or undefined
            assertParamExists('getShipyard', 'systemSymbol', systemSymbol)
            // verify required parameter 'waypointSymbol' is not null or undefined
            assertParamExists('getShipyard', 'waypointSymbol', waypointSymbol)
            const localVarPath = `/systems/{systemSymbol}/waypoints/{waypointSymbol}/shipyard`
                .replace(`{${"systemSymbol"}}`, encodeURIComponent(String(systemSymbol)))
                .replace(`{${"waypointSymbol"}}`, encodeURIComponent(String(waypointSymbol)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AgentToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the details of a system.
         * @summary Get System
         * @param {string} systemSymbol The system symbol
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystem: async (systemSymbol: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'systemSymbol' is not null or undefined
            assertParamExists('getSystem', 'systemSymbol', systemSymbol)
            const localVarPath = `/systems/{systemSymbol}`
                .replace(`{${"systemSymbol"}}`, encodeURIComponent(String(systemSymbol)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AgentToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Return a paginated list of all of the waypoints for a given system.  If a waypoint is uncharted, it will return the `Uncharted` trait instead of its actual traits.
         * @summary List Waypoints in System
         * @param {string} systemSymbol The system symbol
         * @param {number} [page] What entry offset to request
         * @param {number} [limit] How many entries to return per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemWaypoints: async (systemSymbol: string, page?: number, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'systemSymbol' is not null or undefined
            assertParamExists('getSystemWaypoints', 'systemSymbol', systemSymbol)
            const localVarPath = `/systems/{systemSymbol}/waypoints`
                .replace(`{${"systemSymbol"}}`, encodeURIComponent(String(systemSymbol)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AgentToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Return a paginated list of all systems.
         * @summary List Systems
         * @param {number} [page] What entry offset to request
         * @param {number} [limit] How many entries to return per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystems: async (page?: number, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/systems`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AgentToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * View the details of a waypoint.  If the waypoint is uncharted, it will return the \'Uncharted\' trait instead of its actual traits.
         * @summary Get Waypoint
         * @param {string} systemSymbol The system symbol
         * @param {string} waypointSymbol The waypoint symbol
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWaypoint: async (systemSymbol: string, waypointSymbol: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'systemSymbol' is not null or undefined
            assertParamExists('getWaypoint', 'systemSymbol', systemSymbol)
            // verify required parameter 'waypointSymbol' is not null or undefined
            assertParamExists('getWaypoint', 'waypointSymbol', waypointSymbol)
            const localVarPath = `/systems/{systemSymbol}/waypoints/{waypointSymbol}`
                .replace(`{${"systemSymbol"}}`, encodeURIComponent(String(systemSymbol)))
                .replace(`{${"waypointSymbol"}}`, encodeURIComponent(String(waypointSymbol)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AgentToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SystemsApi - functional programming interface
 * @export
 */
export const SystemsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SystemsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.  The response will return all systems that are have a Jump Gate in range of this Jump Gate. Those systems can be jumped to from this Jump Gate.
         * @summary Get Jump Gate
         * @param {string} systemSymbol The system symbol
         * @param {string} waypointSymbol The waypoint symbol
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJumpGate(systemSymbol: string, waypointSymbol: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetJumpGate200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getJumpGate(systemSymbol, waypointSymbol, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.  Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.
         * @summary Get Market
         * @param {string} systemSymbol The system symbol
         * @param {string} waypointSymbol The waypoint symbol
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMarket(systemSymbol: string, waypointSymbol: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetMarket200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMarket(systemSymbol, waypointSymbol, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.
         * @summary Get Shipyard
         * @param {string} systemSymbol The system symbol
         * @param {string} waypointSymbol The waypoint symbol
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getShipyard(systemSymbol: string, waypointSymbol: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetShipyard200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getShipyard(systemSymbol, waypointSymbol, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the details of a system.
         * @summary Get System
         * @param {string} systemSymbol The system symbol
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSystem(systemSymbol: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSystem200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSystem(systemSymbol, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Return a paginated list of all of the waypoints for a given system.  If a waypoint is uncharted, it will return the `Uncharted` trait instead of its actual traits.
         * @summary List Waypoints in System
         * @param {string} systemSymbol The system symbol
         * @param {number} [page] What entry offset to request
         * @param {number} [limit] How many entries to return per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSystemWaypoints(systemSymbol: string, page?: number, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSystemWaypoints200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSystemWaypoints(systemSymbol, page, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Return a paginated list of all systems.
         * @summary List Systems
         * @param {number} [page] What entry offset to request
         * @param {number} [limit] How many entries to return per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSystems(page?: number, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSystems200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSystems(page, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * View the details of a waypoint.  If the waypoint is uncharted, it will return the \'Uncharted\' trait instead of its actual traits.
         * @summary Get Waypoint
         * @param {string} systemSymbol The system symbol
         * @param {string} waypointSymbol The waypoint symbol
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWaypoint(systemSymbol: string, waypointSymbol: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetWaypoint200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWaypoint(systemSymbol, waypointSymbol, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SystemsApi - factory interface
 * @export
 */
export const SystemsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SystemsApiFp(configuration)
    return {
        /**
         * Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.  The response will return all systems that are have a Jump Gate in range of this Jump Gate. Those systems can be jumped to from this Jump Gate.
         * @summary Get Jump Gate
         * @param {SystemsApiGetJumpGateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJumpGate(requestParameters: SystemsApiGetJumpGateRequest, options?: AxiosRequestConfig): AxiosPromise<GetJumpGate200Response> {
            return localVarFp.getJumpGate(requestParameters.systemSymbol, requestParameters.waypointSymbol, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.  Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.
         * @summary Get Market
         * @param {SystemsApiGetMarketRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMarket(requestParameters: SystemsApiGetMarketRequest, options?: AxiosRequestConfig): AxiosPromise<GetMarket200Response> {
            return localVarFp.getMarket(requestParameters.systemSymbol, requestParameters.waypointSymbol, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.
         * @summary Get Shipyard
         * @param {SystemsApiGetShipyardRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getShipyard(requestParameters: SystemsApiGetShipyardRequest, options?: AxiosRequestConfig): AxiosPromise<GetShipyard200Response> {
            return localVarFp.getShipyard(requestParameters.systemSymbol, requestParameters.waypointSymbol, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the details of a system.
         * @summary Get System
         * @param {SystemsApiGetSystemRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystem(requestParameters: SystemsApiGetSystemRequest, options?: AxiosRequestConfig): AxiosPromise<GetSystem200Response> {
            return localVarFp.getSystem(requestParameters.systemSymbol, options).then((request) => request(axios, basePath));
        },
        /**
         * Return a paginated list of all of the waypoints for a given system.  If a waypoint is uncharted, it will return the `Uncharted` trait instead of its actual traits.
         * @summary List Waypoints in System
         * @param {SystemsApiGetSystemWaypointsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemWaypoints(requestParameters: SystemsApiGetSystemWaypointsRequest, options?: AxiosRequestConfig): AxiosPromise<GetSystemWaypoints200Response> {
            return localVarFp.getSystemWaypoints(requestParameters.systemSymbol, requestParameters.page, requestParameters.limit, options).then((request) => request(axios, basePath));
        },
        /**
         * Return a paginated list of all systems.
         * @summary List Systems
         * @param {SystemsApiGetSystemsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystems(requestParameters: SystemsApiGetSystemsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<GetSystems200Response> {
            return localVarFp.getSystems(requestParameters.page, requestParameters.limit, options).then((request) => request(axios, basePath));
        },
        /**
         * View the details of a waypoint.  If the waypoint is uncharted, it will return the \'Uncharted\' trait instead of its actual traits.
         * @summary Get Waypoint
         * @param {SystemsApiGetWaypointRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWaypoint(requestParameters: SystemsApiGetWaypointRequest, options?: AxiosRequestConfig): AxiosPromise<GetWaypoint200Response> {
            return localVarFp.getWaypoint(requestParameters.systemSymbol, requestParameters.waypointSymbol, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getJumpGate operation in SystemsApi.
 * @export
 * @interface SystemsApiGetJumpGateRequest
 */
export interface SystemsApiGetJumpGateRequest {
    /**
     * The system symbol
     * @type {string}
     * @memberof SystemsApiGetJumpGate
     */
    readonly systemSymbol: string

    /**
     * The waypoint symbol
     * @type {string}
     * @memberof SystemsApiGetJumpGate
     */
    readonly waypointSymbol: string
}

/**
 * Request parameters for getMarket operation in SystemsApi.
 * @export
 * @interface SystemsApiGetMarketRequest
 */
export interface SystemsApiGetMarketRequest {
    /**
     * The system symbol
     * @type {string}
     * @memberof SystemsApiGetMarket
     */
    readonly systemSymbol: string

    /**
     * The waypoint symbol
     * @type {string}
     * @memberof SystemsApiGetMarket
     */
    readonly waypointSymbol: string
}

/**
 * Request parameters for getShipyard operation in SystemsApi.
 * @export
 * @interface SystemsApiGetShipyardRequest
 */
export interface SystemsApiGetShipyardRequest {
    /**
     * The system symbol
     * @type {string}
     * @memberof SystemsApiGetShipyard
     */
    readonly systemSymbol: string

    /**
     * The waypoint symbol
     * @type {string}
     * @memberof SystemsApiGetShipyard
     */
    readonly waypointSymbol: string
}

/**
 * Request parameters for getSystem operation in SystemsApi.
 * @export
 * @interface SystemsApiGetSystemRequest
 */
export interface SystemsApiGetSystemRequest {
    /**
     * The system symbol
     * @type {string}
     * @memberof SystemsApiGetSystem
     */
    readonly systemSymbol: string
}

/**
 * Request parameters for getSystemWaypoints operation in SystemsApi.
 * @export
 * @interface SystemsApiGetSystemWaypointsRequest
 */
export interface SystemsApiGetSystemWaypointsRequest {
    /**
     * The system symbol
     * @type {string}
     * @memberof SystemsApiGetSystemWaypoints
     */
    readonly systemSymbol: string

    /**
     * What entry offset to request
     * @type {number}
     * @memberof SystemsApiGetSystemWaypoints
     */
    readonly page?: number

    /**
     * How many entries to return per page
     * @type {number}
     * @memberof SystemsApiGetSystemWaypoints
     */
    readonly limit?: number
}

/**
 * Request parameters for getSystems operation in SystemsApi.
 * @export
 * @interface SystemsApiGetSystemsRequest
 */
export interface SystemsApiGetSystemsRequest {
    /**
     * What entry offset to request
     * @type {number}
     * @memberof SystemsApiGetSystems
     */
    readonly page?: number

    /**
     * How many entries to return per page
     * @type {number}
     * @memberof SystemsApiGetSystems
     */
    readonly limit?: number
}

/**
 * Request parameters for getWaypoint operation in SystemsApi.
 * @export
 * @interface SystemsApiGetWaypointRequest
 */
export interface SystemsApiGetWaypointRequest {
    /**
     * The system symbol
     * @type {string}
     * @memberof SystemsApiGetWaypoint
     */
    readonly systemSymbol: string

    /**
     * The waypoint symbol
     * @type {string}
     * @memberof SystemsApiGetWaypoint
     */
    readonly waypointSymbol: string
}

/**
 * SystemsApi - object-oriented interface
 * @export
 * @class SystemsApi
 * @extends {BaseAPI}
 */
export class SystemsApi extends BaseAPI {
    /**
     * Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.  The response will return all systems that are have a Jump Gate in range of this Jump Gate. Those systems can be jumped to from this Jump Gate.
     * @summary Get Jump Gate
     * @param {SystemsApiGetJumpGateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemsApi
     */
    public getJumpGate(requestParameters: SystemsApiGetJumpGateRequest, options?: AxiosRequestConfig) {
        return SystemsApiFp(this.configuration).getJumpGate(requestParameters.systemSymbol, requestParameters.waypointSymbol, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.  Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.
     * @summary Get Market
     * @param {SystemsApiGetMarketRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemsApi
     */
    public getMarket(requestParameters: SystemsApiGetMarketRequest, options?: AxiosRequestConfig) {
        return SystemsApiFp(this.configuration).getMarket(requestParameters.systemSymbol, requestParameters.waypointSymbol, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.
     * @summary Get Shipyard
     * @param {SystemsApiGetShipyardRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemsApi
     */
    public getShipyard(requestParameters: SystemsApiGetShipyardRequest, options?: AxiosRequestConfig) {
        return SystemsApiFp(this.configuration).getShipyard(requestParameters.systemSymbol, requestParameters.waypointSymbol, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the details of a system.
     * @summary Get System
     * @param {SystemsApiGetSystemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemsApi
     */
    public getSystem(requestParameters: SystemsApiGetSystemRequest, options?: AxiosRequestConfig) {
        return SystemsApiFp(this.configuration).getSystem(requestParameters.systemSymbol, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Return a paginated list of all of the waypoints for a given system.  If a waypoint is uncharted, it will return the `Uncharted` trait instead of its actual traits.
     * @summary List Waypoints in System
     * @param {SystemsApiGetSystemWaypointsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemsApi
     */
    public getSystemWaypoints(requestParameters: SystemsApiGetSystemWaypointsRequest, options?: AxiosRequestConfig) {
        return SystemsApiFp(this.configuration).getSystemWaypoints(requestParameters.systemSymbol, requestParameters.page, requestParameters.limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Return a paginated list of all systems.
     * @summary List Systems
     * @param {SystemsApiGetSystemsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemsApi
     */
    public getSystems(requestParameters: SystemsApiGetSystemsRequest = {}, options?: AxiosRequestConfig) {
        return SystemsApiFp(this.configuration).getSystems(requestParameters.page, requestParameters.limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * View the details of a waypoint.  If the waypoint is uncharted, it will return the \'Uncharted\' trait instead of its actual traits.
     * @summary Get Waypoint
     * @param {SystemsApiGetWaypointRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemsApi
     */
    public getWaypoint(requestParameters: SystemsApiGetWaypointRequest, options?: AxiosRequestConfig) {
        return SystemsApiFp(this.configuration).getWaypoint(requestParameters.systemSymbol, requestParameters.waypointSymbol, options).then((request) => request(this.axios, this.basePath));
    }
}
