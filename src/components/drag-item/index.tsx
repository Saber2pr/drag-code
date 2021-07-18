import './style.less'

import React from 'react'

import { Node } from '../../type/node'
import { Transfer } from '../../transfer/transfer'
import classnames from 'classnames'
export interface DragItem {
  node: Node
}

/**
 * 内容节点
 * 可拖拽放入容器的节点
 * 添加支持新的内容节点步骤：
 * 1. type/node：设置对应类型
 * 2. 这里设置对应的解析展示
 */
export const DragItem = ({ node }: DragItem) => {
  switch (node.type) {
    case 'text':
      const { text, draggable = true, color, fontSize } = node.props ?? {}
      return (
        <span
          className={classnames({
            'cursor-pointer': draggable,
          })}
          style={{
            color,
            fontSize,
          }}
          draggable
          onDragStart={event => {
            Transfer.setData(event, {
              type: 'item',
              props: node,
            })
          }}
        >
          {text}
        </span>
      )
    default:
      break
  }
  return <></>
}
