import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Menu } from "./components/menu/Menu";
import News from "./components/menu/news/News";
import MyPage from "./components/menu/my_page/MyPage";
import { Messenger } from "./components/menu/messenger/Messenger";
import { Friends } from "./components/menu/friends/Friends";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <nav>
          <Menu />
        </nav>
        <Footer />
       <div className ="container">
         <Routes>
          <Route path="/mypages" element={<MyPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/messenger" element={<Messenger />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
       </div>
       
      </div>
    </BrowserRouter>
  );
};

export default App;
