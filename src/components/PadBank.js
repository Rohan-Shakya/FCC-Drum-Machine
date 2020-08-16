import React from 'react';
import { DrumPad } from './DrumPad';

export class PadBank extends React.Component {
  render() {
    return this.props.bank.map((drumObj) => {
      return (
        <DrumPad
          key={drumObj.id}
          clipId={drumObj.id}
          clip={drumObj.url}
          keyTrigger={drumObj.keyTrigger}
          keyCode={drumObj.keyCode}
          updateDisplay={this.props.updateDisplay}
        />
      );
    });
  }
}
