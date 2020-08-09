import React from 'react';

export class CreateReactPureComponent extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      name: 'React.PureComponent'
    }
  }

  render() {
    return (
      <div> hello from {this.state.name}. <strong>{this.props.test}</strong> </div >
    )
  }
}