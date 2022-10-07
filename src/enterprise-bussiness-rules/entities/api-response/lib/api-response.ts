import { ApolloQueryResult } from "@apollo/client";

export interface ApiResponse<T> {
	data?: T;
	loading: boolean;
	error?: Error;
}

export interface ReuseApiResponse<T, U> extends ApiResponse<T> {
	refetch?: () => Promise<ApolloQueryResult<U>>;
}