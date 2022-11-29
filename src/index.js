import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './activity-list.js'

const root = document.getElementById('root')
if (root != null) {
  ReactDOM.render(<App />, root)
}
