import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/base.css'
import '@inovua/reactdatagrid-community/theme/default-light.css'

const DataGrid = ({gridStyle, columns, data, ...rest}) => {
  	return ( 
        <ReactDataGrid
			{...rest}
			theme="default-light"
			idProperty="id"
			rtl={true}      
			style={gridStyle}
			columns={columns}
			dataSource={data}
      	/>
  	);
}
 
export default DataGrid;