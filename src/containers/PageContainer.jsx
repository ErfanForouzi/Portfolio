import Grid from '@mui/material/Unstable_Grid2';

const PageContainer = ({children})=>{
    return(
        <Grid xs={12} sm={12} md={8} lg={9} xl={9} >
              {children}
            </Grid>
    )
}
export default PageContainer;