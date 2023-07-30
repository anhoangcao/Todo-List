
export default function html([first, ...strings], ...values) {
    return values.reduce(
        // Concat -> noi mang
        // strings.shift() -> Lay ptu dau tien va xoa luon no
        (acc, cur) => acc.concat(cur, strings.shift()),
        [first] // Gia tri khoi tao
    )
    .filter(x => x && x !== true || x === 0)
    .join('')
}


export function createStore(reducer) {
    // Return lai du lieu ban dau cua Store va luu vao state
    let state = reducer()
    const roots = new Map()

    // Ham de lap qua roots de render ra view
    function render() {
        // component -> thanh phan chua view
        for (const [root, component] of roots) {
            const output = component()
            root.innerHTML = output
        }
    }

    return {
        attach(component, root) {
            roots.set(root, component)
            render()
        },
        connect(selector = state => state) {
            // props: du lieu muon chuyen vao component
            return component => (props, ...args) =>
                component(Object.assign({}, props, selector(state), ...args))

        },
        dispatch(action, ...args)  {
            state = reducer(state, action, args)
            render()
        }
    }
}