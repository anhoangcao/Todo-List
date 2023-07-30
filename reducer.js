const init = {
    todos: [
        {
            title: 'Learn JavaScript',
            completed: false,
        },
        {
            title: 'Learn HTML, CSS',
            completed: true,
        }
    ]
}


// Logic: Tùy vào action xử lý logic lại sửa lại state và return lại state mới
export default function reducer(state = init, action, args) {
    switch(action) {

        default:
            return state;
    }
}