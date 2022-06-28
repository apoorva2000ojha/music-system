import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
export default function Controls(props) {
  return (
    <div className="control">
        <button className="SkipButton" onClick={() => props.SkipSong(false)}>
            LastSong
        </button>
        <button className="controlPlaybutton" onClick={() => props.setIsPlaying(!props.isPlaying)}>
            Play/Pause
        </button>
        <button className="SkipButton" onClick={() => props.SkipSong()}>
            NextSong
        </button>
    </div>
  )
}
