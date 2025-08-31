import { todos } from '../../todos.js';

export default function getUserTodos(userId) {
  return todos.filter((todo) => todo.userId === userId);
}
