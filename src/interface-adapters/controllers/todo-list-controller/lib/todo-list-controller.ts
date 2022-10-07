import { TodoUseCase } from "../../../../application-business-rules/use-cases/todo-use-case";
import { ApiResponse } from "../../../../enterprise-bussiness-rules/entities/api-response/lib/api-response";
import { TodoListPageViewModel } from "../../view-models/todo-list-view-model";

export class TodoListController {

	constructor (private readonly todoUseCase: TodoUseCase) {}

	getTodoListViewModel(): ApiResponse<TodoListPageViewModel> {
		const { loading, data } = this.todoUseCase.getTodoList()

		if (loading) {
			return { loading }
		}

		return {
			loading,
			data: {
				todoList: data!
			}
		}
	}
}