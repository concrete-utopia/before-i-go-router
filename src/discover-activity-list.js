// import * as React from 'react'
import '../public/globals.css'
import { useState, useEffect, useCallback } from 'react'
import {
  CategoryItem,
  ClearCategoriesButton,
} from './category-item.js'
import {
  DecorativeLines,
  Checkerboard,
} from './cardcomponents/decorations.js'
import {
  AquaMan,
  Wonderer,
  BirbWatcher,
  Mixologist,
  Tropicologist,
  RiskTaker,
  Cryophile,
} from './stickers.js'
import { Rating } from '/src/cardcomponents/rating.js'

export var DiscoverActivityList = () => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 60,
        background: 'var(--purple)',
      }}
    >
      <div
        style={{
          width: '100%',
          background: 'var(--white)',
          zIndex: '100',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '44px 0px 25px',
          gap: '26px',
          boxShadow: '0px 2px 33px #674168',
          left: 0,
        }}
      >
        <div
          style={{
            width: '100%',
            color: 'var(--orange)',
            fontFamily: 'var(--primary)',
            textAlign: 'center',
            fontWeight: 400,
            fontStyle: 'normal',
            border: '0px solid rgb(255, 174, 52, 1)',
            fontSize: '22px',
            textShadow:
              '0px 1px 1px #646464, 0px 4px 1px rgba(0, 0, 0, 0.25)',
          }}
        >
          Things I want to do
        </div>
        <div style={{ width: '130%' }}>
          <div
            style={{
              color: 'var(--orange)',
              fontFamily: 'var(--primary)',
              textAlign: 'center',
              fontWeight: 400,
              fontStyle: 'normal',
              border: '0px solid rgb(255, 174, 52, 1)',
              fontSize: '72px',
              lineHeight: '125%',
              textShadow:
                '0px 1px 1px #646464, 0px 8px 1px rgba(0, 0, 0, 0.25)',
            }}
          >
            BBeffore I Go
          </div>
        </div>
        <div
          className='category-container'
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '0px 0px 0px 40px',
            gap: 25,
            width: '100%',
            height: '55px',
            overflowX: 'scroll',
          }}
        >
          <ClearCategoriesButton />
          <CategoryItem selected={false} name='aquatic' />
          <CategoryItem selected={false} name='rare' />
          <CategoryItem selected={false} name='nearby' />
          <CategoryItem selected={false} name='trending' />
          <CategoryItem selected={false} name='odd' />
          <CategoryItem selected={false} name='risky' />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          padding: '0 40px',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            width: 351,
            height: 230,
            background: 'var(--yellow)',
            border: '4px solid var(--yellow)',
            borderRadius: 20,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <AquaMan
            style={{
              position: 'absolute',
              left: 176,
              top: 111,
              zIndex: 8,
            }}
          />
          <Mixologist
            style={{
              position: 'absolute',
              top: 42.5,
              left: 205.5,
              transform: 'rotate(-10deg)',
              zIndex: 10,
            }}
          />
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                padding: 10,
                backgroundColor: 'var(--yellow)',
                color: 'var(--purple)',
                fontFamily: 'var(--primary)',
                fontSize: '1.1em',
                lineHeight: '1.7em',
                width: '100%',
                height: '34.27927927928%',
              }}
            >
              Sittt BBack andd RREELLAX
            </div>
            <div
              style={{
                height: '50%',
                width: '100%',
                background: 'white',
                backgroundImage:
                  'url(https://cdn.utopia.app/editor/sample-assets/flamingo.jpg)',
                backgroundSize: '32%',
                filter: 'contrast(180%)',
                mixBlendMode: 'luminosity',
                opacity: 0.8,
              }}
            />
            <div
              style={{
                height: '20%',
                width: '100%',
                background: 'var(--orange)',
              }}
            >
              <Checkerboard
                style={{ height: '100%' }}
                color1='var(--yellow)'
                color2='var(--white)'
              />
            </div>
          </div>
        </div>
        <div style={{ width: '50%' }}>
          <div
            style={{
              color: 'var(--orange)',
              fontSize: '2.4em',
              textTransform: 'uppercase',
              fontFamily: 'var(--secondary)',
              fontWeight: '600',
              lineHeight: '110%',
              zIndex: 100,
            }}
          >
            Best Summer of my life!
          </div>
          <div
            style={{
              color: 'var(--orange)',
              fontSize: '1em',
              fontFamily: 'Reckless Neue Trial',
              marginTop: 20,
            }}
          >
            Summer has the vibes. The weather is great, I
            don't know how to write copy, and there are so
            many great activities to enjoy. Lorem Bad Bunny
            Bebe Ipsum. Cuando te lo quito despué' de lo'
            partie' Muchas me quieren desde que yo canto
            (Ja) Quisiera ser como tú, sin sentimiento'
            (miento') Yehyehyehyeh YOLO
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          padding: '0 40px',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            width: 222,
            height: 330,
            background: 'var(--yellow)',
            border: '4px solid var(--yellow)',
            borderRadius: 20,
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Mixologist
            style={{
              position: 'absolute',
              transform: 'rotate(12deg)',
              zIndex: 10,
              left: 111,
              top: 127,
            }}
          />
          <div
            style={{
              height: '30%',
              padding: 10,
              color: 'var(--purple)',
              background: 'var(--yellow)',
              fontFamily: 'var(--primary)',
              fontSize: '1.15em',
              lineHeight: '1.7em',
              width: -47,
            }}
          >
            Gain a Fre$hh PPerspective
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                width: '70%',
                height: '240px',
                backgroundImage:
                  'url(https://cdn.utopia.app/editor/sample-assets/martini.jpg)',
                backgroundSize: '100%',
                filter: 'contrast(150%)',
                mixBlendMode: 'luminosity',
                opacity: 0.8,
              }}
            />
            <div
              style={{
                width: '100px',
                height: '100%',
                background: 'var(--orange)',
              }}
            >
              <Checkerboard
                style={{ height: '100%' }}
                color1='var(--yellow)'
                color2='var(--white)'
              />
            </div>
            <Cryophile
              style={{
                position: 'absolute',
                left: 139,
                top: 211.5,
              }}
            />
          </div>
        </div>
        <div style={{ width: '22.29976019185%' }}>
          <div
            style={{
              color: 'var(--orange)',
              fontSize: '2.4em',
              textTransform: 'uppercase',
              fontFamily: 'var(--secondary)',
              fontWeight: '600',
              lineHeight: '110%',
              zIndex: 100,
            }}
          >
            That's on my bucket list.
          </div>
          <div
            style={{
              color: 'var(--orange)',
              fontSize: '1em',
              fontFamily: 'Reckless Neue Trial',
              marginTop: 20,
            }}
          >
            Lorem Bad Bunny Bebe Ipsum. Chambean, chambean,
            pero no jalan (¡Jalan!) Que pa'l picor les tengo
            Claritín Te toco y hasta el mundo deja de girar
          </div>
        </div>
        <div
          style={{
            width: 308,
            height: 330,
            background: 'var(--yellow)',
            border: '4px solid var(--yellow)',
            borderRadius: 20,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Wonderer
            style={{
              position: 'absolute',
              top: 52,
              left: 196.5,
              zIndex: 10,
              transform: 'rotate(-12deg)',
            }}
          />
          <Cryophile
            style={{
              position: 'absolute',
              top: 147,
              left: -10,
              zIndex: 8,
              transform: 'rotate(192deg)',
            }}
          />
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                height: '104.54658385093%',
                width: '100%',
                background: 'white',
                backgroundImage:
                  'url(https://cdn.utopia.app/editor/sample-assets/northernlights.jpg)',
                backgroundSize: '42%',
                //filter: 'grayscale(100%)',
                filter: 'contrast(150%)',
                mixBlendMode: 'luminosity',
                opacity: 0.8,
              }}
            />
            <div
              style={{
                height: '18%',
                width: '100%',
                background: 'var(--orange)',
              }}
            >
              <Checkerboard
                style={{ height: '100%' }}
                color1='var(--yellow)'
                color2='var(--white)'
              />
            </div>
            <div
              style={{
                padding: 10,
                backgroundColor: 'var(--yellow)',
                color: 'var(--purple)',
                fontFamily: 'var(--primary)',
                fontSize: '1.1em',
                lineHeight: '1.4em',
                width: '100%',
                height: '20%',
              }}
            >
              FFeastt Youur Eyes!
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 40px',
        }}
      >
        <div
          style={{
            width: 386,
            height: 330,
            background: 'var(--yellow)',
            border: '4px solid var(--yellow)',
            borderRadius: 20,
            overflow: 'hidden',
            // transform: 'rotate(-8deg)',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <RiskTaker
            style={{
              position: 'absolute',
              top: 203,
              left: 21,
              zIndex: 10,
              transform: 'rotate(35deg)',
            }}
          />
          <div
            style={{
              height: '30%',
              padding: 10,
              color: 'var(--purple)',
              background: 'var(--yellow)',
              fontFamily: 'var(--primary)',
              fontSize: '1.15em',
              lineHeight: '1.7em',
              width: -47,
            }}
          >
            Crashh A LLamborggghini into a LLammp PPostt
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                width: '100px',
                height: '100%',
                background: 'var(--orange)',
              }}
            >
              <Checkerboard
                style={{ height: '100%' }}
                color1='var(--yellow)'
                color2='var(--white)'
              />
            </div>
            <div
              style={{
                width: '80%',
                height: '240px',
                backgroundImage:
                  'url(./assets/clipboard/image.png)',
                backgroundSize: '220px',
                backgroundPosition: '0% 30%',
                //filter: 'grayscale(100%)',
                filter: 'contrast(150%)',
                mixBlendMode: 'luminosity',
                opacity: 0.8,
              }}
            />
          </div>
        </div>
        <div
          style={{
            width: 332,
            height: 330,
            background: 'var(--yellow)',
            border: '4px solid var(--yellow)',
            borderRadius: 20,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            contain: 'layout',
          }}
        >
          <RiskTaker
            style={{
              position: 'absolute',
              transform: 'rotate(35deg)',
              zIndex: 10,
              left: 168,
              top: 124,
            }}
          />
          <Tropicologist
            style={{
              position: 'absolute',
              transform: 'rotate(10deg)',
              left: 148.01428222656,
              zIndex: 10,
              top: -6,
              width: 100,
            }}
          />
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                width: '130.15325670498%',
                height: '240px',
                backgroundImage: 'url(public/sos.jpg)',
                backgroundSize: '270%',
                filter: 'contrast(130%)',
                backgroundPosition: '60% 40%',
                mixBlendMode: 'luminosity',
                opacity: 1,
              }}
            />
            <div
              style={{
                width: '100px',
                height: '100%',
                background: 'var(--orange)',
              }}
            >
              <Checkerboard
                style={{ height: '100%' }}
                color1='var(--yellow)'
                color2='var(--white)'
              />
            </div>
          </div>
          <div
            style={{
              height: '30%',
              padding: 10,
              color: 'var(--purple)',
              background: 'var(--yellow)',
              fontFamily: 'var(--primary)',
              fontSize: '1.15em',
              lineHeight: '1.7em',
              width: -47,
            }}
          >
            GGett losstt AAlonggg the Wayyy
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: 200,
          padding: '0px 40px 0px 40px',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ width: '50%' }}>
          <div
            style={{
              color: 'var(--orange)',
              fontSize: '2.4em',
              textTransform: 'uppercase',
              fontFamily: 'var(--secondary)',
              fontWeight: '600',
              lineHeight: '110%',
              zIndex: 100,
            }}
          >
            Take A Risk
          </div>
          <div
            style={{
              color: 'var(--orange)',
              fontSize: '1em',
              fontFamily: 'Reckless Neue Trial',
              marginTop: 20,
            }}
          >
            Summer has the vibes. The weather is great, I
            don't know how to write copy, and there are so
            many great activities to enjoy. Lorem Bad Bunny
            Bebe Ipsum. Cuando te lo quito despué' de lo'
            partie' Muchas me quieren desde que yo canto
            (Ja) Quisiera ser como tú, sin sentimiento'
            (miento') Yehyehyehyeh YOLO
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          padding: '0 40px',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            width: 223,
            height: 330,
            background: 'var(--yellow)',
            border: '4px solid var(--yellow)',
            borderRadius: 20,
            overflow: 'hidden',
            // transform: 'rotate(-8deg)',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <AquaMan
            style={{
              position: 'absolute',
              top: 203,
              left: 21,
              zIndex: 10,
            }}
          />
          <div
            style={{
              height: '30%',
              padding: 10,
              color: 'var(--purple)',
              background: 'var(--yellow)',
              fontFamily: 'var(--primary)',
              fontSize: '1.15em',
              lineHeight: '1.7em',
              width: -47,
            }}
          >
            Sailinggg Season is NNNNoW.
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                width: '100px',
                height: '100%',
                background: 'var(--orange)',
              }}
            >
              <Checkerboard
                style={{ height: '100%' }}
                color1='var(--yellow)'
                color2='var(--white)'
              />
            </div>
            <div
              style={{
                width: '70%',
                height: '240px',
                backgroundImage:
                  'url(https://cdn.utopia.app/editor/sample-assets/boat.jpg)',
                backgroundSize: '240px',
                backgroundPosition: '15% 30%',
                //filter: 'grayscale(100%)',
                filter: 'contrast(150%)',
                mixBlendMode: 'luminosity',
                opacity: 0.8,
              }}
            />
          </div>
        </div>
        <div
          style={{
            width: 326,
            height: 330,
            background: 'var(--yellow)',
            border: '4px solid var(--yellow)',
            borderRadius: 20,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Wonderer
            style={{
              position: 'absolute',
              top: 52,
              left: 196.5,
              zIndex: 10,
              transform: 'rotate(-12deg)',
            }}
          />
          <Cryophile
            style={{
              position: 'absolute',
              top: 147,
              left: -10,
              zIndex: 8,
              transform: 'rotate(192deg)',
            }}
          />
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                height: '104.54658385093%',
                width: '100%',
                background: 'white',
                backgroundImage:
                  'url(https://cdn.utopia.app/editor/sample-assets/northernlights.jpg)',
                backgroundSize: '42%',
                //filter: 'grayscale(100%)',
                filter: 'contrast(150%)',
                mixBlendMode: 'luminosity',
                opacity: 0.8,
              }}
            />
            <div
              style={{
                height: '18%',
                width: '100%',
                background: 'var(--orange)',
              }}
            >
              <Checkerboard
                style={{ height: '100%' }}
                color1='var(--yellow)'
                color2='var(--white)'
              />
            </div>
            <div
              style={{
                padding: 10,
                backgroundColor: 'var(--yellow)',
                color: 'var(--purple)',
                fontFamily: 'var(--primary)',
                fontSize: '1.1em',
                lineHeight: '1.4em',
                width: '100%',
                height: '20%',
              }}
            >
              FFeastt Youur Eyes!
            </div>
          </div>
        </div>
        <div style={{ width: '22.29976019185%' }}>
          <div
            style={{
              color: 'var(--orange)',
              fontSize: '2.4em',
              textTransform: 'uppercase',
              fontFamily: 'var(--secondary)',
              fontWeight: '600',
              lineHeight: '110%',
              zIndex: 100,
            }}
          >
            That's on my bucket list.
          </div>
          <div
            style={{
              color: 'var(--orange)',
              fontSize: '1em',
              fontFamily: 'Reckless Neue Trial',
              marginTop: 20,
            }}
          >
            Lorem Bad Bunny Bebe Ipsum. Chambean, chambean,
            pero no jalan (¡Jalan!) Que pa'l picor les tengo
            Claritín Te toco y hasta el mundo deja de girar
          </div>
        </div>
      </div>
    </div>
  )
}
