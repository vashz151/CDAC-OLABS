import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tab1 from "./Experiment 1/Tab1";
import Tab2 from "./Experiment 2/Tab2";
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
          <Typography component={"span"} variant={"body2"}>
            {children}
          </Typography>
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          selectionFollowsFocus
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="white"
          variant="fullWidth"
          aria-label="nav tabs example"
        >
          <Tab label="Theorem 1" {...a11yProps(0)} />
          <Tab label="Theorem 2" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h1>Triangle Inequality Theorem</h1>
        <Tab1 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>Theorem 2</h1>
        <Tab2 />
      </TabPanel>
    </Box>
  );
}
