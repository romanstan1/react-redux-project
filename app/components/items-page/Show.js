import React from 'react';
import {Link} from 'react-router-dom';

export default class Show extends React.Component {



  render(){
    return(
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>{this.props.location.state.item.name}</h2>
        <h2>{this.props.location.state.item.price}</h2>

        <Link to={`/items/${ this.props.location.state.item.name }`}>Create Idea</Link>

      </div>
    );
  }
}
