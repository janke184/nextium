import AppLayoutShell from "components/AppLayoutShell";
import AuthenticatedPage from "components/AuthenticatedPage";
import {Grid, Button} from '@mui/material/';
import Paper from '@mui/material/Paper';
import CRMTable from "components/CRMTable";
import Title from "components/Title";
import { getUserIdOfRequest } from "utils/pageUtils";
import AccessDenied from "components/AccessDenied";

function RolesPageContent()
{

    return (
        <AuthenticatedPage>
            <AppLayoutShell>
                
                <Grid item xs={12}>

					<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
					    
                        <Title>Roles</Title>

                        <CRMTable 
                            collection="roles"
                            columns={
                                [
                                    {
                                        field: 'name',
                                        headerName: 'Role Name',
                                        minWidth: 220
                                    }
                                ]
                            }
                            filter={
                                {
                                    deleted_date: { $eq: null }
                                }
                            }
                            onRowSelectedRoute="/roles/add"
                        />

                        <Grid item justifyContent="flex-start" sx={{mt: 5}}>
                            <Button variant="outlined" href="/roles/add">New Role</Button>
                        </Grid>

					</Paper>
				</Grid>

            </AppLayoutShell>
        </AuthenticatedPage>
    );
}


export default function RolesPage(props){

    console.log('RolesPage');

    if(props.access_granted){

        return (
            <RolesPageContent/>
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
