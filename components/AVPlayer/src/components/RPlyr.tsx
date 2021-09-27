import React, { Component,JSX,Suspense  } from 'react'
import ReactPlayer from 'react-player'
import type ReactPlayerProps from 'react-player'
// import { JsxItem } from 'astro/dist/types/@types/astro'

interface SourceProps {
    src: string
    type: string
  }
export  interface RPlyrProps{
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
    playIcon?: JSX.Element
    previewTabIndex?: number
    pip?: boolean
    stopOnUnmount?: boolean
    light?: boolean | string
    fallback?: JsxItem
    wrapper?: any
    config?:any
    onReady?: (player: ReactPlayer) => void
    onStart?: () => void
    onPlay?: () => void
    onPause?: () => void
    onBuffer?: () => void
    onBufferEnd?: () => void
    onEnded?: () => void
    onClickPreview?: (event: any) => void
    onEnablePIP?: () => void
    onDisablePIP?: () => void
    onError?: (error: any, data?: any, hlsInstance?: any, hlsGlobal?: any) => void
    onDuration?: (duration: number) => void
    onSeek?: (seconds: number) => void
    onProgress?: (state: {
      played: number
      playedSeconds: number
      loaded: number
      loadedSeconds: number
    }) => void
    [otherProps: string]: any
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
        config,
        onReady,
        onStart,
        onPlay,
        onProgress,
        onDuration,
        onPause,
        onBuffer,
        onSeek,
        onEnded,
        onError,
        onClickPreview,
        onEnablePIP,
        onDisablePIP
    }=props
    console.log(config)
    return(
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
                onReady =  {onReady ?? onReady}
                onStart = {onStart ?? onStart}
                onPlay = {onPlay ?? onPlay}
                onProgress = {onProgress ?? onProgress} 
                onDuration = {onDuration ?? onDuration}
                onPause = {onPause ?? onPause}
                onBuffer = {onBuffer ?? onBuffer}
                onSeek = {onSeek ?? onSeek}
                onEnded = {onEnded ?? onEnded}
                onError = {onError ?? onError}
                onClickPreview = {onClickPreview ?? onClickPreview}
                onEnablePIP = {onEnablePIP ?? onEnablePIP}
                onDisablePIP = {onDisablePIP ?? onDisablePIP}
            />

    )
}

export default RPlyr