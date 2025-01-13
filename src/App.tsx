import { BrowserRouter, Routes, Route } from "react-router-dom";
import Changelogs from './pages/changelogs.tsx'
import Navbar from './pages/Navbar.tsx';
import Home from './pages/home.tsx';
import FirstPost from './pages/posts/firstPost.tsx';
import SecondPost from './pages/posts/secondPost.tsx';
import ThirdPost from './pages/posts/thirdPost.tsx';
import PageNotFound from './pages/PageNotFound.tsx'
// import { ThemeProvider } from "./pages/components/theme-provider.tsx";


function App() {
  return (
    // <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Changelogs" element={<Changelogs />} />
          <Route path="/firstPost" element={<FirstPost />} />
          <Route path="/secondPost" element={<SecondPost />} />
          <Route path="/thirdPost" element={<ThirdPost />} />
          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    // </ThemeProvider>
  )
}

export default App
