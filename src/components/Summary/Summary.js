import React from 'react';
import { connect } from 'react-redux';
import { Table as AntTable } from 'antd';
import './style.css';

const Summary = (props) => {
  const getCheckedNames = () => {
    if (!props.checked.checked.length) { return '-'};
    const checkedArr = props.checked.checked.slice('');
    const result = [];
    checkedArr.forEach(value => {
      value = props.data[Number(value) - 1].name
      result.push(value);
    })
    return result.join(', ');
  }

  return (
    <AntTable.Summary.Row className="table-footer">
      <AntTable.Summary.Cell index={0} className="table-footer__cell">
      <span className="table-footer__title">Checked:</span>
        </AntTable.Summary.Cell>
      <AntTable.Summary.Cell index={1} className="table-footer__cell">
        <span className="table-footer__names">
          {getCheckedNames()}
        </span>
        </AntTable.Summary.Cell>
    </AntTable.Summary.Row>
  )
}

const mapStateToProps = state => {
  return {
    data: state.data.tableData,
    checked: state.checked
  }
}

export default connect(mapStateToProps, null)(Summary)