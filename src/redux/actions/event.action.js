import { eventConsts } from '../../consts';

const onEventRequested = () => {
    
    function request() {
        return {
            type: eventConsts.ON_EVENT_REQUESTED
        }
    }

    function success(events) {
        return {
            type: eventConsts.ON_EVENT_LOADED,
            events
        };
    }

    return dispatch => {
        dispatch(request());

        // Make API Call to get Events
    }

}

export const eventActions = {
    onEventRequested
};

export default eventAction;