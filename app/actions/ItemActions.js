import dispatcher from '../dispatcher'


export function createItem(text) {
  dispatcher.dispatch({
    type: "CREATE_ITEM",
    text
  });
}

export function deleteItem(name) {
  dispatcher.dispatch({
    type: "DELETE_ITEM",
    name
  });
}
