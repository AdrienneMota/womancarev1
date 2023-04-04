import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/DashBoard/Home";
import RequestedDetails from "./pages/DashBoard/RequestedDetails";
import Payment from "./pages/DashBoard/payment/Payment";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./assets/style/GlobalStyle";

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/details/:requestId" element={<RequestedDetails/>}/>
          <Route path="/details/payment" element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
