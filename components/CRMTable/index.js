import { DataGrid } from '@mui/x-data-grid';
import { apiCall } from '/utils/httpUtils';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export default function CRMTable(props, children){

	const [rows, setRows] = useState([]);
	const columns = props.columns ? props.columns : [];
	const router = useRouter();

	const rows_height = props.rowsHeight ? props.rowsHeight : 52;
	const rows_to_show = props.rowsToShow ? props.rowsToShow : 10;
	const header_height = props.headerHeight ? props.headerHeight : 50;
	const footer_height = props.footerHeight ? props.footerHeight : 50;
	const initialState = props.initialState ? props.initialState : {};

	const onRowSelectedRoute = props.onRowSelectedRoute;

    if(!props.endpoint){
		return (<div>Endpoint not defined</div>);		
	}

    if(columns.length==0){
		return (<div>Columns not defined</div>);
	}
	
	const onRowClick = (e) => {
		if(onRowSelectedRoute)
		{
			router.push(onRowSelectedRoute + '/' + e.row._id);
		}
	}

	useEffect(() => {
		
		apiCall(props.endpoint, {
			columns: columns,
			filter: props.filter
		}).then( (res) => {
			if(res.success){
				setRows(res.data.rows);
			}
		});

	}, []);

	const onFilterChange = (e) => {
		console.log('onFilterChange', e);
	}


    return (
		<>
			<div style={{ height: (rows_height * rows_to_show + header_height + footer_height) +'px', width: '100%' }}>
				<DataGrid
					getRowId={(row) => row._id}
					rows={rows}
					columns={columns}
					onRowClick={onRowClick}
					filterMode="server"
  					onFilterModelChange={onFilterChange}
					initialState={initialState}
				/>
				{/* components={{
						Toolbar: GridToolbar,
					}} */}
			</div>
		</>
    );

}