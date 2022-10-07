import React from 'react'
import { TodoListController } from '../../../../../../interface-adapters/controllers/todo-list-controller'
import { TodoItems } from './todo-items'

type todoListProps = {
	controller: TodoListController
}

export default function TodoListComponent({ controller }: todoListProps) {

	const viewModel = controller.getTodoListViewModel()
	const data = viewModel.data
	
	return (
		<>
			{data && data?.todoList.length ? (
				<TodoItems items={data.todoList}/>
			) : (
				<div>No Data</div>
			)}
		</>
	)
}
