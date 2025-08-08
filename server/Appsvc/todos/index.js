import { todos } from '../../todos';

export default function getUserTodos(userId) {
  return todos.filter((todo) => todo.userId === userId);
}
