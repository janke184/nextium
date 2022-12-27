import { apiCall, EP_DELETE_PAGE, EP_ADD_PAGE } from "utils/httpUtils";
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
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getDb } from "connection/connect";
import { ObjectID } from "bson";
import { ROUTE_PAGES, ROUTE_PAGES_ADD } from "utils/routeUtils";
import { isAllowedUser } from "/utils/userUtils";

const filter = createFilterOptions();

function AddPageContent(props)
{
    const router = useRouter();

    const [page, setPage] = useState(props.page);

    const [loading, setLoading] = useState(false);

    const [endpoints, setEndpoints] = useState(props.endpoints);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        setLoading(true);
        apiCall(EP_ADD_PAGE, page).then((response) => {
            setLoading(false);
            if(response.success){
                router.replace( ROUTE_PAGES );

            }else{
                errorAlert('Unable to add page');
            }
        });
    }

    const onDeleteClickHandler = (event) => {
        event.preventDefault();

        setLoading(true);
        apiCall(EP_DELETE_PAGE, {_id: page._id}).then((response) => {
            setLoading(false);
            if(response.success){
                router.replace( ROUTE_PAGES );

            }else{
                errorAlert('Unable to delete page');
            }
        });
    }

    const onChangeAutocompleteHandler = (event, newValue) => {

        console.log('newValue', newValue);

        if(!newValue || (newValue && newValue.endpoint=='')){
            return;
        }
        
        // if endpoint exists, ignore it
        const isExisting = page.endpoints.some((elem) => elem.endpoint === newValue.endpoint );

        if(isExisting){
            return;
        }

        // if newValue is a string or is new
        if (newValue.new || typeof newValue === 'string') {     
            
            if(typeof newValue === 'string'){
                newValue = {
                    endpoint: newValue
                }
            }

            // push new entpoint to the array
            setPage({
                ...page,
                endpoints: [
                    ...page.endpoints,
                    {
                        endpoint: newValue.endpoint
                    }
                ]
            });

        } else {

            setPage({
                ...page,
                endpoints: [
                    ...page.endpoints,
                    newValue
                ]
            });

        }

        // clear value of autocomplete component
        event.target.value = '';

        event.preventDefault();
    }

    const onChangeHandler = (event) => {

        // create a new object with target name as key and target value as value
        setPage({ ...page, [event.target.name]: event.target.value });

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

                                <CardHeader title="New Page" subheader=""/>

                                <CardContent>

                                    <div className="my-form">

                                        <Grid item>
                                            <TextField InputLabelProps={{ shrink: page.name ? true : false }} required sx={{width: '100%'}} onChange={onChangeHandler} name="name" label="Display name" variant="outlined" value={page.name} />
                                        </Grid>

                                        <Grid item>
                                            <TextField InputLabelProps={{ shrink: page.route ? true : false }} required sx={{width: '100%'}} onChange={onChangeHandler} name="route" label="Route" variant="outlined" value={page.route} />
                                        </Grid>

                                        <Grid item>
                                            <Autocomplete
                                                name="endpoint"
                                                disablePortal
                                                onChange={onChangeAutocompleteHandler}
                                                onSubmit={onChangeAutocompleteHandler}
                                                options={endpoints}
                                                sx={{ width: '100%' }}
                                                renderInput={(params) => <TextField {...params} label="Available endpoints" />}
                                                renderOption={(props, option) => <li name="endpoint" {...props}>{ (option.new ? option.name : option.endpoint )}</li>}
                                                filterOptions={(options, params) => {
                                                    const filtered = filter(options, params);
                                            
                                                    const { inputValue } = params;

                                                    const isExisting = options.some((option) => inputValue === option.endpoint);
                                                    if (inputValue !== '' && !isExisting) {
                                                      filtered.push({
                                                        new: true,
                                                        name: `Add "${inputValue}"`,
                                                        endpoint: inputValue
                                                      });
                                                    }
                                            
                                                    return filtered;
                                                  }}

                                                  freeSolo
                                                  selectOnFocus
                                                  clearOnBlur                                                  
                                                  getOptionLabel={(option) => {

                                                    if (typeof option === 'string') {
                                                      return option;
                                                    }
                                                    // Add "xxx" option created dynamically
                                                    if (option.new) {
                                                      return option.endpoint;
                                                    }

                                                    // Regular option
                                                    return option.endpoint;

                                                  }}
                                                />
                                        </Grid>

                                        <Grid item>
                                            <label>Granted access endpoints</label>
                                            <Box sx={{ height: 400, width: '100%' }}>
                                                <DataGrid
                                                    rows={page.endpoints}
                                                    getRowId={(row) => {
                                                        return row.endpoint;
                                                    } }
                                                    columns={[
                                                        {
                                                            field: 'endpoint',
                                                            headerName: 'Endpoint',
                                                            flex: 1
                                                        },
                                                        {
                                                            field: 'action',
                                                            headerName: '',
                                                            renderCell: (params) => (
                                                                <strong>
                                                                    <IconButton 
                                                                        color="error"
                                                                        onClick={() => {
                                                                            const newEndpoints = page.endpoints.filter((elem) => elem.endpoint !== params.row.endpoint);
                                                                            setPage({
                                                                                ...page,
                                                                                endpoints: newEndpoints
                                                                            });
                                                                        }
                                                                         }>
                                                                        <DeleteIcon/>
                                                                    </IconButton>
                                                                </strong>
                                                            ),
                                                            align: 'center',
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
                                        disabled={loading || !page._id}
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

export default function AddPage(props){

    if(props.access_granted){

        return (
            // add props to the component
            <AddPageContent {...props}/>
        )

    }else{
        
        return (
            <AccessDenied/>
        )

    }

}

export const getServerSideProps = async ({req, query}) =>
{
    const allowed = await isAllowedUser(req, ROUTE_PAGES_ADD);

    let page = {
        endpoints: []
    };

    let endpoints = [];

    if(allowed.success){

        console.log('allowed', allowed);

        const db = await getDb();


        let { _id } = query;

        _id = _id && _id.length > 0 ? _id[0] : null;

        if(_id){
        
            // Look for the page
            page = await db.collection('pages').findOne({_id: ObjectID(_id)});

            // serialize the object
            page = JSON.parse(JSON.stringify(page));

        }

        // Looking for endpoints
        endpoints = await db.collection('pages').aggregate([
            {
                '$project': {
                'endpoint': '$endpoints.endpoint'
                }
            }, {
                '$unwind': {
                'path': '$endpoint'
                }
            }, {
                '$group': {
                '_id': '$endpoint',
                'endpoint': {
                    '$max': '$endpoint'
                },
                'count': {
                    '$count': {}
                }
                }
            }, {
                '$sort': {
                'count': -1
                }
            }
        ]).toArray();

    }


    return {
      props: {
        access_granted: allowed.success,
        page: page,
        endpoints: endpoints
      },
    };


}
