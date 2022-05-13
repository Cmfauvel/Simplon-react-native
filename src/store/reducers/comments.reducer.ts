import { action_comment } from "../types/actions.type"

const initialState : { comments : Array<action_comment['payload']> } = {
    comments : []
}

const commentsReducer = ( state = initialState, action: action_comment) => {
    switch (action.type) {
        case "ADD_COMMENT":
            state.comments.push(action.payload)
            return {
                ...state
            }
        case "UPDATE_COMMENT":
            state.comments.forEach((comment ,index: number) => {
                if(action.payload.id === comment.id){
                    state.comments.splice(index, 1,comment)
                }
            })
            return {
                ...state
            }
        case "DELETE_COMMENT":
            state.comments.forEach((comment ,index: number) => {
                if(action.payload.id === comment.id){
                    state.comments.splice(index, 1)
                }
            })
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}

export default commentsReducer