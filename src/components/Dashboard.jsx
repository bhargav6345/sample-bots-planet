import React from 'react';
import { Box, Grid, Paper, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DashboardCard = ({ title, description, icon, link }) => {
  const navigate = useNavigate();

  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: 6,
        },
      }}
      onClick={() => navigate(link)}
    >
      <Box sx={{ fontSize: '2.5rem', mb: 2 }}>{icon}</Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography color="textSecondary" sx={{ mb: 2 }}>
        {description}
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        sx={{ mt: 'auto' }}
        onClick={(e) => {
          e.stopPropagation();
          navigate(link);
        }}
      >
        Open
      </Button>
    </Paper>
  );
};

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Welcome{user?.organizationName ? `, ${user.organizationName}` : ''}
      </Typography>
      <Typography color="textSecondary" sx={{ mb: 4 }}>
        Select a feature to get started
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <DashboardCard
            title="Product Intelligence"
            description="Analyze and manage your product information and market insights."
            icon="📊"
            link="/product-intelligence"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardCard
            title="ChatBot"
            description="Interact with your AI sales assistant for real-time support."
            icon="🤖"
            link="/chatbot"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DashboardCard
            title="Artifacts"
            description="Access and manage your sales resources and documents."
            icon="📁"
            link="/artifacts"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard; 