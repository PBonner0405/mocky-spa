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
        case eventConsts.ON_ENTRY_CHANGE:
            return {
                ...state,
                events: state.events.map((val) => {
                    if(val.eventID === action.evtID) {
                        return {
                            ...val,
                            is_entry: !val.is_entry
                        }
                    } else return {...val}
                })
            }
        default:
            return state;
    }
}

export default event;