import React, { useState } from "react";
import { Box, Typography, TextField, Button, Link, Alert, CircularProgress, Paper } from '@mui/material';
import ReCAPTCHA from "react-google-recaptcha";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!captchaValue) {
      setError("Please complete the CAPTCHA verification.");
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if email matches signup email (this would be replaced with actual API call)
      const signupEmail = localStorage.getItem('signupEmail');
      if (signupEmail && signupEmail !== form.email) {
        setError("This email is not registered. Please use the email you signed up with.");
        return;
      }

      // Store user info in localStorage (in a real app, this would be handled by your auth system)
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', form.email);

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError("");

    if (!resetEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!validateEmail(resetEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Password reset instructions sent to your email! (Demo)");
      setShowForgotPassword(false);
      setResetEmail("");
    } catch (err) {
      setError("Failed to send reset instructions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="login-page">
      <Paper elevation={3} className="login-form">
        {!showForgotPassword ? (
          <>
            <Typography variant="h4" className="login-title">
              Welcome Back
            </Typography>
            <Typography variant="subtitle1" className="login-subtitle">
              Sign in to continue to Bots Planet
            </Typography>
            <form onSubmit={handleLogin}>
              <TextField
                label="Email Address"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                className="login-input"
              />
              <TextField
                label="Password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                className="login-input"
              />
              <Box className="captcha-container">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={(value) => setCaptchaValue(value)}
                />
              </Box>
              {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                className="login-button"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Sign In"}
              </Button>
              <Box mt={2} textAlign="center">
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => setShowForgotPassword(true)}
                  className="forgot-password-link"
                >
                  Forgot Password?
                </Link>
              </Box>
              <Box mt={2} textAlign="center">
                <Typography variant="body2" color="textSecondary">
                  Don't have an account?{" "}
                  <Link component={RouterLink} to="/signup" className="signup-link">
                    Sign Up
                  </Link>
                </Typography>
              </Box>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h4" className="login-title">
              Reset Password
            </Typography>
            <Typography variant="subtitle1" className="login-subtitle">
              Enter your email to receive reset instructions
            </Typography>
            <form onSubmit={handleForgotPassword}>
              <TextField
                label="Email Address"
                type="email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                fullWidth
                margin="normal"
                required
                className="login-input"
              />
              {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                className="login-button"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Send Reset Instructions"}
              </Button>
              <Box mt={2} textAlign="center">
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => setShowForgotPassword(false)}
                  className="back-to-login-link"
                >
                  Back to Login
                </Link>
              </Box>
            </form>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default Login;
