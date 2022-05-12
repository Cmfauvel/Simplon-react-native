import { action_bug } from '../types/actions.type'

const initialState: {bugs: Array<action_bug["payload"]>} = {
    bugs: []
}

const bugsReducer = ( state = initialState, action: action_bug) => {
    switch (action.type) {
        case 'ADD_BUG':
            state.bugs.push(action.payload)
            return {
                ...state
            }
        case 'DELETE_BUG':
            state.bugs.forEach((bug ,index: number) => {
                if(action.payload.id === bug.id){
                    state.bugs.splice(index, 1)
                }
            })
            return {
                ...state
            }            ;
        default:    
            return {
                ...state
            }

    }
}

export default bugsReducer