/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Value } from "../../google/protobuf/struct";

export const protobufPackage = "grpc.gateway.protoc_gen_openapiv2.options";

export enum Scheme {
  UNKNOWN = 0,
  HTTP = 1,
  HTTPS = 2,
  WS = 3,
  WSS = 4,
}

export function schemeFromJSON(object: any): Scheme {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return Scheme.UNKNOWN;
    case 1:
    case "HTTP":
      return Scheme.HTTP;
    case 2:
    case "HTTPS":
      return Scheme.HTTPS;
    case 3:
    case "WS":
      return Scheme.WS;
    case 4:
    case "WSS":
      return Scheme.WSS;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum Scheme",
      );
  }
}

export interface Swagger {
  swagger: string;
  info: Info | undefined;
  host: string;
  basePath: string;
  schemes: Scheme[];
  consumes: string[];
  produces: string[];
  responses: { [key: string]: Response };
  securityDefinitions: SecurityDefinitions | undefined;
  security: SecurityRequirement[];
  tags: Tag[];
  externalDocs: ExternalDocumentation | undefined;
  extensions: { [key: string]: any | undefined };
}

export interface Swagger_ResponsesEntry {
  key: string;
  value: Response | undefined;
}

export interface Swagger_ExtensionsEntry {
  key: string;
  value: any | undefined;
}

export interface Operation {
  tags: string[];
  summary: string;
  description: string;
  externalDocs: ExternalDocumentation | undefined;
  operationId: string;
  consumes: string[];
  produces: string[];
  responses: { [key: string]: Response };
  schemes: Scheme[];
  deprecated: boolean;
  security: SecurityRequirement[];
  extensions: { [key: string]: any | undefined };
  parameters: Parameters | undefined;
}

export interface Operation_ResponsesEntry {
  key: string;
  value: Response | undefined;
}

export interface Operation_ExtensionsEntry {
  key: string;
  value: any | undefined;
}

export interface Parameters {
  headers: HeaderParameter[];
}

export interface HeaderParameter {
  name: string;
  description: string;
  type: HeaderParameter_Type;
  format: string;
  required: boolean;
}

export enum HeaderParameter_Type {
  UNKNOWN = 0,
  STRING = 1,
  NUMBER = 2,
  INTEGER = 3,
  BOOLEAN = 4,
}

export function headerParameter_TypeFromJSON(
  object: any,
): HeaderParameter_Type {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return HeaderParameter_Type.UNKNOWN;
    case 1:
    case "STRING":
      return HeaderParameter_Type.STRING;
    case 2:
    case "NUMBER":
      return HeaderParameter_Type.NUMBER;
    case 3:
    case "INTEGER":
      return HeaderParameter_Type.INTEGER;
    case 4:
    case "BOOLEAN":
      return HeaderParameter_Type.BOOLEAN;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum HeaderParameter_Type",
      );
  }
}

export interface Header {
  description: string;
  type: string;
  format: string;
  default: string;
  pattern: string;
}

export interface Response {
  description: string;
  schema: Schema | undefined;
  headers: { [key: string]: Header };
  examples: { [key: string]: string };
  extensions: { [key: string]: any | undefined };
}

export interface Response_HeadersEntry {
  key: string;
  value: Header | undefined;
}

export interface Response_ExamplesEntry {
  key: string;
  value: string;
}

export interface Response_ExtensionsEntry {
  key: string;
  value: any | undefined;
}

export interface Info {
  title: string;
  description: string;
  termsOfService: string;
  contact: Contact | undefined;
  license: License | undefined;
  version: string;
  extensions: { [key: string]: any | undefined };
}

export interface Info_ExtensionsEntry {
  key: string;
  value: any | undefined;
}

export interface Contact {
  name: string;
  url: string;
  email: string;
}

export interface License {
  name: string;
  url: string;
}

export interface ExternalDocumentation {
  description: string;
  url: string;
}

export interface Schema {
  jsonSchema: JSONSchema | undefined;
  discriminator: string;
  readOnly: boolean;
  externalDocs: ExternalDocumentation | undefined;
  example: string;
}

export interface JSONSchema {
  ref: string;
  title: string;
  description: string;
  default: string;
  readOnly: boolean;
  example: string;
  multipleOf: number;
  maximum: number;
  exclusiveMaximum: boolean;
  minimum: number;
  exclusiveMinimum: boolean;
  maxLength: string;
  minLength: string;
  pattern: string;
  maxItems: string;
  minItems: string;
  uniqueItems: boolean;
  maxProperties: string;
  minProperties: string;
  required: string[];
  array: string[];
  type: JSONSchema_JSONSchemaSimpleTypes[];
  format: string;
  enum: string[];
  fieldConfiguration: JSONSchema_FieldConfiguration | undefined;
  extensions: { [key: string]: any | undefined };
}

export enum JSONSchema_JSONSchemaSimpleTypes {
  UNKNOWN = 0,
  ARRAY = 1,
  BOOLEAN = 2,
  INTEGER = 3,
  NULL = 4,
  NUMBER = 5,
  OBJECT = 6,
  STRING = 7,
}

export function jSONSchema_JSONSchemaSimpleTypesFromJSON(
  object: any,
): JSONSchema_JSONSchemaSimpleTypes {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return JSONSchema_JSONSchemaSimpleTypes.UNKNOWN;
    case 1:
    case "ARRAY":
      return JSONSchema_JSONSchemaSimpleTypes.ARRAY;
    case 2:
    case "BOOLEAN":
      return JSONSchema_JSONSchemaSimpleTypes.BOOLEAN;
    case 3:
    case "INTEGER":
      return JSONSchema_JSONSchemaSimpleTypes.INTEGER;
    case 4:
    case "NULL":
      return JSONSchema_JSONSchemaSimpleTypes.NULL;
    case 5:
    case "NUMBER":
      return JSONSchema_JSONSchemaSimpleTypes.NUMBER;
    case 6:
    case "OBJECT":
      return JSONSchema_JSONSchemaSimpleTypes.OBJECT;
    case 7:
    case "STRING":
      return JSONSchema_JSONSchemaSimpleTypes.STRING;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " +
          object +
          " for enum JSONSchema_JSONSchemaSimpleTypes",
      );
  }
}

export interface JSONSchema_FieldConfiguration {
  pathParamName: string;
}

export interface JSONSchema_ExtensionsEntry {
  key: string;
  value: any | undefined;
}

export interface Tag {
  name: string;
  description: string;
  externalDocs: ExternalDocumentation | undefined;
  extensions: { [key: string]: any | undefined };
}

export interface Tag_ExtensionsEntry {
  key: string;
  value: any | undefined;
}

export interface SecurityDefinitions {
  security: { [key: string]: SecurityScheme };
}

export interface SecurityDefinitions_SecurityEntry {
  key: string;
  value: SecurityScheme | undefined;
}

export interface SecurityScheme {
  type: SecurityScheme_Type;
  description: string;
  name: string;
  in: SecurityScheme_In;
  flow: SecurityScheme_Flow;
  authorizationUrl: string;
  tokenUrl: string;
  scopes: Scopes | undefined;
  extensions: { [key: string]: any | undefined };
}

export enum SecurityScheme_Type {
  TYPE_INVALID = 0,
  TYPE_BASIC = 1,
  TYPE_API_KEY = 2,
  TYPE_OAUTH2 = 3,
}

export function securityScheme_TypeFromJSON(object: any): SecurityScheme_Type {
  switch (object) {
    case 0:
    case "TYPE_INVALID":
      return SecurityScheme_Type.TYPE_INVALID;
    case 1:
    case "TYPE_BASIC":
      return SecurityScheme_Type.TYPE_BASIC;
    case 2:
    case "TYPE_API_KEY":
      return SecurityScheme_Type.TYPE_API_KEY;
    case 3:
    case "TYPE_OAUTH2":
      return SecurityScheme_Type.TYPE_OAUTH2;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum SecurityScheme_Type",
      );
  }
}

export enum SecurityScheme_In {
  IN_INVALID = 0,
  IN_QUERY = 1,
  IN_HEADER = 2,
}

export function securityScheme_InFromJSON(object: any): SecurityScheme_In {
  switch (object) {
    case 0:
    case "IN_INVALID":
      return SecurityScheme_In.IN_INVALID;
    case 1:
    case "IN_QUERY":
      return SecurityScheme_In.IN_QUERY;
    case 2:
    case "IN_HEADER":
      return SecurityScheme_In.IN_HEADER;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum SecurityScheme_In",
      );
  }
}

export enum SecurityScheme_Flow {
  FLOW_INVALID = 0,
  FLOW_IMPLICIT = 1,
  FLOW_PASSWORD = 2,
  FLOW_APPLICATION = 3,
  FLOW_ACCESS_CODE = 4,
}

export function securityScheme_FlowFromJSON(object: any): SecurityScheme_Flow {
  switch (object) {
    case 0:
    case "FLOW_INVALID":
      return SecurityScheme_Flow.FLOW_INVALID;
    case 1:
    case "FLOW_IMPLICIT":
      return SecurityScheme_Flow.FLOW_IMPLICIT;
    case 2:
    case "FLOW_PASSWORD":
      return SecurityScheme_Flow.FLOW_PASSWORD;
    case 3:
    case "FLOW_APPLICATION":
      return SecurityScheme_Flow.FLOW_APPLICATION;
    case 4:
    case "FLOW_ACCESS_CODE":
      return SecurityScheme_Flow.FLOW_ACCESS_CODE;
    default:
      throw new globalThis.Error(
        "Unrecognized enum value " + object + " for enum SecurityScheme_Flow",
      );
  }
}

export interface SecurityScheme_ExtensionsEntry {
  key: string;
  value: any | undefined;
}

export interface SecurityRequirement {
  securityRequirement: {
    [key: string]: SecurityRequirement_SecurityRequirementValue;
  };
}

export interface SecurityRequirement_SecurityRequirementValue {
  scope: string[];
}

export interface SecurityRequirement_SecurityRequirementEntry {
  key: string;
  value: SecurityRequirement_SecurityRequirementValue | undefined;
}

export interface Scopes {
  scope: { [key: string]: string };
}

export interface Scopes_ScopeEntry {
  key: string;
  value: string;
}

function createBaseSwagger(): Swagger {
  return {
    swagger: "",
    info: undefined,
    host: "",
    basePath: "",
    schemes: [],
    consumes: [],
    produces: [],
    responses: {},
    securityDefinitions: undefined,
    security: [],
    tags: [],
    externalDocs: undefined,
    extensions: {},
  };
}

export const Swagger = {
  encode(
    message: Swagger,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.swagger !== "") {
      writer.uint32(10).string(message.swagger);
    }
    if (message.info !== undefined) {
      Info.encode(message.info, writer.uint32(18).fork()).ldelim();
    }
    if (message.host !== "") {
      writer.uint32(26).string(message.host);
    }
    if (message.basePath !== "") {
      writer.uint32(34).string(message.basePath);
    }
    writer.uint32(42).fork();
    for (const v of message.schemes) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.consumes) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.produces) {
      writer.uint32(58).string(v!);
    }
    Object.entries(message.responses).forEach(([key, value]) => {
      Swagger_ResponsesEntry.encode(
        { key: key as any, value },
        writer.uint32(82).fork(),
      ).ldelim();
    });
    if (message.securityDefinitions !== undefined) {
      SecurityDefinitions.encode(
        message.securityDefinitions,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    for (const v of message.security) {
      SecurityRequirement.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.tags) {
      Tag.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.externalDocs !== undefined) {
      ExternalDocumentation.encode(
        message.externalDocs,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    Object.entries(message.extensions).forEach(([key, value]) => {
      if (value !== undefined) {
        Swagger_ExtensionsEntry.encode(
          { key: key as any, value },
          writer.uint32(122).fork(),
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Swagger {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwagger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.swagger = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.info = Info.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.host = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.basePath = reader.string();
          continue;
        case 5:
          if (tag === 40) {
            message.schemes.push(reader.int32() as any);

            continue;
          }

          if (tag === 42) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.schemes.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.consumes.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.produces.push(reader.string());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          const entry10 = Swagger_ResponsesEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry10.value !== undefined) {
            message.responses[entry10.key] = entry10.value;
          }
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.securityDefinitions = SecurityDefinitions.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.security.push(
            SecurityRequirement.decode(reader, reader.uint32()),
          );
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.tags.push(Tag.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.externalDocs = ExternalDocumentation.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          const entry15 = Swagger_ExtensionsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry15.value !== undefined) {
            message.extensions[entry15.key] = entry15.value;
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

  fromJSON(object: any): Swagger {
    return {
      swagger: isSet(object.swagger) ? globalThis.String(object.swagger) : "",
      info: isSet(object.info) ? Info.fromJSON(object.info) : undefined,
      host: isSet(object.host) ? globalThis.String(object.host) : "",
      basePath: isSet(object.basePath)
        ? globalThis.String(object.basePath)
        : "",
      schemes: globalThis.Array.isArray(object?.schemes)
        ? object.schemes.map((e: any) => schemeFromJSON(e))
        : [],
      consumes: globalThis.Array.isArray(object?.consumes)
        ? object.consumes.map((e: any) => globalThis.String(e))
        : [],
      produces: globalThis.Array.isArray(object?.produces)
        ? object.produces.map((e: any) => globalThis.String(e))
        : [],
      responses: isObject(object.responses)
        ? Object.entries(object.responses).reduce<{ [key: string]: Response }>(
            (acc, [key, value]) => {
              acc[key] = Response.fromJSON(value);
              return acc;
            },
            {},
          )
        : {},
      securityDefinitions: isSet(object.securityDefinitions)
        ? SecurityDefinitions.fromJSON(object.securityDefinitions)
        : undefined,
      security: globalThis.Array.isArray(object?.security)
        ? object.security.map((e: any) => SecurityRequirement.fromJSON(e))
        : [],
      tags: globalThis.Array.isArray(object?.tags)
        ? object.tags.map((e: any) => Tag.fromJSON(e))
        : [],
      externalDocs: isSet(object.externalDocs)
        ? ExternalDocumentation.fromJSON(object.externalDocs)
        : undefined,
      extensions: isObject(object.extensions)
        ? Object.entries(object.extensions).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
    };
  },
};

function createBaseSwagger_ResponsesEntry(): Swagger_ResponsesEntry {
  return { key: "", value: undefined };
}

export const Swagger_ResponsesEntry = {
  encode(
    message: Swagger_ResponsesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Response.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Swagger_ResponsesEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwagger_ResponsesEntry();
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

          message.value = Response.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Swagger_ResponsesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Response.fromJSON(object.value) : undefined,
    };
  },
};

function createBaseSwagger_ExtensionsEntry(): Swagger_ExtensionsEntry {
  return { key: "", value: undefined };
}

export const Swagger_ExtensionsEntry = {
  encode(
    message: Swagger_ExtensionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Swagger_ExtensionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwagger_ExtensionsEntry();
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

          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Swagger_ExtensionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },
};

function createBaseOperation(): Operation {
  return {
    tags: [],
    summary: "",
    description: "",
    externalDocs: undefined,
    operationId: "",
    consumes: [],
    produces: [],
    responses: {},
    schemes: [],
    deprecated: false,
    security: [],
    extensions: {},
    parameters: undefined,
  };
}

export const Operation = {
  encode(
    message: Operation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.tags) {
      writer.uint32(10).string(v!);
    }
    if (message.summary !== "") {
      writer.uint32(18).string(message.summary);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.externalDocs !== undefined) {
      ExternalDocumentation.encode(
        message.externalDocs,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.operationId !== "") {
      writer.uint32(42).string(message.operationId);
    }
    for (const v of message.consumes) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.produces) {
      writer.uint32(58).string(v!);
    }
    Object.entries(message.responses).forEach(([key, value]) => {
      Operation_ResponsesEntry.encode(
        { key: key as any, value },
        writer.uint32(74).fork(),
      ).ldelim();
    });
    writer.uint32(82).fork();
    for (const v of message.schemes) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.deprecated !== false) {
      writer.uint32(88).bool(message.deprecated);
    }
    for (const v of message.security) {
      SecurityRequirement.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    Object.entries(message.extensions).forEach(([key, value]) => {
      if (value !== undefined) {
        Operation_ExtensionsEntry.encode(
          { key: key as any, value },
          writer.uint32(106).fork(),
        ).ldelim();
      }
    });
    if (message.parameters !== undefined) {
      Parameters.encode(message.parameters, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Operation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.summary = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.externalDocs = ExternalDocumentation.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.operationId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.consumes.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.produces.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          const entry9 = Operation_ResponsesEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry9.value !== undefined) {
            message.responses[entry9.key] = entry9.value;
          }
          continue;
        case 10:
          if (tag === 80) {
            message.schemes.push(reader.int32() as any);

            continue;
          }

          if (tag === 82) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.schemes.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.security.push(
            SecurityRequirement.decode(reader, reader.uint32()),
          );
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          const entry13 = Operation_ExtensionsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry13.value !== undefined) {
            message.extensions[entry13.key] = entry13.value;
          }
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.parameters = Parameters.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Operation {
    return {
      tags: globalThis.Array.isArray(object?.tags)
        ? object.tags.map((e: any) => globalThis.String(e))
        : [],
      summary: isSet(object.summary) ? globalThis.String(object.summary) : "",
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      externalDocs: isSet(object.externalDocs)
        ? ExternalDocumentation.fromJSON(object.externalDocs)
        : undefined,
      operationId: isSet(object.operationId)
        ? globalThis.String(object.operationId)
        : "",
      consumes: globalThis.Array.isArray(object?.consumes)
        ? object.consumes.map((e: any) => globalThis.String(e))
        : [],
      produces: globalThis.Array.isArray(object?.produces)
        ? object.produces.map((e: any) => globalThis.String(e))
        : [],
      responses: isObject(object.responses)
        ? Object.entries(object.responses).reduce<{ [key: string]: Response }>(
            (acc, [key, value]) => {
              acc[key] = Response.fromJSON(value);
              return acc;
            },
            {},
          )
        : {},
      schemes: globalThis.Array.isArray(object?.schemes)
        ? object.schemes.map((e: any) => schemeFromJSON(e))
        : [],
      deprecated: isSet(object.deprecated)
        ? globalThis.Boolean(object.deprecated)
        : false,
      security: globalThis.Array.isArray(object?.security)
        ? object.security.map((e: any) => SecurityRequirement.fromJSON(e))
        : [],
      extensions: isObject(object.extensions)
        ? Object.entries(object.extensions).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
      parameters: isSet(object.parameters)
        ? Parameters.fromJSON(object.parameters)
        : undefined,
    };
  },
};

function createBaseOperation_ResponsesEntry(): Operation_ResponsesEntry {
  return { key: "", value: undefined };
}

export const Operation_ResponsesEntry = {
  encode(
    message: Operation_ResponsesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Response.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Operation_ResponsesEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation_ResponsesEntry();
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

          message.value = Response.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Operation_ResponsesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Response.fromJSON(object.value) : undefined,
    };
  },
};

function createBaseOperation_ExtensionsEntry(): Operation_ExtensionsEntry {
  return { key: "", value: undefined };
}

export const Operation_ExtensionsEntry = {
  encode(
    message: Operation_ExtensionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Operation_ExtensionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation_ExtensionsEntry();
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

          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Operation_ExtensionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },
};

function createBaseParameters(): Parameters {
  return { headers: [] };
}

export const Parameters = {
  encode(
    message: Parameters,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.headers) {
      HeaderParameter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Parameters {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.headers.push(HeaderParameter.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Parameters {
    return {
      headers: globalThis.Array.isArray(object?.headers)
        ? object.headers.map((e: any) => HeaderParameter.fromJSON(e))
        : [],
    };
  },
};

function createBaseHeaderParameter(): HeaderParameter {
  return { name: "", description: "", type: 0, format: "", required: false };
}

export const HeaderParameter = {
  encode(
    message: HeaderParameter,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.format !== "") {
      writer.uint32(34).string(message.format);
    }
    if (message.required !== false) {
      writer.uint32(40).bool(message.required);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeaderParameter {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeaderParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.format = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.required = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HeaderParameter {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      type: isSet(object.type) ? headerParameter_TypeFromJSON(object.type) : 0,
      format: isSet(object.format) ? globalThis.String(object.format) : "",
      required: isSet(object.required)
        ? globalThis.Boolean(object.required)
        : false,
    };
  },
};

function createBaseHeader(): Header {
  return { description: "", type: "", format: "", default: "", pattern: "" };
}

export const Header = {
  encode(
    message: Header,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.format !== "") {
      writer.uint32(26).string(message.format);
    }
    if (message.default !== "") {
      writer.uint32(50).string(message.default);
    }
    if (message.pattern !== "") {
      writer.uint32(106).string(message.pattern);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Header {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.description = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.format = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.default = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.pattern = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Header {
    return {
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      format: isSet(object.format) ? globalThis.String(object.format) : "",
      default: isSet(object.default) ? globalThis.String(object.default) : "",
      pattern: isSet(object.pattern) ? globalThis.String(object.pattern) : "",
    };
  },
};

function createBaseResponse(): Response {
  return {
    description: "",
    schema: undefined,
    headers: {},
    examples: {},
    extensions: {},
  };
}

export const Response = {
  encode(
    message: Response,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.schema !== undefined) {
      Schema.encode(message.schema, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.headers).forEach(([key, value]) => {
      Response_HeadersEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork(),
      ).ldelim();
    });
    Object.entries(message.examples).forEach(([key, value]) => {
      Response_ExamplesEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork(),
      ).ldelim();
    });
    Object.entries(message.extensions).forEach(([key, value]) => {
      if (value !== undefined) {
        Response_ExtensionsEntry.encode(
          { key: key as any, value },
          writer.uint32(42).fork(),
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.description = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.schema = Schema.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = Response_HeadersEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.headers[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = Response_ExamplesEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.examples[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = Response_ExtensionsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry5.value !== undefined) {
            message.extensions[entry5.key] = entry5.value;
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

  fromJSON(object: any): Response {
    return {
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      schema: isSet(object.schema) ? Schema.fromJSON(object.schema) : undefined,
      headers: isObject(object.headers)
        ? Object.entries(object.headers).reduce<{ [key: string]: Header }>(
            (acc, [key, value]) => {
              acc[key] = Header.fromJSON(value);
              return acc;
            },
            {},
          )
        : {},
      examples: isObject(object.examples)
        ? Object.entries(object.examples).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {},
          )
        : {},
      extensions: isObject(object.extensions)
        ? Object.entries(object.extensions).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
    };
  },
};

function createBaseResponse_HeadersEntry(): Response_HeadersEntry {
  return { key: "", value: undefined };
}

export const Response_HeadersEntry = {
  encode(
    message: Response_HeadersEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Header.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Response_HeadersEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_HeadersEntry();
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

          message.value = Header.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Response_HeadersEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Header.fromJSON(object.value) : undefined,
    };
  },
};

function createBaseResponse_ExamplesEntry(): Response_ExamplesEntry {
  return { key: "", value: "" };
}

export const Response_ExamplesEntry = {
  encode(
    message: Response_ExamplesEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Response_ExamplesEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_ExamplesEntry();
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

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Response_ExamplesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },
};

function createBaseResponse_ExtensionsEntry(): Response_ExtensionsEntry {
  return { key: "", value: undefined };
}

export const Response_ExtensionsEntry = {
  encode(
    message: Response_ExtensionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Response_ExtensionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_ExtensionsEntry();
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

          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Response_ExtensionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },
};

function createBaseInfo(): Info {
  return {
    title: "",
    description: "",
    termsOfService: "",
    contact: undefined,
    license: undefined,
    version: "",
    extensions: {},
  };
}

export const Info = {
  encode(message: Info, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.termsOfService !== "") {
      writer.uint32(26).string(message.termsOfService);
    }
    if (message.contact !== undefined) {
      Contact.encode(message.contact, writer.uint32(34).fork()).ldelim();
    }
    if (message.license !== undefined) {
      License.encode(message.license, writer.uint32(42).fork()).ldelim();
    }
    if (message.version !== "") {
      writer.uint32(50).string(message.version);
    }
    Object.entries(message.extensions).forEach(([key, value]) => {
      if (value !== undefined) {
        Info_ExtensionsEntry.encode(
          { key: key as any, value },
          writer.uint32(58).fork(),
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Info {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.termsOfService = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.contact = Contact.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.license = License.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.version = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          const entry7 = Info_ExtensionsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.extensions[entry7.key] = entry7.value;
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

  fromJSON(object: any): Info {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      termsOfService: isSet(object.termsOfService)
        ? globalThis.String(object.termsOfService)
        : "",
      contact: isSet(object.contact)
        ? Contact.fromJSON(object.contact)
        : undefined,
      license: isSet(object.license)
        ? License.fromJSON(object.license)
        : undefined,
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      extensions: isObject(object.extensions)
        ? Object.entries(object.extensions).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
    };
  },
};

function createBaseInfo_ExtensionsEntry(): Info_ExtensionsEntry {
  return { key: "", value: undefined };
}

export const Info_ExtensionsEntry = {
  encode(
    message: Info_ExtensionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): Info_ExtensionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfo_ExtensionsEntry();
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

          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Info_ExtensionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },
};

function createBaseContact(): Contact {
  return { name: "", url: "", email: "" };
}

export const Contact = {
  encode(
    message: Contact,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contact {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.url = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Contact {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
    };
  },
};

function createBaseLicense(): License {
  return { name: "", url: "" };
}

export const License = {
  encode(
    message: License,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): License {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLicense();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): License {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      url: isSet(object.url) ? globalThis.String(object.url) : "",
    };
  },
};

function createBaseExternalDocumentation(): ExternalDocumentation {
  return { description: "", url: "" };
}

export const ExternalDocumentation = {
  encode(
    message: ExternalDocumentation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ExternalDocumentation {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalDocumentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.description = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExternalDocumentation {
    return {
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      url: isSet(object.url) ? globalThis.String(object.url) : "",
    };
  },
};

function createBaseSchema(): Schema {
  return {
    jsonSchema: undefined,
    discriminator: "",
    readOnly: false,
    externalDocs: undefined,
    example: "",
  };
}

export const Schema = {
  encode(
    message: Schema,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.jsonSchema !== undefined) {
      JSONSchema.encode(message.jsonSchema, writer.uint32(10).fork()).ldelim();
    }
    if (message.discriminator !== "") {
      writer.uint32(18).string(message.discriminator);
    }
    if (message.readOnly !== false) {
      writer.uint32(24).bool(message.readOnly);
    }
    if (message.externalDocs !== undefined) {
      ExternalDocumentation.encode(
        message.externalDocs,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.example !== "") {
      writer.uint32(50).string(message.example);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Schema {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jsonSchema = JSONSchema.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.discriminator = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.readOnly = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.externalDocs = ExternalDocumentation.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.example = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Schema {
    return {
      jsonSchema: isSet(object.jsonSchema)
        ? JSONSchema.fromJSON(object.jsonSchema)
        : undefined,
      discriminator: isSet(object.discriminator)
        ? globalThis.String(object.discriminator)
        : "",
      readOnly: isSet(object.readOnly)
        ? globalThis.Boolean(object.readOnly)
        : false,
      externalDocs: isSet(object.externalDocs)
        ? ExternalDocumentation.fromJSON(object.externalDocs)
        : undefined,
      example: isSet(object.example) ? globalThis.String(object.example) : "",
    };
  },
};

function createBaseJSONSchema(): JSONSchema {
  return {
    ref: "",
    title: "",
    description: "",
    default: "",
    readOnly: false,
    example: "",
    multipleOf: 0,
    maximum: 0,
    exclusiveMaximum: false,
    minimum: 0,
    exclusiveMinimum: false,
    maxLength: "0",
    minLength: "0",
    pattern: "",
    maxItems: "0",
    minItems: "0",
    uniqueItems: false,
    maxProperties: "0",
    minProperties: "0",
    required: [],
    array: [],
    type: [],
    format: "",
    enum: [],
    fieldConfiguration: undefined,
    extensions: {},
  };
}

export const JSONSchema = {
  encode(
    message: JSONSchema,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.ref !== "") {
      writer.uint32(26).string(message.ref);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.default !== "") {
      writer.uint32(58).string(message.default);
    }
    if (message.readOnly !== false) {
      writer.uint32(64).bool(message.readOnly);
    }
    if (message.example !== "") {
      writer.uint32(74).string(message.example);
    }
    if (message.multipleOf !== 0) {
      writer.uint32(81).double(message.multipleOf);
    }
    if (message.maximum !== 0) {
      writer.uint32(89).double(message.maximum);
    }
    if (message.exclusiveMaximum !== false) {
      writer.uint32(96).bool(message.exclusiveMaximum);
    }
    if (message.minimum !== 0) {
      writer.uint32(105).double(message.minimum);
    }
    if (message.exclusiveMinimum !== false) {
      writer.uint32(112).bool(message.exclusiveMinimum);
    }
    if (message.maxLength !== "0") {
      writer.uint32(120).uint64(message.maxLength);
    }
    if (message.minLength !== "0") {
      writer.uint32(128).uint64(message.minLength);
    }
    if (message.pattern !== "") {
      writer.uint32(138).string(message.pattern);
    }
    if (message.maxItems !== "0") {
      writer.uint32(160).uint64(message.maxItems);
    }
    if (message.minItems !== "0") {
      writer.uint32(168).uint64(message.minItems);
    }
    if (message.uniqueItems !== false) {
      writer.uint32(176).bool(message.uniqueItems);
    }
    if (message.maxProperties !== "0") {
      writer.uint32(192).uint64(message.maxProperties);
    }
    if (message.minProperties !== "0") {
      writer.uint32(200).uint64(message.minProperties);
    }
    for (const v of message.required) {
      writer.uint32(210).string(v!);
    }
    for (const v of message.array) {
      writer.uint32(274).string(v!);
    }
    writer.uint32(282).fork();
    for (const v of message.type) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.format !== "") {
      writer.uint32(290).string(message.format);
    }
    for (const v of message.enum) {
      writer.uint32(370).string(v!);
    }
    if (message.fieldConfiguration !== undefined) {
      JSONSchema_FieldConfiguration.encode(
        message.fieldConfiguration,
        writer.uint32(8010).fork(),
      ).ldelim();
    }
    Object.entries(message.extensions).forEach(([key, value]) => {
      if (value !== undefined) {
        JSONSchema_ExtensionsEntry.encode(
          { key: key as any, value },
          writer.uint32(386).fork(),
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JSONSchema {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJSONSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ref = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.title = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.default = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.readOnly = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.example = reader.string();
          continue;
        case 10:
          if (tag !== 81) {
            break;
          }

          message.multipleOf = reader.double();
          continue;
        case 11:
          if (tag !== 89) {
            break;
          }

          message.maximum = reader.double();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.exclusiveMaximum = reader.bool();
          continue;
        case 13:
          if (tag !== 105) {
            break;
          }

          message.minimum = reader.double();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.exclusiveMinimum = reader.bool();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.maxLength = longToString(reader.uint64() as Long);
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.minLength = longToString(reader.uint64() as Long);
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.pattern = reader.string();
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.maxItems = longToString(reader.uint64() as Long);
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.minItems = longToString(reader.uint64() as Long);
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.uniqueItems = reader.bool();
          continue;
        case 24:
          if (tag !== 192) {
            break;
          }

          message.maxProperties = longToString(reader.uint64() as Long);
          continue;
        case 25:
          if (tag !== 200) {
            break;
          }

          message.minProperties = longToString(reader.uint64() as Long);
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.required.push(reader.string());
          continue;
        case 34:
          if (tag !== 274) {
            break;
          }

          message.array.push(reader.string());
          continue;
        case 35:
          if (tag === 280) {
            message.type.push(reader.int32() as any);

            continue;
          }

          if (tag === 282) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.type.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 36:
          if (tag !== 290) {
            break;
          }

          message.format = reader.string();
          continue;
        case 46:
          if (tag !== 370) {
            break;
          }

          message.enum.push(reader.string());
          continue;
        case 1001:
          if (tag !== 8010) {
            break;
          }

          message.fieldConfiguration = JSONSchema_FieldConfiguration.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 48:
          if (tag !== 386) {
            break;
          }

          const entry48 = JSONSchema_ExtensionsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry48.value !== undefined) {
            message.extensions[entry48.key] = entry48.value;
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

  fromJSON(object: any): JSONSchema {
    return {
      ref: isSet(object.ref) ? globalThis.String(object.ref) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      default: isSet(object.default) ? globalThis.String(object.default) : "",
      readOnly: isSet(object.readOnly)
        ? globalThis.Boolean(object.readOnly)
        : false,
      example: isSet(object.example) ? globalThis.String(object.example) : "",
      multipleOf: isSet(object.multipleOf)
        ? globalThis.Number(object.multipleOf)
        : 0,
      maximum: isSet(object.maximum) ? globalThis.Number(object.maximum) : 0,
      exclusiveMaximum: isSet(object.exclusiveMaximum)
        ? globalThis.Boolean(object.exclusiveMaximum)
        : false,
      minimum: isSet(object.minimum) ? globalThis.Number(object.minimum) : 0,
      exclusiveMinimum: isSet(object.exclusiveMinimum)
        ? globalThis.Boolean(object.exclusiveMinimum)
        : false,
      maxLength: isSet(object.maxLength)
        ? globalThis.String(object.maxLength)
        : "0",
      minLength: isSet(object.minLength)
        ? globalThis.String(object.minLength)
        : "0",
      pattern: isSet(object.pattern) ? globalThis.String(object.pattern) : "",
      maxItems: isSet(object.maxItems)
        ? globalThis.String(object.maxItems)
        : "0",
      minItems: isSet(object.minItems)
        ? globalThis.String(object.minItems)
        : "0",
      uniqueItems: isSet(object.uniqueItems)
        ? globalThis.Boolean(object.uniqueItems)
        : false,
      maxProperties: isSet(object.maxProperties)
        ? globalThis.String(object.maxProperties)
        : "0",
      minProperties: isSet(object.minProperties)
        ? globalThis.String(object.minProperties)
        : "0",
      required: globalThis.Array.isArray(object?.required)
        ? object.required.map((e: any) => globalThis.String(e))
        : [],
      array: globalThis.Array.isArray(object?.array)
        ? object.array.map((e: any) => globalThis.String(e))
        : [],
      type: globalThis.Array.isArray(object?.type)
        ? object.type.map((e: any) =>
            jSONSchema_JSONSchemaSimpleTypesFromJSON(e),
          )
        : [],
      format: isSet(object.format) ? globalThis.String(object.format) : "",
      enum: globalThis.Array.isArray(object?.enum)
        ? object.enum.map((e: any) => globalThis.String(e))
        : [],
      fieldConfiguration: isSet(object.fieldConfiguration)
        ? JSONSchema_FieldConfiguration.fromJSON(object.fieldConfiguration)
        : undefined,
      extensions: isObject(object.extensions)
        ? Object.entries(object.extensions).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
    };
  },
};

function createBaseJSONSchema_FieldConfiguration(): JSONSchema_FieldConfiguration {
  return { pathParamName: "" };
}

export const JSONSchema_FieldConfiguration = {
  encode(
    message: JSONSchema_FieldConfiguration,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pathParamName !== "") {
      writer.uint32(378).string(message.pathParamName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): JSONSchema_FieldConfiguration {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJSONSchema_FieldConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 47:
          if (tag !== 378) {
            break;
          }

          message.pathParamName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JSONSchema_FieldConfiguration {
    return {
      pathParamName: isSet(object.pathParamName)
        ? globalThis.String(object.pathParamName)
        : "",
    };
  },
};

function createBaseJSONSchema_ExtensionsEntry(): JSONSchema_ExtensionsEntry {
  return { key: "", value: undefined };
}

export const JSONSchema_ExtensionsEntry = {
  encode(
    message: JSONSchema_ExtensionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): JSONSchema_ExtensionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJSONSchema_ExtensionsEntry();
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

          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JSONSchema_ExtensionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },
};

function createBaseTag(): Tag {
  return { name: "", description: "", externalDocs: undefined, extensions: {} };
}

export const Tag = {
  encode(message: Tag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.externalDocs !== undefined) {
      ExternalDocumentation.encode(
        message.externalDocs,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    Object.entries(message.extensions).forEach(([key, value]) => {
      if (value !== undefined) {
        Tag_ExtensionsEntry.encode(
          { key: key as any, value },
          writer.uint32(34).fork(),
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tag {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTag();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.externalDocs = ExternalDocumentation.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = Tag_ExtensionsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.extensions[entry4.key] = entry4.value;
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

  fromJSON(object: any): Tag {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      externalDocs: isSet(object.externalDocs)
        ? ExternalDocumentation.fromJSON(object.externalDocs)
        : undefined,
      extensions: isObject(object.extensions)
        ? Object.entries(object.extensions).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
    };
  },
};

function createBaseTag_ExtensionsEntry(): Tag_ExtensionsEntry {
  return { key: "", value: undefined };
}

export const Tag_ExtensionsEntry = {
  encode(
    message: Tag_ExtensionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tag_ExtensionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTag_ExtensionsEntry();
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

          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Tag_ExtensionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },
};

function createBaseSecurityDefinitions(): SecurityDefinitions {
  return { security: {} };
}

export const SecurityDefinitions = {
  encode(
    message: SecurityDefinitions,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    Object.entries(message.security).forEach(([key, value]) => {
      SecurityDefinitions_SecurityEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecurityDefinitions {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityDefinitions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = SecurityDefinitions_SecurityEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry1.value !== undefined) {
            message.security[entry1.key] = entry1.value;
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

  fromJSON(object: any): SecurityDefinitions {
    return {
      security: isObject(object.security)
        ? Object.entries(object.security).reduce<{
            [key: string]: SecurityScheme;
          }>((acc, [key, value]) => {
            acc[key] = SecurityScheme.fromJSON(value);
            return acc;
          }, {})
        : {},
    };
  },
};

function createBaseSecurityDefinitions_SecurityEntry(): SecurityDefinitions_SecurityEntry {
  return { key: "", value: undefined };
}

export const SecurityDefinitions_SecurityEntry = {
  encode(
    message: SecurityDefinitions_SecurityEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      SecurityScheme.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SecurityDefinitions_SecurityEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityDefinitions_SecurityEntry();
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

          message.value = SecurityScheme.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SecurityDefinitions_SecurityEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value)
        ? SecurityScheme.fromJSON(object.value)
        : undefined,
    };
  },
};

function createBaseSecurityScheme(): SecurityScheme {
  return {
    type: 0,
    description: "",
    name: "",
    in: 0,
    flow: 0,
    authorizationUrl: "",
    tokenUrl: "",
    scopes: undefined,
    extensions: {},
  };
}

export const SecurityScheme = {
  encode(
    message: SecurityScheme,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.in !== 0) {
      writer.uint32(32).int32(message.in);
    }
    if (message.flow !== 0) {
      writer.uint32(40).int32(message.flow);
    }
    if (message.authorizationUrl !== "") {
      writer.uint32(50).string(message.authorizationUrl);
    }
    if (message.tokenUrl !== "") {
      writer.uint32(58).string(message.tokenUrl);
    }
    if (message.scopes !== undefined) {
      Scopes.encode(message.scopes, writer.uint32(66).fork()).ldelim();
    }
    Object.entries(message.extensions).forEach(([key, value]) => {
      if (value !== undefined) {
        SecurityScheme_ExtensionsEntry.encode(
          { key: key as any, value },
          writer.uint32(74).fork(),
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecurityScheme {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityScheme();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.in = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.flow = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.authorizationUrl = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.tokenUrl = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.scopes = Scopes.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          const entry9 = SecurityScheme_ExtensionsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry9.value !== undefined) {
            message.extensions[entry9.key] = entry9.value;
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

  fromJSON(object: any): SecurityScheme {
    return {
      type: isSet(object.type) ? securityScheme_TypeFromJSON(object.type) : 0,
      description: isSet(object.description)
        ? globalThis.String(object.description)
        : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      in: isSet(object.in) ? securityScheme_InFromJSON(object.in) : 0,
      flow: isSet(object.flow) ? securityScheme_FlowFromJSON(object.flow) : 0,
      authorizationUrl: isSet(object.authorizationUrl)
        ? globalThis.String(object.authorizationUrl)
        : "",
      tokenUrl: isSet(object.tokenUrl)
        ? globalThis.String(object.tokenUrl)
        : "",
      scopes: isSet(object.scopes) ? Scopes.fromJSON(object.scopes) : undefined,
      extensions: isObject(object.extensions)
        ? Object.entries(object.extensions).reduce<{
            [key: string]: any | undefined;
          }>((acc, [key, value]) => {
            acc[key] = value as any | undefined;
            return acc;
          }, {})
        : {},
    };
  },
};

function createBaseSecurityScheme_ExtensionsEntry(): SecurityScheme_ExtensionsEntry {
  return { key: "", value: undefined };
}

export const SecurityScheme_ExtensionsEntry = {
  encode(
    message: SecurityScheme_ExtensionsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SecurityScheme_ExtensionsEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityScheme_ExtensionsEntry();
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

          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SecurityScheme_ExtensionsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object?.value) ? object.value : undefined,
    };
  },
};

function createBaseSecurityRequirement(): SecurityRequirement {
  return { securityRequirement: {} };
}

export const SecurityRequirement = {
  encode(
    message: SecurityRequirement,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    Object.entries(message.securityRequirement).forEach(([key, value]) => {
      SecurityRequirement_SecurityRequirementEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecurityRequirement {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityRequirement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = SecurityRequirement_SecurityRequirementEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry1.value !== undefined) {
            message.securityRequirement[entry1.key] = entry1.value;
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

  fromJSON(object: any): SecurityRequirement {
    return {
      securityRequirement: isObject(object.securityRequirement)
        ? Object.entries(object.securityRequirement).reduce<{
            [key: string]: SecurityRequirement_SecurityRequirementValue;
          }>((acc, [key, value]) => {
            acc[key] =
              SecurityRequirement_SecurityRequirementValue.fromJSON(value);
            return acc;
          }, {})
        : {},
    };
  },
};

function createBaseSecurityRequirement_SecurityRequirementValue(): SecurityRequirement_SecurityRequirementValue {
  return { scope: [] };
}

export const SecurityRequirement_SecurityRequirementValue = {
  encode(
    message: SecurityRequirement_SecurityRequirementValue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.scope) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SecurityRequirement_SecurityRequirementValue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityRequirement_SecurityRequirementValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.scope.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SecurityRequirement_SecurityRequirementValue {
    return {
      scope: globalThis.Array.isArray(object?.scope)
        ? object.scope.map((e: any) => globalThis.String(e))
        : [],
    };
  },
};

function createBaseSecurityRequirement_SecurityRequirementEntry(): SecurityRequirement_SecurityRequirementEntry {
  return { key: "", value: undefined };
}

export const SecurityRequirement_SecurityRequirementEntry = {
  encode(
    message: SecurityRequirement_SecurityRequirementEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      SecurityRequirement_SecurityRequirementValue.encode(
        message.value,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SecurityRequirement_SecurityRequirementEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityRequirement_SecurityRequirementEntry();
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

          message.value = SecurityRequirement_SecurityRequirementValue.decode(
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

  fromJSON(object: any): SecurityRequirement_SecurityRequirementEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value)
        ? SecurityRequirement_SecurityRequirementValue.fromJSON(object.value)
        : undefined,
    };
  },
};

function createBaseScopes(): Scopes {
  return { scope: {} };
}

export const Scopes = {
  encode(
    message: Scopes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    Object.entries(message.scope).forEach(([key, value]) => {
      Scopes_ScopeEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Scopes {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScopes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = Scopes_ScopeEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.scope[entry1.key] = entry1.value;
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

  fromJSON(object: any): Scopes {
    return {
      scope: isObject(object.scope)
        ? Object.entries(object.scope).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {},
          )
        : {},
    };
  },
};

function createBaseScopes_ScopeEntry(): Scopes_ScopeEntry {
  return { key: "", value: "" };
}

export const Scopes_ScopeEntry = {
  encode(
    message: Scopes_ScopeEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Scopes_ScopeEntry {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScopes_ScopeEntry();
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

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Scopes_ScopeEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },
};

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
