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
} from '@mui/material';
import { useState } from "react";
import { useRouter } from "next/router";
import { getDb } from "/connection/connect";
import { ObjectID } from "bson";
import { ROUTE_PEOPLE, ROUTE_PEOPLE_ADD } from "/utils/routeUtils";
import { isAllowedUser } from "/utils/userUtils";
import { apiCall, EP_DELETE_PERSON, EP_ADD_PERSON } from "/utils/httpUtils";

function AddPersonPageContent(props)
{
    const router = useRouter();

    const [person, setPerson] = useState(props.person);

    const [formValidations, setFormValidations] = useState(
        {
            display_name: {
                valid: true,
                message: ''
            }

        });

    const [loading, setLoading] = useState(false);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        setLoading(true);
        apiCall(EP_ADD_PERSON, person).then((response) => {
            setLoading(false);
            if(response.success){
                router.replace(ROUTE_PEOPLE);

            }else{
                errorAlert('', response.data);
            }
        });
    }

    const onDeleteClickHandler = (event) => {
        event.preventDefault();

        setLoading(true);
        apiCall(EP_DELETE_PERSON, {_id: person._id}).then((response) => {
            setLoading(false);
            if(response.success){
                router.replace(ROUTE_PEOPLE);

            }else{
                errorAlert('', response.data);
            }
        });
    }

    const onChangeHandler = (event) => {

        // create a new object with target name as key and target value as value
        setPerson({ ...person, [event.target.name]: event.target.value });

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

                                <CardHeader title="New Person" subheader=""/>

                                <CardContent>

                                    <div className="my-form">

                                        <Grid item>
                                            <TextField 
                                                InputLabelProps={{ shrink: person.display_name ? true : false }} 
                                                sx={{width: '100%'}} 
                                                required
                                                onChange={onChangeHandler} 
                                                name="display_name" 
                                                label="Display Name" 
                                                variant="outlined" 
                                                value={person.display_name} 
                                                error={!formValidations.display_name.success}
                                                helperText={formValidations.display_name.message}
                                                />
                                        </Grid>

                                        <Grid item>
                                            <TextField 
                                                InputLabelProps={{ shrink: person.display_name ? true : false }} 
                                                sx={{width: '100%'}} 
                                                onChange={onChangeHandler} 
                                                name="first_name" 
                                                label="First Name" 
                                                variant="outlined" 
                                                value={person.first_name} 
                                            />
                                        </Grid>

                                        <Grid item>
                                            <TextField 
                                                InputLabelProps={{ shrink: person.display_name ? true : false }} 
                                                sx={{width: '100%'}} 
                                                onChange={onChangeHandler} 
                                                name="last_name" 
                                                label="Last Name" 
                                                variant="outlined" 
                                                value={person.last_name} />
                                        </Grid>

                                        <Grid item>
                                            <TextField type="email" 
                                                InputLabelProps={{ shrink: person.display_name ? true : false }} 
                                                sx={{width: '100%'}} 
                                                onChange={onChangeHandler} 
                                                name="email" 
                                                label="Email" 
                                                variant="outlined" 
                                                value={person.email} 
                                            />
                                        </Grid>

                                        <Grid item>
                                            <TextField 
                                                InputLabelProps={{ shrink: person.display_name ? true : false }} 
                                                sx={{width: '100%'}} 
                                                onChange={onChangeHandler} 
                                                name="main_phone" 
                                                label="Main Phone" 
                                                variant="outlined" 
                                                value={person.main_phone} 
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
                                        disabled={loading || !person._id}
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

export default function AddPerson(props){

    if(props.access_granted){

        return (
            // add props to the component
            <AddPersonPageContent {...props}/>
        )

    }else{
        
        return (
            <AccessDenied/>
        )

    }

}

export const getServerSideProps = async ({req, query}) =>
{
    const allowed = await isAllowedUser(req, ROUTE_PEOPLE_ADD);

    let person = {
    };

    if(allowed.success){

        const db = await getDb();

        let { _id } = query;

        _id = _id && _id.length > 0 ? _id[0] : null;

        if(_id){
        
            // Look for the person
            person = await db.collection('people').findOne({_id: ObjectID(_id)});

            // serialize the object
            person = JSON.parse(JSON.stringify(person));


        }

    }


    return {
      props: {
        access_granted: allowed.success,
        person: person
      },
    };


}
