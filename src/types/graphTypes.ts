
export type Todo = {
	__typename?: 'Todo';
	// category: string;
	id?: string;
	link?: string;
	// publicationStartDate: string;
	title: string;
}

export type GetTodoListQuery = {
	__typename?: 'Query';
	todoList: Array<{
		__typename?: 'News';
		id?: string | null;
		title: string;
		// category: string;
		// publicationStartDate: string;
	}>
}

