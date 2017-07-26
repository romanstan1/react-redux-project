import React from 'react';
import itemstore from '../../stores/ItemStore.js';

export default class AnotherShow extends React.Component {
  constructor() {
    super();
    this.state = {
      items: itemstore.getItems()
    };
    console.log('this in constructor', this);

    // this.state = props.match.params.anothershow;
  }

  printer(){
    this.setState({value:itemstore.getItems()})
    console.log('this in printer', this);

  }

  render(){
    // console.log(this.props.match.params.anothershow);
    // this.props.match.params.anothershow
    console.log('this in render', this);
    return(
      <div className="item">
        <br/>
        <br/>
        <br/>
        <br/>
        <h3 onClick={this.printer.bind(this)} > ANOTHER SHOW PAGE</h3>
      </div>
    );
  }
}


//onChange={this.props.changeTitle}
