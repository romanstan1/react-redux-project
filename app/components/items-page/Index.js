import React from 'react';
import Item from './Item.js';
import itemstore from '../../stores/ItemStore.js';

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

  render(){
    return(
      <div>
        <br/>
        ITEMS PAGE
        <br/>
        <br/>
        { this.state.items.map((item, index) =>
          <Item item={item} index={index} key={index} />
        )}
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}
