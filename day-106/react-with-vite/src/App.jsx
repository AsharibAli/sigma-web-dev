import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <div className="cards">
      <Card title="card 1" description="desc 1" />
      <Card title="card 2" description="desc 2" />
      <Card title="card 3" description="desc 3" />
      <Card title="card 4" description="desc 4" />

      </div>
      <Footer/>
    </>
  );
}

export default App;
