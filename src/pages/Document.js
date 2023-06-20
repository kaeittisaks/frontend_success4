import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Helmet } from 'react-helmet-async';
import { Grid, Container } from '@mui/material';

// components
// sections
import {
  AppWidgetSummary,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Helmet>
        <title> Document | Super Hr </title>
      </Helmet>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Document
        </Typography>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="Created" {...a11yProps(1)} />
            <Tab label="Drafts" {...a11yProps(2)} />
            <Tab label="Signed" {...a11yProps(3)} />
            <Tab label="Require action" {...a11yProps(4)} />
            <Tab label="Request changes" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <div className="frame-469">
     
      <div className="frame-1  clip-contents">
        <div className="frame-2">
          <div className="frame-1-3" />
          <div className="frame-4">
            <p className="frame-5">NDAs</p>
            <p className="frame-1-6">21 Documents</p>
          </div>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/38c7gd7q7q7-817%3A491?alt=media&token=f1ef2b37-cc45-47a0-9217-bc643bebe081"
          alt="Not Found"
          className="more-vertical-1"
        />
      </div>
      
      <div className="frame-1   clip-contents">
        <div className="frame-2">
          <div className="frame-2-3" />
          <div className="frame-4">
            <p className="frame-5">NDAs</p>
            <p className="frame-2-6">21 Documents</p>
          </div>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/38c7gd7q7q7-817%3A491?alt=media&token=f1ef2b37-cc45-47a0-9217-bc643bebe081"
          alt="Not Found"
          className="more-vertical-1"
        />
      </div>

      <div className="frame-1   clip-contents">
        <div className="frame-2">
          <div className="frame-3-3" />
          <div className="frame-4">
            <p className="frame-5">NDAs</p>
            <p className="frame-3-6">21 Documents</p>
          </div>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/38c7gd7q7q7-817%3A491?alt=media&token=f1ef2b37-cc45-47a0-9217-bc643bebe081"
          alt="Not Found"
          className="more-vertical-1"
        />
      </div>

      <div className="frame-1   clip-contents">
        <div className="frame-2">
          <div className="frame-4-3" />
          <div className="frame-4">
            <p className="frame-5">NDAs</p>
            <p className="frame-4-6">21 Documents</p>
          </div>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/38c7gd7q7q7-817%3A491?alt=media&token=f1ef2b37-cc45-47a0-9217-bc643bebe081"
          alt="Not Found"
          className="more-vertical-1"
        />
      </div>
    
    </div>
        </TabPanel>

        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>

        <TabPanel value={value} index={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="New Users" total={1352831} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Item Orders" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid>
        </Grid>
        </TabPanel>

        <TabPanel value={value} index={3}>
          Item Two
        </TabPanel>

        <TabPanel value={value} index={4}>
          Item Two
        </TabPanel>

        <TabPanel value={value} index={5}>
          Item Two
        </TabPanel>


      </Box>

      </Container>
    </>
  );
}
export default BasicTabs