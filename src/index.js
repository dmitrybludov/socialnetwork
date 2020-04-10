import React from 'react';
import * as serviceWorker from './serviceWorker';
import Store from "./Redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const initStore = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: "it's my first post", likesCount: 23},
            {id: 3, message: "bla-bla-bla", likesCount: 4},
        ],
        newPostText: 'it-kamasutra.com'
    },

    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ],

        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'}
        ]
    }
}

const store = new Store(initStore);

let rerenderEntireTree = (store) => {

    console.log(store);
    const state = store.getState();
    ReactDOM.render(
            <App
                state={state}
                addPost={store.addPost}
                updateNewPostText={store.updateNewPostText}
            />,
        document.getElementById('root')
    )
}

//initStore -> connect(store => ({ item: store.item })) -> ReactComponent1
    // ^    -> connect(store => ({ item: store.item })) -> ReactComponent2
    // |                                                          |
    // L____ action::dispatch({type: 'SET_ITEM', value: 0}) ____ /

rerenderEntireTree(store);


   // -------store -----  componet
    //|                   /      \
    //|               comp2      
   // |               comp3
   // |------------> connect(() => state, sctions.bind(dispatch))(comp4)



store.subscribe(rerenderEntireTree);
store.subscribe(rerenderEntireTree);
store.subscribe(rerenderEntireTree);
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
