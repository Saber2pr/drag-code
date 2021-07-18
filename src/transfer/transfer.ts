import React from 'react'

import { SafeJSON } from '../utils'

export type TransferData = {
  type: 'item' | 'container',
  props: any
  key?: number
}

export const Transfer = {
  setData(event: React.DragEvent<any>, data: TransferData) {
    data.key = Date.now()
    event.dataTransfer.setData('text/plain', SafeJSON.stringify(data))
  },
  getData(event: React.DragEvent<any>) {
    const result = SafeJSON.parse(event.dataTransfer.getData('text/plain')) as TransferData
    console.log('drop', result)
    return result
  }
}