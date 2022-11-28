import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { apiCall, EP_GET_TABLE } from 'utils/httpUtils';
import { useEffect, useState } from 'react';

export default function CRMTable(props, children){

	const [rows, setRows] = useState([]);
	const columns = props.columns ? props.columns : [];

    if(!props.collection){
		return (<div>Collection not defined</div>);		
	}

    if(columns.length==0){
		return (<div>Columns not defined</div>);
	}
	

	useEffect(() => {
		
		apiCall(EP_GET_TABLE,  {
			collection: props.collection,
			columns: columns
		}).then( (res) => {
			if(res.success){
				setRows(res.data.rows);
			}
		});

	}, []);


    return (
		<>
			<div style={{ height: 300, width: '100%' }}>
					<DataGrid
						getRowId={(row) => row._id}
						rows={rows}
						columns={columns}
					/>
			</div>
		</>
    );

}