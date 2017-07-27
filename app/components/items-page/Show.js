import React from 'react';
import {Link} from 'react-router-dom';

export default class Show extends React.Component {

  // <Link to={`/items/${ this.props.location.state.item.name }`}>Create Idea</Link>


  render(){
    return(
      <div>
        <br/>
        <br/>
        <br/>

        <h2>{this.props.location.state.name}</h2>
        <h2>{this.props.location.state.price}</h2>
        <h3> SHOW PAGE </h3>
        <br/>
        <br/>
        <br/>


      </div>
    );
  }
}
