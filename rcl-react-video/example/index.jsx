/* @flow */

// Babel
import "babel-polyfill";

// React
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

// Containers
import VideoContainer from '../src/containers/videoContainer';

// VJS Plugins
import nleControls from './plugins/videojs-nle-controls.min';

let plugins = [
  {
    plugin: nleControls,
    name: 'nleControls',
    options: {
      framerate: 24.0,
      smpteTimecode: true,
      frameControls: true
    }
  }
]

// VJS Options
let playerOptions = {
  "controls": true,
  "inactivityTimeout": false,
  "fluid": true
}

ReactDOM.render(
  <VideoContainer fileUrl={'/Users/seanm/Box Sync/Default Sync Folder/mediate/media/demo.mp4'} mime={'video/webm'} playerOptions={playerOptions} plugins={plugins}/>, // These props could also be received from a Redux store - just set the store up here
    document.getElementById('test'));
