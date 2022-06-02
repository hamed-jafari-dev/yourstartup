import { createStore } from "redux";
import menuReducer from "../Redux/reducers/menuReducer";

function configureStore(state = { showMenu: false }) {
    return createStore(menuReducer,state);
}
export default configureStore;
