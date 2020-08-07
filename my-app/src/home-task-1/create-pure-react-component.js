import React from 'react';

export class CreateReactPureComponent extends React.Component {
  constructor() {
    super();
    this.state ={
      name: 'React.PureComponent'
    }
  }

  render() {
    return (
      <div> hello from {this.state.name} </div >
    )
  }
}