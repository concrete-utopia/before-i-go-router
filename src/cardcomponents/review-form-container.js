import * as React from 'react'
import '/public/globals.css'
import { Arrow } from './arrow.js'
import { Star } from './star.js'

export var ReviewFormContainer = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 758,
        height: 490,
        border: '8px solid #EEEEEA',
        borderRadius: '70px',
        position: 'absolute',
        zIndex: 100,
        ...props.style,
      }}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          background: 'var(--light-grey)',
          width: 680,
          height: 390,
          borderRadius: '50px',
          zIndex: 100,
        }}
      >
        <label
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'var(--primary)',
            color: 'var(--dark-grey)',
            fontWeight: 700,
            fontSize: 58,
          }}
        >
          HHow was it?
        </label>
        <textarea
          rows='4'
          cols='50'
          name='description'
          placeholder='Describe the experience...'
          style={{
            background: 'var(--mid-grey)',
            width: '90%',
            height: 70,
            border: 'none',
            resize: 'none',
            fontFamily: 'var(--secondary)',
            color: 'var(--dark-grey)',
            fontWeight: 700,
            fontSize: 14,
            lineHeight: '144%',
            padding: 15,
            boxSizing: 'border-box',
          }}
        />
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 20,
            alignItems: 'center',
            padding: '0 5%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              gap: 10,
            }}
          >
            <label
              style={{
                fontFamily: 'var(--primary)',
                color: 'var(--dark-grey)',
                fontWeight: 700,
                fontSize: 28,
              }}
            >
              Rating
            </label>
            <div
              style={{
                padding: '5px 10px',
                display: 'flex',
                border: 'none',
                background: 'var(--mid-grey)',
                height: '100%',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <Star
                stoke='grey'
                color='var(--dark-grey)'
                stagnant='true'
                form='true'
              />
              <Star
                stoke='grey'
                stagnant='true'
                form='true'
              />
              <Star
                stoke='grey'
                stagnant='true'
                form='true'
              />
              <Star
                stoke='grey'
                stagnant='true'
                form='true'
              />
              <Star
                stoke='grey'
                stagnant='true'
                form='true'
              />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              gap: 10,
              flex: 1,
              float: 'right',
            }}
          >
            <label
              style={{
                fontFamily: 'var(--primary)',
                color: 'var(--dark-grey)',
                fontWeight: 700,
                fontSize: 28,
              }}
            >
              Date
            </label>
            <input
              type='date'
              name='date'
              value='2022-07-22'
              max='2022-12-31'
              style={{
                border: 'none',
                padding: 10,
                fontFamily: 'var(--primary)',
                color: 'var(--dark-grey)',
                fontSize: 28,
                background: 'var(--mid-grey)',
                height: '100%',
                flex: 1,
              }}
            />
          </div>
        </div>
        <div
          style={{
            color: 'var(--light-grey)',
            fontFamily: 'var(--primary-basic)',
            background: 'var(--dark-grey)',
            fontWeight: 700,
            fontSize: 30,
            border: 'none',
            borderRadius: 50,
            width: '90%',
            padding: '15px 20px 10px 20px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
          type='submit'
        >
          Cross{' '}
          <span style={{ fontFamily: 'var(--primary)' }}>
            itt
          </span>{' '}
          off
          <Arrow />
        </div>
      </form>
    </div>
  )
}
