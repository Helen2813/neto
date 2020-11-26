import { Table as AntTable } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addNameToChecked, fetchData } from '../../redux/actions';
import Summary from '../Summary/Summary';

const Table = (props) => {
  const rowSelection = {
    onChange: (selectedRowKeys) => {
      props.addNameToChecked(selectedRowKeys)
    },
  };

  const renderSummary = () => <Summary />

  useEffect(() => {
    props.fetchData();
  }, [])

  return (
    <AntTable
      rowSelection={{
        type: 'checkbox',
        ...rowSelection,
      }}
      columns={props.columns}
      dataSource={props.tableData}
      summary={renderSummary}
    />
  );
};

const mapStateToProps = state => {
  return {
    tableData: state.data.tableData
  }
};

const mapDispatchToProps = {
  addNameToChecked,
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);