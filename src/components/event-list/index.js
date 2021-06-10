import React from 'react';
import Event from './event';

const EventList = (props) => {

    const { events } = props;

    return <div>
        {
            events.map((data) => {
                return <Event key = { data.eventID } payload = {data} />
            })
        }
    </div>
};

export default EventList