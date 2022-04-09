import {styled} from '@mui/material/styles'

const CustomCardContent = styled('div')({
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '50px',
    textAlign: 'center',
    color: '#FFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    // padding: '5px',
    letterSpacing: '1px',
    background: 'rgba(0, 0, 0, 0.25)',
    // borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(1.5px)',
    // -webkit-backdrop-filter: blur(5px);
    // border: '1px solid rgba(255, 255, 255, 0.3)'
})

const CustomCardAction = styled('div')({
    position: 'absolute',
    top: '5px',
    left: '5px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255,1)',
})

export {CustomCardContent, CustomCardAction}