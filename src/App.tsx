import { BrowserRouter, Routes, Route } from "react-router-dom";
import Changelogs from './pages/changelogs'
import Navbar from './pages/Navbar';
import Home from './pages/home';
import FirstPost from './pages/posts/firstPost';
import SecondPost from './pages/posts/secondPost';
import ThirdPost from './pages/posts/thirdPost';
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Changelogs" element={<Changelogs />} />
        <Route path="/firstPost" element={<FirstPost />} />
        <Route path="/secondPost" element={<SecondPost />} />
        <Route path="/thirdPost" element={<ThirdPost />} />
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
