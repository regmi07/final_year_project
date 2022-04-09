import {styled} from '@mui/material/styles';

const WrapperBox = styled('div')({
    marginTop: '2em', 
    padding: '1.5em 1em', 
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
})

const SubHeading = styled('h4')({
    textAlign: 'left',
    margin: '0',
    padding: '0',
    marginBottom: '.8em',
    fontWeight: '600',
    fontSize: '1.25rem'
})

export {WrapperBox, SubHeading}