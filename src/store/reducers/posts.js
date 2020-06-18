import { ADD_POST } from "../actions/actionTypes"

const initialState = {
    posts: [{
        id: Math.random(),
        nickname: 'Júlia Louise Temmaori',
        email: 'julia_louise_T@gmail.com',
        image: require('../../../assets/imgs/fence.jpg'),
        comments: [{
            nickname: 'Vitor Temmaori',
            comment: 'Vou trabalhar, boa foto!'
        },{
            nickname: 'Cristofer Kairós',
            comment: 'Fui preso pq viajei no tempo, me ajuda.'
        }]
    },{
        id: Math.random(),
        nickname: 'Santiago Chronos',
        email: 'cachorroloucodonovogoverno@gmail.com',
        image: require('../../../assets/imgs/bw.jpg'),
        comments: []
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        default:
            return state
    }
}

export default reducer
