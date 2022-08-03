import React, { useEffect, useState, useRef } from 'react';
import courseApi from '../../Api/courseApi';
import { Link } from "react-router-dom";
import './DetailLecture.scss'
import VideoDetailLecture from './VideoDetailLecture/VideoDetailLecture';
import { useNavigate } from 'react-router-dom'
import videojs from 'video.js';

function DetailLecture({ videoCourse, previousCourse, nextCourse }) {

    const userDemo = JSON.parse(localStorage.getItem('demo-login'))

    const [content, setContent] = useState([]);

    const [showListCourse, setShowListCourse] = useState(true);

    let navigate = useNavigate()

    if (!userDemo) {
        navigate("/dang-nhap")
    }

    useEffect(() => {
        const getContentList = async () => {
            const contentList = await courseApi.makeAccordionContent(videoCourse && videoCourse.courseId);
            setContent(contentList.data)
        }
        getContentList();
    }, [videoCourse])

    const playerRef = React.useRef(null);

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: '//vjs.zencdn.net/v/oceans.mp4',
            type: 'video/mp4'
        }]
    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };


    return (
        <div className='list-video section-background'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1">
                    <div className="content-wrapper">
                        <div className="grid lg:grid-cols-12 md:grid-cols-1">
                            <div className={showListCourse ? 'list-video__wrapper lg:col-span-9 sm:col-span-12 lg:px-4' : 'list-video__wrapper lg:col-span-12 sm:col-span-12'}>

                                <VideoDetailLecture videoCourse={videoCourse} userDemo={userDemo} options={videoJsOptions} onReady={handlePlayerReady} />

                                <div className="change-lession">
                                    {
                                        previousCourse === undefined ? <></> : <Link to={`/khoa-hoc/${videoCourse.courseId}/bai-hoc/bai-${previousCourse.id}`}>Bài trước</Link>
                                    }
                                    <div>
                                        {
                                            nextCourse === undefined ? <></> : <Link to={`/khoa-hoc/${videoCourse.courseId}/bai-hoc/bai-${nextCourse.id}`}>Bài sau</Link>
                                        }
                                        {showListCourse && <button onClick={() => setShowListCourse(false)}>Ẩn bài học</button>}
                                        {!showListCourse && <button onClick={() => setShowListCourse(true)}>Hiện bài học</button>}
                                    </div>
                                </div>
                            </div>
                            <div className="list-video__wrapper lg:col-span-3 sm:col-span-12 lg:px-4">
                                <ul className="list-video__detail">
                                    {(content && showListCourse) && content.map((item, _) => {
                                        return (
                                            <li key={item.id}>
                                                <p>{item.title}</p>
                                                <ul>
                                                    {item && item.listVideo.map((video, _) => {
                                                        return (
                                                            <li className={videoCourse.title === video.title ? 'active' : null} key={video.id}><Link to={`/khoa-hoc/${video.courseId}/bai-hoc/bai-${video.id}`}>{video.title}</Link></li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailLecture;