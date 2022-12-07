import AppLayoutShell from "components/AppLayoutShell";
import AuthenticatedPage from "components/AuthenticatedPage";
import Grid from '@mui/material/Grid';
import {Paper, Button} from '@mui/material/';
import CRMTable from "components/CRMTable";
import Title from "components/Title";
import { getUserIdOfRequest } from "utils/pageUtils";
import AccessDenied from "components/AccessDenied";
import { ROUTE_USERS_ADD } from "utils/routeUtils";

function UsersPageContent()
{

    return (
        <AuthenticatedPage>
            <AppLayoutShell>
                
                <Grid item xs={12}>

					<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
					    
                        <Title>Users</Title>

                        <CRMTable 
                            collection="users"
                            columns={
                                [
                                    {
                                        field: 'username',
                                        headerName: 'Username',
                                        minWidth: 200
                                    }
                                    ,{
                                        field: 'display_name',
                                        headerName: 'Display Name',
                                        minWidth: 200
                                    }
                                    ,{
                                        field: 'password',
                                        headerName: 'Password',
                                        minWidth: 200
                                    }
                                ]
                            }
                            filter={
                                {
                                    deleted_date: { $eq: null }
                                }
                            }
                            onRowSelectedRoute={ ROUTE_USERS_ADD }
                        />

                        <Grid item justifyContent="flex-start" sx={{mt: 5}}>
                            <Button variant="outlined" href={ROUTE_USERS_ADD}>New User</Button>
                        </Grid>

					</Paper>

				</Grid>

            </AppLayoutShell>
        </AuthenticatedPage>
    );
}


export default function UsersPage(props){

    console.log('PageUsers');

    if(props.access_granted){

        return (
            <UsersPageContent/>
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
