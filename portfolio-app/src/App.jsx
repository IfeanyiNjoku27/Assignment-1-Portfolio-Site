import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Navbar from "./NavBar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
