import React from 'react'
import ReactDOM from 'react-dom'
import {bro} from './bro'
import Main from './hello-world.jsx'
import './styles/main.scss'

window.taskinput = document.getElementById('main');
ReactDOM.render(<Main name="Matias"/>, window.taskinput)

// const title = 'My Minimal React Webpack Babel Setup';

// ReactDOM.render(
//   <div>{title}</div>,
//   document.getElementById('main')
// );

console.log(bro('Dude'))
