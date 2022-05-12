import { action_bug } from "../types/actions.type";

export const ressourceToAdd = (bug: action_bug) => ({
    type: 'ADD_BUG',
    payload: bug
})

export const ressourceToDelete = (id : action_bug['payload']['id']) => ({
    type: 'DELETE_BUG',
    payload: id
})