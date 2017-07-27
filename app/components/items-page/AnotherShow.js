import React from 'react';
import itemstore from '../../stores/ItemStore.js';

export default class AnotherShow extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     items: itemstore.getItems(),
  //     value: "default value",
  //     update: this.updater
  //   };
  // }


  componentDidUpdate(){
    // console.log('did update', this);
    // setTimeout(this.banana.bind(this), 1000);
    // this.banana;
  }

  banana(){
    // console.log(this,'banana logged');
    // console.log(this.state.value);
    // const value = this.state.value ++

    // this.setState({value: this.state.value + 1})
  }
  // componentWillMount(){
  //   console.log('will mount');
  //   this.setState({items:itemstore.getItems()})
  // }
  // componentWillUnmount(){
  //   console.log('will unmount');
  // }
  //
  // changeValue(e){
  //   this.setState({value: e.target.value})
  // }
  //
  // handleSubmit(){
  //   itemstore.createItem(this.state.value);
  // }

  render(){
    // console.log('this renderer',  this);
    // console.log(this.props.match.params.anothershow);
    // this.props.match.params.anothershow
    // console.log('this in render', this);
    // <h3 onClick={this.printer.bind(this)} > ANOTHER SHOW PAGE</h3>
    return(
      <div className="item">
        <br/>
        <br/>
        <br/>
        <h4>{this.state.value} </h4>
        <br/>

      </div>
    );
  }
}


// <input type="text" onChange={this.changeValue.bind(this)}/>
// <input type="button" value="SUBMIT  " onClick={this.handleSubmit.bind(this)}/>
//onChange={this.props.changeTitle}
