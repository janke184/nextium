import { apiCall, EP_DELETE_ROLE, EP_ADD_ROLE } from "/utils/httpUtils";
import AppLayoutShell from "/components/AppLayoutShell";
import AuthenticatedPage from "/components/AuthenticatedPage";
import AccessDenied from "/components/AccessDenied";
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
    , createFilterOptions,
    Checkbox
} from '@mui/material';
import { useRouter } from "next/router";
import { getDb } from "/connection/connect";
import { ObjectID } from "bson";
import { isAllowedUser } from "/utils/userUtils";
import { ROUTE_ROLES_ADD } from "/utils/routeUtils";
import { useState } from "react";
import { ROUTE_ROLES } from "utils/routeUtils";

function AddRolePageContent(props)
{
    const router = useRouter();

    const [role, setRole] = useState(props.role);

    const [loading, setLoading] = useState(false);

    const [pages] = useState(props.pages);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        setLoading(true);
        apiCall(EP_ADD_ROLE, role).then((response) => {
            setLoading(false);
            if(response.success){
                router.replace( ROUTE_ROLES );

            }else{
                errorAlert('Unable to add role');
            }
        });
    }

    const onDeleteClickHandler = (event) => {
        event.preventDefault();

        setLoading(true);
        apiCall(EP_DELETE_ROLE, {_id: role._id}).then((response) => {
            setLoading(false);
            if(response.success){
                router.replace( ROUTE_ROLES );

            }else{
                errorAlert('Unable to delete role');
            }
        });
    }

    const onChangeAutocompleteHandler = (event, newValue) => {

        if(!newValue || (newValue && newValue._id=='')){
            return;
        }
        
        // if endpoint exists, ignore it
        const isExisting = role.pages.some((elem) => elem._id === newValue._id );

        if(isExisting){
            return;
        }


        setRole({
            ...role,
            pages: [
                ...role.pages,
                newValue
            ]
        });

        // clear value of autocomplete component
        event.target.value = '';

        event.preventDefault();
    }

    const onChangeHandler = (event) => {

        // create a new object with target name as key and target value as value
        setRole({ ...role, [event.target.name]: event.target.value });

    }

    const onBackClickHandler = (event) => {
        router.back();
    }

    return (
        <AuthenticatedPage>
            <AppLayoutShell>
                
                <Grid container>

                    <Grid item xs={12} md={12} >

                        <Card sx={{ minWidth: 275 }}>

                            <form onSubmit={onSubmitHandler}>

                                <Button onClick={onBackClickHandler} startIcon={<ArrowBackIcon/>}>Back</Button>

                                <CardHeader title="New Role" subheader=""/>

                                <CardContent>

                                    <div className="my-form">

                                        <Grid item>
                                            <TextField InputLabelProps={{ shrink: role.name ? true : false }} required sx={{width: '100%'}} onChange={onChangeHandler} name="name" label="Display name" variant="outlined" value={role.name} />
                                        </Grid>

                                        <Grid item>
                                            <Autocomplete
                                                name="pages"
                                                disablePortal
                                                onChange={onChangeAutocompleteHandler}
                                                onSubmit={onChangeAutocompleteHandler}
                                                options={pages}
                                                sx={{ width: '100%' }}
                                                renderInput={(params) => <TextField {...params} label="Available pages" />}
                                                renderOption={(props, option) => <li name="page" {...props}>{ option.name }</li>}
                                                getOptionLabel={(option) => option.name}
                                                freeSolo
                                                selectOnFocus
                                                clearOnBlur
                                                />
                                        </Grid>

                                        <Grid item>
                                            <label>Pages of this role</label>
                                            <Box sx={{ height: 400, width: '100%' }}>
                                                <DataGrid       
                                                    initialState={{
                                                        sorting: {
                                                            sortModel: [
                                                                { field: 'visible', sort: 'desc' }
                                                            ],
                                                        },
                                                    }}                                             
                                                    rows={role.pages}
                                                    getRowId={(row) => {
                                                        return row._id;
                                                    } }
                                                    columns={[
                                                        {
                                                            field: 'route',
                                                            headerName: 'Route',
                                                            flex: 1,
                                                            minWidth: 200
                                                        },
                                                        {
                                                            field: 'name',
                                                            headerName: 'Page',
                                                            flex: 1,
                                                            minWidth: 200
                                                        },
                                                        {
                                                            field: 'group',
                                                            headerName: 'Group',
                                                            flex: 1,
                                                            minWidth: 200,
                                                            editable: true,
                                                            valueSetter: (params) => {
                                                                    
                                                                params.row.group = params.value;

                                                                const newPages = role.pages.map( (page) => {
                                                                    if(page._id == params.row._id){
                                                                        return params.row;
                                                                    }
                                                                    return page;
                                                                });
                                                                setRole({
                                                                    ...role,
                                                                    pages: newPages
                                                                });                                                                
                                                                
                                                                return { 
                                                                    ...params.row
                                                                };
                                                            }
                                                        },
                                                        {
                                                            field: 'icon',
                                                            headerName: 'Icon',
                                                            flex: 1,
                                                            minWidth: 200,
                                                            editable: true,
                                                            valueSetter: (params) => {

                                                                params.row.icon = params.value;

                                                                const newPages = role.pages.map( (page) => {
                                                                    if(page._id == params.row._id){
                                                                        return params.row;
                                                                    }
                                                                    return page;
                                                                });
                                                                setRole({
                                                                    ...role,
                                                                    pages: newPages
                                                                });                                                                
                                                                
                                                                return { 
                                                                    ...params.row
                                                                };
                                                            }
                                                        },
                                                        {
                                                            field: 'order',
                                                            headerName: 'Order',
                                                            flex: 1,       
                                                            type: 'number',
                                                            editable: true,
                                                            minWidth: 100,
                                                            valueSetter: (params) => {

                                                                let newValue = params.value;
                                                                try {
                                                                    value = parseInt(newValue);
                                                                } catch (error) {
                                                                    params.value = 0;
                                                                }

                                                                params.row.order = newValue;

                                                                const newPages = role.pages.map( (page) => {
                                                                    if(page._id == params.row._id){
                                                                        return params.row;
                                                                    }
                                                                    return page;
                                                                });
                                                                setRole({
                                                                    ...role,
                                                                    pages: newPages
                                                                });                                                                
                                                                
                                                                return { 
                                                                    ...params.row
                                                                };
                                                            }
                                                        },
                                                        {
                                                            field: 'visible',
                                                            headerName: 'Visible',
                                                            renderCell: (params) => (
                                                                <Checkbox
                                                                    value={params.row.visible===true}
                                                                    checked={params.row.visible===true}
                                                                    onChange={(event) => {
                                                                        console.log('event', event.target.checked);
                                                                        const newPages = role.pages.map((elem) => {
                                                                            if(elem._id === params.row._id){
                                                                                return {
                                                                                    ...elem,
                                                                                    visible: event.target.checked
                                                                                }
                                                                            }
                                                                            return elem;
                                                                        });
                                                                        setRole({
                                                                            ...role,
                                                                            pages: newPages
                                                                        });
                                                                    }
                                                                }>
                                                                </Checkbox>
                                                            ),
                                                            align: 'center',
                                                            flex: 1,
                                                            minWidth: 100
                                                        },
                                                        {
                                                            field: 'action',
                                                            headerName: '',
                                                            renderCell: (params) => (
                                                                <strong>
                                                                    <IconButton 
                                                                        color="error"
                                                                        onClick={() => {
                                                                            const newPages = role.pages.filter((elem) => elem._id !== params.row._id);
                                                                            setRole({
                                                                                ...role,
                                                                                pages: newPages
                                                                            });
                                                                        }
                                                                         }>
                                                                        <DeleteIcon/>
                                                                    </IconButton>
                                                                </strong>
                                                            ),
                                                            align: 'center',
                                                            minWidth: 100,
                                                            flex: 0.2
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
                                        disabled={loading || !role._id}
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

export default function AddRole(props){

    if(props.access_granted){

        return (
            // add props to the component
            <AddRolePageContent {...props}/>
        )

    }else{
        
        return (
            <AccessDenied/>
        )

    }

}

export const getServerSideProps = async ({req, query}) =>
{
    const allowed = await isAllowedUser(req, ROUTE_ROLES_ADD);

    let role = {
        pages: []
    };

    let pages = [];

    if(allowed.success){

        const db = await getDb();

        let { _id } = query;

        _id = _id && _id.length > 0 ? _id[0] : null;

        if(_id){
        
            // Look for the role
            role = await db.collection('roles').findOne({_id: ObjectID(_id)});

            // serialize the object
            role = JSON.parse(JSON.stringify(role));

            if(!role.pages){
                role.pages = [];
            }


        }

        // Looking for pages
        pages = await db.collection('pages').find({
            deleted_date: {$eq: null}
        }).toArray();

        // serialize the object
        pages = JSON.parse(JSON.stringify(pages));

    }


    return {
      props: {
        access_granted: allowed.success,
        role: role,
        pages: pages
      },
    };


}
