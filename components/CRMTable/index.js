import { DataGrid } from '@mui/x-data-grid';
import { apiCall, EP_GET_TABLE } from 'utils/httpUtils';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function CRMTable(props, children){

	const [rows, setRows] = useState([]);
	const columns = props.columns ? props.columns : [];
	const router = useRouter();

	const onRowSelectedRoute = props.onRowSelectedRoute;

    if(!props.collection){
		return (<div>Collection not defined</div>);		
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
		
		apiCall(EP_GET_TABLE,  {
			collection: props.collection,
			columns: columns,
			filter: props.filter
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
						onRowClick={onRowClick}
					/>
			</div>
		</>
    );

}