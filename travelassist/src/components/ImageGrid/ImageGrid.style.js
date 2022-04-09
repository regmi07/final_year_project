import {styled} from '@mui/material/styles'

const GridContainer = styled('div')({
    height: '100%',
    maxHeight: '50vh',
    maxWidth: 'inherit',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateAreas: `
                        'main main main main sub1 sub2'
                        'main main main main sub1 sub2'
                        'main main main main sub3 sub4'
                        'main main main main sub3 sub4'
                        `,
    gridGap: '1em'
})

const ImageContainer = styled('div')({
    height: '24vh',
    borderRadius: '4px',
})

const Image = styled('img')({
    display: 'block',
    objectPosition: 'center',
    objectFit: 'cover',
    maxWidth: 'inherit',
    width: '100%',
    height: '100%',
    maxHeight: '50vh',
    borderRadius: '6px',
})

export {GridContainer, Image, ImageContainer}
