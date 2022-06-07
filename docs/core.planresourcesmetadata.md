<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/core](./core.md) &gt; [PlanResourcesMetadata](./core.planresourcesmetadata.md)

## PlanResourcesMetadata interface

Additional information about the query plan.

<b>Signature:</b>

```typescript
export interface PlanResourcesMetadata 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [conditionString](./core.planresourcesmetadata.conditionstring.md) | string | The query condition abstract syntax tree rendered as a human-readable string, to help with debugging. |
|  [matchedScope](./core.planresourcesmetadata.matchedscope.md) | string | The [policy scope](https://docs.cerbos.dev/cerbos/latest/policies/scoped_policies.html) that was used to plan the query. |
