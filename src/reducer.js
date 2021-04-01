import {createStore}from 'redux'

const initialState={
    users:[ {
        name:'mahmuod',
        age:26,
        address:'assuit'
    }, {
        name:'Ahmed',
        age:30,
        address:'Cairo'
    }, {
        name:'ali',
        age:44,
        address:'assuit'
    }, {
        name:'hassan',
        age:20,
        address:'Giza'
    }, {
        name:'mohammed',
        age:19,
        address:'Aswan'
    },]
}



const reducer= (state = initialState, { type, value }) => {
    switch (type) {

    case 'addUser':
        return { ...state,users:[...state.users,{
            ...value
        }]   };
       case 'removeUser':
           return {...state,users:state.users.slice(0,-1)}


    default:
        return state
    }
}



export default createStore(reducer,initialState)