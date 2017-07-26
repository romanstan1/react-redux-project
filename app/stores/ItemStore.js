import {EventEmitter} from 'events';

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

  getItems(){
    return this.items;
  }


};

const itemstore = new ItemStore();
window.itemstore = itemstore;
export default itemstore;
