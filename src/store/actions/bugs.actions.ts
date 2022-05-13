import { action_bug } from "../types/actions.type";

export const bugToAdd = (bug: action_bug) => ({
    type: 'ADD_BUG',
    payload: bug
})

export const bugToDelete = (id : action_bug['payload']['id']) => ({
    type: 'DELETE_BUG',
    payload: id
})

export const bugToUpdate = (payload: action_bug) => ({
    type: 'UPDATE_BUG',
    payload: payload
})