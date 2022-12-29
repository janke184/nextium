import AppLayoutShell from "components/AppLayoutShell";
import AuthenticatedPage from "components/AuthenticatedPage";
import Grid from '@mui/material/Grid';
import {Paper, Button} from '@mui/material/';
import CRMTable from "components/CRMTable";
import Title from "components/Title";
import AccessDenied from "components/AccessDenied";
import { ROUTE_MAILING_TEMPLATES, ROUTE_MAILING_TEMPLATES_ADD } from "/utils/routeUtils";
import { isAllowedUser } from "/utils/userUtils";
import { EP_QUERY_GET_MAILING_TEMPLATES } from "/utils/httpUtils";
import Link from "next/link";

function MailingTemplatesPageContent()
{

    return (
        <AuthenticatedPage>
            <AppLayoutShell>
                
                <Grid item xs={12}>

					<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
					    
                        <Title>Mailing Templates</Title>

                        <CRMTable 
                            endpoint={EP_QUERY_GET_MAILING_TEMPLATES}
                            columns={
                                [
                                    {
                                        field: 'name',
                                        headerName: 'Name',
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
                                        field: 'subject',
                                        headerName: 'Subject',
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
                            onRowSelectedRoute={ ROUTE_MAILING_TEMPLATES_ADD }
                        />

                        <Grid item justifyContent="flex-start" sx={{mt: 5}}>
                            <Link href={ROUTE_MAILING_TEMPLATES_ADD}>
                                <Button variant="outlined">New Mailing Template</Button>
                            </Link>
                        </Grid>

					</Paper>

				</Grid>

            </AppLayoutShell>
        </AuthenticatedPage>
    );
}


export default function MailingTemplatesPage(props){

    if(props.access_granted){

        return (
            <MailingTemplatesPageContent/>
        )

    }else{

        return (
            <AccessDenied/>
        )

    }

}


export const getServerSideProps = async ({ req, res }) => 
{
    const allowed = await isAllowedUser(req, ROUTE_MAILING_TEMPLATES);

    return {
      props: {
        access_granted: allowed.success
      },
    };

};
