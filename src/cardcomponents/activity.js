import { DecorativeLines } from '/src/cardcomponents/decorations.js'
import { ImageContainer } from './imagecontainer.js'
import { Description } from './description.js'
import { Name } from './name.js'
import { Stamp } from './stamp.js'
import { ReviewFormContainer } from './review-form-container.js'
import { Add } from './add.js'
import { Mixologist } from '/src/stickers.js'

export var Activity = (props) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--yellow)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '100%',
          height: 63,
          overflow: 'visible',
          zIndex: 10,
        }}
      >
        <DecorativeLines />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 30,
          }}
        >
          <div
            style={{
              background: 'var(--yellow)',
              borderRadius: '0px 0px 20px 0px',
              flex: 1,
              color: 'var(--purple)',
              fontFamily: 'var(--primary)',
              fontSize: '38px',
              //textAlign: 'right',
              lineHeight: '1.2em',
              padding: '0 30px',
            }}
          >
            Drink a Martini on Mount Everestt
          </div>
          <div
            style={{
              width: 150,
              height: 150,
              zIndex: 30,
              borderRadius: '100%',
              border: '4px solid var(--yellow)',
              backgroundColor: 'var(--purple)',
              margin: '-30px 30px 0px 0px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Add color='var(--yellow)' />
          </div>
        </div>
      </div>
      <ImageContainer
        imageUrl='https://cdn.utopia.app/editor/sample-assets/martini.jpg'
        hidden
      />
    </div>
  )
}
