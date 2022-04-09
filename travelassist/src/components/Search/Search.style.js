import {styled} from '@mui/material/styles'

const SearchMain = styled('div')({
    width: '90%',
    maxWidth: '650px',
    margin: '0 auto',
    position: 'relative',
})

const SearchInputs = styled('div')({
    width: '100%',
    display: 'flex',
})

const SearchIcons = styled('div')({
    height: '60px',
    width: '50px',
    borderTopRightRadius: '6px',
    borderBottomRightRadius: '6px',
    backgroundColor: '#eee',
    color: '#000',
    display: 'grid',
    placeItems: 'center',
})

const DataResult = styled('div')({
    position: 'absolute',
    marginTop: '5px',
    width: '100%',
    height: '200px',
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    overflow: 'hidden',
    overflowY: 'auto'
})

export {SearchMain, SearchInputs, SearchIcons, DataResult}