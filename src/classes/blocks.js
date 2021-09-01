import { row, col, css } from '../utils'

class Block {
  constructor (value, options) {
    this.value = value
    this.options = options
  }

  toHTML () {
    throw new Error('Method toHTML is not defined')
  }
}

export class TitleBlock extends Block {
  constructor (value, options) {
    super(value, options)
  }

  toHTML () {
    const { tag = 'h1', styles } = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
  }
}

export class TextBlock extends Block {
  constructor (value, options) {
    super(value, options)
  }

  toHTML () {
    const { tag = 'p', styles } = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
  }
}

export class ColumnsBlock extends Block {
  constructor (value, options) {
    super(value, options)
  }

  toHTML () {
    const html = this.value
      .map(col)
      .join('')
    return row(html, css(this.options.styles))
  }
}

export class ImageBlock extends Block {
  constructor (value, options) {
    super(value, options)
  }

  toHTML () {
    const { styles, divStyles, imageStyles, alt } = this.options
    return row(`<div style="${css(divStyles)}"><img src="${this.value}" style="${css(imageStyles)}" alt="${alt}"></div>`, css(styles))
  }
}
