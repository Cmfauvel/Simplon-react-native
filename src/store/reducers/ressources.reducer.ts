import { action_ressource } from '../types/actions.type'

const initialState : { ressource: Array<action_ressource["payload"]> }= {
    ressource : [
        {
            id: '46',
            title: 'title',
            description: 'description',
            author: 'auteur',
            categories: ['categorie'],
            url: 'url.fr'
        },
        {
            id: '67',
            title: 'title1',
            description: 'description1',
            author: 'auteur1',
            categories: ['categorie1'],
            url: 'url.fr1'
        },{
            id: '41',
            title: 'title',
            description: 'description',
            author: 'auteur',
            categories: ['categorie'],
            url: 'url.fr'
        },
        {
            id: '61',
            title: 'title1',
            description: 'description1',
            author: 'auteur1',
            categories: ['categorie1'],
            url: 'url.fr1'
        },{
            id: '42',
            title: 'title',
            description: 'description',
            author: 'auteur',
            categories: ['categorie'],
            url: 'url.fr'
        },
        {
            id: '66',
            title: 'title1',
            description: 'description1',
            author: 'auteur1',
            categories: ['categorie1'],
            url: 'url.fr1'
        },{
            id: '1',
            title: 'title1',
            description: 'description1',
            author: 'auteur1',
            categories: ['categorie1'],
            url: 'url.fr1'
        },
        {
            id: '2',
            title: 'title1',
            description: 'description1',
            author: 'auteur1',
            categories: ['categorie1'],
            url: 'url.fr1'
        },
        {
            id: '3',
            title: 'title1',
            description: 'description1',
            author: 'auteur1',
            categories: ['categorie1'],
            url: 'url.fr1'
        },
        {
            id: '4',
            title: 'title1',
            description: 'description1',
            author: 'auteur1',
            categories: ['categorie1'],
            url: 'url.fr1'
        },
    ]
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