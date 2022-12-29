import AppLayoutShell from "/components/AppLayoutShell";
import AuthenticatedPage from "/components/AuthenticatedPage";
import {Grid, Button} from '@mui/material/';
import Paper from '@mui/material/Paper';
import CRMTable from "/components/CRMTable";
import Title from "/components/Title";
import AccessDenied from "/components/AccessDenied";
import { isAllowedUser } from "/utils/userUtils";
import { ROUTE_ROLES } from "/utils/routeUtils";
import { EP_QUERY_GET_ROLES } from "utils/httpUtils";
import { ROUTE_ROLES_ADD } from "utils/routeUtils";
import Link from "next/link";

function RolesPageContent()
{

    return (
        <AuthenticatedPage>
            <AppLayoutShell>
                
                <Grid item xs={12}>

					<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
					    
                        <Title>Roles</Title>

                        <CRMTable 
                            endpoint={EP_QUERY_GET_ROLES}
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
                            onRowSelectedRoute={ROUTE_ROLES_ADD}
                        />

                        <Grid item justifyContent="flex-start" sx={{mt: 5}}>
                            <Link href={ROUTE_ROLES_ADD}>
                                <Button variant="outlined">New Role</Button>
                            </Link>
                        </Grid>

					</Paper>
				</Grid>

            </AppLayoutShell>
        </AuthenticatedPage>
    );
}


export default function RolesPage(props){

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


export const getServerSideProps = async ({ req }) => 
{
    const allowed = await isAllowedUser(req, ROUTE_ROLES);

    return {
      props: {
        access_granted: allowed.success
      },
    };

};
