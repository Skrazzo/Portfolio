import React from "react";
import PropTypes from "prop-types";
import plyr from "plyr";
import "plyr/dist/plyr.css";

class PlyrComponent extends React.Component {
    componentDidMount() {
        this.player = new plyr(".js-plyr", this.props.options);
        this.player.source = this.props.sources;
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    render() {
        return <video className="js-plyr plyr w-1"></video>;
    }
}

PlyrComponent.defaultProps = {
    options: {
        controls: [
            "play",
            "progress",
            "current-time",
            "duration",
            "fullscreen",
        ],
        i18n: {
            restart: "Restart",
            rewind: "Rewind {seektime}s",
            play: "Play",
            pause: "Pause",
            fastForward: "Forward {seektime}s",
            seek: "Seek",
            seekLabel: "{currentTime} of {duration}",
            played: "Played",
            buffered: "Buffered",
            currentTime: "Current time",
            duration: "Duration",
            volume: "Volume",
            mute: "Mute",
            unmute: "Unmute",
            enableCaptions: "Enable captions",
            disableCaptions: "Disable captions",
            download: "Download",
            enterFullscreen: "Enter fullscreen",
            exitFullscreen: "Exit fullscreen",
            frameTitle: "Player for {title}",
            captions: "Captions",
            settings: "Settings",
            menuBack: "Go back to previous menu",
            speed: "Speed",
            normal: "Normal",
            loop: "Loop",
        },
    },
    sources: {
        type: "video",
        sources: [
            {
                src: "",
                type: "video/mp4",
            },
        ],
    },
};

PlyrComponent.propTypes = {
    options: PropTypes.object,
    sources: PropTypes.object,
    source: PropTypes.func,
    destroy: PropTypes.func,
};

export default PlyrComponent;
