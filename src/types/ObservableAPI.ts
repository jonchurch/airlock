import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AcceptContract200Response } from '../models/AcceptContract200Response';
import { AcceptContract200ResponseData } from '../models/AcceptContract200ResponseData';
import { Agent } from '../models/Agent';
import { Chart } from '../models/Chart';
import { ConnectedSystem } from '../models/ConnectedSystem';
import { Contract } from '../models/Contract';
import { ContractDeliverGood } from '../models/ContractDeliverGood';
import { ContractPayment } from '../models/ContractPayment';
import { ContractTerms } from '../models/ContractTerms';
import { Cooldown } from '../models/Cooldown';
import { CreateChart201Response } from '../models/CreateChart201Response';
import { CreateChart201ResponseData } from '../models/CreateChart201ResponseData';
import { CreateShipShipScan201Response } from '../models/CreateShipShipScan201Response';
import { CreateShipShipScan201ResponseData } from '../models/CreateShipShipScan201ResponseData';
import { CreateShipSystemScan201Response } from '../models/CreateShipSystemScan201Response';
import { CreateShipSystemScan201ResponseData } from '../models/CreateShipSystemScan201ResponseData';
import { CreateShipWaypointScan201Response } from '../models/CreateShipWaypointScan201Response';
import { CreateShipWaypointScan201ResponseData } from '../models/CreateShipWaypointScan201ResponseData';
import { CreateSurvey201Response } from '../models/CreateSurvey201Response';
import { CreateSurvey201ResponseData } from '../models/CreateSurvey201ResponseData';
import { DeliverContract200Response } from '../models/DeliverContract200Response';
import { DeliverContract200ResponseData } from '../models/DeliverContract200ResponseData';
import { DeliverContractRequest } from '../models/DeliverContractRequest';
import { DockShip200Response } from '../models/DockShip200Response';
import { ExtractResources201Response } from '../models/ExtractResources201Response';
import { ExtractResources201ResponseData } from '../models/ExtractResources201ResponseData';
import { ExtractResourcesRequest } from '../models/ExtractResourcesRequest';
import { Extraction } from '../models/Extraction';
import { ExtractionYield } from '../models/ExtractionYield';
import { Faction } from '../models/Faction';
import { FactionTrait } from '../models/FactionTrait';
import { FulfillContract200Response } from '../models/FulfillContract200Response';
import { GetContract200Response } from '../models/GetContract200Response';
import { GetContracts200Response } from '../models/GetContracts200Response';
import { GetFaction200Response } from '../models/GetFaction200Response';
import { GetFactions200Response } from '../models/GetFactions200Response';
import { GetJumpGate200Response } from '../models/GetJumpGate200Response';
import { GetMarket200Response } from '../models/GetMarket200Response';
import { GetMyAgent200Response } from '../models/GetMyAgent200Response';
import { GetMyShip200Response } from '../models/GetMyShip200Response';
import { GetMyShipCargo200Response } from '../models/GetMyShipCargo200Response';
import { GetMyShips200Response } from '../models/GetMyShips200Response';
import { GetShipCooldown200Response } from '../models/GetShipCooldown200Response';
import { GetShipNav200Response } from '../models/GetShipNav200Response';
import { GetShipyard200Response } from '../models/GetShipyard200Response';
import { GetSystem200Response } from '../models/GetSystem200Response';
import { GetSystemWaypoints200Response } from '../models/GetSystemWaypoints200Response';
import { GetSystems200Response } from '../models/GetSystems200Response';
import { GetWaypoint200Response } from '../models/GetWaypoint200Response';
import { Jettison200Response } from '../models/Jettison200Response';
import { Jettison200ResponseData } from '../models/Jettison200ResponseData';
import { JettisonRequest } from '../models/JettisonRequest';
import { JumpGate } from '../models/JumpGate';
import { JumpShip200Response } from '../models/JumpShip200Response';
import { JumpShip200ResponseData } from '../models/JumpShip200ResponseData';
import { JumpShipRequest } from '../models/JumpShipRequest';
import { Market } from '../models/Market';
import { MarketTradeGood } from '../models/MarketTradeGood';
import { MarketTransaction } from '../models/MarketTransaction';
import { Meta } from '../models/Meta';
import { NavigateShip200Response } from '../models/NavigateShip200Response';
import { NavigateShip200ResponseData } from '../models/NavigateShip200ResponseData';
import { NavigateShipRequest } from '../models/NavigateShipRequest';
import { OrbitShip200Response } from '../models/OrbitShip200Response';
import { OrbitShip200ResponseData } from '../models/OrbitShip200ResponseData';
import { PatchShipNavRequest } from '../models/PatchShipNavRequest';
import { PurchaseCargo201Response } from '../models/PurchaseCargo201Response';
import { PurchaseCargoRequest } from '../models/PurchaseCargoRequest';
import { PurchaseShip201Response } from '../models/PurchaseShip201Response';
import { PurchaseShip201ResponseData } from '../models/PurchaseShip201ResponseData';
import { PurchaseShipRequest } from '../models/PurchaseShipRequest';
import { RefuelShip200Response } from '../models/RefuelShip200Response';
import { RefuelShip200ResponseData } from '../models/RefuelShip200ResponseData';
import { Register201Response } from '../models/Register201Response';
import { Register201ResponseData } from '../models/Register201ResponseData';
import { RegisterRequest } from '../models/RegisterRequest';
import { ScannedShip } from '../models/ScannedShip';
import { ScannedShipEngine } from '../models/ScannedShipEngine';
import { ScannedShipFrame } from '../models/ScannedShipFrame';
import { ScannedShipMountsInner } from '../models/ScannedShipMountsInner';
import { ScannedShipReactor } from '../models/ScannedShipReactor';
import { ScannedSystem } from '../models/ScannedSystem';
import { ScannedWaypoint } from '../models/ScannedWaypoint';
import { SellCargo201Response } from '../models/SellCargo201Response';
import { SellCargo201ResponseData } from '../models/SellCargo201ResponseData';
import { SellCargoRequest } from '../models/SellCargoRequest';
import { Ship } from '../models/Ship';
import { ShipCargo } from '../models/ShipCargo';
import { ShipCargoItem } from '../models/ShipCargoItem';
import { ShipCrew } from '../models/ShipCrew';
import { ShipEngine } from '../models/ShipEngine';
import { ShipFrame } from '../models/ShipFrame';
import { ShipFuel } from '../models/ShipFuel';
import { ShipFuelConsumed } from '../models/ShipFuelConsumed';
import { ShipModule } from '../models/ShipModule';
import { ShipMount } from '../models/ShipMount';
import { ShipNav } from '../models/ShipNav';
import { ShipNavFlightMode } from '../models/ShipNavFlightMode';
import { ShipNavRoute } from '../models/ShipNavRoute';
import { ShipNavRouteWaypoint } from '../models/ShipNavRouteWaypoint';
import { ShipNavStatus } from '../models/ShipNavStatus';
import { ShipReactor } from '../models/ShipReactor';
import { ShipRefine200Response } from '../models/ShipRefine200Response';
import { ShipRefine200ResponseData } from '../models/ShipRefine200ResponseData';
import { ShipRefine200ResponseDataProducedInner } from '../models/ShipRefine200ResponseDataProducedInner';
import { ShipRefineRequest } from '../models/ShipRefineRequest';
import { ShipRegistration } from '../models/ShipRegistration';
import { ShipRequirements } from '../models/ShipRequirements';
import { ShipRole } from '../models/ShipRole';
import { ShipType } from '../models/ShipType';
import { Shipyard } from '../models/Shipyard';
import { ShipyardShip } from '../models/ShipyardShip';
import { ShipyardShipTypesInner } from '../models/ShipyardShipTypesInner';
import { ShipyardTransaction } from '../models/ShipyardTransaction';
import { Survey } from '../models/Survey';
import { SurveyDeposit } from '../models/SurveyDeposit';
import { System } from '../models/System';
import { SystemFaction } from '../models/SystemFaction';
import { SystemType } from '../models/SystemType';
import { SystemWaypoint } from '../models/SystemWaypoint';
import { TradeGood } from '../models/TradeGood';
import { TradeSymbol } from '../models/TradeSymbol';
import { TransferCargo200Response } from '../models/TransferCargo200Response';
import { TransferCargoRequest } from '../models/TransferCargoRequest';
import { Waypoint } from '../models/Waypoint';
import { WaypointFaction } from '../models/WaypointFaction';
import { WaypointOrbital } from '../models/WaypointOrbital';
import { WaypointTrait } from '../models/WaypointTrait';
import { WaypointType } from '../models/WaypointType';

import { AgentsApiRequestFactory, AgentsApiResponseProcessor} from "../apis/AgentsApi";
export class ObservableAgentsApi {
    private requestFactory: AgentsApiRequestFactory;
    private responseProcessor: AgentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AgentsApiRequestFactory,
        responseProcessor?: AgentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AgentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AgentsApiResponseProcessor();
    }

    /**
     * Fetch your agent\'s details.
     * My Agent Details
     */
    public getMyAgent(_options?: Configuration): Observable<GetMyAgent200Response> {
        const requestContextPromise = this.requestFactory.getMyAgent(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMyAgent(rsp)));
            }));
    }

}

import { ContractsApiRequestFactory, ContractsApiResponseProcessor} from "../apis/ContractsApi";
export class ObservableContractsApi {
    private requestFactory: ContractsApiRequestFactory;
    private responseProcessor: ContractsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContractsApiRequestFactory,
        responseProcessor?: ContractsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContractsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContractsApiResponseProcessor();
    }

    /**
     * Accept a contract.
     * Accept Contract
     * @param contractId 
     */
    public acceptContract(contractId: string, _options?: Configuration): Observable<AcceptContract200Response> {
        const requestContextPromise = this.requestFactory.acceptContract(contractId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.acceptContract(rsp)));
            }));
    }

    /**
     * Deliver cargo on a given contract.
     * Deliver Contract
     * @param contractId The ID of the contract
     * @param deliverContractRequest 
     */
    public deliverContract(contractId: string, deliverContractRequest?: DeliverContractRequest, _options?: Configuration): Observable<DeliverContract200Response> {
        const requestContextPromise = this.requestFactory.deliverContract(contractId, deliverContractRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deliverContract(rsp)));
            }));
    }

    /**
     * Fulfill a contract
     * Fulfill Contract
     * @param contractId The ID of the contract
     */
    public fulfillContract(contractId: string, _options?: Configuration): Observable<FulfillContract200Response> {
        const requestContextPromise = this.requestFactory.fulfillContract(contractId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.fulfillContract(rsp)));
            }));
    }

    /**
     * Get the details of a contract by ID.
     * Get Contract
     * @param contractId The contract ID
     */
    public getContract(contractId: string, _options?: Configuration): Observable<GetContract200Response> {
        const requestContextPromise = this.requestFactory.getContract(contractId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContract(rsp)));
            }));
    }

    /**
     * List all of your contracts.
     * List Contracts
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getContracts(page?: number, limit?: number, _options?: Configuration): Observable<GetContracts200Response> {
        const requestContextPromise = this.requestFactory.getContracts(page, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContracts(rsp)));
            }));
    }

}

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Creates a new agent and ties it to a temporary Account.  The agent symbol is a 3-14 character string that will represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.  A new agent will be granted an authorization token, a contract with their starting faction, a command ship with a jump drive, and one hundred thousand credits.  > #### Keep your token safe and secure > > Save your token during the alpha phase. There is no way to regenerate this token without starting a new agent. In the future you will be able to generate and manage your tokens from the SpaceTraders website.  You can accept your contract using the `/my/contracts/{contractId}/accept` endpoint. You will want to navigate your command ship to a nearby asteroid field and execute the `/my/ships/{shipSymbol}/extract` endpoint to mine various types of ores and minerals.  Return to the contract destination and execute the `/my/ships/{shipSymbol}/deliver` endpoint to deposit goods into the contract.  When your contract is fulfilled, you can call `/my/contracts/{contractId}/fulfill` to retrieve payment.
     * Register New Agent
     * @param registerRequest 
     */
    public register(registerRequest?: RegisterRequest, _options?: Configuration): Observable<Register201Response> {
        const requestContextPromise = this.requestFactory.register(registerRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.register(rsp)));
            }));
    }

}

import { FactionsApiRequestFactory, FactionsApiResponseProcessor} from "../apis/FactionsApi";
export class ObservableFactionsApi {
    private requestFactory: FactionsApiRequestFactory;
    private responseProcessor: FactionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FactionsApiRequestFactory,
        responseProcessor?: FactionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FactionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FactionsApiResponseProcessor();
    }

    /**
     * View the details of a faction.
     * Get Faction
     * @param factionSymbol The faction symbol
     */
    public getFaction(factionSymbol: string, _options?: Configuration): Observable<GetFaction200Response> {
        const requestContextPromise = this.requestFactory.getFaction(factionSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFaction(rsp)));
            }));
    }

    /**
     * List all discovered factions in the game.
     * List Factions
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getFactions(page?: number, limit?: number, _options?: Configuration): Observable<GetFactions200Response> {
        const requestContextPromise = this.requestFactory.getFactions(page, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFactions(rsp)));
            }));
    }

}

import { FleetApiRequestFactory, FleetApiResponseProcessor} from "../apis/FleetApi";
export class ObservableFleetApi {
    private requestFactory: FleetApiRequestFactory;
    private responseProcessor: FleetApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FleetApiRequestFactory,
        responseProcessor?: FleetApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FleetApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FleetApiResponseProcessor();
    }

    /**
     * Command a ship to chart the current waypoint.  Waypoints in the universe are uncharted by default. These locations will not show up in the API until they have been charted by a ship.  Charting a location will record your agent as the one who created the chart.
     * Create Chart
     * @param shipSymbol The symbol of the ship
     */
    public createChart(shipSymbol: string, _options?: Configuration): Observable<CreateChart201Response> {
        const requestContextPromise = this.requestFactory.createChart(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createChart(rsp)));
            }));
    }

    /**
     * Activate your ship\'s sensor arrays to scan for ship information.
     * Scan Ships
     * @param shipSymbol 
     */
    public createShipShipScan(shipSymbol: string, _options?: Configuration): Observable<CreateShipShipScan201Response> {
        const requestContextPromise = this.requestFactory.createShipShipScan(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createShipShipScan(rsp)));
            }));
    }

    /**
     * Activate your ship\'s sensor arrays to scan for system information.
     * Scan Systems
     * @param shipSymbol 
     */
    public createShipSystemScan(shipSymbol: string, _options?: Configuration): Observable<CreateShipSystemScan201Response> {
        const requestContextPromise = this.requestFactory.createShipSystemScan(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createShipSystemScan(rsp)));
            }));
    }

    /**
     * Activate your ship\'s sensor arrays to scan for waypoint information.
     * Scan Waypoints
     * @param shipSymbol 
     */
    public createShipWaypointScan(shipSymbol: string, _options?: Configuration): Observable<CreateShipWaypointScan201Response> {
        const requestContextPromise = this.requestFactory.createShipWaypointScan(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createShipWaypointScan(rsp)));
            }));
    }

    /**
     * If you want to target specific yields for an extraction, you can survey a waypoint, such as an asteroid field, and send the survey in the body of the extract request. Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.  Your ship will enter a cooldown between consecutive survey requests. Surveys will eventually expire after a period of time. Multiple ships can use the same survey for extraction.
     * Create Survey
     * @param shipSymbol The symbol of the ship
     */
    public createSurvey(shipSymbol: string, _options?: Configuration): Observable<CreateSurvey201Response> {
        const requestContextPromise = this.requestFactory.createSurvey(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSurvey(rsp)));
            }));
    }

    /**
     * Attempt to dock your ship at it\'s current location. Docking will only succeed if the waypoint is a dockable location, and your ship is capable of docking at the time of the request.  The endpoint is idempotent - successive calls will succeed even if the ship is already docked.
     * Dock Ship
     * @param shipSymbol The symbol of the ship
     */
    public dockShip(shipSymbol: string, _options?: Configuration): Observable<DockShip200Response> {
        const requestContextPromise = this.requestFactory.dockShip(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dockShip(rsp)));
            }));
    }

    /**
     * Extract resources from the waypoint into your ship. Send an optional survey as the payload to target specific yields.
     * Extract Resources
     * @param shipSymbol The ship symbol
     * @param extractResourcesRequest 
     */
    public extractResources(shipSymbol: string, extractResourcesRequest?: ExtractResourcesRequest, _options?: Configuration): Observable<ExtractResources201Response> {
        const requestContextPromise = this.requestFactory.extractResources(shipSymbol, extractResourcesRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.extractResources(rsp)));
            }));
    }

    /**
     * Retrieve the details of your ship.
     * Get Ship
     * @param shipSymbol 
     */
    public getMyShip(shipSymbol: string, _options?: Configuration): Observable<GetMyShip200Response> {
        const requestContextPromise = this.requestFactory.getMyShip(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMyShip(rsp)));
            }));
    }

    /**
     * Retrieve the cargo of your ship.
     * Get Ship Cargo
     * @param shipSymbol The symbol of the ship
     */
    public getMyShipCargo(shipSymbol: string, _options?: Configuration): Observable<GetMyShipCargo200Response> {
        const requestContextPromise = this.requestFactory.getMyShipCargo(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMyShipCargo(rsp)));
            }));
    }

    /**
     * Retrieve all of your ships.
     * List Ships
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getMyShips(page?: number, limit?: number, _options?: Configuration): Observable<GetMyShips200Response> {
        const requestContextPromise = this.requestFactory.getMyShips(page, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMyShips(rsp)));
            }));
    }

    /**
     * Retrieve the details of your ship\'s reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.  Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.  Response returns a 204 status code (no-content) when the ship has no cooldown.
     * Get Ship Cooldown
     * @param shipSymbol 
     */
    public getShipCooldown(shipSymbol: string, _options?: Configuration): Observable<void | GetShipCooldown200Response> {
        const requestContextPromise = this.requestFactory.getShipCooldown(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getShipCooldown(rsp)));
            }));
    }

    /**
     * Get the current nav status of a ship.
     * Get Ship Nav
     * @param shipSymbol The ship symbol
     */
    public getShipNav(shipSymbol: string, _options?: Configuration): Observable<GetShipNav200Response> {
        const requestContextPromise = this.requestFactory.getShipNav(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getShipNav(rsp)));
            }));
    }

    /**
     * Jettison cargo from your ship\'s cargo hold.
     * Jettison Cargo
     * @param shipSymbol 
     * @param jettisonRequest 
     */
    public jettison(shipSymbol: string, jettisonRequest?: JettisonRequest, _options?: Configuration): Observable<Jettison200Response> {
        const requestContextPromise = this.requestFactory.jettison(shipSymbol, jettisonRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.jettison(rsp)));
            }));
    }

    /**
     * Jump your ship instantly to a target system. Unlike other forms of navigation, jumping requires a unit of antimatter.
     * Jump Ship
     * @param shipSymbol 
     * @param jumpShipRequest 
     */
    public jumpShip(shipSymbol: string, jumpShipRequest?: JumpShipRequest, _options?: Configuration): Observable<JumpShip200Response> {
        const requestContextPromise = this.requestFactory.jumpShip(shipSymbol, jumpShipRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.jumpShip(rsp)));
            }));
    }

    /**
     * Navigate to a target destination. The destination must be located within the same system as the ship. Navigating will consume the necessary fuel and supplies from the ship\'s manifest, and will pay out crew wages from the agent\'s account.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it\'s destination.  To travel between systems, see the ship\'s warp or jump actions.
     * Navigate Ship
     * @param shipSymbol The ship symbol
     * @param navigateShipRequest 
     */
    public navigateShip(shipSymbol: string, navigateShipRequest?: NavigateShipRequest, _options?: Configuration): Observable<NavigateShip200Response> {
        const requestContextPromise = this.requestFactory.navigateShip(shipSymbol, navigateShipRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.navigateShip(rsp)));
            }));
    }

    /**
     * Attempt to move your ship into orbit at it\'s current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.  The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.
     * Orbit Ship
     * @param shipSymbol The symbol of the ship
     */
    public orbitShip(shipSymbol: string, _options?: Configuration): Observable<OrbitShip200Response> {
        const requestContextPromise = this.requestFactory.orbitShip(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orbitShip(rsp)));
            }));
    }

    /**
     * Update the nav data of a ship, such as the flight mode.
     * Patch Ship Nav
     * @param shipSymbol The ship symbol
     * @param patchShipNavRequest 
     */
    public patchShipNav(shipSymbol: string, patchShipNavRequest?: PatchShipNavRequest, _options?: Configuration): Observable<GetShipNav200Response> {
        const requestContextPromise = this.requestFactory.patchShipNav(shipSymbol, patchShipNavRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchShipNav(rsp)));
            }));
    }

    /**
     * Purchase cargo.
     * Purchase Cargo
     * @param shipSymbol 
     * @param purchaseCargoRequest 
     */
    public purchaseCargo(shipSymbol: string, purchaseCargoRequest?: PurchaseCargoRequest, _options?: Configuration): Observable<PurchaseCargo201Response> {
        const requestContextPromise = this.requestFactory.purchaseCargo(shipSymbol, purchaseCargoRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.purchaseCargo(rsp)));
            }));
    }

    /**
     * Purchase a ship
     * Purchase Ship
     * @param purchaseShipRequest 
     */
    public purchaseShip(purchaseShipRequest?: PurchaseShipRequest, _options?: Configuration): Observable<PurchaseShip201Response> {
        const requestContextPromise = this.requestFactory.purchaseShip(purchaseShipRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.purchaseShip(rsp)));
            }));
    }

    /**
     * Refuel your ship from the local market.
     * Refuel Ship
     * @param shipSymbol 
     */
    public refuelShip(shipSymbol: string, _options?: Configuration): Observable<RefuelShip200Response> {
        const requestContextPromise = this.requestFactory.refuelShip(shipSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.refuelShip(rsp)));
            }));
    }

    /**
     * Sell cargo.
     * Sell Cargo
     * @param shipSymbol 
     * @param sellCargoRequest 
     */
    public sellCargo(shipSymbol: string, sellCargoRequest?: SellCargoRequest, _options?: Configuration): Observable<SellCargo201Response> {
        const requestContextPromise = this.requestFactory.sellCargo(shipSymbol, sellCargoRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sellCargo(rsp)));
            }));
    }

    /**
     * Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request.
     * Ship Refine
     * @param shipSymbol The symbol of the ship
     * @param shipRefineRequest 
     */
    public shipRefine(shipSymbol: string, shipRefineRequest?: ShipRefineRequest, _options?: Configuration): Observable<ShipRefine200Response> {
        const requestContextPromise = this.requestFactory.shipRefine(shipSymbol, shipRefineRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.shipRefine(rsp)));
            }));
    }

    /**
     * Transfer cargo between ships.
     * Transfer Cargo
     * @param shipSymbol 
     * @param transferCargoRequest 
     */
    public transferCargo(shipSymbol: string, transferCargoRequest?: TransferCargoRequest, _options?: Configuration): Observable<TransferCargo200Response> {
        const requestContextPromise = this.requestFactory.transferCargo(shipSymbol, transferCargoRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.transferCargo(rsp)));
            }));
    }

    /**
     * Warp your ship to a target destination in another system. Warping will consume the necessary fuel and supplies from the ship\'s manifest, and will pay out crew wages from the agent\'s account.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it\'s destination.
     * Warp Ship
     * @param shipSymbol 
     * @param navigateShipRequest 
     */
    public warpShip(shipSymbol: string, navigateShipRequest?: NavigateShipRequest, _options?: Configuration): Observable<NavigateShip200Response> {
        const requestContextPromise = this.requestFactory.warpShip(shipSymbol, navigateShipRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.warpShip(rsp)));
            }));
    }

}

import { SystemsApiRequestFactory, SystemsApiResponseProcessor} from "../apis/SystemsApi";
export class ObservableSystemsApi {
    private requestFactory: SystemsApiRequestFactory;
    private responseProcessor: SystemsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SystemsApiRequestFactory,
        responseProcessor?: SystemsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SystemsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SystemsApiResponseProcessor();
    }

    /**
     * Get jump gate details for a waypoint.
     * Get Jump Gate
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getJumpGate(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Observable<GetJumpGate200Response> {
        const requestContextPromise = this.requestFactory.getJumpGate(systemSymbol, waypointSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJumpGate(rsp)));
            }));
    }

    /**
     * Retrieve imports, exports and exchange data from a marketplace. Imports can be sold, exports can be purchased, and exchange goods can be purchased or sold. Send a ship to the waypoint to access trade good prices and recent transactions.
     * Get Market
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getMarket(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Observable<GetMarket200Response> {
        const requestContextPromise = this.requestFactory.getMarket(systemSymbol, waypointSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMarket(rsp)));
            }));
    }

    /**
     * Get the shipyard for a waypoint. Send a ship to the waypoint to access ships that are currently available for purchase and recent transactions.
     * Get Shipyard
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getShipyard(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Observable<GetShipyard200Response> {
        const requestContextPromise = this.requestFactory.getShipyard(systemSymbol, waypointSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getShipyard(rsp)));
            }));
    }

    /**
     * Get the details of a system.
     * Get System
     * @param systemSymbol The system symbol
     */
    public getSystem(systemSymbol: string, _options?: Configuration): Observable<GetSystem200Response> {
        const requestContextPromise = this.requestFactory.getSystem(systemSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSystem(rsp)));
            }));
    }

    /**
     * Fetch all of the waypoints for a given system. System must be charted or a ship must be present to return waypoint details.
     * List Waypoints
     * @param systemSymbol The system symbol
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getSystemWaypoints(systemSymbol: string, page?: number, limit?: number, _options?: Configuration): Observable<GetSystemWaypoints200Response> {
        const requestContextPromise = this.requestFactory.getSystemWaypoints(systemSymbol, page, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSystemWaypoints(rsp)));
            }));
    }

    /**
     * Return a list of all systems.
     * List Systems
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getSystems(page?: number, limit?: number, _options?: Configuration): Observable<GetSystems200Response> {
        const requestContextPromise = this.requestFactory.getSystems(page, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSystems(rsp)));
            }));
    }

    /**
     * View the details of a waypoint.
     * Get Waypoint
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getWaypoint(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Observable<GetWaypoint200Response> {
        const requestContextPromise = this.requestFactory.getWaypoint(systemSymbol, waypointSymbol, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWaypoint(rsp)));
            }));
    }

}
