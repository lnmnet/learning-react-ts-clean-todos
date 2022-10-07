import { ReuseApiResponse } from "../../../../../enterprise-bussiness-rules/entities/api-response/lib/api-response";
import { GetTodoListQuery, Todo } from "../../../../../types/graphTypes";

export interface TodosApiRepository {
	getTodoList(): ReuseApiResponse<Todo[], GetTodoListQuery>;
}