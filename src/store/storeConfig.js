import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/user'
import { create } from 'react-test-renderer'

const reducers = combineReducers({
    user: userReducer
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig