import React, { Component } from 'react';
import '../css/bodycontext.css';

class BodyContext extends Component {
    render() {
        return (
            <div className = "bodyinfo">
                <p className = "p1"> Train. Track. Achieve.</p>
                <hr />
                <p className = "p2"><em>"Strength does not come from physical capacity. It comes from an indomitable will."</em></p>
                <p className = "p3"> -Mahatma Gandi</p>
            </div>
        )
    }
}


export default BodyContext;