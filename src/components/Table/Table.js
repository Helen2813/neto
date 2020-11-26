import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { connect, useDispatch } from 'react-redux';
import { Table as AntTable } from 'antd';
import { addNameToChecked, fetchData, saveTableData } from '../../redux/actions';
import Summary from '../Summary/Summary';
import { getNormalaixedDataToTable } from './getNormalaizedDataToTable';
import './style.css';

const Table = (props) => {
  const rowSelection = {
    onChange: (selectedRowKeys) => {
      props.addNameToChecked(selectedRowKeys)
    },
  };

  const renderSummary = () => <Summary />

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    const tableData = getNormalaixedDataToTable(props.data);
    props.saveTableData(tableData);
  }, [])

    return (
        <AntTable
            rowSelection={{
                type: 'checkbox',
                ...rowSelection,
            }}
            columns={props.columns}
            dataSource={getNormalaixedDataToTable(props.data)}
            summary={renderSummary}
        />
    );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    data: state.data.fetchedData,
    tableData: state.data.tableData
  }
};

const mapDispatchToProps = {
  addNameToChecked,
  saveTableData
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);