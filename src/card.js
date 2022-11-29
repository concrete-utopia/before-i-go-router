import * as React from 'react'
import { useState } from 'react'
import { DecorativeLines } from './cardcomponents/decorations.js'
import { Description } from './cardcomponents/description.js'
import { Date } from './cardcomponents/name.js'
import { Rating } from './cardcomponents/rating.js'
import { Name } from './cardcomponents/stamp.js'
import { ImageContainer } from './cardcomponents/imagecontainer.js'

export var Card = (props) => {
  const [completed, setCompleted] = useState(0)

  if (completed === 0) {
    return (
      <div
        style={{
          width: 834,
          height: 767,
          backgroundColor: 'var(--yellow)',
        }}
        onClick={() => setCompleted(1)}
      >
        <DecorativeLines />
        <Description
          description='testing the card out la la la description'
          style={{
            position: 'absolute',
            left: 20,
            top: 60,
          }}
        />
        <ImageContainer
          imageUrl='./public/flamingo.JPG'
          style={{ position: 'absolute', top: 60 }}
        />
        <Name
          name='testing'
          style={{
            position: 'absolute',
            left: 258,
            top: 334,
          }}
        />
        <Rating
          rating={2}
          style={{
            position: 'absolute',
            left: 20,
            top: 400,
          }}
        />
        <Date
          date='Hire a Personal Pool Flamingo '
          style={{
            position: 'absolute',
            right: -6,
            top: 657,
          }}
        />
      </div>
    )
  } else if (completed === 1) {
    return (
      <div>
        <div
          style={{
            width: 834,
            height: 767,
            backgroundColor: 'var(--yellow)',
          }}
          onClick={() => setCompleted(2)}
        >
          hello
        </div>
      </div>
    )
  } else if (completed === 2) {
    return (
      <div>
        <div
          style={{
            width: 834,
            height: 767,
            backgroundColor: 'var(--yellow)',
          }}
          onClick={() => setCompleted(0)}
        >
          bye
        </div>
      </div>
    )
  }
}
