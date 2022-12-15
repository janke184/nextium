import AppLayoutShell from "components/AppLayoutShell";
import AuthenticatedPage from "components/AuthenticatedPage";
import Grid from '@mui/material/Grid';
import {Paper, Button} from '@mui/material/';
import CRMTable from "components/CRMTable";
import Title from "components/Title";
import AccessDenied from "components/AccessDenied";
import { ROUTE_USERS, ROUTE_USERS_ADD } from "utils/routeUtils";
import { isAllowedUser } from "utils/userUtils";

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
                                        flex: 1
                                    }
                                    ,{
                                        field: 'display_name',
                                        headerName: 'Display Name',
                                        flex: 1
                                    }
                                    ,{
                                        field: 'password',
                                        headerName: 'Password',
                                        flex: 1
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
    const allowed = await isAllowedUser(req, ROUTE_USERS);

    return {
      props: {
        access_granted: allowed.success
      },
    };

};
