export { ApolloClient, ApolloClientOptions, DefaultOptions, mergeOptions, } from './ApolloClient';
export { ObservableQuery, FetchMoreOptions, UpdateQueryOptions, } from './ObservableQuery';
export { QueryOptions, WatchQueryOptions, MutationOptions, SubscriptionOptions, FetchPolicy, WatchQueryFetchPolicy, ErrorPolicy, FetchMoreQueryOptions, SubscribeToMoreOptions, MutationUpdaterFn, } from './watchQueryOptions';
export { NetworkStatus } from './networkStatus';
export * from './types';
export { Resolver, FragmentMatcher, } from './LocalState';
export { isApolloError, ApolloError } from '../errors';
export { Cache, ApolloCache, Transaction, DataProxy, InMemoryCache, InMemoryCacheConfig, MissingFieldError, defaultDataIdFromObject, ReactiveVar, makeVar, TypePolicies, TypePolicy, FieldPolicy, FieldReadFunction, FieldMergeFunction, FieldFunctionOptions, PossibleTypesMap, } from '../cache';
export * from '../cache/inmemory/types';
export * from '../link/core';
export * from '../link/http';
export { fromError, toPromise, fromPromise, ServerError, throwServerError, } from '../link/utils';
export { Observable, Observer, ObservableSubscription, Reference, isReference, makeReference, StoreObject, } from '../utilities';
import { setVerbosity } from "ts-invariant";
export { setVerbosity as setLogVerbosity };
import gql from 'graphql-tag';
export declare const resetCaches: typeof import("graphql-tag").resetCaches, disableFragmentWarnings: typeof import("graphql-tag").disableFragmentWarnings, enableExperimentalFragmentVariables: typeof import("graphql-tag").enableExperimentalFragmentVariables, disableExperimentalFragmentVariables: typeof import("graphql-tag").disableExperimentalFragmentVariables;
export { gql };
//# sourceMappingURL=index.d.ts.map