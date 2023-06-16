import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; //side effect import

const root = ReactDOM.createRoot(document.getElementById("root")); //root DOM node, managed by ReactDOM
root.render(<App />); //tell React to render React app w/ App as entry point
