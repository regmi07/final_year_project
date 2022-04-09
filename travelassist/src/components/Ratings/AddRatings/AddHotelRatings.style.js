import {styled} from '@mui/material/styles'

const RatingLabelBox = styled('div')`
    margin-left: 1.5em;
    position: relative;
    height: 30px;
    letter-spacing: 1px;
    padding: 0 1em;
    background-color: #1976d2;
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #fff;
    ::before{
        content: '';
        position: absolute;
        top: 0;
        left: -15px;
        width: 0; 
        height: 0; 
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent; 
        border-right: 15px solid #1976d2; 
    }
    `

export {RatingLabelBox}