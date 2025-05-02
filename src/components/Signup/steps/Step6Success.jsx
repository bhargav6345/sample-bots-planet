import React, { useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const Step6Success = ({ data }) => {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const completeSignup = async () => {
      try {
        // Here you would typically make an API call to create the user account
        // For now, we'll simulate it with a timeout
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Create user data from the signup form data
        const userData = {
          email: data.email,
          organizationName: data.organizationName,
          // Add other relevant user data
        };

        // Log the user in
        login(userData);
        
        // Redirect to dashboard
        navigate('/dashboard');
      } catch (error) {
        console.error('Signup failed:', error);
      }
    };

    completeSignup();
  }, [data, login, navigate]);

  return (
    <Box sx={{ textAlign: 'center', py: 4 }}>
      <CircularProgress size={60} sx={{ mb: 3 }} />
      <Typography variant="h5" gutterBottom>
        Completing Your Registration
      </Typography>
      <Typography color="textSecondary">
        Please wait while we set up your account...
      </Typography>
    </Box>
  );
};

export default Step6Success; 