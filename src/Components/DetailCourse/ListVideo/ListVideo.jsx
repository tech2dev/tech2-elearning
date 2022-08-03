import React, { useEffect, useState } from 'react';
import Accordion from "./Accordion/Accordion";
import { useSelector } from 'react-redux'
import './ListVideo.scss';
import ModalVideo from "./ModalVideo/ModalVideo";
import courseApi from '../../../Api/courseApi'

function ListVideo({ ID }) {
    const isOpen = useSelector((state) => state.modalVideo.toOpen)

    const [accordion, setAccordion] = useState([]);

    useEffect(() => {
        const getAccordionComponent = async () => {
            const getAccordion = await courseApi.makeAccordionContent(ID);
            setAccordion(getAccordion.data)
        }
        getAccordionComponent();
    }, [])
    return (
        <>
            <div className='list-video section-background'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="list-video__wrapper content-wrapper">
                            <h4 className="video-wrapper__title heading-title">Bài Học</h4>
                            <div className="video-wrapper__content">
                                {accordion && accordion.map((item, _) => {
                                    return (
                                        <Accordion key={item.id} id={item.id} title={item.title} listVideo={item.listVideo} courseId={item.courseId} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && <ModalVideo />}
        </>
    );
}

export default ListVideo;