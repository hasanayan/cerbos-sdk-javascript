<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@cerbos/react](./react.md) &gt; [useIsAllowed](./react.useisallowed.md)

## useIsAllowed() function

Check if the principal is allowed to perform an action on a resource.

**Signature:**

```typescript
export declare function useIsAllowed(request: Omit<IsAllowedRequest, "principal">, options?: RequestOptions): AsyncResult<boolean>;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

request


</td><td>

Omit&lt;[IsAllowedRequest](./core.isallowedrequest.md)<!-- -->, "principal"&gt;


</td><td>


</td></tr>
<tr><td>

options


</td><td>

[RequestOptions](./core.requestoptions.md)


</td><td>

_(Optional)_


</td></tr>
</tbody></table>
**Returns:**

[AsyncResult](./react.asyncresult.md)<!-- -->&lt;boolean&gt;

## Example


```typescript
import { useIsAllowed } from "@cerbos/react";

function SomeComponent() {
  const check = useIsAllowed({
    resource: {
      kind: "document",
      id: "1",
      attr: { owner: "user@example.com" },
    },
    action: "view",
  });

  if (check.isLoading) {
    // show spinner
    return "Loading...";
  }

  if (check.error) {
    // handle error
    return "Error...";
  }

  return <div>{check.data && <button>a button document 1</button>}</div>;
}
```
