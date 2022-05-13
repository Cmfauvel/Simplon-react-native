import { action_comment } from "../types/actions.type";

export const commentToAdd = ( comment : action_comment ) => ({
    type: 'ADD_COMMENT',
    payload: comment
})

export const commentToEdit = (comment : action_comment) => ({
    type: 'UPDATE_COMMENT',
    payload: comment
})

export const commentToDelete = (id: action_comment['payload']['id']) => ({
    type : 'DELETE_COMMENT',
    payload: id
})