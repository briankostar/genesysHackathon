import React, { Component } from 'react';

class Transcript extends Component {
    playVideo = () => {
        // console.log('playvid', this.refs.videoPlayer)
        // this.refs.videoPlayer.play()
        if (this.refs.videoPlayer.paused)
            this.refs.videoPlayer.play()
        else
            this.refs.videoPlayer.pause();
    }
    render() {
        return (
            <div>
                <video ref='videoPlayer' onClick={this.playVideo}>
                    <source src="./Transcript.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        )
    }
}

export default Transcript;