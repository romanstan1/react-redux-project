import React from 'react';

import Header from './Header';

export default class HomeIndex extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "This is the Home Page!",
    };
  }

  changeTitle(e) {
    this.state.title = e.target.value;
    this.setState({title: e.target.value});
  }

  render(){
    return(
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
      </div>
    );
  }
}
