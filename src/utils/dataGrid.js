import React, { useState, useCallback } from 'react'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
const DataGridi = ({ users }) => {
  const [enableSelection, setEnableSelection] = useState(true);
  const [selected, setSelected] = useState(null);
  const gridStyle = { minHeight: 550 }
  const columns = [
    { name: 'userName', header: ' نام کاربری ', defaultFlex: 2 },
    { name: 'role', header: ' نقش ', defaultFlex: 1 }
  ]
  const onSelectionChange = useCallback(({ selected }) => {
    setSelected(selected)
  }, [])

  return (
    <div>
      <h3>DataGrid with selection and with keyboard navigation</h3>
      <ReactDataGrid
        idProperty="id"
        rtl={true}
        style={gridStyle}
        columns={columns}
        dataSource={users}
        enableSelection={enableSelection}
        onSelectionChange={onSelectionChange}
      />
    </div>
  );
}

export default () => <DataGridi/>