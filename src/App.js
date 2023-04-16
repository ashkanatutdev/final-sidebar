import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import './css/sidebar.css'

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
}

export default App;
