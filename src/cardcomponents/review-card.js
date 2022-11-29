import * as React from 'react'
import { DecorativeLines } from '/src/cardcomponents/decorations.js'
import { ImageContainer } from './imagecontainer.js'
import { Description } from './description.js'
import { Name } from './name.js'
import { Stamp } from './stamp.js'
import { ReviewFormContainer } from './review-form-container.js'

export var ReviewCard = (props) => {
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
              lineHeight: '1.2em',
              padding: '0 30px',
            }}
          >
            Drink a Martini on Mount Everestt
          </div>
          <div
            className='rotating'
            style={{
              width: 150,
              height: 150,
              zIndex: 30,
              background:
                'conic-gradient(from 243.16deg at 50% 50%, var(--purple) 0deg, var(--yellow) 360deg)',
              borderRadius: '100%',
              border: '4px solid var(--purple)',
              marginRight: 30,
              marginTop: -30,
            }}
          />
        </div>
      </div>
      <div style={{}}>
        <ReviewFormContainer
          style={{
            left: 48,
            top: 242,
            width: 740,
            height: 450,
          }}
        />
        <ImageContainer
          imageUrl='https://cdn.utopia.app/editor/sample-assets/martini.jpg'
          hidden
        />
      </div>
    </div>
  )
}
