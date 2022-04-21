import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import UpdateProfile from '../Profile/UpdateProfile';
import ReviewByUser from '../Reviews/ReviewByUser/ReviewByUser'

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', indicatorColor: 'primary' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Profile" value="1" sx={{fontWeight: 600}} />
            <Tab label="Reviews" value="2"  sx={{fontWeight: 600}} />
          </TabList>
        </Box>
        <TabPanel value="1">
            <UpdateProfile />
        </TabPanel>
        <TabPanel value="2">
          <ReviewByUser />
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}