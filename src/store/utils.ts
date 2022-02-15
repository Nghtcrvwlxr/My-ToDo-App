import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {AppDispatch} from "./store";
import {RootState} from "./reducer";

export const useTypedDispatch = () => useDispatch<AppDispatch>();

export const useTypedSelector = <TSelected>(
    selector: (state: RootState) => TSelected,
    eqFunc: (l:TSelected, r:TSelected) => boolean = shallowEqual
) => useSelector(selector, eqFunc);
