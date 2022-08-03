import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModalVideo } from '../../../Slice/modalVideoSlice'
import './ModalVideo.scss'

function ModalVideo(props) {
    const isOpen = useSelector((state) => state.modalVideo.toOpen)
    const videoData = useSelector((state) => state.modalVideo.modalVideoData)

    const dispatch = useDispatch();
    const closeModal = () => {
        const action = closeModalVideo();
        dispatch(action)
    }
    return (
        <>
            <div onClick={() => closeModal()} className="modal-background"></div>
            <div className={isOpen ? "modal-product fade" : "modal-product"}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {videoData.title}
                            </h5>
                            <button onClick={() => closeModal()} type="button" className="close">
                                <span>×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <iframe
                                src={`https://www.youtube.com/embed/${videoData.link}`}
                                frameBorder="0"
                                height="440"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default ModalVideo;