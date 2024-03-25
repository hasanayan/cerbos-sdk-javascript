/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { AccessLogEntry, DecisionLogEntry } from "../../audit/v1/audit";
import { Effect, effectFromJSON } from "../../effect/v1/effect";
import { OutputEntry, PlanResourcesFilter } from "../../engine/v1/engine";
import { ValidationError } from "../../schema/v1/schema";

export const protobufPackage = "cerbos.response.v1";

export interface PlanResourcesResponse {
  requestId: string;
  action: string;
  resourceKind: string;
  policyVersion: string;
  filter: PlanResourcesFilter | undefined;
  meta: PlanResourcesResponse_Meta | undefined;
  validationErrors: ValidationError[];
  cerbosCallId: string;
}

export interface PlanResourcesResponse_Meta {
  filterDebug: string;
  matchedScope: string;
}

export interface CheckResourceSetResponse {
  requestId: string;
  resourceInstances: {
    [key: string]: CheckResourceSetResponse_ActionEffectMap;
  };
  meta: CheckResourceSetResponse_Meta | undefined;
}

export interface CheckResourceSetResponse_ActionEffectMap {
  actions: { [key: string]: Effect };
  validationErrors: ValidationError[];
}

export interface CheckResourceSetResponse_ActionEffectMap_ActionsEntry {
  key: string;
  value: Effect;
}

export interface CheckResourceSetResponse_Meta {
  resourceInstances: {
    [key: string]: CheckResourceSetResponse_Meta_ActionMeta;
  };
}

export interface CheckResourceSetResponse_Meta_EffectMeta {
  matchedPolicy: string;
  matchedScope: string;
}

export interface CheckResourceSetResponse_Meta_ActionMeta {
  actions: { [key: string]: CheckResourceSetResponse_Meta_EffectMeta };
  effectiveDerivedRoles: string[];
}

export interface CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry {
  key: string;
  value: CheckResourceSetResponse_Meta_EffectMeta | undefined;
}

export interface CheckResourceSetResponse_Meta_ResourceInstancesEntry {
  key: string;
  value: CheckResourceSetResponse_Meta_ActionMeta | undefined;
}

export interface CheckResourceSetResponse_ResourceInstancesEntry {
  key: string;
  value: CheckResourceSetResponse_ActionEffectMap | undefined;
}

export interface CheckResourceBatchResponse {
  requestId: string;
  results: CheckResourceBatchResponse_ActionEffectMap[];
}

export interface CheckResourceBatchResponse_ActionEffectMap {
  resourceId: string;
  actions: { [key: string]: Effect };
  validationErrors: ValidationError[];
}

export interface CheckResourceBatchResponse_ActionEffectMap_ActionsEntry {
  key: string;
  value: Effect;
}

export interface CheckResourcesResponse {
  requestId: string;
  results: CheckResourcesResponse_ResultEntry[];
  cerbosCallId: string;
}

export interface CheckResourcesResponse_ResultEntry {
  resource: CheckResourcesResponse_ResultEntry_Resource | undefined;
  actions: { [key: string]: Effect };
  validationErrors: ValidationError[];
  meta: CheckResourcesResponse_ResultEntry_Meta | undefined;
  outputs: OutputEntry[];
}

export interface CheckResourcesResponse_ResultEntry_Resource {
  id: string;
  kind: string;
  policyVersion: string;
  scope: string;
}

export interface CheckResourcesResponse_ResultEntry_Meta {
  actions: {
    [key: string]: CheckResourcesResponse_ResultEntry_Meta_EffectMeta;
  };
  effectiveDerivedRoles: string[];
}

export interface CheckResourcesResponse_ResultEntry_Meta_EffectMeta {
  matchedPolicy: string;
  matchedScope: string;
}

export interface CheckResourcesResponse_ResultEntry_Meta_ActionsEntry {
  key: string;
  value: CheckResourcesResponse_ResultEntry_Meta_EffectMeta | undefined;
}

export interface CheckResourcesResponse_ResultEntry_ActionsEntry {
  key: string;
  value: Effect;
}

export interface ListAuditLogEntriesResponse {
  entry?:
    | { $case: "accessLogEntry"; accessLogEntry: AccessLogEntry }
    | {
        $case: "decisionLogEntry";
        decisionLogEntry: DecisionLogEntry;
      }
    | undefined;
}

export interface ServerInfoResponse {
  version: string;
  commit: string;
  buildDate: string;
}

function createBasePlanResourcesResponse(): PlanResourcesResponse {
  return {
    requestId: "",
    action: "",
    resourceKind: "",
    policyVersion: "",
    filter: undefined,
    meta: undefined,
    validationErrors: [],
    cerbosCallId: "",
  };
}

export const PlanResourcesResponse = {
  encode(
    message: PlanResourcesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.action !== "") {
      writer.uint32(18).string(message.action);
    }
    if (message.resourceKind !== "") {
      writer.uint32(26).string(message.resourceKind);
    }
    if (message.policyVersion !== "") {
      writer.uint32(34).string(message.policyVersion);
    }
    if (message.filter !== undefined) {
      PlanResourcesFilter.encode(
        message.filter,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.meta !== undefined) {
      PlanResourcesResponse_Meta.encode(
        message.meta,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    for (const v of message.validationErrors) {
      ValidationError.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.cerbosCallId !== "") {
      writer.uint32(66).string(message.cerbosCallId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlanResourcesResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.action = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.resourceKind = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.policyVersion = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.filter = PlanResourcesFilter.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.meta = PlanResourcesResponse_Meta.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.validationErrors.push(
            ValidationError.decode(reader, reader.uint32()),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.cerbosCallId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlanResourcesResponse {
    return {
      requestId: isSet(object.requestId)
        ? globalThis.String(object.requestId)
        : "",
      action: isSet(object.action) ? globalThis.String(object.action) : "",
      resourceKind: isSet(object.resourceKind)
        ? globalThis.String(object.resourceKind)
        : "",
      policyVersion: isSet(object.policyVersion)
        ? globalThis.String(object.policyVersion)
        : "",
      filter: isSet(object.filter)
        ? PlanResourcesFilter.fromJSON(object.filter)
        : undefined,
      meta: isSet(object.meta)
        ? PlanResourcesResponse_Meta.fromJSON(object.meta)
        : undefined,
      validationErrors: globalThis.Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => ValidationError.fromJSON(e))
        : [],
      cerbosCallId: isSet(object.cerbosCallId)
        ? globalThis.String(object.cerbosCallId)
        : "",
    };
  },
};

function createBasePlanResourcesResponse_Meta(): PlanResourcesResponse_Meta {
  return { filterDebug: "", matchedScope: "" };
}

export const PlanResourcesResponse_Meta = {
  encode(
    message: PlanResourcesResponse_Meta,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.filterDebug !== "") {
      writer.uint32(10).string(message.filterDebug);
    }
    if (message.matchedScope !== "") {
      writer.uint32(18).string(message.matchedScope);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlanResourcesResponse_Meta {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanResourcesResponse_Meta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filterDebug = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.matchedScope = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PlanResourcesResponse_Meta {
    return {
      filterDebug: isSet(object.filterDebug)
        ? globalThis.String(object.filterDebug)
        : "",
      matchedScope: isSet(object.matchedScope)
        ? globalThis.String(object.matchedScope)
        : "",
    };
  },
};

function createBaseCheckResourceSetResponse(): CheckResourceSetResponse {
  return { requestId: "", resourceInstances: {}, meta: undefined };
}

export const CheckResourceSetResponse = {
  encode(
    message: CheckResourceSetResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    Object.entries(message.resourceInstances).forEach(([key, value]) => {
      CheckResourceSetResponse_ResourceInstancesEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork(),
      ).ldelim();
    });
    if (message.meta !== undefined) {
      CheckResourceSetResponse_Meta.encode(
        message.meta,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceSetResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = CheckResourceSetResponse_ResourceInstancesEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry2.value !== undefined) {
            message.resourceInstances[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.meta = CheckResourceSetResponse_Meta.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourceSetResponse {
    return {
      requestId: isSet(object.requestId)
        ? globalThis.String(object.requestId)
        : "",
      resourceInstances: isObject(object.resourceInstances)
        ? Object.entries(object.resourceInstances).reduce<{
            [key: string]: CheckResourceSetResponse_ActionEffectMap;
          }>((acc, [key, value]) => {
            acc[key] = CheckResourceSetResponse_ActionEffectMap.fromJSON(value);
            return acc;
          }, {})
        : {},
      meta: isSet(object.meta)
        ? CheckResourceSetResponse_Meta.fromJSON(object.meta)
        : undefined,
    };
  },
};

function createBaseCheckResourceSetResponse_ActionEffectMap(): CheckResourceSetResponse_ActionEffectMap {
  return { actions: {}, validationErrors: [] };
}

export const CheckResourceSetResponse_ActionEffectMap = {
  encode(
    message: CheckResourceSetResponse_ActionEffectMap,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    Object.entries(message.actions).forEach(([key, value]) => {
      CheckResourceSetResponse_ActionEffectMap_ActionsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    for (const v of message.validationErrors) {
      ValidationError.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceSetResponse_ActionEffectMap {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceSetResponse_ActionEffectMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 =
            CheckResourceSetResponse_ActionEffectMap_ActionsEntry.decode(
              reader,
              reader.uint32(),
            );
          if (entry1.value !== undefined) {
            message.actions[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.validationErrors.push(
            ValidationError.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourceSetResponse_ActionEffectMap {
    return {
      actions: isObject(object.actions)
        ? Object.entries(object.actions).reduce<{ [key: string]: Effect }>(
            (acc, [key, value]) => {
              acc[key] = effectFromJSON(value);
              return acc;
            },
            {},
          )
        : {},
      validationErrors: globalThis.Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => ValidationError.fromJSON(e))
        : [],
    };
  },
};

function createBaseCheckResourceSetResponse_ActionEffectMap_ActionsEntry(): CheckResourceSetResponse_ActionEffectMap_ActionsEntry {
  return { key: "", value: 0 };
}

export const CheckResourceSetResponse_ActionEffectMap_ActionsEntry = {
  encode(
    message: CheckResourceSetResponse_ActionEffectMap_ActionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceSetResponse_ActionEffectMap_ActionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCheckResourceSetResponse_ActionEffectMap_ActionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourceSetResponse_ActionEffectMap_ActionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? effectFromJSON(object.value) : 0,
    };
  },
};

function createBaseCheckResourceSetResponse_Meta(): CheckResourceSetResponse_Meta {
  return { resourceInstances: {} };
}

export const CheckResourceSetResponse_Meta = {
  encode(
    message: CheckResourceSetResponse_Meta,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    Object.entries(message.resourceInstances).forEach(([key, value]) => {
      CheckResourceSetResponse_Meta_ResourceInstancesEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceSetResponse_Meta {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceSetResponse_Meta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 =
            CheckResourceSetResponse_Meta_ResourceInstancesEntry.decode(
              reader,
              reader.uint32(),
            );
          if (entry1.value !== undefined) {
            message.resourceInstances[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourceSetResponse_Meta {
    return {
      resourceInstances: isObject(object.resourceInstances)
        ? Object.entries(object.resourceInstances).reduce<{
            [key: string]: CheckResourceSetResponse_Meta_ActionMeta;
          }>((acc, [key, value]) => {
            acc[key] = CheckResourceSetResponse_Meta_ActionMeta.fromJSON(value);
            return acc;
          }, {})
        : {},
    };
  },
};

function createBaseCheckResourceSetResponse_Meta_EffectMeta(): CheckResourceSetResponse_Meta_EffectMeta {
  return { matchedPolicy: "", matchedScope: "" };
}

export const CheckResourceSetResponse_Meta_EffectMeta = {
  encode(
    message: CheckResourceSetResponse_Meta_EffectMeta,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.matchedPolicy !== "") {
      writer.uint32(10).string(message.matchedPolicy);
    }
    if (message.matchedScope !== "") {
      writer.uint32(18).string(message.matchedScope);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceSetResponse_Meta_EffectMeta {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceSetResponse_Meta_EffectMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matchedPolicy = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.matchedScope = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourceSetResponse_Meta_EffectMeta {
    return {
      matchedPolicy: isSet(object.matchedPolicy)
        ? globalThis.String(object.matchedPolicy)
        : "",
      matchedScope: isSet(object.matchedScope)
        ? globalThis.String(object.matchedScope)
        : "",
    };
  },
};

function createBaseCheckResourceSetResponse_Meta_ActionMeta(): CheckResourceSetResponse_Meta_ActionMeta {
  return { actions: {}, effectiveDerivedRoles: [] };
}

export const CheckResourceSetResponse_Meta_ActionMeta = {
  encode(
    message: CheckResourceSetResponse_Meta_ActionMeta,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    Object.entries(message.actions).forEach(([key, value]) => {
      CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    for (const v of message.effectiveDerivedRoles) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceSetResponse_Meta_ActionMeta {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceSetResponse_Meta_ActionMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 =
            CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry.decode(
              reader,
              reader.uint32(),
            );
          if (entry1.value !== undefined) {
            message.actions[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.effectiveDerivedRoles.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourceSetResponse_Meta_ActionMeta {
    return {
      actions: isObject(object.actions)
        ? Object.entries(object.actions).reduce<{
            [key: string]: CheckResourceSetResponse_Meta_EffectMeta;
          }>((acc, [key, value]) => {
            acc[key] = CheckResourceSetResponse_Meta_EffectMeta.fromJSON(value);
            return acc;
          }, {})
        : {},
      effectiveDerivedRoles: globalThis.Array.isArray(
        object?.effectiveDerivedRoles,
      )
        ? object.effectiveDerivedRoles.map((e: any) => globalThis.String(e))
        : [],
    };
  },
};

function createBaseCheckResourceSetResponse_Meta_ActionMeta_ActionsEntry(): CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry {
  return { key: "", value: undefined };
}

export const CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry = {
  encode(
    message: CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CheckResourceSetResponse_Meta_EffectMeta.encode(
        message.value,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCheckResourceSetResponse_Meta_ActionMeta_ActionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = CheckResourceSetResponse_Meta_EffectMeta.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourceSetResponse_Meta_ActionMeta_ActionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value)
        ? CheckResourceSetResponse_Meta_EffectMeta.fromJSON(object.value)
        : undefined,
    };
  },
};

function createBaseCheckResourceSetResponse_Meta_ResourceInstancesEntry(): CheckResourceSetResponse_Meta_ResourceInstancesEntry {
  return { key: "", value: undefined };
}

export const CheckResourceSetResponse_Meta_ResourceInstancesEntry = {
  encode(
    message: CheckResourceSetResponse_Meta_ResourceInstancesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CheckResourceSetResponse_Meta_ActionMeta.encode(
        message.value,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceSetResponse_Meta_ResourceInstancesEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCheckResourceSetResponse_Meta_ResourceInstancesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = CheckResourceSetResponse_Meta_ActionMeta.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourceSetResponse_Meta_ResourceInstancesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value)
        ? CheckResourceSetResponse_Meta_ActionMeta.fromJSON(object.value)
        : undefined,
    };
  },
};

function createBaseCheckResourceSetResponse_ResourceInstancesEntry(): CheckResourceSetResponse_ResourceInstancesEntry {
  return { key: "", value: undefined };
}

export const CheckResourceSetResponse_ResourceInstancesEntry = {
  encode(
    message: CheckResourceSetResponse_ResourceInstancesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CheckResourceSetResponse_ActionEffectMap.encode(
        message.value,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceSetResponse_ResourceInstancesEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceSetResponse_ResourceInstancesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = CheckResourceSetResponse_ActionEffectMap.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourceSetResponse_ResourceInstancesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value)
        ? CheckResourceSetResponse_ActionEffectMap.fromJSON(object.value)
        : undefined,
    };
  },
};

function createBaseCheckResourceBatchResponse(): CheckResourceBatchResponse {
  return { requestId: "", results: [] };
}

export const CheckResourceBatchResponse = {
  encode(
    message: CheckResourceBatchResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    for (const v of message.results) {
      CheckResourceBatchResponse_ActionEffectMap.encode(
        v!,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceBatchResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(
            CheckResourceBatchResponse_ActionEffectMap.decode(
              reader,
              reader.uint32(),
            ),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourceBatchResponse {
    return {
      requestId: isSet(object.requestId)
        ? globalThis.String(object.requestId)
        : "",
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) =>
            CheckResourceBatchResponse_ActionEffectMap.fromJSON(e),
          )
        : [],
    };
  },
};

function createBaseCheckResourceBatchResponse_ActionEffectMap(): CheckResourceBatchResponse_ActionEffectMap {
  return { resourceId: "", actions: {}, validationErrors: [] };
}

export const CheckResourceBatchResponse_ActionEffectMap = {
  encode(
    message: CheckResourceBatchResponse_ActionEffectMap,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    Object.entries(message.actions).forEach(([key, value]) => {
      CheckResourceBatchResponse_ActionEffectMap_ActionsEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork(),
      ).ldelim();
    });
    for (const v of message.validationErrors) {
      ValidationError.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceBatchResponse_ActionEffectMap {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourceBatchResponse_ActionEffectMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 =
            CheckResourceBatchResponse_ActionEffectMap_ActionsEntry.decode(
              reader,
              reader.uint32(),
            );
          if (entry2.value !== undefined) {
            message.actions[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.validationErrors.push(
            ValidationError.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourceBatchResponse_ActionEffectMap {
    return {
      resourceId: isSet(object.resourceId)
        ? globalThis.String(object.resourceId)
        : "",
      actions: isObject(object.actions)
        ? Object.entries(object.actions).reduce<{ [key: string]: Effect }>(
            (acc, [key, value]) => {
              acc[key] = effectFromJSON(value);
              return acc;
            },
            {},
          )
        : {},
      validationErrors: globalThis.Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => ValidationError.fromJSON(e))
        : [],
    };
  },
};

function createBaseCheckResourceBatchResponse_ActionEffectMap_ActionsEntry(): CheckResourceBatchResponse_ActionEffectMap_ActionsEntry {
  return { key: "", value: 0 };
}

export const CheckResourceBatchResponse_ActionEffectMap_ActionsEntry = {
  encode(
    message: CheckResourceBatchResponse_ActionEffectMap_ActionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourceBatchResponse_ActionEffectMap_ActionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCheckResourceBatchResponse_ActionEffectMap_ActionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(
    object: any,
  ): CheckResourceBatchResponse_ActionEffectMap_ActionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? effectFromJSON(object.value) : 0,
    };
  },
};

function createBaseCheckResourcesResponse(): CheckResourcesResponse {
  return { requestId: "", results: [], cerbosCallId: "" };
}

export const CheckResourcesResponse = {
  encode(
    message: CheckResourcesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    for (const v of message.results) {
      CheckResourcesResponse_ResultEntry.encode(
        v!,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.cerbosCallId !== "") {
      writer.uint32(26).string(message.cerbosCallId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourcesResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourcesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(
            CheckResourcesResponse_ResultEntry.decode(reader, reader.uint32()),
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cerbosCallId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourcesResponse {
    return {
      requestId: isSet(object.requestId)
        ? globalThis.String(object.requestId)
        : "",
      results: globalThis.Array.isArray(object?.results)
        ? object.results.map((e: any) =>
            CheckResourcesResponse_ResultEntry.fromJSON(e),
          )
        : [],
      cerbosCallId: isSet(object.cerbosCallId)
        ? globalThis.String(object.cerbosCallId)
        : "",
    };
  },
};

function createBaseCheckResourcesResponse_ResultEntry(): CheckResourcesResponse_ResultEntry {
  return {
    resource: undefined,
    actions: {},
    validationErrors: [],
    meta: undefined,
    outputs: [],
  };
}

export const CheckResourcesResponse_ResultEntry = {
  encode(
    message: CheckResourcesResponse_ResultEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.resource !== undefined) {
      CheckResourcesResponse_ResultEntry_Resource.encode(
        message.resource,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    Object.entries(message.actions).forEach(([key, value]) => {
      CheckResourcesResponse_ResultEntry_ActionsEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork(),
      ).ldelim();
    });
    for (const v of message.validationErrors) {
      ValidationError.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.meta !== undefined) {
      CheckResourcesResponse_ResultEntry_Meta.encode(
        message.meta,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    for (const v of message.outputs) {
      OutputEntry.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourcesResponse_ResultEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourcesResponse_ResultEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resource = CheckResourcesResponse_ResultEntry_Resource.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = CheckResourcesResponse_ResultEntry_ActionsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry2.value !== undefined) {
            message.actions[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.validationErrors.push(
            ValidationError.decode(reader, reader.uint32()),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.meta = CheckResourcesResponse_ResultEntry_Meta.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.outputs.push(OutputEntry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourcesResponse_ResultEntry {
    return {
      resource: isSet(object.resource)
        ? CheckResourcesResponse_ResultEntry_Resource.fromJSON(object.resource)
        : undefined,
      actions: isObject(object.actions)
        ? Object.entries(object.actions).reduce<{ [key: string]: Effect }>(
            (acc, [key, value]) => {
              acc[key] = effectFromJSON(value);
              return acc;
            },
            {},
          )
        : {},
      validationErrors: globalThis.Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => ValidationError.fromJSON(e))
        : [],
      meta: isSet(object.meta)
        ? CheckResourcesResponse_ResultEntry_Meta.fromJSON(object.meta)
        : undefined,
      outputs: globalThis.Array.isArray(object?.outputs)
        ? object.outputs.map((e: any) => OutputEntry.fromJSON(e))
        : [],
    };
  },
};

function createBaseCheckResourcesResponse_ResultEntry_Resource(): CheckResourcesResponse_ResultEntry_Resource {
  return { id: "", kind: "", policyVersion: "", scope: "" };
}

export const CheckResourcesResponse_ResultEntry_Resource = {
  encode(
    message: CheckResourcesResponse_ResultEntry_Resource,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.kind !== "") {
      writer.uint32(18).string(message.kind);
    }
    if (message.policyVersion !== "") {
      writer.uint32(26).string(message.policyVersion);
    }
    if (message.scope !== "") {
      writer.uint32(34).string(message.scope);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourcesResponse_ResultEntry_Resource {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourcesResponse_ResultEntry_Resource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.kind = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.policyVersion = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.scope = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourcesResponse_ResultEntry_Resource {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      kind: isSet(object.kind) ? globalThis.String(object.kind) : "",
      policyVersion: isSet(object.policyVersion)
        ? globalThis.String(object.policyVersion)
        : "",
      scope: isSet(object.scope) ? globalThis.String(object.scope) : "",
    };
  },
};

function createBaseCheckResourcesResponse_ResultEntry_Meta(): CheckResourcesResponse_ResultEntry_Meta {
  return { actions: {}, effectiveDerivedRoles: [] };
}

export const CheckResourcesResponse_ResultEntry_Meta = {
  encode(
    message: CheckResourcesResponse_ResultEntry_Meta,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    Object.entries(message.actions).forEach(([key, value]) => {
      CheckResourcesResponse_ResultEntry_Meta_ActionsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    for (const v of message.effectiveDerivedRoles) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourcesResponse_ResultEntry_Meta {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourcesResponse_ResultEntry_Meta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 =
            CheckResourcesResponse_ResultEntry_Meta_ActionsEntry.decode(
              reader,
              reader.uint32(),
            );
          if (entry1.value !== undefined) {
            message.actions[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.effectiveDerivedRoles.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourcesResponse_ResultEntry_Meta {
    return {
      actions: isObject(object.actions)
        ? Object.entries(object.actions).reduce<{
            [key: string]: CheckResourcesResponse_ResultEntry_Meta_EffectMeta;
          }>((acc, [key, value]) => {
            acc[key] =
              CheckResourcesResponse_ResultEntry_Meta_EffectMeta.fromJSON(
                value,
              );
            return acc;
          }, {})
        : {},
      effectiveDerivedRoles: globalThis.Array.isArray(
        object?.effectiveDerivedRoles,
      )
        ? object.effectiveDerivedRoles.map((e: any) => globalThis.String(e))
        : [],
    };
  },
};

function createBaseCheckResourcesResponse_ResultEntry_Meta_EffectMeta(): CheckResourcesResponse_ResultEntry_Meta_EffectMeta {
  return { matchedPolicy: "", matchedScope: "" };
}

export const CheckResourcesResponse_ResultEntry_Meta_EffectMeta = {
  encode(
    message: CheckResourcesResponse_ResultEntry_Meta_EffectMeta,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.matchedPolicy !== "") {
      writer.uint32(10).string(message.matchedPolicy);
    }
    if (message.matchedScope !== "") {
      writer.uint32(18).string(message.matchedScope);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourcesResponse_ResultEntry_Meta_EffectMeta {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCheckResourcesResponse_ResultEntry_Meta_EffectMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matchedPolicy = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.matchedScope = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourcesResponse_ResultEntry_Meta_EffectMeta {
    return {
      matchedPolicy: isSet(object.matchedPolicy)
        ? globalThis.String(object.matchedPolicy)
        : "",
      matchedScope: isSet(object.matchedScope)
        ? globalThis.String(object.matchedScope)
        : "",
    };
  },
};

function createBaseCheckResourcesResponse_ResultEntry_Meta_ActionsEntry(): CheckResourcesResponse_ResultEntry_Meta_ActionsEntry {
  return { key: "", value: undefined };
}

export const CheckResourcesResponse_ResultEntry_Meta_ActionsEntry = {
  encode(
    message: CheckResourcesResponse_ResultEntry_Meta_ActionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      CheckResourcesResponse_ResultEntry_Meta_EffectMeta.encode(
        message.value,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourcesResponse_ResultEntry_Meta_ActionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCheckResourcesResponse_ResultEntry_Meta_ActionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value =
            CheckResourcesResponse_ResultEntry_Meta_EffectMeta.decode(
              reader,
              reader.uint32(),
            );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourcesResponse_ResultEntry_Meta_ActionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value)
        ? CheckResourcesResponse_ResultEntry_Meta_EffectMeta.fromJSON(
            object.value,
          )
        : undefined,
    };
  },
};

function createBaseCheckResourcesResponse_ResultEntry_ActionsEntry(): CheckResourcesResponse_ResultEntry_ActionsEntry {
  return { key: "", value: 0 };
}

export const CheckResourcesResponse_ResultEntry_ActionsEntry = {
  encode(
    message: CheckResourcesResponse_ResultEntry_ActionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CheckResourcesResponse_ResultEntry_ActionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResourcesResponse_ResultEntry_ActionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CheckResourcesResponse_ResultEntry_ActionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? effectFromJSON(object.value) : 0,
    };
  },
};

function createBaseListAuditLogEntriesResponse(): ListAuditLogEntriesResponse {
  return { entry: undefined };
}

export const ListAuditLogEntriesResponse = {
  encode(
    message: ListAuditLogEntriesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    switch (message.entry?.$case) {
      case "accessLogEntry":
        AccessLogEntry.encode(
          message.entry.accessLogEntry,
          writer.uint32(10).fork(),
        ).ldelim();
        break;
      case "decisionLogEntry":
        DecisionLogEntry.encode(
          message.entry.decisionLogEntry,
          writer.uint32(18).fork(),
        ).ldelim();
        break;
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ListAuditLogEntriesResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAuditLogEntriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entry = {
            $case: "accessLogEntry",
            accessLogEntry: AccessLogEntry.decode(reader, reader.uint32()),
          };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entry = {
            $case: "decisionLogEntry",
            decisionLogEntry: DecisionLogEntry.decode(reader, reader.uint32()),
          };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListAuditLogEntriesResponse {
    return {
      entry: isSet(object.accessLogEntry)
        ? {
            $case: "accessLogEntry",
            accessLogEntry: AccessLogEntry.fromJSON(object.accessLogEntry),
          }
        : isSet(object.decisionLogEntry)
          ? {
              $case: "decisionLogEntry",
              decisionLogEntry: DecisionLogEntry.fromJSON(
                object.decisionLogEntry,
              ),
            }
          : undefined,
    };
  },
};

function createBaseServerInfoResponse(): ServerInfoResponse {
  return { version: "", commit: "", buildDate: "" };
}

export const ServerInfoResponse = {
  encode(
    message: ServerInfoResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.commit !== "") {
      writer.uint32(18).string(message.commit);
    }
    if (message.buildDate !== "") {
      writer.uint32(26).string(message.buildDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerInfoResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.commit = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.buildDate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServerInfoResponse {
    return {
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      commit: isSet(object.commit) ? globalThis.String(object.commit) : "",
      buildDate: isSet(object.buildDate)
        ? globalThis.String(object.buildDate)
        : "",
    };
  },
};

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
