// import { render } from 'react-dom';
// import App from './App'
// import './index.css'

// render(<App/>, document.querySelector("#root"));

// React v18
import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);