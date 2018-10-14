import React, { Component } from 'react';

const imgStyle = {
    height: '450px'
};

class Statistics extends Component {
    render() {
        return (
            <div>
                <img src="./stats1.png" style={imgStyle} />
            </div>
        )
    }
}

export default Statistics;