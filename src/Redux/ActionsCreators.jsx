import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM, DELETE_ALL_ITEMS, DELETE_COMPLETED_ITEMS, DELETE_INCOMPLETE_ITEMS, MARK_ALL_COMPLETE,EDIT_ITEM } from './ActionsTypes';

export const addItem = (item) => ({ type: ADD_ITEM, payload: item });
export const deleteItem = (id) => ({ type: DELETE_ITEM, payload: id });
export const toggleItem = (id) => ({ type: TOGGLE_ITEM, payload: id });
export const deleteAllItems = () => ({ type: DELETE_ALL_ITEMS });
export const deleteCompletedItems = () => ({ type: DELETE_COMPLETED_ITEMS });
export const deleteIncompleteItems = () => ({ type: DELETE_INCOMPLETE_ITEMS });
export const markAllComplete = () => ({ type: MARK_ALL_COMPLETE });

export const editItem = (id, newTask) => ({ type: EDIT_ITEM, payload: { id, newTask } });
