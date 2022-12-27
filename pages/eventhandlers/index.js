import AppLayoutShell from "components/AppLayoutShell";
import AuthenticatedPage from "components/AuthenticatedPage";
import Grid from '@mui/material/Grid';
import {Paper, Button} from '@mui/material/';
import CRMTable from "components/CRMTable";
import Title from "components/Title";
import AccessDenied from "components/AccessDenied";
import { ROUTE_EVENT_HANDLERS_ADD, ROUTE_EVENT_HANDLERS } from "/utils/routeUtils";
import { isAllowedUser } from "/utils/userUtils";
import { EP_QUERY_GET_EVENT_HANDLERS } from "/utils/httpUtils";

function EventHandlerPageContent()
{

    return (
        <AuthenticatedPage>
            <AppLayoutShell>
                
                <Grid item xs={12}>

					<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
					    
                        <Title>Event Handlers</Title>

                        <CRMTable 
                            endpoint={EP_QUERY_GET_EVENT_HANDLERS}
                            columns={
                                [
                                    {
                                        field: 'name',
                                        headerName: 'Name',
                                        flex: 1,
                                        minWidth: 200
                                    }
                                    ,{
                                        field: 'event_name',
                                        headerName: 'Event Name',
                                        flex: 1,
                                        minWidth: 200
                                    }
                                    ,{
                                        field: 'event_handler',
                                        headerName: 'Event Handler',
                                        flex: 1,
                                        minWidth: 200
                                    }
                                    ,{
                                        field: 'next_event',
                                        headerName: 'Next Event',
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
                            onRowSelectedRoute={ ROUTE_EVENT_HANDLERS_ADD }
                        />

                        <Grid item justifyContent="flex-start" sx={{mt: 5}}>
                            <Button variant="outlined" href={ROUTE_EVENT_HANDLERS_ADD}>New handler</Button>
                        </Grid>

					</Paper>

				</Grid>

            </AppLayoutShell>
        </AuthenticatedPage>
    );
}


export default function EventHandlerPage(props){

    if(props.access_granted){

        return (
            <EventHandlerPageContent/>
        )

    }else{

        return (
            <AccessDenied/>
        )

    }

}


export const getServerSideProps = async ({ req, res }) => 
{
    const allowed = await isAllowedUser(req, ROUTE_EVENT_HANDLERS);

    return {
      props: {
        access_granted: allowed.success
      },
    };

};
