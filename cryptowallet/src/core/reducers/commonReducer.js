import actionTypes from '../actionTypes';
import { getUUID, cryptoCheck } from "../../utils";
import { setLang } from "../../utils/translate";

const initialState = {
    lang: 'en',
    application: null,
    data: null,
    uuid: getUUID(),
    check: cryptoCheck(),
    error: null
};

export default (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LANGUAGE:
            const { lang } = action;
            setLang(lang);
            return {...state, lang};
        case actionTypes.SET_DATA:
            const { data, application } = action;
            return {
                ...state,
                data,
                application
            };
        case actionTypes.SET_ERROR:
            return {
                ...state,
                error: action.error
            };
        case actionTypes.SET_APP:
            return {
                ...state,
                application: action.application
            };
        default:
            return state
    }
}