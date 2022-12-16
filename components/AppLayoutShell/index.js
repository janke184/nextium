import AppLayout from "components/AppLayout";
import { ThemeProvider , createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Footer from "components/Footer";
import Header from "components/Header";
import { AuthenticatedContextProvider } from "contexts/AuthenticatedContext";

export default function AppLayoutShell({children})
{
    const mdTheme = createTheme();
    
    return (
    <AppLayout>

        <ThemeProvider theme={mdTheme}>
  
            <Box sx={{ display: 'flex' }}>

                <CssBaseline />

                <Header/>

                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                                
                    <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>

                        {children}

                        <Footer/> 

                    </Container>

                </Box>

            </Box>

        </ThemeProvider>
                
        <style jsx>{`
            Box#main {

            }
        `}
        </style>

    </AppLayout>
    );

}