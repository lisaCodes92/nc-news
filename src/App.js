import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Nav from './components/Nav';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import Comments from './components/Comments'


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
        <Route path='/articles/:article_id/comments' element={<Comments />}></Route>
      </Routes>
    </div>
  );
}

export default App;
