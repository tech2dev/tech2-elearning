import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux'
import { getModalVideo, openModalVideo } from '../../../Slice/modalVideoSlice'
import './Accordion.scss'
import { Link } from "react-router-dom";

function Accordion(props) {
    const { id, title, listVideo, courseId } = props
    const userDemo = localStorage.getItem('demo-login')
    const [isOpen, setIsOpen] = useState(false)
    const parentRef = useRef();
    const dispatch = useDispatch();

    const openModal = (video) => {
        const action = getModalVideo(video);
        const actionOpenModal = openModalVideo()
        dispatch(action);
        dispatch(actionOpenModal)
    }

    return (
        <div className='accordion'>
            <div onClick={() => setIsOpen(!isOpen)} className="accordion-title">
                <h5>{title}</h5>
                <div className={isOpen ? 'circle-plus closed opened' : 'circle-plus closed'}>
                    <div className="circle">
                        <div className="horizontal"></div>
                        <div className="vertical"></div>
                    </div>
                </div>
            </div>

            <div
                className="content-parent"
                ref={parentRef}
                style={
                    isOpen
                        ?
                        {
                            height: parentRef.current.scrollHeight + "px",
                        }
                        :
                        {
                            height: "0px"
                        }
                }>
                <ul className='video-content'>{
                    listVideo && listVideo.map((video, index) => {
                        return (
                            <li className="video-content__item" key={index}>
                                {userDemo ? <Link to={`/khoa-hoc/${courseId}/bai-hoc/bai-${video.id}`}>{video.title}</Link> : <p>{video.title}</p>}
                                {video.trial && <a className='trial-link' onClick={() => openModal(video)} href="#!">Học thử</a>}
                            </li>
                        )
                    })
                }</ul>
            </div>
        </div>
    );
}

export default Accordion;