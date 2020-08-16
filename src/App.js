import React from 'react';

import { PadBank } from './components/PadBank';
import './App.css';

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPadBank: bankOne,
      sliderVal: 0.3,
      display: 'Hey',
    };
    this.adjustVolume = this.adjustVolume.bind(this);
    this.displayClipName = this.displayClipName.bind(this);
  }
  displayClipName(name) {
    this.setState({
      display: name,
    });
  }

  adjustVolume(e) {
    this.setState({
      sliderVal: e.target.value,
    });
    const clips = [].slice.call(document.getElementsByClassName('clip'));
    clips.forEach((sound) => {
      sound.volume = this.state.sliderVal;
    });
  }

  render() {
    return (
      <div className='App'>
        <div id='drum-machine'>
          <h1>Drum Machine</h1>
          <div id='display'>
            <p>{this.state.display}</p>

            <div className='volume-slider'>
              <input
                type='range'
                min='0'
                max='1'
                step='0.01'
                value={this.state.sliderVal}
                onChange={this.adjustVolume}
              />
            </div>
          </div>
          <div className=''></div>
          <div className='drum'>
            <PadBank
              bank={this.state.currentPadBank}
              updateDisplay={this.displayClipName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
