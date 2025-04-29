import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  return (
    <Box className="dashboard">
      <Box className="dashboard-header">
        <Typography variant="h4" className="dashboard-title">
          Welcome to Your Dashboard
        </Typography>
        <Typography variant="subtitle1" className="dashboard-subtitle">
          {userEmail}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleLogout}
          className="logout-button"
        >
          Logout
        </Button>
      </Box>

      <Grid container spacing={4} className="dashboard-grid">
        <Grid item xs={12} md={6}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h5" className="card-title">
                Your Bots
              </Typography>
              <Typography variant="body1" className="card-content">
                Manage your bots and their settings here.
              </Typography>
              <Button variant="contained" className="card-button">
                View Bots
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h5" className="card-title">
                Analytics
              </Typography>
              <Typography variant="body1" className="card-content">
                View performance metrics and insights.
              </Typography>
              <Button variant="contained" className="card-button">
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h5" className="card-title">
                Team Members
              </Typography>
              <Typography variant="body1" className="card-content">
                Manage your team and their access.
              </Typography>
              <Button variant="contained" className="card-button">
                Manage Team
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h5" className="card-title">
                Settings
              </Typography>
              <Typography variant="body1" className="card-content">
                Configure your account and preferences.
              </Typography>
              <Button variant="contained" className="card-button">
                Settings
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard; 