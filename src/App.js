import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RequestedDetails from "./pages/RequestedDetails";
import Payment from "./pages/Payment";
import Card from "./pages/Card";
import Pix from "./pages/Pix";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:requestId" element={<RequestedDetails/>}/>
        <Route path="/details/payment" element={<Payment/>}/>
        <Route path="/card" element={<Card/>}/>
        <Route path="/pix" element={<Pix/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
