import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import { About, Contacts, Home, Works } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/works" element={<Works />}/>
          <Route path="/contacts" element={<Contacts />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}