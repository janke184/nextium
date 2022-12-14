import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import AuthenticatedPage from 'components/AuthenticatedPage';
import AppLayoutShell from 'components/AppLayoutShell';
import { isAllowedUser } from 'utils/userUtils';
import { ROUTE_DASHBOARD } from 'utils/routeUtils';
import AccessDenied from 'components/AccessDenied';


function DashboardContent() {

  return (
	<AuthenticatedPage>
		<AppLayoutShell>
			
			<Grid container spacing={3}>
				{/* Chart */}

				<Grid item xs={12} md={8} lg={9}>
					<Paper
					sx={{
						p: 2,
						display: 'flex',
						flexDirection: 'column',
						height: 240,
					}}
					>
					<Chart />
					</Paper>
				</Grid>

				{/* Recent Deposits */}
				<Grid item xs={12} md={4} lg={3}>
					<Paper
					sx={{
						p: 2,
						display: 'flex',
						flexDirection: 'column',
						height: 240,
					}}
					>
					<Deposits />
					</Paper>
				</Grid>

				{/* Recent Orders */}
				<Grid item xs={12}>
					<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
					<Orders />
					</Paper>
				</Grid>

			</Grid>

		</AppLayoutShell>

	</AuthenticatedPage>
  );
}

export default function Dashboard(props) {
	if(props.access_granted){

		return <DashboardContent />;
	}else{

		return <AccessDenied></AccessDenied>
	}
}

export const getServerSideProps = async ({req}) => {

	const allowed = await isAllowedUser(req, ROUTE_DASHBOARD);

	return {
		props: {
			access_granted: allowed.success
		}
	};
}