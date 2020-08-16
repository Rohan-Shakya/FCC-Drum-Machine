import React from 'react';

const activeStyle = {
  backgroundColor: 'orange',
  boxShadow: '0 3px orange',
  transform: 'scale(0.95)',
};

const inactiveStyle = {
  backgroundColor: 'grey',
  boxShadow: '3px 3px 5px black',
};

export class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padStyle: inactiveStyle,
    };
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.activatePad = this.activatePad.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }
  activatePad() {
    if (this.state.padStyle.backgroundColor === 'orange') {
      this.setState({
        padStyle: inactiveStyle,
      });
    } else {
      this.setState({
        padStyle: activeStyle,
      });
    }
  }
  playSound(e) {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.activatePad();
    setTimeout(() => this.activatePad(), 200);
    this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
  }
  render() {
    return (
      <div
        id={this.props.clipId}
        onClick={this.playSound}
        className='drum-pad'
        style={this.state.padStyle}
      >
        <audio
          className='clip'
          id={this.props.keyTrigger}
          src={this.props.clip}
        ></audio>
        {this.props.keyTrigger}
      </div>
    );
  }
}
