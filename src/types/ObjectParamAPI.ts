import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

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

import { ObservableAgentsApi } from "./ObservableAPI";
import { AgentsApiRequestFactory, AgentsApiResponseProcessor} from "../apis/AgentsApi";

export interface AgentsApiGetMyAgentRequest {
}

export class ObjectAgentsApi {
    private api: ObservableAgentsApi

    public constructor(configuration: Configuration, requestFactory?: AgentsApiRequestFactory, responseProcessor?: AgentsApiResponseProcessor) {
        this.api = new ObservableAgentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch your agent\'s details.
     * My Agent Details
     * @param param the request object
     */
    public getMyAgent(param: AgentsApiGetMyAgentRequest = {}, options?: Configuration): Promise<GetMyAgent200Response> {
        return this.api.getMyAgent( options).toPromise();
    }

}

import { ObservableContractsApi } from "./ObservableAPI";
import { ContractsApiRequestFactory, ContractsApiResponseProcessor} from "../apis/ContractsApi";

export interface ContractsApiAcceptContractRequest {
    /**
     * 
     * @type string
     * @memberof ContractsApiacceptContract
     */
    contractId: string
}

export interface ContractsApiDeliverContractRequest {
    /**
     * The ID of the contract
     * @type string
     * @memberof ContractsApideliverContract
     */
    contractId: string
    /**
     * 
     * @type DeliverContractRequest
     * @memberof ContractsApideliverContract
     */
    deliverContractRequest?: DeliverContractRequest
}

export interface ContractsApiFulfillContractRequest {
    /**
     * The ID of the contract
     * @type string
     * @memberof ContractsApifulfillContract
     */
    contractId: string
}

export interface ContractsApiGetContractRequest {
    /**
     * The contract ID
     * @type string
     * @memberof ContractsApigetContract
     */
    contractId: string
}

export interface ContractsApiGetContractsRequest {
    /**
     * What entry offset to request
     * @type number
     * @memberof ContractsApigetContracts
     */
    page?: number
    /**
     * How many entries to return per page
     * @type number
     * @memberof ContractsApigetContracts
     */
    limit?: number
}

export class ObjectContractsApi {
    private api: ObservableContractsApi

    public constructor(configuration: Configuration, requestFactory?: ContractsApiRequestFactory, responseProcessor?: ContractsApiResponseProcessor) {
        this.api = new ObservableContractsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Accept a contract.
     * Accept Contract
     * @param param the request object
     */
    public acceptContract(param: ContractsApiAcceptContractRequest, options?: Configuration): Promise<AcceptContract200Response> {
        return this.api.acceptContract(param.contractId,  options).toPromise();
    }

    /**
     * Deliver cargo on a given contract.
     * Deliver Contract
     * @param param the request object
     */
    public deliverContract(param: ContractsApiDeliverContractRequest, options?: Configuration): Promise<DeliverContract200Response> {
        return this.api.deliverContract(param.contractId, param.deliverContractRequest,  options).toPromise();
    }

    /**
     * Fulfill a contract
     * Fulfill Contract
     * @param param the request object
     */
    public fulfillContract(param: ContractsApiFulfillContractRequest, options?: Configuration): Promise<FulfillContract200Response> {
        return this.api.fulfillContract(param.contractId,  options).toPromise();
    }

    /**
     * Get the details of a contract by ID.
     * Get Contract
     * @param param the request object
     */
    public getContract(param: ContractsApiGetContractRequest, options?: Configuration): Promise<GetContract200Response> {
        return this.api.getContract(param.contractId,  options).toPromise();
    }

    /**
     * List all of your contracts.
     * List Contracts
     * @param param the request object
     */
    public getContracts(param: ContractsApiGetContractsRequest = {}, options?: Configuration): Promise<GetContracts200Response> {
        return this.api.getContracts(param.page, param.limit,  options).toPromise();
    }

}

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiRegisterRequest {
    /**
     * 
     * @type RegisterRequest
     * @memberof DefaultApiregister
     */
    registerRequest?: RegisterRequest
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new agent and ties it to a temporary Account.  The agent symbol is a 3-14 character string that will represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.  A new agent will be granted an authorization token, a contract with their starting faction, a command ship with a jump drive, and one hundred thousand credits.  > #### Keep your token safe and secure > > Save your token during the alpha phase. There is no way to regenerate this token without starting a new agent. In the future you will be able to generate and manage your tokens from the SpaceTraders website.  You can accept your contract using the `/my/contracts/{contractId}/accept` endpoint. You will want to navigate your command ship to a nearby asteroid field and execute the `/my/ships/{shipSymbol}/extract` endpoint to mine various types of ores and minerals.  Return to the contract destination and execute the `/my/ships/{shipSymbol}/deliver` endpoint to deposit goods into the contract.  When your contract is fulfilled, you can call `/my/contracts/{contractId}/fulfill` to retrieve payment.
     * Register New Agent
     * @param param the request object
     */
    public register(param: DefaultApiRegisterRequest = {}, options?: Configuration): Promise<Register201Response> {
        return this.api.register(param.registerRequest,  options).toPromise();
    }

}

import { ObservableFactionsApi } from "./ObservableAPI";
import { FactionsApiRequestFactory, FactionsApiResponseProcessor} from "../apis/FactionsApi";

export interface FactionsApiGetFactionRequest {
    /**
     * The faction symbol
     * @type string
     * @memberof FactionsApigetFaction
     */
    factionSymbol: string
}

export interface FactionsApiGetFactionsRequest {
    /**
     * What entry offset to request
     * @type number
     * @memberof FactionsApigetFactions
     */
    page?: number
    /**
     * How many entries to return per page
     * @type number
     * @memberof FactionsApigetFactions
     */
    limit?: number
}

export class ObjectFactionsApi {
    private api: ObservableFactionsApi

    public constructor(configuration: Configuration, requestFactory?: FactionsApiRequestFactory, responseProcessor?: FactionsApiResponseProcessor) {
        this.api = new ObservableFactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * View the details of a faction.
     * Get Faction
     * @param param the request object
     */
    public getFaction(param: FactionsApiGetFactionRequest, options?: Configuration): Promise<GetFaction200Response> {
        return this.api.getFaction(param.factionSymbol,  options).toPromise();
    }

    /**
     * List all discovered factions in the game.
     * List Factions
     * @param param the request object
     */
    public getFactions(param: FactionsApiGetFactionsRequest = {}, options?: Configuration): Promise<GetFactions200Response> {
        return this.api.getFactions(param.page, param.limit,  options).toPromise();
    }

}

import { ObservableFleetApi } from "./ObservableAPI";
import { FleetApiRequestFactory, FleetApiResponseProcessor} from "../apis/FleetApi";

export interface FleetApiCreateChartRequest {
    /**
     * The symbol of the ship
     * @type string
     * @memberof FleetApicreateChart
     */
    shipSymbol: string
}

export interface FleetApiCreateShipShipScanRequest {
    /**
     * 
     * @type string
     * @memberof FleetApicreateShipShipScan
     */
    shipSymbol: string
}

export interface FleetApiCreateShipSystemScanRequest {
    /**
     * 
     * @type string
     * @memberof FleetApicreateShipSystemScan
     */
    shipSymbol: string
}

export interface FleetApiCreateShipWaypointScanRequest {
    /**
     * 
     * @type string
     * @memberof FleetApicreateShipWaypointScan
     */
    shipSymbol: string
}

export interface FleetApiCreateSurveyRequest {
    /**
     * The symbol of the ship
     * @type string
     * @memberof FleetApicreateSurvey
     */
    shipSymbol: string
}

export interface FleetApiDockShipRequest {
    /**
     * The symbol of the ship
     * @type string
     * @memberof FleetApidockShip
     */
    shipSymbol: string
}

export interface FleetApiExtractResourcesRequest {
    /**
     * The ship symbol
     * @type string
     * @memberof FleetApiextractResources
     */
    shipSymbol: string
    /**
     * 
     * @type ExtractResourcesRequest
     * @memberof FleetApiextractResources
     */
    extractResourcesRequest?: ExtractResourcesRequest
}

export interface FleetApiGetMyShipRequest {
    /**
     * 
     * @type string
     * @memberof FleetApigetMyShip
     */
    shipSymbol: string
}

export interface FleetApiGetMyShipCargoRequest {
    /**
     * The symbol of the ship
     * @type string
     * @memberof FleetApigetMyShipCargo
     */
    shipSymbol: string
}

export interface FleetApiGetMyShipsRequest {
    /**
     * What entry offset to request
     * @type number
     * @memberof FleetApigetMyShips
     */
    page?: number
    /**
     * How many entries to return per page
     * @type number
     * @memberof FleetApigetMyShips
     */
    limit?: number
}

export interface FleetApiGetShipCooldownRequest {
    /**
     * 
     * @type string
     * @memberof FleetApigetShipCooldown
     */
    shipSymbol: string
}

export interface FleetApiGetShipNavRequest {
    /**
     * The ship symbol
     * @type string
     * @memberof FleetApigetShipNav
     */
    shipSymbol: string
}

export interface FleetApiJettisonRequest {
    /**
     * 
     * @type string
     * @memberof FleetApijettison
     */
    shipSymbol: string
    /**
     * 
     * @type JettisonRequest
     * @memberof FleetApijettison
     */
    jettisonRequest?: JettisonRequest
}

export interface FleetApiJumpShipRequest {
    /**
     * 
     * @type string
     * @memberof FleetApijumpShip
     */
    shipSymbol: string
    /**
     * 
     * @type JumpShipRequest
     * @memberof FleetApijumpShip
     */
    jumpShipRequest?: JumpShipRequest
}

export interface FleetApiNavigateShipRequest {
    /**
     * The ship symbol
     * @type string
     * @memberof FleetApinavigateShip
     */
    shipSymbol: string
    /**
     * 
     * @type NavigateShipRequest
     * @memberof FleetApinavigateShip
     */
    navigateShipRequest?: NavigateShipRequest
}

export interface FleetApiOrbitShipRequest {
    /**
     * The symbol of the ship
     * @type string
     * @memberof FleetApiorbitShip
     */
    shipSymbol: string
}

export interface FleetApiPatchShipNavRequest {
    /**
     * The ship symbol
     * @type string
     * @memberof FleetApipatchShipNav
     */
    shipSymbol: string
    /**
     * 
     * @type PatchShipNavRequest
     * @memberof FleetApipatchShipNav
     */
    patchShipNavRequest?: PatchShipNavRequest
}

export interface FleetApiPurchaseCargoRequest {
    /**
     * 
     * @type string
     * @memberof FleetApipurchaseCargo
     */
    shipSymbol: string
    /**
     * 
     * @type PurchaseCargoRequest
     * @memberof FleetApipurchaseCargo
     */
    purchaseCargoRequest?: PurchaseCargoRequest
}

export interface FleetApiPurchaseShipRequest {
    /**
     * 
     * @type PurchaseShipRequest
     * @memberof FleetApipurchaseShip
     */
    purchaseShipRequest?: PurchaseShipRequest
}

export interface FleetApiRefuelShipRequest {
    /**
     * 
     * @type string
     * @memberof FleetApirefuelShip
     */
    shipSymbol: string
}

export interface FleetApiSellCargoRequest {
    /**
     * 
     * @type string
     * @memberof FleetApisellCargo
     */
    shipSymbol: string
    /**
     * 
     * @type SellCargoRequest
     * @memberof FleetApisellCargo
     */
    sellCargoRequest?: SellCargoRequest
}

export interface FleetApiShipRefineRequest {
    /**
     * The symbol of the ship
     * @type string
     * @memberof FleetApishipRefine
     */
    shipSymbol: string
    /**
     * 
     * @type ShipRefineRequest
     * @memberof FleetApishipRefine
     */
    shipRefineRequest?: ShipRefineRequest
}

export interface FleetApiTransferCargoRequest {
    /**
     * 
     * @type string
     * @memberof FleetApitransferCargo
     */
    shipSymbol: string
    /**
     * 
     * @type TransferCargoRequest
     * @memberof FleetApitransferCargo
     */
    transferCargoRequest?: TransferCargoRequest
}

export interface FleetApiWarpShipRequest {
    /**
     * 
     * @type string
     * @memberof FleetApiwarpShip
     */
    shipSymbol: string
    /**
     * 
     * @type NavigateShipRequest
     * @memberof FleetApiwarpShip
     */
    navigateShipRequest?: NavigateShipRequest
}

export class ObjectFleetApi {
    private api: ObservableFleetApi

    public constructor(configuration: Configuration, requestFactory?: FleetApiRequestFactory, responseProcessor?: FleetApiResponseProcessor) {
        this.api = new ObservableFleetApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Command a ship to chart the current waypoint.  Waypoints in the universe are uncharted by default. These locations will not show up in the API until they have been charted by a ship.  Charting a location will record your agent as the one who created the chart.
     * Create Chart
     * @param param the request object
     */
    public createChart(param: FleetApiCreateChartRequest, options?: Configuration): Promise<CreateChart201Response> {
        return this.api.createChart(param.shipSymbol,  options).toPromise();
    }

    /**
     * Activate your ship\'s sensor arrays to scan for ship information.
     * Scan Ships
     * @param param the request object
     */
    public createShipShipScan(param: FleetApiCreateShipShipScanRequest, options?: Configuration): Promise<CreateShipShipScan201Response> {
        return this.api.createShipShipScan(param.shipSymbol,  options).toPromise();
    }

    /**
     * Activate your ship\'s sensor arrays to scan for system information.
     * Scan Systems
     * @param param the request object
     */
    public createShipSystemScan(param: FleetApiCreateShipSystemScanRequest, options?: Configuration): Promise<CreateShipSystemScan201Response> {
        return this.api.createShipSystemScan(param.shipSymbol,  options).toPromise();
    }

    /**
     * Activate your ship\'s sensor arrays to scan for waypoint information.
     * Scan Waypoints
     * @param param the request object
     */
    public createShipWaypointScan(param: FleetApiCreateShipWaypointScanRequest, options?: Configuration): Promise<CreateShipWaypointScan201Response> {
        return this.api.createShipWaypointScan(param.shipSymbol,  options).toPromise();
    }

    /**
     * If you want to target specific yields for an extraction, you can survey a waypoint, such as an asteroid field, and send the survey in the body of the extract request. Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.  Your ship will enter a cooldown between consecutive survey requests. Surveys will eventually expire after a period of time. Multiple ships can use the same survey for extraction.
     * Create Survey
     * @param param the request object
     */
    public createSurvey(param: FleetApiCreateSurveyRequest, options?: Configuration): Promise<CreateSurvey201Response> {
        return this.api.createSurvey(param.shipSymbol,  options).toPromise();
    }

    /**
     * Attempt to dock your ship at it\'s current location. Docking will only succeed if the waypoint is a dockable location, and your ship is capable of docking at the time of the request.  The endpoint is idempotent - successive calls will succeed even if the ship is already docked.
     * Dock Ship
     * @param param the request object
     */
    public dockShip(param: FleetApiDockShipRequest, options?: Configuration): Promise<DockShip200Response> {
        return this.api.dockShip(param.shipSymbol,  options).toPromise();
    }

    /**
     * Extract resources from the waypoint into your ship. Send an optional survey as the payload to target specific yields.
     * Extract Resources
     * @param param the request object
     */
    public extractResources(param: FleetApiExtractResourcesRequest, options?: Configuration): Promise<ExtractResources201Response> {
        return this.api.extractResources(param.shipSymbol, param.extractResourcesRequest,  options).toPromise();
    }

    /**
     * Retrieve the details of your ship.
     * Get Ship
     * @param param the request object
     */
    public getMyShip(param: FleetApiGetMyShipRequest, options?: Configuration): Promise<GetMyShip200Response> {
        return this.api.getMyShip(param.shipSymbol,  options).toPromise();
    }

    /**
     * Retrieve the cargo of your ship.
     * Get Ship Cargo
     * @param param the request object
     */
    public getMyShipCargo(param: FleetApiGetMyShipCargoRequest, options?: Configuration): Promise<GetMyShipCargo200Response> {
        return this.api.getMyShipCargo(param.shipSymbol,  options).toPromise();
    }

    /**
     * Retrieve all of your ships.
     * List Ships
     * @param param the request object
     */
    public getMyShips(param: FleetApiGetMyShipsRequest = {}, options?: Configuration): Promise<GetMyShips200Response> {
        return this.api.getMyShips(param.page, param.limit,  options).toPromise();
    }

    /**
     * Retrieve the details of your ship\'s reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.  Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.  Response returns a 204 status code (no-content) when the ship has no cooldown.
     * Get Ship Cooldown
     * @param param the request object
     */
    public getShipCooldown(param: FleetApiGetShipCooldownRequest, options?: Configuration): Promise<void | GetShipCooldown200Response> {
        return this.api.getShipCooldown(param.shipSymbol,  options).toPromise();
    }

    /**
     * Get the current nav status of a ship.
     * Get Ship Nav
     * @param param the request object
     */
    public getShipNav(param: FleetApiGetShipNavRequest, options?: Configuration): Promise<GetShipNav200Response> {
        return this.api.getShipNav(param.shipSymbol,  options).toPromise();
    }

    /**
     * Jettison cargo from your ship\'s cargo hold.
     * Jettison Cargo
     * @param param the request object
     */
    public jettison(param: FleetApiJettisonRequest, options?: Configuration): Promise<Jettison200Response> {
        return this.api.jettison(param.shipSymbol, param.jettisonRequest,  options).toPromise();
    }

    /**
     * Jump your ship instantly to a target system. Unlike other forms of navigation, jumping requires a unit of antimatter.
     * Jump Ship
     * @param param the request object
     */
    public jumpShip(param: FleetApiJumpShipRequest, options?: Configuration): Promise<JumpShip200Response> {
        return this.api.jumpShip(param.shipSymbol, param.jumpShipRequest,  options).toPromise();
    }

    /**
     * Navigate to a target destination. The destination must be located within the same system as the ship. Navigating will consume the necessary fuel and supplies from the ship\'s manifest, and will pay out crew wages from the agent\'s account.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it\'s destination.  To travel between systems, see the ship\'s warp or jump actions.
     * Navigate Ship
     * @param param the request object
     */
    public navigateShip(param: FleetApiNavigateShipRequest, options?: Configuration): Promise<NavigateShip200Response> {
        return this.api.navigateShip(param.shipSymbol, param.navigateShipRequest,  options).toPromise();
    }

    /**
     * Attempt to move your ship into orbit at it\'s current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.  The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.
     * Orbit Ship
     * @param param the request object
     */
    public orbitShip(param: FleetApiOrbitShipRequest, options?: Configuration): Promise<OrbitShip200Response> {
        return this.api.orbitShip(param.shipSymbol,  options).toPromise();
    }

    /**
     * Update the nav data of a ship, such as the flight mode.
     * Patch Ship Nav
     * @param param the request object
     */
    public patchShipNav(param: FleetApiPatchShipNavRequest, options?: Configuration): Promise<GetShipNav200Response> {
        return this.api.patchShipNav(param.shipSymbol, param.patchShipNavRequest,  options).toPromise();
    }

    /**
     * Purchase cargo.
     * Purchase Cargo
     * @param param the request object
     */
    public purchaseCargo(param: FleetApiPurchaseCargoRequest, options?: Configuration): Promise<PurchaseCargo201Response> {
        return this.api.purchaseCargo(param.shipSymbol, param.purchaseCargoRequest,  options).toPromise();
    }

    /**
     * Purchase a ship
     * Purchase Ship
     * @param param the request object
     */
    public purchaseShip(param: FleetApiPurchaseShipRequest = {}, options?: Configuration): Promise<PurchaseShip201Response> {
        return this.api.purchaseShip(param.purchaseShipRequest,  options).toPromise();
    }

    /**
     * Refuel your ship from the local market.
     * Refuel Ship
     * @param param the request object
     */
    public refuelShip(param: FleetApiRefuelShipRequest, options?: Configuration): Promise<RefuelShip200Response> {
        return this.api.refuelShip(param.shipSymbol,  options).toPromise();
    }

    /**
     * Sell cargo.
     * Sell Cargo
     * @param param the request object
     */
    public sellCargo(param: FleetApiSellCargoRequest, options?: Configuration): Promise<SellCargo201Response> {
        return this.api.sellCargo(param.shipSymbol, param.sellCargoRequest,  options).toPromise();
    }

    /**
     * Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request.
     * Ship Refine
     * @param param the request object
     */
    public shipRefine(param: FleetApiShipRefineRequest, options?: Configuration): Promise<ShipRefine200Response> {
        return this.api.shipRefine(param.shipSymbol, param.shipRefineRequest,  options).toPromise();
    }

    /**
     * Transfer cargo between ships.
     * Transfer Cargo
     * @param param the request object
     */
    public transferCargo(param: FleetApiTransferCargoRequest, options?: Configuration): Promise<TransferCargo200Response> {
        return this.api.transferCargo(param.shipSymbol, param.transferCargoRequest,  options).toPromise();
    }

    /**
     * Warp your ship to a target destination in another system. Warping will consume the necessary fuel and supplies from the ship\'s manifest, and will pay out crew wages from the agent\'s account.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it\'s destination.
     * Warp Ship
     * @param param the request object
     */
    public warpShip(param: FleetApiWarpShipRequest, options?: Configuration): Promise<NavigateShip200Response> {
        return this.api.warpShip(param.shipSymbol, param.navigateShipRequest,  options).toPromise();
    }

}

import { ObservableSystemsApi } from "./ObservableAPI";
import { SystemsApiRequestFactory, SystemsApiResponseProcessor} from "../apis/SystemsApi";

export interface SystemsApiGetJumpGateRequest {
    /**
     * The system symbol
     * @type string
     * @memberof SystemsApigetJumpGate
     */
    systemSymbol: string
    /**
     * The waypoint symbol
     * @type string
     * @memberof SystemsApigetJumpGate
     */
    waypointSymbol: string
}

export interface SystemsApiGetMarketRequest {
    /**
     * The system symbol
     * @type string
     * @memberof SystemsApigetMarket
     */
    systemSymbol: string
    /**
     * The waypoint symbol
     * @type string
     * @memberof SystemsApigetMarket
     */
    waypointSymbol: string
}

export interface SystemsApiGetShipyardRequest {
    /**
     * The system symbol
     * @type string
     * @memberof SystemsApigetShipyard
     */
    systemSymbol: string
    /**
     * The waypoint symbol
     * @type string
     * @memberof SystemsApigetShipyard
     */
    waypointSymbol: string
}

export interface SystemsApiGetSystemRequest {
    /**
     * The system symbol
     * @type string
     * @memberof SystemsApigetSystem
     */
    systemSymbol: string
}

export interface SystemsApiGetSystemWaypointsRequest {
    /**
     * The system symbol
     * @type string
     * @memberof SystemsApigetSystemWaypoints
     */
    systemSymbol: string
    /**
     * What entry offset to request
     * @type number
     * @memberof SystemsApigetSystemWaypoints
     */
    page?: number
    /**
     * How many entries to return per page
     * @type number
     * @memberof SystemsApigetSystemWaypoints
     */
    limit?: number
}

export interface SystemsApiGetSystemsRequest {
    /**
     * What entry offset to request
     * @type number
     * @memberof SystemsApigetSystems
     */
    page?: number
    /**
     * How many entries to return per page
     * @type number
     * @memberof SystemsApigetSystems
     */
    limit?: number
}

export interface SystemsApiGetWaypointRequest {
    /**
     * The system symbol
     * @type string
     * @memberof SystemsApigetWaypoint
     */
    systemSymbol: string
    /**
     * The waypoint symbol
     * @type string
     * @memberof SystemsApigetWaypoint
     */
    waypointSymbol: string
}

export class ObjectSystemsApi {
    private api: ObservableSystemsApi

    public constructor(configuration: Configuration, requestFactory?: SystemsApiRequestFactory, responseProcessor?: SystemsApiResponseProcessor) {
        this.api = new ObservableSystemsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get jump gate details for a waypoint.
     * Get Jump Gate
     * @param param the request object
     */
    public getJumpGate(param: SystemsApiGetJumpGateRequest, options?: Configuration): Promise<GetJumpGate200Response> {
        return this.api.getJumpGate(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Retrieve imports, exports and exchange data from a marketplace. Imports can be sold, exports can be purchased, and exchange goods can be purchased or sold. Send a ship to the waypoint to access trade good prices and recent transactions.
     * Get Market
     * @param param the request object
     */
    public getMarket(param: SystemsApiGetMarketRequest, options?: Configuration): Promise<GetMarket200Response> {
        return this.api.getMarket(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Get the shipyard for a waypoint. Send a ship to the waypoint to access ships that are currently available for purchase and recent transactions.
     * Get Shipyard
     * @param param the request object
     */
    public getShipyard(param: SystemsApiGetShipyardRequest, options?: Configuration): Promise<GetShipyard200Response> {
        return this.api.getShipyard(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

    /**
     * Get the details of a system.
     * Get System
     * @param param the request object
     */
    public getSystem(param: SystemsApiGetSystemRequest, options?: Configuration): Promise<GetSystem200Response> {
        return this.api.getSystem(param.systemSymbol,  options).toPromise();
    }

    /**
     * Fetch all of the waypoints for a given system. System must be charted or a ship must be present to return waypoint details.
     * List Waypoints
     * @param param the request object
     */
    public getSystemWaypoints(param: SystemsApiGetSystemWaypointsRequest, options?: Configuration): Promise<GetSystemWaypoints200Response> {
        return this.api.getSystemWaypoints(param.systemSymbol, param.page, param.limit,  options).toPromise();
    }

    /**
     * Return a list of all systems.
     * List Systems
     * @param param the request object
     */
    public getSystems(param: SystemsApiGetSystemsRequest = {}, options?: Configuration): Promise<GetSystems200Response> {
        return this.api.getSystems(param.page, param.limit,  options).toPromise();
    }

    /**
     * View the details of a waypoint.
     * Get Waypoint
     * @param param the request object
     */
    public getWaypoint(param: SystemsApiGetWaypointRequest, options?: Configuration): Promise<GetWaypoint200Response> {
        return this.api.getWaypoint(param.systemSymbol, param.waypointSymbol,  options).toPromise();
    }

}
