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
            events: events.map((val, ind) => {
                return {
                    id: ind + 1,
                    is_entry: false,
                    ...val
                }
            })
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

const changeEntry = (_evtID) => {
    function request(evtID) {
        return {
            type: eventConsts.ON_ENTRY_CHANGE, evtID
        }
    }

    return dispatch => {
        dispatch(request(_evtID));
    }
}

const eventActions = {
    requestEvents,
    changeEntry
};

export default eventActions;