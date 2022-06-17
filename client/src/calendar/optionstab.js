import React from 'react';

import { Typography, Button } from '@mui/material';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';



const OptionsTab = ({setCurrentSession, openDrawer}) => {
    const [value, setValue] = React.useState("F")
    const handleChange = (event) => {
        setValue(event.target.value)
        setCurrentSession(event.target.value)
    }
    // const [schedule, setSchedule] = React.useState()
    return (
        <div style={{ display: "inlinedBlock" }}>
            <Button onClick={openDrawer}>
                Open Side Bar
            </Button>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                style={{float: "left"}}
                value={value}
                onChange={handleChange}
                
            >
                <FormControlLabel value="F" control={<Radio />} label="Fall Session" defaultChecked={true}/>
                <FormControlLabel value="S" control={<Radio />} label="Winter Session" />
            </RadioGroup>
            <div style={{ float: "right" }}>
                <Button><ChevronLeftRoundedIcon /><Typography>Prev</Typography></Button>
                <Button><Typography>Next</Typography><ChevronRightRoundedIcon /></Button>
            </div>
        </div>
    )
}

export default OptionsTab;