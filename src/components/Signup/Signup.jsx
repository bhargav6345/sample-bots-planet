import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Box, Button, Paper } from '@mui/material';
import Step1RegisterOrg from './steps/Step1RegisterOrg';
import Step2AdminProfile from './steps/Step2AdminProfile';
import Step3SelectBots from './steps/Step3SelectBots';
import Step4Payment from './steps/Step4Payment';
import Step5AccountOwner from './steps/Step5AccountOwner';

const steps = [
  'Register Organization',
  'Admin Profile',
  'Select Bots',
  'Payment',
  'Account Owner Setup',
  // Add more steps as needed
];

const Signup = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Step1RegisterOrg onNext={handleNext} data={formData} />;
      case 1:
        return <Step2AdminProfile onNext={handleNext} onBack={handleBack} data={formData} />;
      case 2:
        return <Step3SelectBots onNext={handleNext} onBack={handleBack} data={formData} />;
      case 3:
        return <Step4Payment onNext={handleNext} onBack={handleBack} data={formData} />;
      case 4:
        return <Step5AccountOwner onNext={handleNext} onBack={handleBack} data={formData} />;
      // Add more steps here
      default:
        return <div>All steps completed</div>;
    }
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: '#f5f6fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, minWidth: 400, maxWidth: 500 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box mt={4}>{getStepContent(activeStep)}</Box>
      </Paper>
    </Box>
  );
};

export default Signup; 