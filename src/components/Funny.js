import React, { Component } from 'react';

class Funny extends Component {
    constructor(props) {
        super(props);
        this.state = { meme: "./meme1.jpg", index: 1 }
    }
    loadMeme = () => {
        let memeArray = [
            "./meme1.jpg",
            "./meme2.jpg",
            "./meme3.jpg"
        ]

        this.setState((prev) => {
            let nextIndex = (prev.index >= 3) ? 1 : (prev.index + 1)
            return { meme: `./meme${nextIndex}.jpg`, index: nextIndex }
        })

    }

    render() {
        return (
            <div className="container">
                <img onClick={this.loadMeme} src={this.state.meme} />
            </div>
        )
    }
}

export default Funny;