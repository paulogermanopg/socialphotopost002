import { ADD_POST, ADD_COMMENT } from './actionTypes'
import axios from 'axios'

export const addPost = post => {
    return dispatch => {
        axios({
            url: 'uploadImage',
            baseURL: 'https://us-central1-socialpost-28bd9.cloudfunctions.net',
            method: 'post',
            data: {
                image: post.image.base64
            }
        })
            .catch(err => console.log(err))
            .then(res => {
                post.image = res.data.imageUrl
                axios.post('/posts.json', { ...post })
                    .catch(err => console.log(err))
                    .then(res => console.log(res.data))
            })
        
    }
    // return {
    //     type: ADD_POST,
    //     payload: post
    // }
}

export const addComment = comment => {
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}