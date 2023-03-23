import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    <>a
      <Header />
      <Routes basename={'/page-transitions-2'}>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
        <Route path={`${process.env.PUBLIC_URL}/contact`} element={<Contact />} />
        {/* 
        <Route path="/page-transitions-2" element={<Home />} />
        <Route path="/page-transitions-2/about" element={<About />} /> 
        */}
      </Routes>
    </>
  )
}

export default App
