import React from 'react';
import { Button, Alert } from 'evergreen-ui';
import EventStreamControl from './EventStreamControl';

class EventStreamView extends React.Component {
    renderEvents () {
        console.log(this.props.events)
    }

    render() {
        return ( 
            <div>
                <h3>Event Stream</h3>
                <EventStreamControl/>
                {this.renderEvents()}
            </div>
        )
    }
}

export default EventStreamView;