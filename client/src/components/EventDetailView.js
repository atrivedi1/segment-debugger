import React from 'react';
import EventDetailControl from './EventDetailControl';

class EventDetailView extends React.Component {

    render() {
        return ( 
            <div>
                <h3>Event Detail</h3>
                <EventDetailControl />
            </div>
        )
    }
}

export default EventDetailView;