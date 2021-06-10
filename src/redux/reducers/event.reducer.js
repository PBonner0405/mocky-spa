import { eventConsts } from '../../consts';

const initialState = {
    events: [],
    is_loaded: false,
};

export function event(state = initialState, action) {

    switch(action.type) {
        case eventConsts.ON_EVENT_RECEIVED:
            return {
                events: action.events,
                is_loaded: true
            }
        default:
            return state;
    }
}

export default event;