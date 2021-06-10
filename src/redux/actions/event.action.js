import { eventConsts, statusConsts } from '../../consts';
import { getEntries } from '../../service';

const requestEvents = () => {
    
    function request() {
        return {
            type: eventConsts.ON_EVENT_REQUESTED
        }
    }

    function success(events) {
        return {
            type: eventConsts.ON_EVENT_RECEIVED,
            events: [...events]
        };
    }

    function failed() {
        return {
            type: eventConsts.ON_EVENT_LOAD_FAILED
        }
    }

    return async dispatch => {
        dispatch(request());

        // Make API Call to get Events
        const response = await getEntries();

        if(response.status === statusConsts.SUCCESS ) {
            dispatch(success(response.data));
        } else {
            dispatch(failed());
        }

    }

}

const eventActions = {
    requestEvents
};

export default eventActions;