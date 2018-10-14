import React, { Component } from 'react';

const imgStyle = {
    // height: '450px'
};

class Statistics extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="is-size-3"> Statistics </h2>
                <h4 className="is-size-4">Daily calls goal 72/100:</h4>
                <div className="columns">
                    <div className="column"><progress className="progress is-success is-small" value="72" max="100">72%</progress></div>
                </div>
                <img src="./stats1.png" style={imgStyle} />
            </div>
        )
    }
}

export default Statistics;