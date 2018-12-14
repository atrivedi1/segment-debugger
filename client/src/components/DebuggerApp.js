import React from 'react';
import EventStreamView from './EventStreamView';
import EventDetailView from './EventDetailView';
import EventSource from 'eventsource';

class DebuggerApp extends React.Component {
    state = {
        isLive: true,
        allEvents: [],
        selectedEvent: null,

    }

    componentDidMount () {  
        const evtSource = new EventSource('http://localhost:5000/event-stream');

        evtSource.addEventListener('message', (event) => {
            console.log("listening for events -->", event)
            this.setState((prevState) => ({
                allEvents: [JSON.parse(event.message)].concat(prevState.events)
            }))
        });
    }

    render() {
        return ( 
            <div>
                <h1>Debugger App</h1>
                <EventStreamView 
                    events={this.state.allEvents}
                />
                <EventDetailView />
            </div>
        )
    }
}

export default DebuggerApp;