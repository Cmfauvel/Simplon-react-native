import { action_ressource } from "../types/actions.type";

export const ressourceToAdd = (ressource: action_ressource) => ({
    type: 'ADD_RESSOURCE',
    payload: ressource
})

export const ressourceToDelete = (id : action_ressource['payload']['id']) => ({
    type: 'DELETE_RESSOURCE',
    payload: id
})