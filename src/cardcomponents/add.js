import * as React from 'react'
export var Add = (props) => {
  return (
    <svg
      width='92'
      height='92'
      viewBox='0 0 72 72'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M41 5C41 2.23858 38.7614 0 36 0C33.2386 0 31 2.23858 31 5L31 31L5 31C2.23858 31 0 33.2386 0 36C0 38.7614 2.23858 41 5 41H31L31 67C31 69.7614 33.2386 72 36 72C38.7614 72 41 69.7614 41 67V41H67C69.7614 41 72 38.7614 72 36C72 33.2386 69.7614 31 67 31L41 31V5Z'
        fill={props.color}
      />
    </svg>
  )
}
