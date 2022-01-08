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
            <img className='video-thumbnail-image' src='/media/thumbnail_1.png' />
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
    const slides = Array.from({ length: 20 }).map(
        () => { return {
                title: 'awesome video',
                author: 'someone great',
                url: '',
                views: 999.999
            }
        }
    );
    return (
        <div className='playlist'>
            <h2 className='playlist-headline'>
                {headline}
            </h2>

            <Swiper
                spaceBetween={50}
                slidesPerView={6}
                virtual
                modules={[Virtual]}
                navigation={{
                    nextEl: '.control-next',
                    prevEl: '.control-prev',
                }}
                breakpoints={{
                    1: {
                        slidesPerView: 1.8
                    },
                    768: {
                        slidesPerView: 3.8
                    },
                    992: {
                        slidesPerView: 3.8
                    },
                    1200: {
                        slidesPerView: 5.8
                    },
                }}
            >
                {slides.map((slideContent, index) => (
                    <SwiperSlide key={slideContent.title} virtualIndex={index}>
                        <Video
                            title={slideContent.title}
                            author={slideContent.author}
                            url={slideContent.url}
                            views={slideContent.views}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Playlist