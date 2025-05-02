import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Pricing from "./components/Pricing";
import Solutions from "./components/Solutions";
import Login from "./components/Login";
import Signup from "./components/Signup/Signup";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import ProductIntelligence from "./components/ProductIntelligence";
import ChatBot from "./components/ChatBot";
import Artifacts from "./components/Artifacts";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/product-intelligence"
            element={
              <PrivateRoute>
                <ProductIntelligence />
              </PrivateRoute>
            }
          />
          <Route
            path="/chatbot"
            element={
              <PrivateRoute>
                <ChatBot />
              </PrivateRoute>
            }
          />
          <Route
            path="/artifacts"
            element={
              <PrivateRoute>
                <Artifacts />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
