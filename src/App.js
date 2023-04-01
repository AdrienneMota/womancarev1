import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RequestedDetails from "./pages/RequestedDetails";
import { Payment } from "./pages/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:requestId" element={<RequestedDetails/>}/>
        <Route path="/details/payment" element={<Payment/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
