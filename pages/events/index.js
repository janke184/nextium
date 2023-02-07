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
                                    }
                                    ,{
                                        field: 'created_date',
                                        headerName: 'Created Date',
                                        flex: 1,
                                        minWidth: 200
                                    }
                                    ,{
                                        field: 'processed_date',
                                        headerName: 'Processed Date',
                                        flex: 1,
                                        minWidth: 200                                   
                                    }
                                    // add a column that shows difference between created_date and processed_date in seconds
                                    ,{
                                        field: 'sss',
                                        headerName: 'Time to Process (s)',
                                        flex: 1,
                                        minWidth: 200,
                                        renderCell: (params) => {
                                            const created_date = params.row.created_date;
                                            const processed_date = params.row.processed_date;
                                            if(created_date && processed_date){
                                                // get difference in seconds (format of dates is: 2023-01-23T15:09:46.658Z)

                                                // convert to date objects
                                                const created_date_obj = new Date(created_date);
                                                const processed_date_obj = new Date(processed_date);

                                                // get difference in milliseconds
                                                const diff = processed_date_obj - created_date_obj;

                                                // convert to seconds
                                                const diff_seconds = diff / 1000;   

                                                //round to int
                                                return Math.round(diff_seconds);

                                            }else{
                                                return '';
                                            }
                                        }
                                    }
                                ]
                            }
                            filter={
                                {
                                    deleted_date: { $eq: null }
                                }
                            }
                            initialState={
                                {
                                    sorting: {
                                        sortModel: [{ field: 'created_date', sort: 'desc' }]
                                    }
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
