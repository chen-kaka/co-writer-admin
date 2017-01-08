/**
 * Created by kakachan on 17/1/5.
 */

import React, { PropTypes } from 'react'
import { Form, Input, Button, Select } from 'antd'
import styles from './search.less'

const search = ({
  field,
  keyword,
  onSearch,
  onAdd,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  }
}) => {
  function handleSubmit(e) {
    e.preventDefault();
    validateFields((errors) => {
      if (!!errors) {
        return
      }
      onSearch(getFieldsValue())
    })
  }

  return (
    <div className={styles.normal}>
      <div className={styles.search}>
        <Form inline onsubmit={handleSubmit}>
          <Form.Item>
            {
              getFieldDecorator('field',{
                initialValue: field || 'name',
              })(
                <Select>
                  <Select.Option value="name">名称</Select.Option>
                  <Select.Option value="username">用户名</Select.Option>
                </Select>
              )
            }
          </Form.Item>
          <Form.Item hasFeedback>
            {getFieldDecorator('keyword',{
              initialValue: keyword || '',
            })
            (
              <Input />
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit">搜索</Button>
        </Form>
      </div>
    </div>
  )
}

search.propTypes = {
  form: PropTypes.object.isRequired,
  onSearch: PropTypes.func,
  onAdd: PropTypes.func,
  field: PropTypes.string,
  keyword: PropTypes.string,
}

export default Form.create()(search)
