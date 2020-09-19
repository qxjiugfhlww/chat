let store = {
    _state: {
        
        profilePage: {
            posts_data : [
                { id: 1, name: 'Dan Cooper', post: "first post ..123..." },
                { id: 2, name: 'Dan Cooper', post: "second post ..575..." },
                { id: 3, name: 'Dan Cooper', post: "another post ..1867..." },
                { id: 4, name: 'Dan Cooper', post: "another one post ..7653..." },
                { id: 5, name: 'Dan Cooper', post: "last post ..99..." },
            ],
            newPost: "value",
        },
        dialogsPage : {
    
            dialogs_data : [
                { id: 1, name: 'Alex' },
                { id: 2, name: 'John' },
                { id: 3, name: 'Jack' },
            ],
    
            chats_data : [
                { id: 1, message: "213213213213" },
                { id: 2, message: "213213213213" },
                { id: 3, message: "213213213213" },
    
            ],

            newMessageBody: "value"
        }
        
    },

    rerender(obj) {
        console.log("rerender")
    },
    subscribe(observer) {
        this.rerender = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        switch(action.type) {
            case ADD_POST: 
                this._state.profilePage.posts_data.push( { id: 5, post: this._state.profilePage.newPost } );
                this._state.profilePage.newPost = '';
                this.rerender(this); 
                break;
            
            case UPDATE_TEXT_POST:
                this._state.profilePage.newPost = action.text;
                this.rerender(this);
                break;

            case UPDATE_NEW_MESSAGE_BODY:
                this._state.dialogsPage.newMessageBody = action.text;
                this.rerender(this); 
                break;

            case SEND_MESSAGE:
                this._state.dialogsPage.chats_data.push({ id: 6, message: this._state.dialogsPage.newMessageBody});
                this._state.dialogsPage.newMessageBody = "";
                this.rerender(this); 
                break;
                
        }

    },
    
}

const ADD_POST = 'ADD-POST';

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';

export const updateTextPostActionCreator = (text) => {
    return {
        type: UPDATE_TEXT_POST,
        text: text
    }
}

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

export const updateNewMessageBodyActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        text: text
    }
}

const SEND_MESSAGE = "SEND-MESSAGE";

export const sendMessageActionCreator = (text) => {
    return {
        type: SEND_MESSAGE,
        text: text
    }
}

window.store = store;

export default store;