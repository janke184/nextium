import AppLayoutShell from "components/AppLayoutShell";
import AuthenticatedPage from "components/AuthenticatedPage";
import AccessDenied from "components/AccessDenied";
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
} from '@mui/material';
import { useState } from "react";
import { useRouter } from "next/router";
import { getDb } from "/connection/connect";
import { ObjectID } from "bson";
import { isAllowedUser } from "/utils/userUtils";
import { EP_ADD_EVENT_HANDLER, EP_DELETE_EVENT_HANDLER, apiCall } from "/utils/httpUtils";
import { ROUTE_EVENT_HANDLERS, ROUTE_EVENT_HANDLERS_ADD } from "/utils/routeUtils";

function AddEventHandlerPageContent(props)
{
    const router = useRouter();

    const [eventHandler, setEventHandler] = useState(props.eventHandler);

    const [loading, setLoading] = useState(false);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        setLoading(true);
        apiCall(EP_ADD_EVENT_HANDLER, eventHandler).then((response) => {
            setLoading(false);
            if(response.success){
                router.replace(ROUTE_EVENT_HANDLERS);

            }else{
                errorAlert('Unable to add event handler');
            }
        });
    }

    const onDeleteClickHandler = (event) => {
        event.preventDefault();

        setLoading(true);
        apiCall(EP_DELETE_EVENT_HANDLER, {_id: eventHandler._id}).then((response) => {
            setLoading(false);
            if(response.success){
                router.replace(ROUTE_EVENT_HANDLERS);

            }else{
                errorAlert('Unable to delete event handler');
            }
        });
    }

    const onChangeHandler = (event) => {

        // create a new object with target name as key and target value as value
        setEventHandler({ ...eventHandler, [event.target.name]: event.target.value });

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

                                <CardHeader title="New Event handler" subheader=""/>

                                <CardContent>

                                    <div className="my-form">

                                        <Grid item>
                                            <TextField InputLabelProps={{ shrink: eventHandler.name ? true : false }} required sx={{width: '100%'}} onChange={onChangeHandler} name="name" label="Handler Name" variant="outlined" value={eventHandler.name} />
                                        </Grid>

                                        <Grid item>
                                            <TextField InputLabelProps={{ shrink: eventHandler.name ? true : false }} required sx={{width: '100%'}} onChange={onChangeHandler} name="event_name" label="Event Name" variant="outlined" value={eventHandler.event_name} />
                                        </Grid>

                                        <Grid item>
                                            <TextField InputLabelProps={{ shrink: eventHandler.name ? true : false }} required sx={{width: '100%'}} onChange={onChangeHandler} name="event_handler" label="Event Handler (node module name)" variant="outlined" value={eventHandler.event_handler} />
                                        </Grid>

                                        <Grid item>
                                            <TextField InputLabelProps={{ shrink: eventHandler.name ? true : false }} sx={{width: '100%'}} onChange={onChangeHandler} name="next_event" label="Next Event" variant="outlined" value={eventHandler.next_event} />
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
                                        disabled={loading || !eventHandler._id}
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

export default function AddEventHandler(props){

    if(props.access_granted){

        return (
            // add props to the component
            <AddEventHandlerPageContent {...props}/>
        )

    }else{
        
        return (
            <AccessDenied/>
        )

    }

}

export const getServerSideProps = async ({req, query}) =>
{
    const allowed = await isAllowedUser(req, ROUTE_EVENT_HANDLERS_ADD);

    let eventHandler = {};

    if(allowed.success){

        const db = await getDb();

        let { _id } = query;

        _id = _id && _id.length > 0 ? _id[0] : null;

        if(_id){
        
            // Look for the user
            eventHandler = await db.collection('event_handlers').findOne({_id: ObjectID(_id)});

            // serialize the object
            eventHandler = JSON.parse(JSON.stringify(eventHandler));

        }

    }


    return {
      props: {
        access_granted: allowed.success,
        eventHandler: eventHandler
      }
    };


}
