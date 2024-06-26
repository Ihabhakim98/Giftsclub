import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';

interface TabSwitcherProps {
  selectedTab: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({ selectedTab, onChange }) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '20px' }}>
      <Tabs value={selectedTab} onChange={onChange} centered>
        <Tab label="1 Mois" />
        <Tab label="3 Mois" />
        <Tab label="6 Mois" />
        <Tab label="12 Mois" />
        <Tab label="24 Mois" />
      </Tabs>
    </Box>
  );
};

export default TabSwitcher;