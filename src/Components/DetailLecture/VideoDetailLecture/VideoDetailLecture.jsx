import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToBookmark, removeBookmark } from '../../Slice/BookmarkSlice'
import videojs from 'video.js';


function VideoDetailLecture({ videoCourse, userDemo, options, onReady }) {

    const bookmarkArr = localStorage.getItem('demo-login') && JSON.parse(localStorage.getItem('demo-login')).bookmark

    const bookmarkTemp = useSelector((state) => state.bookmark.bookmark)

    const dispatch = useDispatch();

    let condition = bookmarkArr && bookmarkArr.some(i => i.id === videoCourse.id)


    const toggleProductToBookMark = async (item) => {

        if (!bookmarkArr.some(i => i.id === item.id)) {
            const action = addToBookmark(item)
            dispatch(action)
            userDemo.bookmark = [...bookmarkTemp, item]
        } else {
            const action = removeBookmark(item)
            dispatch(action)
            userDemo.bookmark = userDemo.bookmark.filter(i => i.id !== item.id)
        }
        localStorage.setItem('demo-login', JSON.stringify(userDemo))

        await fetch(`http://localhost:3001/UserDemo/${userDemo.id}`, {
            method: 'PUT',
            body: JSON.stringify(userDemo),
            headers: {
                "Content-type": "application/json"
            }
        })
    }

    const videoRef = useRef(null);
    const playerRef = useRef(null);

    React.useEffect(() => {

        // Make sure Video.js player is only initialized once
        if (!playerRef.current) {
            const videoElement = videoRef.current;

            if (!videoElement) return;

            const player = playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
                onReady && onReady(player);
            });

            // You could update an existing player in the `else` block here
            // on prop change, for example:
        } else {
            const player = playerRef.current;

            player.autoplay(options.autoplay);
            player.src(options.sources);
        }
    }, [options, videoRef]);

    // useEffect(() => {
    //     const player = playerRef.current;
    //     // Make sure Video.js player is only initialized once
    //     if (!player) {
    //         const videoElement = videoRef.current;

    //         if (!videoElement) return;

    //         const player = playerRef.current = videojs(videoElement, options, () => {
    //             videojs.log('player is ready');
    //             player.src(options && options.sources.src);
    //             onReady && onReady(player);
    //         });

    //         return () => {
    //             if (player) {
    //                 player.dispose();
    //                 playerRef.current = null;
    //             }
    //         };
    //         // You could update an existing player in the `else` block here
    //         // on prop change, for example:
    //     }
    //     //  else {
    //     //     const player = playerRef.current;

    //     //     player.autoplay(options.autoplay);
    //     //     player.src(options.sources);
    //     // }
    // }, [options, videoRef, playerRef]);



    return (
        <>
            <h3 className="video-wrapper__title heading-title">{videoCourse && videoCourse.title}</h3>
            <button onClick={() => toggleProductToBookMark(videoCourse)} className={condition ? 'bookmark active' : 'bookmark'}>{condition ? 'remove bookmark' : 'add to bookmark'}</button>
            {/* <iframe className='sproutvideo-player' src='https://videos.sproutvideo.com/embed/709ed9b61911e3c8f9/2bdef13b90a44846' width='630' height='357' progress='50' frameBorder='0' allowFullScreen referrerPolicy='no-referrer-when-downgrade' title='Video Player'></iframe> */}
            <div data-vjs-player>
                <video ref={videoRef} className='video-js vjs-big-play-centered' />
            </div>
            {/* <iframe className='sproutvideo-player' src='https://videos.sproutvideo.com/embed/709ed9b61911e3c8f9/2bdef13b90a44846' width='630' height='357' frameBorder='0' allowFullscreen referrerPolicy='no-referrer-when-downgrade' title='Video Player'></iframe> */}
        </>
    );
}

export default VideoDetailLecture;