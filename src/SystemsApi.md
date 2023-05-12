# .SystemsApi

All URIs are relative to *https://api.spacetraders.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getJumpGate**](SystemsApi.md#getJumpGate) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol}/jump-gate | Get Jump Gate
[**getMarket**](SystemsApi.md#getMarket) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol}/market | Get Market
[**getShipyard**](SystemsApi.md#getShipyard) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol}/shipyard | Get Shipyard
[**getSystem**](SystemsApi.md#getSystem) | **GET** /systems/{systemSymbol} | Get System
[**getSystemWaypoints**](SystemsApi.md#getSystemWaypoints) | **GET** /systems/{systemSymbol}/waypoints | List Waypoints
[**getSystems**](SystemsApi.md#getSystems) | **GET** /systems | List Systems
[**getWaypoint**](SystemsApi.md#getWaypoint) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol} | Get Waypoint


# **getJumpGate**
> GetJumpGate200Response getJumpGate()

Get jump gate details for a waypoint.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemsApi(configuration);

let body:.SystemsApiGetJumpGateRequest = {
  // string | The system symbol
  systemSymbol: "systemSymbol_example",
  // string | The waypoint symbol
  waypointSymbol: "waypointSymbol_example",
};

apiInstance.getJumpGate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemSymbol** | [**string**] | The system symbol | defaults to undefined
 **waypointSymbol** | [**string**] | The waypoint symbol | defaults to undefined


### Return type

**GetJumpGate200Response**

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

# **getMarket**
> GetMarket200Response getMarket()

Retrieve imports, exports and exchange data from a marketplace. Imports can be sold, exports can be purchased, and exchange goods can be purchased or sold. Send a ship to the waypoint to access trade good prices and recent transactions.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemsApi(configuration);

let body:.SystemsApiGetMarketRequest = {
  // string | The system symbol
  systemSymbol: "systemSymbol_example",
  // string | The waypoint symbol
  waypointSymbol: "waypointSymbol_example",
};

apiInstance.getMarket(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemSymbol** | [**string**] | The system symbol | defaults to undefined
 **waypointSymbol** | [**string**] | The waypoint symbol | defaults to undefined


### Return type

**GetMarket200Response**

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

# **getShipyard**
> GetShipyard200Response getShipyard()

Get the shipyard for a waypoint. Send a ship to the waypoint to access ships that are currently available for purchase and recent transactions.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemsApi(configuration);

let body:.SystemsApiGetShipyardRequest = {
  // string | The system symbol
  systemSymbol: "systemSymbol_example",
  // string | The waypoint symbol
  waypointSymbol: "waypointSymbol_example",
};

apiInstance.getShipyard(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemSymbol** | [**string**] | The system symbol | defaults to undefined
 **waypointSymbol** | [**string**] | The waypoint symbol | defaults to undefined


### Return type

**GetShipyard200Response**

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

# **getSystem**
> GetSystem200Response getSystem()

Get the details of a system.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemsApi(configuration);

let body:.SystemsApiGetSystemRequest = {
  // string | The system symbol
  systemSymbol: "X1-OE",
};

apiInstance.getSystem(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemSymbol** | [**string**] | The system symbol | defaults to 'X1-OE'


### Return type

**GetSystem200Response**

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

# **getSystemWaypoints**
> GetSystemWaypoints200Response getSystemWaypoints()

Fetch all of the waypoints for a given system. System must be charted or a ship must be present to return waypoint details.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemsApi(configuration);

let body:.SystemsApiGetSystemWaypointsRequest = {
  // string | The system symbol
  systemSymbol: "systemSymbol_example",
  // number | What entry offset to request (optional)
  page: 1,
  // number | How many entries to return per page (optional)
  limit: 1,
};

apiInstance.getSystemWaypoints(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemSymbol** | [**string**] | The system symbol | defaults to undefined
 **page** | [**number**] | What entry offset to request | (optional) defaults to undefined
 **limit** | [**number**] | How many entries to return per page | (optional) defaults to undefined


### Return type

**GetSystemWaypoints200Response**

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

# **getSystems**
> GetSystems200Response getSystems()

Return a list of all systems.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemsApi(configuration);

let body:.SystemsApiGetSystemsRequest = {
  // number | What entry offset to request (optional)
  page: 1,
  // number | How many entries to return per page (optional)
  limit: 1,
};

apiInstance.getSystems(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | What entry offset to request | (optional) defaults to undefined
 **limit** | [**number**] | How many entries to return per page | (optional) defaults to undefined


### Return type

**GetSystems200Response**

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

# **getWaypoint**
> GetWaypoint200Response getWaypoint()

View the details of a waypoint.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SystemsApi(configuration);

let body:.SystemsApiGetWaypointRequest = {
  // string | The system symbol
  systemSymbol: "systemSymbol_example",
  // string | The waypoint symbol
  waypointSymbol: "waypointSymbol_example",
};

apiInstance.getWaypoint(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemSymbol** | [**string**] | The system symbol | defaults to undefined
 **waypointSymbol** | [**string**] | The waypoint symbol | defaults to undefined


### Return type

**GetWaypoint200Response**

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


