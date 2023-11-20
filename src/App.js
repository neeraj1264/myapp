import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import ShoeDetail from './components/shoes/ShoeDetail';
import HeroSection from './components/hero/HeroSection';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path="/myapp" element={<HeroSection/>} />
{/* <Route path="/:id" element={<ShoeDetail/>} /> */}
</Routes>
</BrowserRouter>
   </>
  );
}

export default App;

