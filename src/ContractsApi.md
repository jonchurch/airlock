# .ContractsApi

All URIs are relative to *https://api.spacetraders.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptContract**](ContractsApi.md#acceptContract) | **POST** /my/contracts/{contractId}/accept | Accept Contract
[**deliverContract**](ContractsApi.md#deliverContract) | **POST** /my/contracts/{contractId}/deliver | Deliver Contract
[**fulfillContract**](ContractsApi.md#fulfillContract) | **POST** /my/contracts/{contractId}/fulfill | Fulfill Contract
[**getContract**](ContractsApi.md#getContract) | **GET** /my/contracts/{contractId} | Get Contract
[**getContracts**](ContractsApi.md#getContracts) | **GET** /my/contracts | List Contracts


# **acceptContract**
> AcceptContract200Response acceptContract()

Accept a contract.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContractsApi(configuration);

let body:.ContractsApiAcceptContractRequest = {
  // string
  contractId: "contractId_example",
};

apiInstance.acceptContract(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractId** | [**string**] |  | defaults to undefined


### Return type

**AcceptContract200Response**

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

# **deliverContract**
> DeliverContract200Response deliverContract()

Deliver cargo on a given contract.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContractsApi(configuration);

let body:.ContractsApiDeliverContractRequest = {
  // string | The ID of the contract
  contractId: "contractId_example",
  // DeliverContractRequest (optional)
  deliverContractRequest: {
    shipSymbol: "shipSymbol_example",
    tradeSymbol: "tradeSymbol_example",
    units: 1,
  },
};

apiInstance.deliverContract(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deliverContractRequest** | **DeliverContractRequest**|  |
 **contractId** | [**string**] | The ID of the contract | defaults to undefined


### Return type

**DeliverContract200Response**

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

# **fulfillContract**
> FulfillContract200Response fulfillContract()

Fulfill a contract

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContractsApi(configuration);

let body:.ContractsApiFulfillContractRequest = {
  // string | The ID of the contract
  contractId: "contractId_example",
};

apiInstance.fulfillContract(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractId** | [**string**] | The ID of the contract | defaults to undefined


### Return type

**FulfillContract200Response**

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

# **getContract**
> GetContract200Response getContract()

Get the details of a contract by ID.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContractsApi(configuration);

let body:.ContractsApiGetContractRequest = {
  // string | The contract ID
  contractId: "contractId_example",
};

apiInstance.getContract(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractId** | [**string**] | The contract ID | defaults to undefined


### Return type

**GetContract200Response**

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

# **getContracts**
> GetContracts200Response getContracts()

List all of your contracts.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContractsApi(configuration);

let body:.ContractsApiGetContractsRequest = {
  // number | What entry offset to request (optional)
  page: 1,
  // number | How many entries to return per page (optional)
  limit: 1,
};

apiInstance.getContracts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | What entry offset to request | (optional) defaults to undefined
 **limit** | [**number**] | How many entries to return per page | (optional) defaults to undefined


### Return type

**GetContracts200Response**

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


