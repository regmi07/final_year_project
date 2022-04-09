import {styled} from '@mui/material/styles'
import Button from '@mui/material/Button'

const InputBox = styled('input')`
   width: 100%;
   max-width: 600px;
   height: 45px;
   font-size: .9rem;
   padding: .5em 1em;
   letter-spacing: 1px;
   border: 1px solid rgba(0,0,0,.15);
   box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
   :focus{
        outline: 1px solid #1976d2;
        border: 1px solid #1976d2;
    }
`

const Label = styled('label')`
    display: block;
    margin-top: 2em;
    text-align: left;
    max-width: 600px;
    padding: .5em 0;
    letter-spacing: 1px;
    font-size: .9rem;
    font-weight: 600;
`

const TextArea = styled('textarea')`
    width: 100%;
    max-width: 600px; 
    font-size: .9rem;
    padding: .5em 1em;
    resize: none;
    letter-spacing: 1px;
    height: 90px;
    border: 1px solid rgba(0,0,0,.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
    transition: height .2s;
    :focus{
        outline: 1px solid #1976d2;
        border: 1px solid #1976d2;
        height: 130px;
    }
`

const SelectComponent = styled('select')`
    height: 35px;
    font-size: .9rem;
    padding: .5em;
    border: 1px solid rgba(0,0,0,.3);
    letter-spacing: 1px;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
`

const MuiButton = styled(Button)`
    font-weight: 600;
    text-transform: none;
    font-size: .9rem;
    padding: .7em 1.4em;
    margin-right: 2em;
`

export {InputBox, TextArea, Label, SelectComponent, MuiButton}