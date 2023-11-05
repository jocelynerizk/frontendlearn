// ActiveB.jsx
import React, { useState } from "react";
import ActiveEnrollmentForm from '../components/ActiveEnrollmentForm.jsx';
import ActiveProfile from '../components/Framebox1.jsx';
import Mininav from "../components/Mininav.jsx";
import Footer1 from '../components/Footer1.jsx';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Framebox1 from "../components/Framebox1.jsx";
import Framebox2 from "../components/Framebox2.jsx";

const ActiveB = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (

    <Box>
      <Mininav />
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Active Enrollment" />
        <Tab label="Completed" />
      </Tabs>
      <Box p={2}>
        {activeTab === 0 && <Framebox1 />}
        {activeTab === 1 && <Framebox2 />}
      </Box>
      <Footer1 />
    </Box>

  );
};

export default ActiveB;
