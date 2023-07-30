const TODOS_STORAGE_KEY = 'todos';

export default {
    get() {
        // Phương thức lấy dữ liệu từ Local Storage
        return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || [];
    },
    set(todos) {
        // Phương thức lưu dữ liệu vào Local Storage
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
    }
};
