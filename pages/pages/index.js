import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CRMTable from "components/CRMTable";
import Title from "components/Title";
import { getUserIdOfRequest } from "utils/pageUtils";
import AppLayoutShell from "components/AppLayoutShell";
import AuthenticatedPage from "components/AuthenticatedPage";
import AccessDenied from "components/AccessDenied";

function PagesPageContent()
{

    return (
        <AuthenticatedPage>
            <AppLayoutShell>
                
                <Grid item xs={12}>

					<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
					    
                        <Title>Pages</Title>

                        <CRMTable 
                            collection="pages"
                            columns={
                                [
                                    {
                                        field: 'name',
                                        headerName: 'Name',
                                        minWidth: 220
                                    }
                                ]
                            }
                            filter={
                                {
                                    deleted_date: { $eq: null }
                                }
                            }
                            onRowSelectedRoute="/pages/add"
                        />

                        <Grid item justifyContent="flex-start" sx={{mt: 5}}>
                            <Button variant="outlined" href="/pages/add">New Page</Button>
                        </Grid>

					</Paper>
				</Grid>

            </AppLayoutShell>
        </AuthenticatedPage>
    );
}


export default function PagesPage(props){

    console.log('PagesPage');

    if(props.access_granted){

        return (
            <PagesPageContent/>
        )

    }else{
        
        return (
            <AccessDenied/>
        )

    }

}


export const getServerSideProps = async ({ req, res }) => 
{
    return {
      props: {
        access_granted: await getUserIdOfRequest(req) ? true : false
      },
    };

};
