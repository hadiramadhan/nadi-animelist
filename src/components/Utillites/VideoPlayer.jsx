"use client"

import YouTube from "react-youtube"
import { XCircle } from "@phosphor-icons/react"
import { useState } from "react"

const VideoPlayer = ({ youtubeId }) =>{
    const [isOpen, setIsOpen] = useState(true)
    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
            <button
            onClick={handleVideoPlayer} 
            className="text-color-accent float-right bg-color-dark px-3 mb-1"><XCircle size={32}/></button>
            <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()}
            opts={option} 
           />
        </div>
        )
    }

    const ButtonOpenPlayer = () => {
        return (
            <button 
    onClick={handleVideoPlayer}
    className="rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent">Silahkan Tonton Trailer</button>
        )
    }

    return isOpen ? <Player/> : <ButtonOpenPlayer/>   
}

export default VideoPlayer