import AppLayoutShell from "components/AppLayoutShell";
import AuthenticatedPage from "components/AuthenticatedPage";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CRMTable from "components/CRMTable";
import Title from "components/Title";

export default function PageUsers(props)
{

    console.log('PageUsers');

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
                                        headerName: 'ID'
                                        , width: 150 
                                    },
                                    {
                                        field: 'username',
                                        headerName: 'Username'
                                        , width: 150 
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
