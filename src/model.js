import { TitleBlock, TextBlock, ColumnsBlock, ImageBlock } from './classes/blocks'
import image from './assets/image.jpg'

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript', {
    tag: 'h2',
    styles: {
      'margin-bottom': '12px',
      background: 'linear-gradient(180deg, rgba(147,147,147,0.2) 0%, rgba(255,255,255,0) 100%)',
      padding: '1rem 1.2rem',
      'border-bottom': '1px solid grey',
      'text-align': 'center'
    }
  }),
  new TextBlock('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, exercitationem.', {
    tag: 'h4',
    styles: {
      'margin-bottom': '12px',
      padding: '1rem 1.2rem',
      'text-align': 'center'
    }
  }),
  new ColumnsBlock(['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet'], {
    styles: {
      'margin-bottom': '12px',
      'text-align': 'center',
      'font-weight': '600'
    }
  }),
  new ImageBlock(image, {
    styles: {
      'margin-bottom': '12px',
    },
    divStyles: {
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      height: '300px',
      width: 'auto',
      'border-radius': '24px'
    },
    alt: 'default image'
  })
]
