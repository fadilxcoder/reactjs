# Notes

ReactJS application / PHP API

Course Tuto : https://www.udemy.com/course/mern-stack-front-to-back/

`React Router` : This is a library that you can use to manage the routing in your React application.

`Redux` : This library can help you manage state in your React application.

Docs : https://github.com/facebook/create-react-app

---

- Install `npx create-react-app frontend`
- Run : `npm run client`
- Install these packages : `npm i axios react-router-dom redux react-redux redux-thunk redux-devtools-extension moment react-moment`
- Add `"proxy": "http://users.php.sqlite.app.local/"` in `package.json`
- Components : `src/components/...`
- Routing setup : `App.js` - `import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';`
- Linking pages with `import {Link} from 'react-router-dom';` & `<Link to="/register".....`
- Available routes :
- - `http://localhost:3000/`
- - `http://localhost:3000/login`
- - `http://localhost:3000/register`