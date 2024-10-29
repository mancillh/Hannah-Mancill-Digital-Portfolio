// Component Imports
import { Outlet } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";

// Bootstrap Styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// Custom Styles
import './styles/App.css'

//Renders Header, Outlet, and Footer on each "page" of the website. The Outlet is a placeholder within a 
//parent route's component to render the matching child routes.
function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
