import AppLayoutShell from "components/AppLayoutShell";
import AuthenticatedPage from "components/AuthenticatedPage";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CRMTable from "components/CRMTable";
import Title from "components/Title";
import { getUserIdOfRequest } from "utils/pageUtils";
import AccessDenied from "components/AccessDenied";

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
                                        field: '_id',
                                        headerName: 'ID',
                                        minWidth: 220
                                    },
                                    {
                                        field: 'username',
                                        headerName: 'Username',
                                        minWidth: 200
                                    }
                                ]
                            }
                        />

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
