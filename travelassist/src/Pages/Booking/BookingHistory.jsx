import React from 'react'

import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Container from '@mui/material/Container'

import HotelBookingHistory from '../../components/Hotel/BookingHistory/Hotel/HotelBookingHistory'
import TravelPackageBookingHistory from '../../components/Hotel/BookingHistory/TravelPackage/TravelPackageBookingHistory'

function BookingHistory() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth='lg' sx={{marginTop: '2em'}}>
            <h2 style={{textAlign: 'left'}}>My Booking History</h2>
            <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Hotel" value="1" sx={{fontWeight: 'bold'}} />
                    <Tab label="Travel Package" value="2" sx={{fontWeight: 'bold'}} />
                </TabList>
                </Box>
                <TabPanel value="1">
                    <HotelBookingHistory />
                </TabPanel>
                <TabPanel value="2">
                    <TravelPackageBookingHistory />
                </TabPanel>
            </TabContext>
            </Box>
        </Container>
    );
}

export default BookingHistory