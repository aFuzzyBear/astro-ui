import { Component  } from 'react'
import ReactPlayer from 'react-player'
import type ReactPlayerProps from 'react-player'
// import { JsxItem } from 'astro/dist/types/@types/astro'

interface SourceProps {
    src: string
    type: string
  }
export declare interface RPlyrProps{
    url?: string | string[] | SourceProps[] | MediaStream
    playing?: boolean
    loop?: boolean
    controls?: boolean
    volume?: number
    muted?: boolean
    playbackRate?: number
    width?: string | number
    height?: string | number
    style?: CSSStyleDeclaration
    progressInterval?: number
    playsinline?: boolean
    playIcon?: JsxItem
    previewTabIndex?: number
    pip?: boolean
    stopOnUnmount?: boolean
    light?: boolean | string
    fallback?: JsxItem
    wrapper?: any
    config?:any
}

const RPlyr = ({...props}:RPlyrProps):ReactPlayer => {
    const {
        url,
        playing,
        loop,
        controls,
        light,
        volume,
        muted,
        playbackRate,
        width,
        height,
        style,
        progressInterval,
        playsinline,
        pip,
        stopOnUnmount,
        fallback,
        wrapper,
        playIcon,
        previewTabIndex,
        config
    }=props
    console.log(url)
    return(
        <div>
            <ReactPlayer 
                url = {url ? url : ReferenceError('Sorry, no URL was provided')} 
                playing = {playing ?? playing}
                loop = {loop ?? loop}
                controls = {controls ?? controls}
                light = {light ?? light}
                volume = {volume ?? volume}
                muted = {muted ?? muted}
                playbackRate = {playbackRate ?? playbackRate}
                width = {width ?? width}
                height = {height ?? height}
                style = {style ?? style}
                progressInterval = {progressInterval ?? progressInterval}
                playsinline= {playsinline ?? playsinline}
                pip = {pip ?? pip}
                stopOnUnmount = {stopOnUnmount ?? stopOnUnmount}
                fallback = {fallback ?? fallback}
                wrapper = {wrapper ?? wrapper} 
                playIcon = {playIcon ?? playIcon}
                previewTabIndex = {previewTabIndex ?? previewTabIndex}
                config = {config ?? config}
            />
            
        </div>

    )
}

export default RPlyr