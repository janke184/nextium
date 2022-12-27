import AppLayoutShell from "components/AppLayoutShell";
import AuthenticatedPage from "components/AuthenticatedPage";
import Grid from '@mui/material/Grid';
import {Paper, Button} from '@mui/material/';
import CRMTable from "components/CRMTable";
import Title from "components/Title";
import AccessDenied from "components/AccessDenied";
import { ROUTE_EVENTS } from "/utils/routeUtils";
import { isAllowedUser } from "/utils/userUtils";
import { EP_QUERY_GET_EVENTS } from "/utils/httpUtils";

function EventsPageContent()
{

    return (
        <AuthenticatedPage>
            <AppLayoutShell>
                
                <Grid item xs={12}>

					<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
					    
                        <Title>Events</Title>

                        <CRMTable 
                            endpoint={EP_QUERY_GET_EVENTS}
                            columns={
                                [
                                    {
                                        field: 'name',
                                        headerName: 'Name',
                                        flex: 1,
                                        minWidth: 200
                                    }
                                    ,{
                                        field: 'data',
                                        headerName: 'Data',
                                        flex: 1,
                                        minWidth: 200,
                                        renderCell: (params) => {
                                            return JSON.stringify(params.value);
                                        }
                                    },
                                    {
                                        field: 'processed_date',
                                        headerName: 'Processed Date',
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
                        />

					</Paper>

				</Grid>

            </AppLayoutShell>
        </AuthenticatedPage>
    );
}


export default function EventsPage(props){

    if(props.access_granted){

        return (
            <EventsPageContent/>
        )

    }else{

        return (
            <AccessDenied/>
        )

    }

}


export const getServerSideProps = async ({ req, res }) => 
{
    const allowed = await isAllowedUser(req, ROUTE_EVENTS);

    return {
      props: {
        access_granted: allowed.success
      },
    };

};
