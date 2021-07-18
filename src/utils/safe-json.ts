const isJSON = (str: string) => {
  if (typeof str == 'string') {
    try {
      const obj = JSON.parse(str)
      if (typeof obj === 'object' && obj) {
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  } else {
    return false
  }
}

export const SafeJSON: Pick<typeof JSON, 'parse' | 'stringify'> = {
  parse(text, ...args) {
    if (isJSON(text)) {
      return JSON.parse(text, ...args)
    } else {
      return {}
    }
  },
  stringify(obj: object, ...args: any[]) {
    if (obj) {
      return JSON.stringify(obj, ...args)
    } else {
      return ''
    }
  }
}