# .FleetApi

All URIs are relative to *https://api.spacetraders.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChart**](FleetApi.md#createChart) | **POST** /my/ships/{shipSymbol}/chart | Create Chart
[**createShipShipScan**](FleetApi.md#createShipShipScan) | **POST** /my/ships/{shipSymbol}/scan/ships | Scan Ships
[**createShipSystemScan**](FleetApi.md#createShipSystemScan) | **POST** /my/ships/{shipSymbol}/scan/systems | Scan Systems
[**createShipWaypointScan**](FleetApi.md#createShipWaypointScan) | **POST** /my/ships/{shipSymbol}/scan/waypoints | Scan Waypoints
[**createSurvey**](FleetApi.md#createSurvey) | **POST** /my/ships/{shipSymbol}/survey | Create Survey
[**dockShip**](FleetApi.md#dockShip) | **POST** /my/ships/{shipSymbol}/dock | Dock Ship
[**extractResources**](FleetApi.md#extractResources) | **POST** /my/ships/{shipSymbol}/extract | Extract Resources
[**getMyShip**](FleetApi.md#getMyShip) | **GET** /my/ships/{shipSymbol} | Get Ship
[**getMyShipCargo**](FleetApi.md#getMyShipCargo) | **GET** /my/ships/{shipSymbol}/cargo | Get Ship Cargo
[**getMyShips**](FleetApi.md#getMyShips) | **GET** /my/ships | List Ships
[**getShipCooldown**](FleetApi.md#getShipCooldown) | **GET** /my/ships/{shipSymbol}/cooldown | Get Ship Cooldown
[**getShipNav**](FleetApi.md#getShipNav) | **GET** /my/ships/{shipSymbol}/nav | Get Ship Nav
[**jettison**](FleetApi.md#jettison) | **POST** /my/ships/{shipSymbol}/jettison | Jettison Cargo
[**jumpShip**](FleetApi.md#jumpShip) | **POST** /my/ships/{shipSymbol}/jump | Jump Ship
[**navigateShip**](FleetApi.md#navigateShip) | **POST** /my/ships/{shipSymbol}/navigate | Navigate Ship
[**orbitShip**](FleetApi.md#orbitShip) | **POST** /my/ships/{shipSymbol}/orbit | Orbit Ship
[**patchShipNav**](FleetApi.md#patchShipNav) | **PATCH** /my/ships/{shipSymbol}/nav | Patch Ship Nav
[**purchaseCargo**](FleetApi.md#purchaseCargo) | **POST** /my/ships/{shipSymbol}/purchase | Purchase Cargo
[**purchaseShip**](FleetApi.md#purchaseShip) | **POST** /my/ships | Purchase Ship
[**refuelShip**](FleetApi.md#refuelShip) | **POST** /my/ships/{shipSymbol}/refuel | Refuel Ship
[**sellCargo**](FleetApi.md#sellCargo) | **POST** /my/ships/{shipSymbol}/sell | Sell Cargo
[**shipRefine**](FleetApi.md#shipRefine) | **POST** /my/ships/{shipSymbol}/refine | Ship Refine
[**transferCargo**](FleetApi.md#transferCargo) | **POST** /my/ships/{shipSymbol}/transfer | Transfer Cargo
[**warpShip**](FleetApi.md#warpShip) | **POST** /my/ships/{shipSymbol}/warp | Warp Ship


# **createChart**
> CreateChart201Response createChart()

Command a ship to chart the current waypoint.  Waypoints in the universe are uncharted by default. These locations will not show up in the API until they have been charted by a ship.  Charting a location will record your agent as the one who created the chart.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiCreateChartRequest = {
  // string | The symbol of the ship
  shipSymbol: "shipSymbol_example",
};

apiInstance.createChart(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipSymbol** | [**string**] | The symbol of the ship | defaults to undefined


### Return type

**CreateChart201Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createShipShipScan**
> CreateShipShipScan201Response createShipShipScan()

Activate your ship\'s sensor arrays to scan for ship information.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiCreateShipShipScanRequest = {
  // string
  shipSymbol: "shipSymbol_example",
};

apiInstance.createShipShipScan(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipSymbol** | [**string**] |  | defaults to undefined


### Return type

**CreateShipShipScan201Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createShipSystemScan**
> CreateShipSystemScan201Response createShipSystemScan()

Activate your ship\'s sensor arrays to scan for system information.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiCreateShipSystemScanRequest = {
  // string
  shipSymbol: "shipSymbol_example",
};

apiInstance.createShipSystemScan(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipSymbol** | [**string**] |  | defaults to undefined


### Return type

**CreateShipSystemScan201Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createShipWaypointScan**
> CreateShipWaypointScan201Response createShipWaypointScan()

Activate your ship\'s sensor arrays to scan for waypoint information.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiCreateShipWaypointScanRequest = {
  // string
  shipSymbol: "shipSymbol_example",
};

apiInstance.createShipWaypointScan(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipSymbol** | [**string**] |  | defaults to undefined


### Return type

**CreateShipWaypointScan201Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createSurvey**
> CreateSurvey201Response createSurvey()

If you want to target specific yields for an extraction, you can survey a waypoint, such as an asteroid field, and send the survey in the body of the extract request. Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.  Your ship will enter a cooldown between consecutive survey requests. Surveys will eventually expire after a period of time. Multiple ships can use the same survey for extraction.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiCreateSurveyRequest = {
  // string | The symbol of the ship
  shipSymbol: "shipSymbol_example",
};

apiInstance.createSurvey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipSymbol** | [**string**] | The symbol of the ship | defaults to undefined


### Return type

**CreateSurvey201Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dockShip**
> DockShip200Response dockShip()

Attempt to dock your ship at it\'s current location. Docking will only succeed if the waypoint is a dockable location, and your ship is capable of docking at the time of the request.  The endpoint is idempotent - successive calls will succeed even if the ship is already docked.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiDockShipRequest = {
  // string | The symbol of the ship
  shipSymbol: "shipSymbol_example",
};

apiInstance.dockShip(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipSymbol** | [**string**] | The symbol of the ship | defaults to undefined


### Return type

**DockShip200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The ship has successfully docked at it\&#39;s current location. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **extractResources**
> ExtractResources201Response extractResources()

Extract resources from the waypoint into your ship. Send an optional survey as the payload to target specific yields.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiExtractResourcesRequest = {
  // string | The ship symbol
  shipSymbol: "shipSymbol_example",
  // ExtractResourcesRequest (optional)
  extractResourcesRequest: {
    survey: {
      signature: "signature_example",
      symbol: "symbol_example",
      deposits: [
        {
          symbol: "symbol_example",
        },
      ],
      expiration: new Date('1970-01-01T00:00:00.00Z'),
      size: "SMALL",
    },
  },
};

apiInstance.extractResources(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extractResourcesRequest** | **ExtractResourcesRequest**|  |
 **shipSymbol** | [**string**] | The ship symbol | defaults to undefined


### Return type

**ExtractResources201Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMyShip**
> GetMyShip200Response getMyShip()

Retrieve the details of your ship.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiGetMyShipRequest = {
  // string
  shipSymbol: "shipSymbol_example",
};

apiInstance.getMyShip(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipSymbol** | [**string**] |  | defaults to undefined


### Return type

**GetMyShip200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMyShipCargo**
> GetMyShipCargo200Response getMyShipCargo()

Retrieve the cargo of your ship.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiGetMyShipCargoRequest = {
  // string | The symbol of the ship
  shipSymbol: "shipSymbol_example",
};

apiInstance.getMyShipCargo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipSymbol** | [**string**] | The symbol of the ship | defaults to undefined


### Return type

**GetMyShipCargo200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMyShips**
> GetMyShips200Response getMyShips()

Retrieve all of your ships.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiGetMyShipsRequest = {
  // number | What entry offset to request (optional)
  page: 1,
  // number | How many entries to return per page (optional)
  limit: 1,
};

apiInstance.getMyShips(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | What entry offset to request | (optional) defaults to undefined
 **limit** | [**number**] | How many entries to return per page | (optional) defaults to undefined


### Return type

**GetMyShips200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getShipCooldown**
> void | GetShipCooldown200Response getShipCooldown()

Retrieve the details of your ship\'s reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.  Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.  Response returns a 204 status code (no-content) when the ship has no cooldown.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiGetShipCooldownRequest = {
  // string
  shipSymbol: "shipSymbol_example",
};

apiInstance.getShipCooldown(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipSymbol** | [**string**] |  | defaults to undefined


### Return type

**void | GetShipCooldown200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | No cooldown |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getShipNav**
> GetShipNav200Response getShipNav()

Get the current nav status of a ship.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiGetShipNavRequest = {
  // string | The ship symbol
  shipSymbol: "shipSymbol_example",
};

apiInstance.getShipNav(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipSymbol** | [**string**] | The ship symbol | defaults to undefined


### Return type

**GetShipNav200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The current nav status of the ship. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **jettison**
> Jettison200Response jettison()

Jettison cargo from your ship\'s cargo hold.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiJettisonRequest = {
  // string
  shipSymbol: "shipSymbol_example",
  // JettisonRequest (optional)
  jettisonRequest: {
    symbol: "symbol_example",
    units: 1,
  },
};

apiInstance.jettison(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jettisonRequest** | **JettisonRequest**|  |
 **shipSymbol** | [**string**] |  | defaults to undefined


### Return type

**Jettison200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **jumpShip**
> JumpShip200Response jumpShip()

Jump your ship instantly to a target system. Unlike other forms of navigation, jumping requires a unit of antimatter.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiJumpShipRequest = {
  // string
  shipSymbol: "shipSymbol_example",
  // JumpShipRequest (optional)
  jumpShipRequest: {
    systemSymbol: "systemSymbol_example",
  },
};

apiInstance.jumpShip(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jumpShipRequest** | **JumpShipRequest**|  |
 **shipSymbol** | [**string**] |  | defaults to undefined


### Return type

**JumpShip200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **navigateShip**
> NavigateShip200Response navigateShip()

Navigate to a target destination. The destination must be located within the same system as the ship. Navigating will consume the necessary fuel and supplies from the ship\'s manifest, and will pay out crew wages from the agent\'s account.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it\'s destination.  To travel between systems, see the ship\'s warp or jump actions.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiNavigateShipRequest = {
  // string | The ship symbol
  shipSymbol: "shipSymbol_example",
  // NavigateShipRequest |  (optional)
  navigateShipRequest: {
    waypointSymbol: "waypointSymbol_example",
  },
};

apiInstance.navigateShip(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **navigateShipRequest** | **NavigateShipRequest**|  |
 **shipSymbol** | [**string**] | The ship symbol | defaults to undefined


### Return type

**NavigateShip200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The successful transit information including the route details and changes to ship fuel, supplies, and crew wages paid. The route includes the expected time of arrival. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **orbitShip**
> OrbitShip200Response orbitShip()

Attempt to move your ship into orbit at it\'s current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.  The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiOrbitShipRequest = {
  // string | The symbol of the ship
  shipSymbol: "shipSymbol_example",
};

apiInstance.orbitShip(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipSymbol** | [**string**] | The symbol of the ship | defaults to undefined


### Return type

**OrbitShip200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The ship has successfully moved into orbit at it\&#39;s current location. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchShipNav**
> GetShipNav200Response patchShipNav()

Update the nav data of a ship, such as the flight mode.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiPatchShipNavRequest = {
  // string | The ship symbol
  shipSymbol: "shipSymbol_example",
  // PatchShipNavRequest (optional)
  patchShipNavRequest: {
    flightMode: "CRUISE",
  },
};

apiInstance.patchShipNav(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchShipNavRequest** | **PatchShipNavRequest**|  |
 **shipSymbol** | [**string**] | The ship symbol | defaults to undefined


### Return type

**GetShipNav200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated nav status of the ship. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **purchaseCargo**
> PurchaseCargo201Response purchaseCargo()

Purchase cargo.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiPurchaseCargoRequest = {
  // string
  shipSymbol: "shipSymbol_example",
  // PurchaseCargoRequest (optional)
  purchaseCargoRequest: {
    symbol: "symbol_example",
    units: 1,
  },
};

apiInstance.purchaseCargo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchaseCargoRequest** | **PurchaseCargoRequest**|  |
 **shipSymbol** | [**string**] |  | defaults to undefined


### Return type

**PurchaseCargo201Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **purchaseShip**
> PurchaseShip201Response purchaseShip()

Purchase a ship

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiPurchaseShipRequest = {
  // PurchaseShipRequest (optional)
  purchaseShipRequest: {
    shipType: "SHIP_PROBE",
    waypointSymbol: "waypointSymbol_example",
  },
};

apiInstance.purchaseShip(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **purchaseShipRequest** | **PurchaseShipRequest**|  |


### Return type

**PurchaseShip201Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **refuelShip**
> RefuelShip200Response refuelShip()

Refuel your ship from the local market.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiRefuelShipRequest = {
  // string
  shipSymbol: "shipSymbol_example",
};

apiInstance.refuelShip(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipSymbol** | [**string**] |  | defaults to undefined


### Return type

**RefuelShip200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sellCargo**
> SellCargo201Response sellCargo()

Sell cargo.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiSellCargoRequest = {
  // string
  shipSymbol: "shipSymbol_example",
  // SellCargoRequest (optional)
  sellCargoRequest: {
    symbol: "symbol_example",
    units: 1,
  },
};

apiInstance.sellCargo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sellCargoRequest** | **SellCargoRequest**|  |
 **shipSymbol** | [**string**] |  | defaults to undefined


### Return type

**SellCargo201Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **shipRefine**
> ShipRefine200Response shipRefine()

Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiShipRefineRequest = {
  // string | The symbol of the ship
  shipSymbol: "shipSymbol_example",
  // ShipRefineRequest (optional)
  shipRefineRequest: {
    produce: "IRON",
  },
};

apiInstance.shipRefine(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipRefineRequest** | **ShipRefineRequest**|  |
 **shipSymbol** | [**string**] | The symbol of the ship | defaults to undefined


### Return type

**ShipRefine200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The ship has successfully started refining. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **transferCargo**
> TransferCargo200Response transferCargo()

Transfer cargo between ships.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiTransferCargoRequest = {
  // string
  shipSymbol: "shipSymbol_example",
  // TransferCargoRequest (optional)
  transferCargoRequest: {
    tradeSymbol: "tradeSymbol_example",
    units: 1,
    shipSymbol: "shipSymbol_example",
  },
};

apiInstance.transferCargo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferCargoRequest** | **TransferCargoRequest**|  |
 **shipSymbol** | [**string**] |  | defaults to undefined


### Return type

**TransferCargo200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **warpShip**
> NavigateShip200Response warpShip()

Warp your ship to a target destination in another system. Warping will consume the necessary fuel and supplies from the ship\'s manifest, and will pay out crew wages from the agent\'s account.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it\'s destination.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FleetApi(configuration);

let body:.FleetApiWarpShipRequest = {
  // string
  shipSymbol: "shipSymbol_example",
  // NavigateShipRequest |  (optional)
  navigateShipRequest: {
    waypointSymbol: "waypointSymbol_example",
  },
};

apiInstance.warpShip(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **navigateShipRequest** | **NavigateShipRequest**|  |
 **shipSymbol** | [**string**] |  | defaults to undefined


### Return type

**NavigateShip200Response**

### Authorization

[AgentToken](README.md#AgentToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The successful transit information including the route details and changes to ship fuel, supplies, and crew wages paid. The route includes the expected time of arrival. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


