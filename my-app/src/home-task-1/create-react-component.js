import React from 'react';

export class CreateReactComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React.Component'
    }
  }

  render() {
    return (
      <div> hello from {this.state.name}</div >
    )
  }
}