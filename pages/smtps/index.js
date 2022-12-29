import AppLayoutShell from "components/AppLayoutShell";
import AuthenticatedPage from "components/AuthenticatedPage";
import Grid from '@mui/material/Grid';
import {Paper, Button} from '@mui/material/';
import CRMTable from "components/CRMTable";
import Title from "components/Title";
import AccessDenied from "components/AccessDenied";
import { ROUTE_SMTPS, ROUTE_SMTPS_ADD } from "/utils/routeUtils";
import { isAllowedUser } from "/utils/userUtils";
import { EP_QUERY_GET_SMTPS } from "/utils/httpUtils";
import Link from "next/link";

function SMTPPageContent()
{

    return (
        <AuthenticatedPage>
            <AppLayoutShell>
                
                <Grid item xs={12}>

					<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
					    
                        <Title>SMTP's</Title>

                        <CRMTable 
                            endpoint={EP_QUERY_GET_SMTPS}
                            columns={
                                [
                                    {
                                        field: 'name',
                                        headerName: 'Display Name',
                                        flex: 1,
                                        minWidth: 200
                                    },
                                    {
                                        field: 'from',
                                        headerName: 'From',
                                        flex: 1,
                                        minWidth: 200
                                    }
                                    ,{
                                        field: 'from_name',
                                        headerName: 'From Name',
                                        flex: 1,
                                        minWidth: 200
                                    }
                                    ,{
                                        field: 'host',
                                        headerName: 'Host',
                                        flex: 1,
                                        minWidth: 200
                                    }
                                    ,{
                                        field: 'port',
                                        headerName: 'Port',
                                        type: 'number',
                                        flex: 1,
                                        minWidth: 200
                                    }
                                    ,{
                                        field: 'username',
                                        headerName: 'Username',
                                        flex: 1,
                                        minWidth: 200
                                    }
                                    ,{
                                        field: 'password',
                                        headerName: 'Password',
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
                            onRowSelectedRoute={ ROUTE_SMTPS_ADD }
                        />

                        <Grid item justifyContent="flex-start" sx={{mt: 5}}>
                            <Link href={ROUTE_SMTPS_ADD}>
                                <Button variant="outlined">New SMTP</Button>
                            </Link>
                        </Grid>

					</Paper>

				</Grid>

            </AppLayoutShell>
        </AuthenticatedPage>
    );
}


export default function SMTPPage(props){

    if(props.access_granted){

        return (
            <SMTPPageContent/>
        )

    }else{

        return (
            <AccessDenied/>
        )

    }

}


export const getServerSideProps = async ({ req, res }) => 
{
    const allowed = await isAllowedUser(req, ROUTE_SMTPS);

    return {
      props: {
        access_granted: allowed.success
      },
    };

};
