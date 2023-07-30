import storage from "./util/storage.js";

const init = {
    todos: storage.get(),
    tilter: 'all',
    tilters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed,
    }
}

const actions = {
    add({ todos }, title) {
        if(title) {
            todos.push({ title, completed: false })
            storage.set(todos)
        }
    },
    toggle({ todos }, index) {
        const todo = todos[index]
        todo.completed = !todo.completed
        storage.set(todos)
    },
    toggleAll({ todos }, completed) {
        todos.forEach(todo => todo.completed = completed)
        storage.set(todos)
    }
}

// Logic: Tùy vào action xử lý logic lại sửa lại state và return lại state mới
export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}