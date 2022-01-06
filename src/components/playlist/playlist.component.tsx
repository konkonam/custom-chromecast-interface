import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper';
import { PlaylistProps, VideoProps } from "./playlist.interface";

import 'swiper/css';
import 'swiper/css/virtual';
import './playlist.css'

const Video = ({title, author, url, views}: VideoProps) => {
    return (
        <div className='video'>
            <img className='video-thumbnail-image' src='/media/thumbnail.png' />
            <div className='video-controls'>
                <div className='information'>
                    <span><i className="bi bi-eye"></i> {views}</span>
                    {url}
                </div>

                <div className='video-author'>{author}</div>
                <div className='video-title'>{title}</div>
            </div>
        </div>
    )
}

const Playlist = ({headline}: PlaylistProps) => {
    return (
        <div className='playlist'>
            <h2 className='playlist-headline'>
                {headline}
            </h2>

            <Swiper
                spaceBetween={50}
                slidesPerView={1.8}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                virtual
                modules={[Virtual]}
                navigation={{
                    nextEl: '.control-next',
                    prevEl: '.control-prev',
                }}
            >
                <SwiperSlide>
                    <Video
                    title='awesome video'
                    author='someone great'
                    url='test'
                    views={999.000}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Video
                        title='awesome video'
                        author='someone great'
                        url='test'
                        views={999.000}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Video
                        title='awesome video'
                        author='someone great'
                        url='test'
                        views={999.000}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Video
                        title='awesome video'
                        author='someone great'
                        url='test'
                        views={999.000}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Playlist