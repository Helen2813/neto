import React from 'react';
import 'antd/dist/antd.css';
import { Table as AntTable } from 'antd';
import './style.css';

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};

export const Table = ({
                          columns,
                          data,
                          summaryData,
}) => {
    const renderSummary = () => {
        return (
            <AntTable.Summary.Row className="table-footer">
                <AntTable.Summary.Cell index={0}>
                    Checked:
                </AntTable.Summary.Cell>
                <AntTable.Summary.Cell index={1}>
                    Бла
                </AntTable.Summary.Cell>
            </AntTable.Summary.Row>
        );
    };

    return (
        <AntTable
            rowSelection={{
                type: 'checkbox',
                ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
            summary={summaryData && renderSummary}
        />
    );
};