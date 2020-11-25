import React from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Table as AntTable } from 'antd';
import { addNameToChecked } from '../../redux/actions';
import Summary from '../Summary/Summary'
import './style.css';

const Table = (props) => {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      props.addNameToChecked(selectedRowKeys)
    },
  };

  const renderSummary = () => {
    return <Summary />
  }

    return (
        <AntTable
            rowSelection={{
                type: 'checkbox',
                ...rowSelection,
            }}
            columns={props.columns}
            dataSource={props.data}
            summary={renderSummary}
        />
    );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    data: state.data.tableData
  }
};

const mapDispatchToProps = {
  addNameToChecked
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);