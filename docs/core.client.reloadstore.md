<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [Client](./core.client.md) &gt; [reloadStore](./core.client.reloadstore.md)

## Client.reloadStore() method

Reload the store.

<b>Signature:</b>

```typescript
reloadStore(request: ReloadStoreRequest): Promise<void>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [ReloadStoreRequest](./core.reloadstorerequest.md) |  |

<b>Returns:</b>

Promise&lt;void&gt;

## Remarks

Requires

- the client to be configured with [Options.adminCredentials](./core.options.admincredentials.md)<!-- -->,

- the Cerbos policy decision point server to be configured with the [admin API](https://docs.cerbos.dev/cerbos/latest/api/admin_api.html)<!-- -->, and

- a reloadable [storage backend](https://docs.cerbos.dev/cerbos/latest/configuration/storage.html)<!-- -->.

## Example


```typescript
await cerbos.reloadStore({ wait: true });
```
