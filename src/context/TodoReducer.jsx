const TodoReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "EDIT_TODO":
      return {
        ...state,
        edit: { todo: action.payload, isedit: true },
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id == action.payload.id
            ? { ...todo, id: action.payload.id, text: action.payload.text }
            : todo
        ),
        edit: { todo: {}, isedit: false },
      };
  };
};

export default TodoReducer;
