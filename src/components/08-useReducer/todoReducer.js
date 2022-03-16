export const todoReducer = ( state = [], {type, payload} ) => {
    switch (type) {
        case 'add':
            return [...state, payload];
        case 'remove':
            return state.filter(todo => todo.id !== payload);
        case 'completed':
            return state.map(todo =>
                (todo.id === payload)
                ? {...todo, done: !todo.done}
                : todo
            );
        case 'completed-old':
            return state.map(todo => {
                if(todo.id === payload) return { ...todo, done: !todo.done}
                else return todo;
            });
        default:
            return state;
    }
}