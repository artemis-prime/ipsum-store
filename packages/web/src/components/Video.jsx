import React from 'react'
import ReactPlayer from 'react-player'

export default ({ url, width, height, rightJustify }) => {
  return (
    <ReactPlayer
      url={url}
      width='100%'
      height={height}
      style={{
        display: 'flex',
        justifyContent: (rightJustify) ? 'flex-end' : 'flex-start'
      }}
      playing={true}
      loop={true}
      muted={true}
      controls={true}
      config={{
        file: {
          attributes: {
            style: {
              width,
              height
            }
          }
        }
      }}
    />
  )
}
