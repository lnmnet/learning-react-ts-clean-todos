import { ReuseApiResponse } from "../../../../../enterprise-bussiness-rules/entities/api-response/lib/api-response";
import { Todo, GetTodoListQuery } from "../../../../../types/graphTypes";
import { TodosApiRepository } from "../../../repositories/todos-repository";
import { TodoUseCase } from "../../../todo-use-case/lib/todo-use-case";

export class TodoInteractor implements TodoUseCase {

	constructor(private readonly todoApiRepository: TodosApiRepository) {}

	getTodoList(): ReuseApiResponse<Todo[], GetTodoListQuery> {
		return this.todoApiRepository.getTodoList()
	}
	
}