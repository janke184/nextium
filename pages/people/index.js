import AppLayoutShell from "components/AppLayoutShell";
import AuthenticatedPage from "components/AuthenticatedPage";
import Grid from '@mui/material/Grid';
import {Paper, Button} from '@mui/material/';
import CRMTable from "components/CRMTable";
import Title from "components/Title";
import AccessDenied from "components/AccessDenied";
import { ROUTE_PEOPLE, ROUTE_PEOPLE_ADD } from "/utils/routeUtils";
import { isAllowedUser } from "/utils/userUtils";
import { EP_QUERY_GET_PEOPLE } from "/utils/httpUtils";
import Link from "next/link";

function PeoplePageContent()
{

    return (
        <AuthenticatedPage>
            <AppLayoutShell>
                
                <Grid item xs={12}>

					<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
					    
                        <Title>People</Title>

                        <CRMTable 
                            endpoint={EP_QUERY_GET_PEOPLE}
                            columns={
                                [
                                    {
                                        field: 'display_name',
                                        headerName: 'Display Name',
                                        flex: 1,
                                        minWidth: 200
                                    },
                                    {
                                        field: 'first_name',
                                        headerName: 'First Name',
                                        flex: 1,
                                        minWidth: 200
                                    },
                                    {
                                        field: 'last_name',
                                        headerName: 'Last Name',
                                        flex: 1,
                                        minWidth: 200
                                    }
                                    ,{
                                        field: 'email',
                                        headerName: 'Email',
                                        flex: 1,
                                        minWidth: 200
                                    }
                                    ,{
                                        field: 'main_phone',
                                        headerName: 'Phone',
                                        flex: 1,
                                        minWidth: 200
                                    }
                                    ,{
                                        field: 'created_date',
                                        headerName: 'Created Date',
                                        flex: 1,
                                        minWidth: 200
                                    }
                                    ,{
                                        field: 'updated_date',
                                        headerName: 'Updated Date',
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
                            onRowSelectedRoute={ ROUTE_PEOPLE_ADD }
                        />

                        <Grid item justifyContent="flex-start" sx={{mt: 5}}>
                            <Link href={ROUTE_PEOPLE_ADD}>
                                <Button variant="outlined">New person</Button>
                            </Link>
                        </Grid>

					</Paper>

				</Grid>

            </AppLayoutShell>
        </AuthenticatedPage>
    );
}


export default function PeoplePage(props){

    console.log('PeoplePage');

    if(props.access_granted){

        return (
            <PeoplePageContent/>
        )

    }else{

        return (
            <AccessDenied/>
        )

    }

}


export const getServerSideProps = async ({ req, res }) => 
{
    const allowed = await isAllowedUser(req, ROUTE_PEOPLE);

    return {
      props: {
        access_granted: allowed.success
      },
    };

};
