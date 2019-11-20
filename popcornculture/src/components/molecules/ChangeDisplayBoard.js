import React from "react";
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
import AppsTwoToneIcon from '@material-ui/icons/AppsTwoTone';
import SortByAlphaTwoToneIcon from '@material-ui/icons/SortByAlphaTwoTone';

const ChangeDisplay = () =>{
    return(
        <div className = "changeDisplay">
            <Tooltip title="List View">
                <IconButton aria-label="List View">
                    <ListAltTwoToneIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="grid View">
                <IconButton aria-label="grid View">
                    <AppsTwoToneIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Sort By">
                <IconButton aria-label="Sort By">
                    <SortByAlphaTwoToneIcon/>
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default ChangeDisplay;