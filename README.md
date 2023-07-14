# Notes

ReactJS application / PHP API

Course Tuto : https://www.udemy.com/course/mern-stack-front-to-back/

`React Router` : This is a library that you can use to manage the routing in your React application.

`Redux` : This library can help you manage state in your React application.

Docs : https://github.com/facebook/create-react-app

---

- Install `npx create-react-app frontend`
- Run : `npm run client`
- Install these packages : `npm i axios react-router-dom redux react-redux redux-thunk redux-devtools-extension moment react-moment uuid`
- Add `"proxy": "http://users.php.sqlite.app.local/"` in `package.json`
- Components : `src/components/...`
- Routing setup : `App.js` - `import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';`
- Linking pages with `import {Link} from 'react-router-dom';` & `<Link to="/register".....`
- Available routes :
- - `http://localhost:3000/`
- - `http://localhost:3000/login`
- - `http://localhost:3000/register`

## React / Redux

- Redux cheatsheet : https://devhints.io/redux

Redux actions are events that must have :

- `type` property to indicate the type of action to be carried out
- `payload` object that contains the information that should be used to change the state.

---

- `<PROJ>\frontend\src\actions\types.js` : Consist of variables / constant
```js
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';
```

- `<PROJ>\frontend\src\actions\alert.js` : Middlewares
```js
import { SET_ALERT, REMOVE_ALERT } from './types';
import { v4 } from 'uuid';

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    const id = v4();
    dispatch({
        type: SET_ALERT,
        payload: {
            msg,
            alertType,
            id
        }
    });

    setTimeout(() => dispatch({
        type: REMOVE_ALERT,
        payload: id
    }), timeout);
}
```

- `<PROJ>\frontend\src\reducers\index.js` : List of reducers
```js
import { combineReducers } from "redux";
import alert from './alert';

export default combineReducers({
    alert
});
```

- `<PROJ>\frontend\src\reducers\alert.js` : Reducer

*Reducers take in two things: previous state and an action. Then they reduce it (read it return) to one entity: the new updated instance of state.*

- `<PROJ>\frontend\src\components` : UI

```js
import React from 'react';
import { connect } from 'react-redux';

const Alert = ({ alertState }) => 
    null !== alertState 
    && alertState.length > 0 
    && alertState.map(alert => (
        <div 
            key={alert.id} 
            className={`alert alert-${alert.alertType}`
        }>
            { alert.msg }
        </div>
    ));

const mapStateToProps = state => ({
    alertState: state.alert
});

export default connect(
    mapStateToProps
)(Alert);

```