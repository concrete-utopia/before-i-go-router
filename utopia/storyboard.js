import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { ActivityList } from '/src/activity-list.js'
import { DiscoverActivityList } from '/src/discover-activity-list.js'
import {
  DecorativeLines,
  Checkerboard,
} from '/src/cardcomponents/decorations.js'
import { ReviewCard } from '/src/cardcomponents/review-card.js'
import { Activity } from '/src/cardcomponents/activity.js'
import { Description } from '/src/cardcomponents/description.js'
import { Name } from '/src/cardcomponents/name.js'
import { Rating } from '/src/cardcomponents/rating.js'
import { Stamp } from '/src/cardcomponents/stamp.js'
import { Profile } from '/src/profile.js'
import { ProfileV2 } from '/src/profile_v2.js'
import { Ellipse } from 'utopia-api'
import { PalmTree } from '/src/svgs.js'
import {
  AquaMan,
  Wonderer,
  BirbWatcher,
  Mixologist,
  Tropicologist,
  RiskTaker,
  Cryophile,
} from '/src/stickers.js'
import { UserProPic } from '/src/svgs.js'
import { Text } from 'utopia-api'

export var storyboard = (
  <Storyboard>
    <Scene
      style={{
        width: 834,
        position: 'absolute',
        left: -1282,
        top: 206,
        backgroundColor: 'rgb(255, 255, 255, 1)',
      }}
      data-label='Completed Activity List'
    >
      <ActivityList />
    </Scene>
    <Scene
      style={{
        position: 'absolute',
        left: -2222,
        top: 204,
        width: 834,
        height: 2223,
      }}
      data-label='Discover Activity List'
    >
      <DiscoverActivityList style={{}} />
    </Scene>
    <Scene
      style={{
        position: 'absolute',
        left: -1282,
        top: -1746.5,
        width: 1814,
        height: 1290,
      }}
      data-label='Playground'
    >
      <div
        style={{
          background: 'yellow',
          height: 200,
          width: 200,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            background: 'green',
            height: 150,
            width: 150,
            left: 21,
            top: 30,
          }}
        />
      </div>
      <div
        style={{
          overflow: 'hidden',
          position: 'absolute',
          background: 'pink',
          height: 100,
          width: 100,
        }}
      >
        <div
          style={{
            position: 'absolute',
            background: 'lime',
            height: 150,
            width: 150,
            left: -22,
            top: -21.5,
          }}
        />
      </div>
      <Checkerboard
        style={{
          width: 878,
          position: 'absolute',
          left: 227,
          top: 744,
        }}
      />
      <DecorativeLines
        count={9}
        style={{
          width: 878,
          position: 'absolute',
          left: -132,
          top: 672.5,
          transform: 'rotate(90deg)',
        }}
      />
      <Description
        description='testing the card out la la la description'
        style={{
          position: 'absolute',
          left: 380.5,
          top: 61,
        }}
      />
      <img
        src='https://cdn.utopia.app/editor/sample-assets/boat.jpg'
        style={{
          position: 'absolute',
          left: 206,
          top: 284,
          width: 837,
          height: 544,
        }}
      />
      <Stamp
        name='04 20 2021'
        style={{
          position: 'absolute',
          left: 1254,
          top: 719,
        }}
        color='var(--orange)'
      />
      <Stamp
        name='10 09 2017'
        style={{
          position: 'absolute',
          left: 1280,
          top: 865,
        }}
        color='var(--orange)'
      />
      <Stamp
        name='01 22 2016'
        style={{
          position: 'absolute',
          left: 1215,
          top: 1046,
        }}
        color='var(--orange)'
      />
      <Rating
        rating={5}
        style={{
          position: 'absolute',
          left: 1011,
          top: 393,
        }}
        color='var(--orange)'
      />
      <Rating
        rating={5}
        style={{
          position: 'absolute',
          left: 811,
          top: 393,
        }}
        color='var(--orange)'
      />
      <Rating
        rating={5}
        style={{
          position: 'absolute',
          left: 650,
          top: 459,
        }}
        color='var(--orange)'
      />
      <Name
        text='Drink a Martini on Mount Everest'
        style={{
          position: 'absolute',
          width: '946px',
          left: 289,
          top: 919,
          color: 'var(--yellow)',
        }}
      />
      <Name
        text='See the Northern Lights'
        style={{
          position: 'absolute',
          width: '946px',
          left: 289,
          top: 1100,
          color: 'var(--yellow)',
          fontFamily: 'var(--primary-basic)',
        }}
      />
      <Name
        text='Learn to Sail'
        style={{
          position: 'absolute',
          width: '946px',
          left: 289,
          top: 1004,
          color: 'var(--yellow)',
        }}
      />
      <Ellipse
        style={{
          background: 'var(--purple)',
          position: 'absolute',
          left: 429,
          top: 75,
          width: 1071,
          height: 170,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '51px',
          fontFamily: 'var(--primary)',
          color: 'var(--orange)',
          border: '20px solid var(--orange)',
        }}
      >
        HHellooo PPeoplee
      </Ellipse>
      <PalmTree
        style={{
          position: 'absolute',
          left: 1275.005859375,
          top: 535,
          width: 60,
          height: 87,
        }}
        color='var(--orange)'
      />
      <Checkerboard
        style={{
          position: 'absolute',
          left: 307.005859375,
          top: 149.5,
          width: 180,
          height: 161,
        }}
      />
      <div
        style={{
          width: 222,
          height: 330,
          background: 'var(--yellow)',
          border: '4px solid var(--yellow)',
          borderRadius: 20,
          overflow: 'hidden',
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          left: 1400,
          top: 291,
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <div
            style={{
              width: '66px',
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
              width: '73.97196261683%',
              height: '240px',
              backgroundImage: 'url(public/basket.jpg)',
              backgroundPosition: '0 45%',
              backgroundSize: '100% 100%',
              filter: 'contrast(120%) brightness(130%)',
              mixBlendMode: 'luminosity',
            }}
          />
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
          Pick Up Fre$h Inngrediennts
        </div>
      </div>
    </Scene>
    <Scene
      style={{
        width: 834,
        height: 766,
        position: 'absolute',
        left: -354,
        top: 2048.25,
        background: 'white',
      }}
      data-label='Activity Review'
    >
      <ReviewCard />
    </Scene>
    <Scene
      style={{
        width: 834,
        height: 766,
        position: 'absolute',
        left: 582,
        top: 2049.25,
        background: 'white',
      }}
      data-label='Activity'
    >
      <Activity />
    </Scene>
    <Scene
      style={{
        width: 834,
        height: 816,
        position: 'absolute',
        left: 582,
        top: 204.25,
        background: 'var(--yellow)',
      }}
      data-label='User Profile Page'
    >
      <Profile />
    </Scene>
    <Scene
      style={{
        width: 834,
        height: 989,
        position: 'absolute',
        left: -354,
        top: 204.25,
        background: 'var(--yellow)',
      }}
      data-label='User Profile Page v2'
    >
      <ProfileV2 />
    </Scene>
  </Storyboard>
)
