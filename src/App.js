import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequestedDetails from "./pages/DashBoard/RequestedDetails";
import Payment from "./pages/DashBoard/payment/Payment";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./assets/style/GlobalStyle";
import Signup from "./pages/User/Signup";
import Home from "./pages/DashBoard/Home";
import Signin from "./pages/User/Signin";
import { AuthProvider } from "./hook/authContext";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <>
      <ToastContainer />      
      <BrowserRouter>
        <GlobalStyle/>
        <AuthProvider>
        <Routes>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<Sobre/>}/>
          <Route path="/details/:requestId" element={<RequestedDetails/>}/>
          <Route path="/payment/:methodPayment/:giver_id" element={<Payment/>}/>
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
