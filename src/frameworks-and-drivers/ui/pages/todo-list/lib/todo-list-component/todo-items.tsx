import { Todo } from '../../../../../../types/graphTypes'

export const TodoItems = ({ items }: { items:Todo[] }) => (
	<ul>
		{items.map(todo => (
			<li 
				key={Math.random()}
				id={todo.id}
			>
				{todo.title}
			</li>
		))}
	</ul>
)
