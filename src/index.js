import { render } from 'react-dom'
import App from './App'

const root = document.getElementById('root')
const load = () => render((
  <App />
), root)

if (module.hot) {
  module.hot.accept('./App', load)
}

load()
