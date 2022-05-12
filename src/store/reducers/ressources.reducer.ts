import { action_ressource } from '../types/actions.type'

const initialState : { ressource: Array<action_ressource["payload"]> }= {
    ressource : []
}

const ressourceReducer = ( state = initialState, action: action_ressource) => {
    switch (action.type) {
        case "ADD_RESSOURCE":
            state.ressource.push(action.payload)
            return {
                ...state
            }
        case "DELETE_RESSOURCE":
            state.ressource.forEach((ressource ,index: number) => {
                if(action.payload.id === ressource.id){
                    state.ressource.splice(index, 1)
                }
            })
        default:
            return {
                ...state
            }
    }
}

export default ressourceReducer