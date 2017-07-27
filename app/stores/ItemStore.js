import {EventEmitter} from 'events';
import dispatcher from '../dispatcher.js';

class ItemStore extends EventEmitter {
  constructor() {
    super();
    this.items =
    [{
        name: 'Toffee',
        price: '£12.00',
      },
      {
        name: 'Chesnut',
        price: '£2.30',
      },
      {
        name: 'Cup',
        price: '£4.30',
      },
      {
        name: 'Banana',
        price: '£0.50',
      },
      {
        name: 'Rabbit',
        price: '£35',
      },
      {
        name: 'Peanut',
        price: '£0.50',
      },
      {
        name: 'Squirrel',
        price: '£5',
      },
      {
        name: 'Mordor',
        price: '£95',
      }
    ];
  }

  createItem(name){
    this.items.push({
      name,
      price: '£12.30'
    });
    this.emit('change');
  }

  deleteItem(name){

    const itemNo = this.items.findIndex((item, index)=>{
      // console.log(item.name, index, name);
      return item.name === name;
    });
    if(itemNo >=0) this.items.splice(itemNo, 1);
    this.emit('change');
  }

  getItems(){
    return this.items;
  }

  handleActions(action) {
    switch (action.type) {
      case 'CREATE_ITEM': {
        this.createItem(action.text);
      }
      case 'DELETE_ITEM': {
        this.deleteItem(action.name);
      }
    }



  }


};

const itemstore = new ItemStore();
dispatcher.register(itemstore.handleActions.bind(itemstore));

export default itemstore;
