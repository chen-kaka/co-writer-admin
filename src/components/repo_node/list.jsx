/**
 * Created by kakachan on 17/1/2.
 */

import React, { PropTypes } from 'react'
import { Table, Popconfirm, Pagination } from 'antd'
import styles from './list.less'

function repoNodeList({
  loading,
  dataSource,
  pagination,
  onPageChange,
  onDeleteItem,
  onEditItem,
}) {
  const columns = [
    {
      title: '头像',
      dataIndex: 'avatar',
      key: 'avatar',
    },
    {
      title: '创建人',
      dataIndex: 'creator',
      key: 'creator',
    },
    {
      title: '创建时间',
      dataIndex: 'create_at',
      key: 'create_at',
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '内容',
      dataIndex: 'text',
      key: 'text',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    }, {
      title: '操作',
      key: 'operation',
      width: 100,
      render: (text, record) => (
        <p>
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
             rowKey={ record => record._id}
             />
    </div>
  )
}

repoNodeList.propTypes = {
  onPageChange: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  dataSource: PropTypes.array,
  loading: PropTypes.any,
  pagination: PropTypes.any,
}

export default repoNodeList
