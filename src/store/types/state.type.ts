import { action_bug, action_comment, action_ressource } from "./actions.type";

export interface IRootState {
    ressourceReducer?: {
        ressources: action_ressource['payload']
    },
    bugsReducer?: {
        bugs: action_bug['payload']
    },
    commentsReducer?: {
        comments: action_comment['payload']
    }

}