import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from "./pages/DashBoard/Home";
import RequestedDetails from "./pages/DashBoard/RequestedDetails";
import Payment from "./pages/DashBoard/payment/Payment";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./assets/style/GlobalStyle";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ToastContainer />      
      <BrowserRouter>
        <GlobalStyle/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/details/:requestId" element={<RequestedDetails/>}/>
          <Route path="/payment/:methodPayment" element={<Payment/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
