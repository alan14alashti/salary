import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/base.css'
import '@inovua/reactdatagrid-community/theme/default-light.css'

const DataGrid = ({gridStyle, columns, data, showCellBorders}) => {
  	return ( 
        <ReactDataGrid
			theme="default-light"
			idProperty="id"
			rtl={true}      
			style={gridStyle}
			columns={columns}
			dataSource={data}
			showCellBorders={showCellBorders}
      	/>
  	);
}
 
export default DataGrid;