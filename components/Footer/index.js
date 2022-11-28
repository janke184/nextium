import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright(props) {
	return (
	  <Typography variant="body2" color="text.secondary" align="center" {...props}>
		{'Copyright © '}
		<Link color="inherit" href="https://soft-cake.net/">
		  Softcake all rights reserved
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	  </Typography>
	);
  }

export default function Footer()
{
    return (
        <Copyright sx={{ pt: 4 }} />

    )
}