import React from 'react';
import {Link} from 'react-router-dom';
import Show from './Show.js';

export default class ItemShow extends React.Component {


  render(){
    console.log(this.props);
    return(
      <div className="item">
        <Link to={{
          pathname: '/items/show',
          state: this.props.item
        }}>
          <div> {this.props.item.name}<br/> {this.props.item.price} <br/> {this.props.index} </div>

        </Link>
        <button onClick={this.props.delete} value={this.props.item.name} > Delete Item </button>


      </div>
    );
  }
}
