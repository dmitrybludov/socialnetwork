/*let store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }

}*/

export default class {
    constructor (defaultStore) {
        this._state = defaultStore;
        this._observers = [];
    }

    getState = () => {
        return this._state;
    }

    _callSubscribers() {
        console.log('state changed');
        this._observers.forEach(s => s(this));
    }

    addPost = () => {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscribers();
    }

    updateNewPostText = (newText) => {
        this._state.profilePage.newPostText = newText;
        this._callSubscribers();
    }

    subscribe = (observer) => {
        this._observers.push(observer);
    }

    unsubscribe = observer => {
        const index = this._observers.findIndex(observer);
        if(index !== -1) {
            this._observers.splice(index, 1);
        }
    }

}
