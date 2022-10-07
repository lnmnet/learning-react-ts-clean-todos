import { gql, useQuery } from "@apollo/client";
import { TodosApiRepository } from "../../../../../application-business-rules/use-cases/repositories/todos-repository";
import { ReuseApiResponse } from "../../../../../enterprise-bussiness-rules/entities/api-response/lib/api-response";
import { Todo, GetTodoListQuery } from "../../../../../types/graphTypes";

const GET_DOGS = gql`
	query GetTodos {
		todoList {
			id
			title
		}
	}
`

export class TodoApi implements TodosApiRepository {
	getTodoList(): ReuseApiResponse<Todo[], GetTodoListQuery> {
		
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const { data, loading } = useQuery(GET_DOGS)

		return {
			loading: loading,
			data: data?.todoList,
		}
	}
	
}