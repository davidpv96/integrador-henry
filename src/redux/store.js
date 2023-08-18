import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer' // Importa tus reductores aquí
import thunkMiddleware from 'redux-thunk'

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;



// Crear el store
const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
    );

export default store;