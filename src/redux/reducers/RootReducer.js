import { combineReducers } from "redux"
import LayoutReducer from "./LayoutReducer"
import MapReducer from "./MapReducer";

const RootReducer = combineReducers({
    layout: LayoutReducer,
    map: MapReducer,
});

export default RootReducer;