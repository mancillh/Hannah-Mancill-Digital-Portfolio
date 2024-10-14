import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import background from "./assets/pexels-jibarofoto-2471235.jpg";
import NavbarSection from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <NavbarSection />
      <div style={{
        backgroundImage: `url(${background})`,
        height: "80vh",
        marginTop: "-70px",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderBottom: '4px #df016b solid',
      }}>
      </div>
      <Card />
      <Footer />
    </>
  )
}

export default App
