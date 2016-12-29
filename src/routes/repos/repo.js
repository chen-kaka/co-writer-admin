import React, { PropTypes } from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import UserList from '../../components/repo/list'
import UserSearch from '../../components/repo/search'
import UserModal from '../../components/repo/modal'

function Repository({ location, dispatch, repo }) {
  const {
    loading, list, total, current, pagination,
    currentItem, modalVisible, modalType,
    } = repo

  const { field, keyword } = location.query

  const userModalProps = {
    item: modalType === 'create' ? {} : currentItem,
    type: modalType,
    visible: modalVisible,
    onOk(data) {
      dispatch({
        type: `repos/repo/${modalType}`,
        payload: data,
      })
    },
    onCancel() {
      dispatch({
        type: 'repos/repo/hideModal',
      })
    },
  }

  const userListProps = {
    dataSource: list,
    loading,
    pagination:pagination,
    onPageChange(page) {
      dispatch(routerRedux.push({
        pathname: '/repos/repo',
        query: {
          page:page.current,
          pageSize:page.pageSize
         },
      }))
    },
    onDeleteItem(id) {
      dispatch({
        type: 'repos/repo/delete',
        payload: id,
      })
    },
    onEditItem(item) {
      dispatch({
        type: 'repos/repo/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
        },
      })
    },
  }

  const userSearchProps = {
    field,
    keyword,
    onSearch(fieldsValue) {
      dispatch({
        type: 'repos/repo/query',
        payload: fieldsValue,
      })
    },
    onAdd() {
      dispatch({
        type: 'repos/repo/showModal',
        payload: {
          modalType: 'create',
        },
      })
    },
  }

  const UserModalGen = () =>
    <UserModal {...userModalProps} />

  return (
    <div className="content-inner">
      <UserSearch {...userSearchProps} />
      <UserList {...userListProps} />
      <UserModalGen />
    </div>
  )
}

Repository.propTypes = {
  repo: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

function mapStateToProps({ repo }) {
  return { repo }
}

export default connect(mapStateToProps)(Repository)
