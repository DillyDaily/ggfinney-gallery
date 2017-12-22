import axios from 'axios';

export const GET_ITEMS_PENDING = "GET_ITEMS_PENDING"
export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS"
export const ADD_ITEM_PENDING = "ADD_ITEM_PENDING"
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS"
export const EDIT_ITEM_PENDING = "EDIT_ITEM_PENDING"
export const EDIT_ITEM_SUCCESS = "EDIT_ITEM_SUCCESS"
export const REMOVE_ITEM_PENDING = "REMOVE_ITEM_PENDING"
export const REMOVE_ITEM_SUCCESS = "REMOVE_ITEM_SUCCESS"

export const getItems = () => {
    return async (dispatch) => {
        dispatch({ type: GET_ITEMS_PENDING })
        let items = await axios.get('http://localhost:8080/shop')
        dispatch({ 
            type: GET_ITEMS_SUCCESS,
            payload: items
        })
    }
}
export const addItem = (newItem) => {
    return async (dispatch) => {
        dispatch({ type: ADD_ITEM_PENDING })
        let items = await axios.post('http://localhost:8080/admin/item/new', newItem)
        dispatch({ 
            type: ADD_ITEM_SUCCESS,
            payload: items
        })
    }
}
export const editItem = (item) => {
    return async (dispatch) => {
        dispatch({ type: EDIT_ITEM_PENDING })
        let items = await axios.patch(`http://localhost:8080/admin/item/edit/${item.name}`, item)
        dispatch({ 
            type: EDIT_ITEM_SUCCESS,
            payload: items
        })
    }
}
export const deleteItem = (id) => {
    return async (dispatch) => {
        dispatch({ type: REMOVE_ITEM_PENDING })
        let items = await axios.delete(`http://localhost:8080/admin/delete/item/${id}`)
        dispatch({ 
            type: REMOVE_ITEM_SUCCESS,
            payload: items.data
        })
    }
}