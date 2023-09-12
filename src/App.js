import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Menu } from "./components/menu/Menu";
import { MainContent } from "./components/main_content/MainContent";
import s from './App.css';


const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <Header />
      </header>
      <nav className="nav">
        <Menu />
      </nav>
      <div className="container">
        <MainContent />
      </div>
      <div className="footer">
        <Footer />
      </div>
      
    </div>
  );
};

export default App;
