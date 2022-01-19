// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// Box needs to render a div, accept a className and style props(where style can have backgroundColor and fontStyle)

function Box({size, className = '', style, ...otherProps}) {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}} //merge these objects together, because we want italics AND the appropriate background color
      {...otherProps} // => {children: 'small lightblue box'}
    />
  )
}

// destructuring className from the props, and calling the rest of the props (the styles) "...otherProps" for now
// returning a div where the className is interpolated from the functions below, and the appropriate styles,
// (like fontStyle and backgroundColor) represented by "...otherProps" still apply

function App() {
  return (
    <div>
      <Box size='small' style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size='medium' style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size='large' style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
