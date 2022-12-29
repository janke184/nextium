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
    , createFilterOptions,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from '@mui/material';
import { useState } from "react";
import { useRouter } from "next/router";
import { getDb } from "/connection/connect";
import { ObjectID } from "bson";
import { ROUTE_MAILING_TEMPLATES, ROUTE_MAILING_TEMPLATES_ADD } from "/utils/routeUtils";
import { apiCall, EP_ADD_MAILING_TEMPLATE, EP_DELETE_MAILING_TEMPLATE } from "/utils/httpUtils";
import { isAllowedUser } from "/utils/userUtils";

const filter = createFilterOptions();

function AddMailingTemplatePageContent(props)
{
    const router = useRouter();

    const [template, setTemplate] = useState(props.template);
    
    const [loading, setLoading] = useState(false);

    const smtps = props.smtps;
    const event_handlers = props.event_handlers;

    const onSubmitHandler = (event) => {
        event.preventDefault();

        setLoading(true);
        apiCall(EP_ADD_MAILING_TEMPLATE, template).then((response) => {
            setLoading(false);
            if(response.success){
                router.replace(ROUTE_MAILING_TEMPLATES);

            }else{
                errorAlert('Unable to add template');
            }
        });
    }

    const onDeleteClickHandler = (event) => {
        event.preventDefault();

        setLoading(true);
        apiCall(EP_DELETE_MAILING_TEMPLATE, {_id: template._id}).then((response) => {
            setLoading(false);
            if(response.success){
                router.replace(ROUTE_MAILING_TEMPLATES);

            }else{
                errorAlert('Unable to delete template');
            }
        });
    }

    const onChangeHandler = (event) => {

        if(event.target.name=='smtp'){
            
            const smtp = smtps.find((smtp) => smtp._id == event.target.value);
            setTemplate({ ...template, smtp: smtp });

        }else if(event.target.name=='event_handler'){
            
            const event_handler = event_handlers.find((event_handler) => event_handler._id == event.target.value);
            setTemplate({ ...template, event_handler: event_handler });

        }else{
            // create a new object with target name as key and target value as value
            setTemplate({ ...template, [event.target.name]: event.target.value });

        }


    }

    const onBackClickHandler = (event) => {
        router.back();
    }

    const onChangeAutocompleteHandler = (event, newValue) => {

        console.log('event', event);
        console.log('newValue', newValue);
        
        if(!newValue || !newValue._id){
            return;
        }
        
        console.log('template', newValue);

        setTemplate({
            ...template,
            smtp: newValue
        });

        event.preventDefault();
    }

    return (
        <AuthenticatedPage>
            <AppLayoutShell>
                
                <Grid container>

                    <Grid item xs={12} md={6} >

                        <Card sx={{ minWidth: 275 }}>

                            <form onSubmit={onSubmitHandler}>

                                <Button onClick={onBackClickHandler} startIcon={<ArrowBackIcon/>}>Back</Button>

                                <CardHeader title="New Mailing Template" subheader=""/>

                                <CardContent>

                                    <div className="my-form">

                                        <Grid item>
                                            <TextField 
                                                InputLabelProps={{ shrink: template.name ? true : false }} 
                                                required 
                                                sx={{width: '100%'}} 
                                                onChange={onChangeHandler} 
                                                variant="outlined" 
                                                name="name" 
                                                label="Name" 
                                                value={template.name} 
                                            />
                                        </Grid>

                                        <Grid item>
                                            <FormControl fullWidth>
                                                <InputLabel id="smtp-label">SMTP</InputLabel>
                                                <Select
                                                    labelId="smtp-label"
                                                    name="smtp"
                                                    label="SMTP"
                                                    value={ (template.smtp && template.smtp._id) ? template.smtp._id : '' }
                                                    onChange={onChangeHandler}
                                                >
                                                    <MenuItem key={-1} value={-1}>&nbsp;</MenuItem>
                                                    {
                                                        smtps.map( (smtp) => (<MenuItem key={smtp._id} value={smtp._id}>{smtp.name}</MenuItem>) )
                                                    }
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        <Grid item>
                                            <TextField 
                                                InputLabelProps={{ shrink: template.name ? true : false }} 
                                                sx={{width: '100%'}} onChange={onChangeHandler} 
                                                variant="outlined" 
                                                name="from_name" 
                                                label="From Name" 
                                                value={template.from_name} 
                                            />
                                        </Grid>

                                        <Grid item>
                                            <TextField 
                                                type={"email"}
                                                InputLabelProps={{ shrink: template.name ? true : false }} 
                                                sx={{width: '100%'}} onChange={onChangeHandler} 
                                                variant="outlined" 
                                                name="cc" 
                                                label="CC" 
                                                value={template.cc} 
                                            />
                                        </Grid>

                                        <Grid item>
                                            <TextField 
                                                type={"email"}
                                                InputLabelProps={{ shrink: template.name ? true : false }} 
                                                sx={{width: '100%'}} onChange={onChangeHandler} 
                                                variant="outlined" 
                                                name="cco" 
                                                label="CCO" 
                                                value={template.cco} 
                                            />
                                        </Grid>

                                        <Grid item>
                                            <TextField 
                                                type={"email"}
                                                InputLabelProps={{ shrink: template.name ? true : false }} 
                                                sx={{width: '100%'}} onChange={onChangeHandler} 
                                                variant="outlined" 
                                                name="reply_to" 
                                                label="Reply To" 
                                                value={template.reply_to} 
                                            />
                                        </Grid>

                                        <Grid item>
                                            <TextField 
                                                InputLabelProps={{ shrink: template.name ? true : false }} 
                                                sx={{width: '100%'}} onChange={onChangeHandler} 
                                                variant="outlined" 
                                                name="subject" 
                                                label="Subject" 
                                                value={template.subject} 
                                            />
                                        </Grid>

                                        <Grid item>
                                            <TextField 
                                                InputLabelProps={{ shrink: template.name ? true : false }} 
                                                sx={{width: '100%'}} onChange={onChangeHandler} 
                                                variant="outlined" 
                                                name="body" 
                                                label="Body" 
                                                value={template.body} 
                                                multiline
                                                rows={10}
                                            />
                                        </Grid>


                                        <Grid item>
                                            <FormControl fullWidth>
                                                <InputLabel id="event-handlers-label">Event Handler</InputLabel>
                                                <Select
                                                    labelId="event-handlers-label"
                                                    name="event_handler"
                                                    label="Event Handler"
                                                    value={ (template.event_handler && template.event_handler._id) ? template.event_handler._id : '' }
                                                    onChange={onChangeHandler}
                                                >
                                                    <MenuItem key={-1} value={-1}>&nbsp;</MenuItem>
                                                    {
                                                        event_handlers.map( (event_handler) => (<MenuItem key={event_handler._id} value={event_handler._id}>{event_handler.name}</MenuItem>) )
                                                    }
                                                </Select>
                                            </FormControl>
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
                                        disabled={loading || !template._id}
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

export default function AddMailingTemplate(props){

    if(props.access_granted){

        return (
            // add props to the component
            <AddMailingTemplatePageContent {...props}/>
        )

    }else{
        
        return (
            <AccessDenied/>
        )

    }

}

export const getServerSideProps = async ({req, query}) =>
{
    const allowed = await isAllowedUser(req, ROUTE_MAILING_TEMPLATES_ADD);

    let template = {
        smtp: {},
        event_handlers: {},
    };

    let smtps = {};
    let event_handlers = {};

    if(allowed.success){

        const db = await getDb();

        let { _id } = query;

        _id = _id && _id.length > 0 ? _id[0] : null;

        if(_id){
        
            // Look for the object
            template = await db.collection('mailing_templates').findOne({_id: ObjectID(_id)});

            template.smtp = template.smtp ? template.smtp : {};

            // serialize the object
            template = JSON.parse(JSON.stringify(template));
        }

        // get smtps not deleted
        smtps = await db.collection('smtps').find({deleted_date: {$eq: null}}).toArray();
        smtps = JSON.parse(JSON.stringify(smtps));

        // get non deleted event handlers
        event_handlers = await db.collection('event_handlers').find({
            deleted_date: {$eq: null},
            next_event: 'SEND_EMAIL_FROM_TEMPLATE'
        }).toArray();
        event_handlers = JSON.parse(JSON.stringify(event_handlers));

    }

    return {
      props: {
        access_granted: allowed.success,
        template: template,
        smtps: smtps,
        event_handlers: event_handlers
      }
    };


}
