import React from 'react';
import { Button, TextInputField } from 'evergreen-ui';

class EventStreamControl extends React.Component {
    renderEvents () {
        console.log(this.props.events)
    }

    handlePauseStream () {
        console.log("pressed pause button")
    }

    handleLiveStream () {
        console.log("pressed live button")
    }

    render() {
        return ( 
            <div>
                <Button
                    onClick={this.handlePauseStream}
                >
                    Pause
                </Button>
                    
                <Button
                    onClick={this.handleLiveStream}
                >
                    Live
                </Button>
                <TextInputField label='search'/>
            </div>
        )
    }
}

export default EventStreamControl;