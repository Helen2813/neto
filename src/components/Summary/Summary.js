import React from 'react'
import {connect} from 'react-redux'
import { Table as AntTable } from 'antd';

class Summary extends React.Component {
  constructor(props) {
    super(props)
  }

  getCheckedNames () {
    if (!this.props.checked.checked.length) { return '-'}
    const checkedArr = this.props.checked.checked.slice('')
    const result = [];
    checkedArr.forEach(value => {
      value = this.props.data[Number(value) - 1].name
      result.push(value);
    })
    return result.join(', ');
  }

  render() {
    console.log('this.props', this.props.checked.checked)
    return (
      <AntTable.Summary.Row className="table-footer">
                <AntTable.Summary.Cell index={0}>
                    Checked:
                </AntTable.Summary.Cell>
                <AntTable.Summary.Cell index={1}>
                    {this.getCheckedNames()}
                </AntTable.Summary.Cell>
            </AntTable.Summary.Row>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    data: state.data.tableData,
    checked: state.checked
  }
}

export default connect(mapStateToProps, null)(Summary)

//TODO переделать на функцинальный компонент.