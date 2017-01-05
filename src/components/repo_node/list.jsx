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
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '创建人',
      dataIndex: 'creator',
      key: 'creator',
    }
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
             rowKey={ record => record.id}
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
