export type action_bug = {
    payload : {
        title: string,
        description: string,
        author: string,
        id : string
    },
    type: string
}

export type action_ressource = {
    payload : {
        title: string,
        url: string,
        description: string,
        author: string,
        categories : string[],
        id : string
    },
    type: string
}