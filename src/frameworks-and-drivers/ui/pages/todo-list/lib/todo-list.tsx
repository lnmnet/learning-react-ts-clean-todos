import React from 'react'
import { TodoInteractor } from '../../../../../application-business-rules/use-cases/interactors/todos-interactor'
import { TodoListController } from '../../../../../interface-adapters/controllers/todo-list-controller'
import { TodoApi } from '../../../../external-interfaces/app-sync/todos-api'
import TodoListComponent from './todo-list-component/todo-list-component'

export default function TodoList() {

	const todoApiRepository = new TodoApi()
	const todoUseCase = new TodoInteractor(todoApiRepository)
	const todoListController = new TodoListController(todoUseCase)

	return (
		<TodoListComponent controller={todoListController} />
	)
}
