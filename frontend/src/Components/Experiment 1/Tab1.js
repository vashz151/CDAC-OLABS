import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        variant="fullWidth"
        aria-label="nav tabs example"
      >
        <Tab label="Theorey" {...a11yProps(0)} />
        <Tab label="Procedure" {...a11yProps(1)} />
        <Tab label="Animation" {...a11yProps(2)} />
        <Tab label="Simulator" {...a11yProps(3)} />
        <Tab label="Self Evaluation" {...a11yProps(4)} />
        <Tab label="Reference" {...a11yProps(5)} />
        <Tab label="Feedback" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0} dir={theme.direction}></TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}></TabPanel>
    </Box>
  );
}
