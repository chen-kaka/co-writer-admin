/**
 * Created by kakachan on 16/12/30.
 */

import React, { PropTypes } from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import RepoNodeList from '../../components/repo_node/list';

function RepoNode({ location, dispatch, repo_node }) {

  const {
    loading, list, total, current, pagination,
    currentItem, modalVisible, modalType
  } = repo_node;

  const { filed, keyword } = location.query;

  const repoNodeListProps = {
    dataSource: list,
    loading,
    pagination:pagination,
    onPageChange(page) {
      dispatch(routerRedux.push({
        pathname: '/repos/repo_node',
        query: {
          page:page.current,
          pageSize:page.pageSize
        },
      }))
    },
    onDeleteItem(id) {
      dispatch({
        type: 'repos/repo_node/delete',
        payload: id,
      })
    },
    onEditItem(item) {
      dispatch({
        type: 'repos/repo_node/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
        },
      })
    },
  }

  return (
    <div>
      <RepoNodeList {...repoNodeListProps} />
    </div>
  )
}

RepoNode.propTypes = {
  repo_node: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

function mapStateToProps({ repo_node }) {
  return { repo_node }
}

export default connect(mapStateToProps)(RepoNode)
