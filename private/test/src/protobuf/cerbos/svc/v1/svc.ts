/* eslint-disable */
import {
  ChannelCredentials,
  Client,
  makeGenericClientConstructor,
  Metadata,
} from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import {
  CheckResourceBatchRequest,
  CheckResourceSetRequest,
  CheckResourcesRequest,
  PlanResourcesRequest,
  ServerInfoRequest,
} from "../../request/v1/request";
import {
  CheckResourceBatchResponse,
  CheckResourceSetResponse,
  CheckResourcesResponse,
  PlanResourcesResponse,
  ServerInfoResponse,
} from "../../response/v1/response";

export const protobufPackage = "cerbos.svc.v1";

export type CerbosServiceService = typeof CerbosServiceService;
export const CerbosServiceService = {
  checkResourceSet: {
    path: "/cerbos.svc.v1.CerbosService/CheckResourceSet",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CheckResourceSetRequest) =>
      Buffer.from(CheckResourceSetRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CheckResourceSetRequest.decode(value),
    responseSerialize: (value: CheckResourceSetResponse) =>
      Buffer.from(CheckResourceSetResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      CheckResourceSetResponse.decode(value),
  },
  checkResourceBatch: {
    path: "/cerbos.svc.v1.CerbosService/CheckResourceBatch",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CheckResourceBatchRequest) =>
      Buffer.from(CheckResourceBatchRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) =>
      CheckResourceBatchRequest.decode(value),
    responseSerialize: (value: CheckResourceBatchResponse) =>
      Buffer.from(CheckResourceBatchResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      CheckResourceBatchResponse.decode(value),
  },
  checkResources: {
    path: "/cerbos.svc.v1.CerbosService/CheckResources",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CheckResourcesRequest) =>
      Buffer.from(CheckResourcesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CheckResourcesRequest.decode(value),
    responseSerialize: (value: CheckResourcesResponse) =>
      Buffer.from(CheckResourcesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) =>
      CheckResourcesResponse.decode(value),
  },
  serverInfo: {
    path: "/cerbos.svc.v1.CerbosService/ServerInfo",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ServerInfoRequest) =>
      Buffer.from(ServerInfoRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ServerInfoRequest.decode(value),
    responseSerialize: (value: ServerInfoResponse) =>
      Buffer.from(ServerInfoResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ServerInfoResponse.decode(value),
  },
  planResources: {
    path: "/cerbos.svc.v1.CerbosService/PlanResources",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PlanResourcesRequest) =>
      Buffer.from(PlanResourcesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PlanResourcesRequest.decode(value),
    responseSerialize: (value: PlanResourcesResponse) =>
      Buffer.from(PlanResourcesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PlanResourcesResponse.decode(value),
  },
} as const;

export interface CerbosServiceServer extends UntypedServiceImplementation {
  checkResourceSet: handleUnaryCall<
    CheckResourceSetRequest,
    CheckResourceSetResponse
  >;
  checkResourceBatch: handleUnaryCall<
    CheckResourceBatchRequest,
    CheckResourceBatchResponse
  >;
  checkResources: handleUnaryCall<
    CheckResourcesRequest,
    CheckResourcesResponse
  >;
  serverInfo: handleUnaryCall<ServerInfoRequest, ServerInfoResponse>;
  planResources: handleUnaryCall<PlanResourcesRequest, PlanResourcesResponse>;
}

export interface CerbosServiceClient extends Client {
  checkResourceSet(
    request: CheckResourceSetRequest,
    callback: (
      error: ServiceError | null,
      response: CheckResourceSetResponse,
    ) => void,
  ): ClientUnaryCall;
  checkResourceSet(
    request: CheckResourceSetRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CheckResourceSetResponse,
    ) => void,
  ): ClientUnaryCall;
  checkResourceSet(
    request: CheckResourceSetRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CheckResourceSetResponse,
    ) => void,
  ): ClientUnaryCall;
  checkResourceBatch(
    request: CheckResourceBatchRequest,
    callback: (
      error: ServiceError | null,
      response: CheckResourceBatchResponse,
    ) => void,
  ): ClientUnaryCall;
  checkResourceBatch(
    request: CheckResourceBatchRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CheckResourceBatchResponse,
    ) => void,
  ): ClientUnaryCall;
  checkResourceBatch(
    request: CheckResourceBatchRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CheckResourceBatchResponse,
    ) => void,
  ): ClientUnaryCall;
  checkResources(
    request: CheckResourcesRequest,
    callback: (
      error: ServiceError | null,
      response: CheckResourcesResponse,
    ) => void,
  ): ClientUnaryCall;
  checkResources(
    request: CheckResourcesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: CheckResourcesResponse,
    ) => void,
  ): ClientUnaryCall;
  checkResources(
    request: CheckResourcesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: CheckResourcesResponse,
    ) => void,
  ): ClientUnaryCall;
  serverInfo(
    request: ServerInfoRequest,
    callback: (
      error: ServiceError | null,
      response: ServerInfoResponse,
    ) => void,
  ): ClientUnaryCall;
  serverInfo(
    request: ServerInfoRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: ServerInfoResponse,
    ) => void,
  ): ClientUnaryCall;
  serverInfo(
    request: ServerInfoRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: ServerInfoResponse,
    ) => void,
  ): ClientUnaryCall;
  planResources(
    request: PlanResourcesRequest,
    callback: (
      error: ServiceError | null,
      response: PlanResourcesResponse,
    ) => void,
  ): ClientUnaryCall;
  planResources(
    request: PlanResourcesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: PlanResourcesResponse,
    ) => void,
  ): ClientUnaryCall;
  planResources(
    request: PlanResourcesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: PlanResourcesResponse,
    ) => void,
  ): ClientUnaryCall;
}

export const CerbosServiceClient = makeGenericClientConstructor(
  CerbosServiceService,
  "cerbos.svc.v1.CerbosService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): CerbosServiceClient;
  service: typeof CerbosServiceService;
  serviceName: string;
};
