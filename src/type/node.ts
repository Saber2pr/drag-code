type ElementTagNameMap = {
  text: {
    text?: string
    color?: string
    fontSize?: number
    draggable?: boolean
  }
}

export type Node<T extends keyof ElementTagNameMap = keyof ElementTagNameMap> =
  {
    type: T
    props: ElementTagNameMap[T]
  }
