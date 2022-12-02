import { styled} from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ArticleIcon from '@mui/icons-material/Article';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useState } from 'react';


export const mainListItems = (
	<>
	  <ListItemButton component="a" href="/dashboard">
		<ListItemIcon>
		  <DashboardIcon />
		</ListItemIcon>
		<ListItemText primary="Dashboard" />
	  </ListItemButton>

	  <ListItemButton component="a" href="/users">
		<ListItemIcon>
		  <PeopleIcon />
		</ListItemIcon>
		<ListItemText primary="Users" />
	  </ListItemButton>

	  <ListItemButton component="a" href="/roles">
		<ListItemIcon>
		  <ManageAccountsIcon />
		</ListItemIcon>
		<ListItemText primary="Roles" />
	  </ListItemButton>

	  <ListItemButton component="a" href="/pages">
		<ListItemIcon>
		  <ArticleIcon />
		</ListItemIcon>
		<ListItemText primary="Pages" />
	  </ListItemButton>

	  <ListItemButton>
		<ListItemIcon>
		  <PeopleIcon />
		</ListItemIcon>
		<ListItemText primary="Customers" />
	  </ListItemButton>
	  <ListItemButton>
		<ListItemIcon>
		  <BarChartIcon />
		</ListItemIcon>
		<ListItemText primary="Reports" />
	  </ListItemButton>
	  <ListItemButton>
		<ListItemIcon>
		  <LayersIcon />
		</ListItemIcon>
		<ListItemText primary="Integrations" />
	  </ListItemButton>
	</>
  );
  
  export const secondaryListItems = (
	<>
	  <ListSubheader component="div" inset>
		Saved reports
	  </ListSubheader>
	  <ListItemButton>
		<ListItemIcon>
		  <AssignmentIcon />
		</ListItemIcon>
		<ListItemText primary="Current month" />
	  </ListItemButton>
	  <ListItemButton>
		<ListItemIcon>
		  <AssignmentIcon />
		</ListItemIcon>
		<ListItemText primary="Last quarter" />
	  </ListItemButton>
	  <ListItemButton>
		<ListItemIcon>
		  <AssignmentIcon />
		</ListItemIcon>
		<ListItemText primary="Year-end sale" />
	  </ListItemButton>
	</>
  );


  
  const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
	})(
	({ theme, open }) => (
	{
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], 
			{
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}
		),
		...(
		open && 
			{
				marginLeft: drawerWidth,
				width: `calc(100% - ${drawerWidth}px)`,
				transition: theme.transitions.create(['width', 'margin']
					,{
						easing: theme.transitions.easing.sharp,
						duration: theme.transitions.duration.enteringScreen,
					}
				),
			}
		),
	})
);

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
({ theme, open }) => ({
	'& .MuiDrawer-paper': {
	position: 'relative',
	whiteSpace: 'nowrap',
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	boxSizing: 'border-box',
	...(!open && {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
		width: theme.spacing(9),
		},
	}),
	},
}),
);

export default function Header(props)
{
	const [open, setOpen] = useState(false);

	const toggleDrawer = () => {
	  setOpen(!open);
	};
  
	return (
		<>
		  <AppBar position="absolute" open={open}>
  
				<Toolbar
				  sx={{
				  pr: '24px', // keep right padding when drawer closed
				  }}
			  >
				  <IconButton
					  edge="start"
					  color="inherit"
					  aria-label="open drawer"
					  onClick={toggleDrawer}
					  sx={{
						  marginRight: '36px',
						  ...(open && { display: 'none' }),
					  }}
					  >
					  <MenuIcon />

				  </IconButton>
  
				  <Typography
					  component="h1"
					  variant="h6"
					  color="inherit"
					  noWrap
					  sx={{ flexGrow: 1 }}
					  >
					  Next CRM
				  </Typography>
  
				  <IconButton color="inherit">
					<Badge badgeContent={4} color="secondary">
						<NotificationsIcon />
					</Badge>
				  </IconButton>
  
				</Toolbar>
  
		  </AppBar>
  
		  <Drawer variant="permanent" open={open}>
  
			<Toolbar
				  sx={{
				  display: 'flex',
				  alignItems: 'center',
				  justifyContent: 'flex-end',
				  px: [1],
				  }}
			  >
				<IconButton onClick={toggleDrawer}>
					<ChevronLeftIcon />
				</IconButton>

			</Toolbar>
  
			<Divider />
  
			<List component="nav">
			  {mainListItems}
			  <Divider sx={{ my: 1 }} />
			  {secondaryListItems}
			</List>
  
		  </Drawer>
	</>
	);
}