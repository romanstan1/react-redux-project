import React from 'react';
import Item from './Item.js';
import itemstore from '../../stores/ItemStore.js';
import * as ItemActions from '../../actions/ItemActions.js';

export default class ItemsIndex extends React.Component {

  constructor() {
    super();
    this.state = {
      items: itemstore.getItems()
    }
  }

  componentWillMount(){
    itemstore.on('change', ()=>{
      this.setState({
        items:itemstore.getItems()
      })
    });
  }

  createItem() {
    ItemActions.createItem(Date.now());
  }

  deleteItem(e) {
    console.log(e.target.value);
    ItemActions.deleteItem(e.target.value);
  }
  // <Item item={item} index={index} key={index} />

  render(){
    return(
      <div>
        <br/>
        ITEMS PAGE
        <br/>
        <button onClick={this.createItem.bind(this)}> Create Item </button>
        <br/>
        { this.state.items.map((item, index) =>
          <Item item={item} index={index} key={index} delete={this.deleteItem.bind(this)} />
        )}
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}
