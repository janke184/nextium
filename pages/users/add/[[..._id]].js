import { apiCall, EP_DELETE_USER, EP_ADD_USER } from "utils/httpUtils";
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
import { getDb } from "connection/connect";
import { ObjectID } from "bson";
import { isAllowedUser } from "utils/userUtils";
import { ROUTE_USERS, ROUTE_USERS_ADD } from "utils/routeUtils";

const filter = createFilterOptions();

function AddUserPageContent(props)
{
    const router = useRouter();

    const [user, setUser] = useState(props.user);

    const [loading, setLoading] = useState(false);

    const [roles] = useState(props.roles);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        setLoading(true);
        apiCall(EP_ADD_USER, user).then((response) => {
            setLoading(false);
            if(response.success){
                router.replace(ROUTE_USERS);

            }else{
                errorAlert('Unable to add user');
            }
        });
    }

    const onDeleteClickHandler = (event) => {
        event.preventDefault();

        setLoading(true);
        apiCall(EP_DELETE_USER, {_id: user._id}).then((response) => {
            setLoading(false);
            if(response.success){
                router.replace(ROUTE_USERS);

            }else{
                errorAlert('Unable to delete user');
            }
        });
    }

    const onChangeAutocompleteHandler = (event, newValue) => {

        if(!newValue || (newValue && newValue._id=='')){
            return;
        }
        
        // if role exists, ignore it
        const isExisting = user.roles.some((elem) => elem._id === newValue._id );

        if(isExisting){
            return;
        }


        setUser({
            ...user,
            roles: [
                ...user.roles,
                newValue
            ]
        });

        // clear value of autocomplete component
        event.target.value = '';

        event.preventDefault();
    }

    const onChangeHandler = (event) => {

        // create a new object with target name as key and target value as value
        setUser({ ...user, [event.target.name]: event.target.value });

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

                                <CardHeader title="New User" subheader=""/>

                                <CardContent>

                                    <div className="my-form">

                                        <Grid item>
                                            <TextField type="email" InputLabelProps={{ shrink: user.username ? true : false }} required sx={{width: '100%'}} onChange={onChangeHandler} name="username" label="Username" variant="outlined" value={user.username} />
                                        </Grid>

                                        <Grid item>
                                            <TextField InputLabelProps={{ shrink: user.username ? true : false }} required sx={{width: '100%'}} onChange={onChangeHandler} name="display_name" label="Display Name" variant="outlined" value={user.display_name} />
                                        </Grid>

                                        <Grid item>
                                            <TextField InputLabelProps={{ shrink: user.username ? true : false }} required sx={{width: '100%'}} onChange={onChangeHandler} name="password" label="Password" variant="outlined" value={user.password} />
                                        </Grid>

                                        <Grid item>
                                            <Autocomplete
                                                name="roles"
                                                disablePortal
                                                onChange={onChangeAutocompleteHandler}
                                                onSubmit={onChangeAutocompleteHandler}
                                                options={roles}
                                                sx={{ width: '100%' }}
                                                renderInput={(params) => <TextField {...params} label="Available roles" />}
                                                renderOption={(props, option) => <li name="role" {...props}>{ option.name }</li>}
                                                getOptionLabel={(option) => option.name}
                                                freeSolo
                                                selectOnFocus
                                                clearOnBlur
                                                />
                                        </Grid>

                                        <Grid item>
                                            <label>Roles of this user</label>
                                            <Box sx={{ height: 400, width: '100%' }}>
                                                <DataGrid
                                                    rows={user.roles}
                                                    getRowId={(row) => {
                                                        return row._id;
                                                    } }
                                                    columns={[
                                                        {
                                                            field: 'name',
                                                            headerName: 'Role Name',
                                                            width: 250
                                                        },
                                                        {
                                                            field: 'action',
                                                            headerName: '',
                                                            renderCell: (params) => (
                                                                <strong>
                                                                    <IconButton 
                                                                        color="error"
                                                                        onClick={() => {
                                                                            const newRoles = user.roles.filter((elem) => elem._id !== params.row._id);
                                                                            setUser({
                                                                                ...user,
                                                                                roles: newRoles
                                                                            });
                                                                        }
                                                                         }>
                                                                        <DeleteIcon/>
                                                                    </IconButton>
                                                                </strong>
                                                            )
                                                        }
                                                    ]
                                                    }
                                                    pageSize={5}
                                                    rowsPerPageOptions={[5]}
                                                    disableSelectionOnClick
                                                />        
                                            </Box>                                    
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
                                        disabled={loading || !user._id}
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

export default function AddUser(props){

    if(props.access_granted){

        return (
            // add props to the component
            <AddUserPageContent {...props}/>
        )

    }else{
        
        return (
            <AccessDenied/>
        )

    }

}

export const getServerSideProps = async ({req, query}) =>
{
    const allowed = await isAllowedUser(req, ROUTE_USERS_ADD);

    let user = {
        roles: []
    };

    let roles = [];

    if(allowed.success){

        const db = await getDb();

        let { _id } = query;

        _id = _id && _id.length > 0 ? _id[0] : null;

        if(_id){
        
            // Look for the user
            user = await db.collection('users').findOne({_id: ObjectID(_id)});

            // serialize the object
            user = JSON.parse(JSON.stringify(user));

            if(!user.roles){
                user.roles = [];
            }


        }

        // Looking for roles
        roles = await db.collection('roles').find({
            deleted_date: {$eq: null}
        }).toArray();

        // serialize the object
        roles = JSON.parse(JSON.stringify(roles));

    }


    return {
      props: {
        access_granted: allowed.success,
        user: user,
        roles: roles
      },
    };


}
