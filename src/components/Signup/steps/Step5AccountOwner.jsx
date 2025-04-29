import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert, Card, CardContent, Grid, Autocomplete } from '@mui/material';

const Step5AccountOwner = ({ onNext, onBack, data }) => {
  const [assignments, setAssignments] = useState(data.botAssignments || []);
  const [newAssignment, setNewAssignment] = useState({
    person: '',
    botType: '',
  });
  const [error, setError] = useState('');

  const selectedBots = data.selectedBots || [];
  const botQuantities = data.botQuantities || {};

  const handleAddAssignment = () => {
    if (!newAssignment.person || !newAssignment.botType) {
      setError('Please fill all fields.');
      return;
    }

    const existingAssignment = assignments.find(
      (a) => a.person === newAssignment.person && a.botType === newAssignment.botType
    );

    if (existingAssignment) {
      setError('This person already has this bot type assigned.');
      return;
    }

    setAssignments([...assignments, newAssignment]);
    setNewAssignment({ person: '', botType: '' });
    setError('');
  };

  const handleRemoveAssignment = (index) => {
    setAssignments(assignments.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (assignments.length === 0) {
      setError('Please assign at least one bot.');
      return;
    }
    setError('');
    onNext({ botAssignments: assignments });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>Account Owner Setup</Typography>
      <Typography variant="subtitle2" gutterBottom>Assign Bots to Team Members</Typography>
      
      <Box mb={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <TextField
              label="Person Name"
              value={newAssignment.person}
              onChange={(e) => setNewAssignment({ ...newAssignment, person: e.target.value })}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Autocomplete
              options={selectedBots}
              value={newAssignment.botType}
              onChange={(_, value) => setNewAssignment({ ...newAssignment, botType: value })}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Bot Type"
                  margin="normal"
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              variant="contained"
              onClick={handleAddAssignment}
              sx={{ mt: 2, height: '56px' }}
              fullWidth
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box mb={3}>
        <Typography variant="subtitle2" gutterBottom>Current Assignments</Typography>
        <Grid container spacing={2}>
          {assignments.map((assignment, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box>
                      <Typography variant="subtitle1">{assignment.person}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {assignment.botType}
                      </Typography>
                    </Box>
                    <Button
                      color="error"
                      onClick={() => handleRemoveAssignment(index)}
                    >
                      Remove
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Complete Setup
        </Button>
      </Box>
    </form>
  );
};

export default Step5AccountOwner; 