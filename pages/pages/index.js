import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CRMTable from "components/CRMTable";
import Title from "components/Title";
import AppLayoutShell from "components/AppLayoutShell";
import AuthenticatedPage from "components/AuthenticatedPage";
import AccessDenied from "components/AccessDenied";
import { isAllowedUser } from 'utils/userUtils';
import { ROUTE_PAGES, ROUTE_PAGES_ADD } from 'utils/routeUtils';
import { EP_QUERY_GET_PAGES } from 'utils/httpUtils';

function PagesPageContent()
{

    return (
        <AuthenticatedPage>
            <AppLayoutShell>
                
                <Grid item xs={12}>

					<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
					    
                        <Title>Pages</Title>

                        <CRMTable 
                            endpoint={EP_QUERY_GET_PAGES}
                            columns={
                                [
                                    {
                                        field: 'route',
                                        headerName: 'Route',
                                        flex: 1,
                                        minWidth: 200
                                    },
                                    {
                                        field: 'name',
                                        headerName: 'Name',
                                        flex: 1,
                                        minWidth: 200
                                    }                                    
                                ]
                            }
                            filter={
                                {
                                    deleted_date: { $eq: null }
                                }
                            }
                            onRowSelectedRoute={ ROUTE_PAGES_ADD }
                            rowsToShow={10}
                        />

                        <Grid item justifyContent="flex-start" sx={{mt: 5}}>
                            <Button variant="outlined" href={ ROUTE_PAGES_ADD }>New Page</Button>
                        </Grid>

					</Paper>
				</Grid>

            </AppLayoutShell>
        </AuthenticatedPage>
    );
}


export default function PagesPage(props){

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
    const allowed = await isAllowedUser(req, ROUTE_PAGES);

    return {
      props: {
        access_granted: allowed.success
      },
    };

};
