import React, { PropTypes } from 'react'
import { Table, Popconfirm, Pagination } from 'antd'
import styles from './list.less'

function list({
  loading,
  dataSource,
  pagination,
  onPageChange,
  onDeleteItem,
  onEditItem,
}) {
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '创建人',
      dataIndex: 'creator',
      key: 'creator',
    }, {
      title: '创建时间',
      dataIndex: 'create_at',
      key: 'create_at',
    }, {
      title: '最后更新时间',
      dataIndex: 'last_update',
      key: 'last_update',
    }, {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
    }, {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    }, {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    }, {
      title: '操作',
      key: 'operation',
      width: 100,
      render: (text, record) => (
        <p>
          <a onClick={() => onEditItem(record)} style={{
            marginRight: 4,
          }}>编辑</a>
          <Popconfirm title="确定要删除吗？" onConfirm={() => onDeleteItem(record.id)}>
            <a>删除</a>
          </Popconfirm>
        </p>
      ),
    },
  ]

  return (
    <div>
      <Table size="small"
        className={styles.table}
        bordered
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        onChange={onPageChange}
        pagination={pagination}
        rowKey={record => record.id}
      />
    </div>
  )
}

list.propTypes = {
  onPageChange: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  dataSource: PropTypes.array,
  loading: PropTypes.any,
  pagination: PropTypes.any,
}

export default list
