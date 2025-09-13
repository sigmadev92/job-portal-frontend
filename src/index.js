import ReactDOM from "react-dom/client";
import App from "./App";

const htmlRootDiv = document.getElementById("root");
const ReactRoot = ReactDOM.createRoot(htmlRootDiv);

ReactRoot.render(<App />);
