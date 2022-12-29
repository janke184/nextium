import AppLayoutShell from "components/AppLayoutShell";
import AuthenticatedPage from "components/AuthenticatedPage";
import AccessDenied from "components/AccessDenied";
import { DataGrid } from '@mui/x-data-grid';
import { errorAlert } from "/utils/notifications";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import {Card
    , CardHeader
    , CardContent
    , CardActions
    , TextField
    , Box 
    , Grid 
    , Button
    , IconButton
    , Autocomplete
    , createFilterOptions
} from '@mui/material';
import { useState } from "react";
import { useRouter } from "next/router";
import { getDb } from "/connection/connect";
import { ObjectID } from "bson";
import { ROUTE_SMTPS, ROUTE_SMTPS_ADD } from "/utils/routeUtils";
import { apiCall, EP_DELETE_SMTP, EP_ADD_SMTP } from "/utils/httpUtils";
import { isAllowedUser } from "/utils/userUtils";

const filter = createFilterOptions();

function AddSMTPPageContent(props)
{
    const router = useRouter();

    const [smtp, setSmtp] = useState(props.smtp);

    const [loading, setLoading] = useState(false);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        setLoading(true);
        apiCall(EP_ADD_SMTP, smtp).then((response) => {
            setLoading(false);
            if(response.success){
                router.replace(ROUTE_SMTPS);

            }else{
                errorAlert('Unable to add smtp');
            }
        });
    }

    const onDeleteClickHandler = (event) => {
        event.preventDefault();

        setLoading(true);
        apiCall(EP_DELETE_SMTP, {_id: smtp._id}).then((response) => {
            setLoading(false);
            if(response.success){
                router.replace(ROUTE_SMTPS);

            }else{
                errorAlert('Unable to delete smtp');
            }
        });
    }

    const onChangeHandler = (event) => {

        // create a new object with target name as key and target value as value
        setSmtp({ ...smtp, [event.target.name]: event.target.value });

    }

    const onBackClickHandler = (event) => {
        router.back();
    }

    return (
        <AuthenticatedPage>
            <AppLayoutShell>
                
                <Grid container>

                    <Grid item xs={12} md={6} >

                        <Card sx={{ minWidth: 275 }}>

                            <form onSubmit={onSubmitHandler}>

                                <Button onClick={onBackClickHandler} startIcon={<ArrowBackIcon/>}>Back</Button>

                                <CardHeader title="New SMTP" subheader=""/>

                                <CardContent>

                                    <div className="my-form">

                                        <Grid item>
                                            <TextField 
                                                InputLabelProps={{ shrink: smtp.name ? true : false }} 
                                                required 
                                                sx={{width: '100%'}} onChange={onChangeHandler} 
                                                variant="outlined" 
                                                name="name" 
                                                label="Display Name" 
                                                value={smtp.name} 
                                            />
                                        </Grid>

                                        <Grid item>
                                            <TextField 
                                                type="email" 
                                                InputLabelProps={{ shrink: smtp.name ? true : false }} 
                                                required 
                                                sx={{width: '100%'}} onChange={onChangeHandler} 
                                                variant="outlined" 
                                                name="from" 
                                                label="From" 
                                                value={smtp.from} 
                                            />
                                        </Grid>

                                        <Grid item>
                                            <TextField InputLabelProps={{ shrink: smtp.name ? true : false }} required sx={{width: '100%'}} onChange={onChangeHandler} name="from_name" label="From Name" variant="outlined" value={smtp.from_name} />
                                        </Grid>

                                        <Grid item>
                                            <TextField 
                                                InputLabelProps={{ shrink: smtp.name ? true : false }} 
                                                required sx={{width: '100%'}} 
                                                onChange={onChangeHandler} 
                                                variant="outlined" 
                                                name="host" 
                                                label="Host" 
                                                value={smtp.host} 
                                            />
                                        </Grid>

                                        <Grid item>
                                            <TextField 
                                                InputLabelProps={{ shrink: smtp.name ? true : false }} 
                                                required sx={{width: '100%'}} 
                                                onChange={onChangeHandler} 
                                                variant="outlined" 
                                                type={"number"}
                                                name="port" 
                                                label="Port" 
                                                value={smtp.port} 
                                            />
                                        </Grid>

                                        <Grid item>
                                            <TextField 
                                                InputLabelProps={{ shrink: smtp.name ? true : false }} 
                                                required sx={{width: '100%'}} 
                                                onChange={onChangeHandler} 
                                                variant="outlined" 
                                                name="username" 
                                                label="Username" 
                                                value={smtp.username} 
                                            />
                                        </Grid>

                                        <Grid item>
                                            <TextField 
                                                InputLabelProps={{ shrink: smtp.name ? true : false }} 
                                                required sx={{width: '100%'}} 
                                                onChange={onChangeHandler} 
                                                variant="outlined" 
                                                name="password" 
                                                label="Password" 
                                                value={smtp.password} 
                                            />
                                        </Grid>


                                    </div>

                                </CardContent>

                                <CardActions sx={{justifyContent:"space-between"}}>

                                    <Grid container gap={2}>

                                        <Button
                                            variant="contained"
                                            disabled={loading}
                                            type="submit"
                                            >
                                            Save
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            disabled={loading}
                                            onClick={onBackClickHandler}
                                            >
                                            Cancel
                                        </Button>

                                    </Grid>

                                    <Button
                                        variant="outlined"
                                        disabled={loading || !smtp._id}
                                        color="error"
                                        onClick={onDeleteClickHandler}
                                        endIcon={<DeleteIcon/>}
                                        >
                                        Delete
                                    </Button>

                                </CardActions>

                            </form>

                        </Card>

                    </Grid>
                </Grid>


                <style jsx>{`
                    .my-form{
                        display:flex;
                        flex-direction:column;
                        gap: 15px;
                    }
                `}</style>

            </AppLayoutShell>
        </AuthenticatedPage>
    )
}

export default function AddSMTP(props){

    if(props.access_granted){

        return (
            // add props to the component
            <AddSMTPPageContent {...props}/>
        )

    }else{
        
        return (
            <AccessDenied/>
        )

    }

}

export const getServerSideProps = async ({req, query}) =>
{
    const allowed = await isAllowedUser(req, ROUTE_SMTPS_ADD);

    let smtp = {};

    if(allowed.success){

        const db = await getDb();

        let { _id } = query;

        _id = _id && _id.length > 0 ? _id[0] : null;

        if(_id){
        
            // Look for the object
            smtp = await db.collection('smtps').findOne({_id: ObjectID(_id)});

            // serialize the object
            smtp = JSON.parse(JSON.stringify(smtp));



        }

    }


    return {
      props: {
        access_granted: allowed.success,
        smtp: smtp
      }
    };


}
