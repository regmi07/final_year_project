import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Container from '@mui/material/Container'

import PlanToVisit from '../../components/VisitList/PlanToVisit/PlanToVisit'
import Visited from '../../components/VisitList/Visited/Visited'

export default function VisitList() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Container maxWidth='lg' sx={{marginTop: '2em'}}>
        <h2 style={{textAlign: 'left'}}>My Visit List</h2>
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Planned to visit" value="1" sx={{fontWeight: 'bold'}} />
                <Tab label="Visited" value="2" sx={{fontWeight: 'bold'}} />
            </TabList>
            </Box>
            <TabPanel value="1">
                <PlanToVisit />
            </TabPanel>
            <TabPanel value="2">
                <Visited />
            </TabPanel>
        </TabContext>
        </Box>
      </Container>
  );
}
