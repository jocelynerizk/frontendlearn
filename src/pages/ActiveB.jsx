// ActiveB.jsx
import React, { useState } from "react";
import ActiveEnrollmentForm from '../components/ActiveEnrollmentForm.jsx';
import ActiveProfile from '../components/ActiveProfile.jsx';
import Herosection from '../components/Herosection.jsx';
import Footer1 from '../components/Footer1.jsx';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";


const ActiveB = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (

    <Box>
            <Herosection />
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Active Enrollment" />
        <Tab label="Profile" />
      </Tabs>
      <Box p={2}>
        {activeTab === 0 && <ActiveEnrollmentForm />}
        {activeTab === 1 && <ActiveProfile />}
      </Box>
      <Footer1 />
    </Box>

  );
};

export default ActiveB;
