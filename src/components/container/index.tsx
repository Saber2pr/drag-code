import './style.less'

import classnames from 'classnames'
import React, { useState } from 'react'

import { Transfer, TransferData } from '../../transfer/transfer'
import { DragItem } from '../drag-item'

export interface ContainerProps {
  draggable?: boolean
  width?: number
  height?: number
  scale?: number
  flexDirection?: 'row' | 'column'
}

/**
 * 容器节点
 * 没有内容，用来接收内容节点
 */
export const Container = (props: ContainerProps) => {
  const { draggable = true, width, height, scale, flexDirection } = props
  const [receive, setReceive] = useState(false)
  const [list, setList] = useState<TransferData[]>([])
  console.log(list)
  return React.createElement('div', {
    draggable,
    style: {
      width,
      height,
      transform: scale ? `scale(${scale})` : null,
      display: 'flex',
      flexDirection,
    },
    className: classnames('Container', {
      'on-reveice': receive,
      'cursor-pointer': draggable,
    }),
    onDragStart: event => {
      Transfer.setData(event, {
        type: 'container',
        props,
      })
    },
    onDragEnter: event => {
      setReceive(true)
    },
    onDragLeave: event => {
      setReceive(false)
    },
    onDragExit: event => {
      setReceive(false)
    },
    onDrop: event => {
      console.log(event.target)
      setList(list.concat(Transfer.getData(event)))
      setReceive(false)
      event.stopPropagation()
    },
    onDragOver: event => {
      event.preventDefault()
      return false
    },
    children: list.map(({ key, props, type }) =>
      type === 'item' ? (
        <DragItem key={key} node={props} />
      ) : (
        <Container key={key} {...props} />
      )
    ),
  })
}
