import React from 'react';

import Title from './Title';

export default class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "title",
    };
  }

  render(){
    return(
      <header>
        <Title title={this.props.title}/>
        <input value={this.props.title} onChange={this.props.changeTitle}/>
      </header>
    );
  }
}
