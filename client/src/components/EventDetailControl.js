import React from 'react';
import { Button, Alert } from 'evergreen-ui';

class EventDetailControl extends React.Component {
    renderEvents () {
        console.log(this.props.events)
    }

    handlePrettyView () {
        console.log("handling pretty view")
    }

    handleRawView () {
        console.log("handling raw view")
    }

    render() {
        return ( 
            <div>
                <Button
                    onClick={this.handlePrettyView}
                >
                    Pretty
                </Button>
                <Button
                    onClick={this.handleRawView}
                >
                    Raw
                </Button>
            </div>
        )
    }
}

export default EventDetailControl;