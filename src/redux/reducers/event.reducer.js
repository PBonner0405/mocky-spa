import { eventConsts } from '../../consts';

const initialState = {
    events: [],
    is_loaded: false,
};

export function bills(state = initialState, action) {

    switch(action.type) {
        case eventConsts.ON_EVENT_LOADED:
            return {
                ...state,
                is_loaded: true
            }
        default:
            return state;
    }
}

export default bills;