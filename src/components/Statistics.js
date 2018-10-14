import React, { Component } from 'react';

const imgStyle = {
    // height: '450px'
};

class Statistics extends Component {
    render() {
        return (
            <div className="container">
                <h4 className="is-size-4">Daily calls goal 72/100:</h4>
                <div class="columns">
                    <div class="column"><progress class="progress is-success is-small" value="72" max="100">72%</progress></div>
                </div>
                <img src="./stats1.png" style={imgStyle} />
            </div>
        )
    }
}

export default Statistics;