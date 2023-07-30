import { createStore } from './core.js'

// createStore sẽ nhận 1 tham số đầu vào là reducer nên import vào
import reducer from './reducer.js'
import withLogger from './logger.js'

// Dùng destructuring để nhận ra cái mà createStore return
const { attach, connect, dispatch } = createStore(withLogger(reducer))

// Để dispatch là biến global
window.dispatch = dispatch

export {
    attach,
    connect
}