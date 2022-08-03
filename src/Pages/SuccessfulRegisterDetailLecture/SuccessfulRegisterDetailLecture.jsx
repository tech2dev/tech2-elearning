import React, { useEffect, useState } from 'react';
import DetailLecture from '../../Components/DetailLecture/DetailLecture';
import Nav from '../../Components/Nav/Nav';
import { useParams, useNavigate, Navigate } from "react-router-dom";
import courseApi from '../../Api/courseApi';
import Footer from '../../Components/Footer/Footer';


function SuccessfulRegisterDetailLecture(props) {
    const [videoCourse, setVideoCourse] = useState([]);
    const [previousCourse, setPreviousCourse] = useState([]);
    const [nextCourse, setNextCourse] = useState([]);

    let myID = useParams();
    let lectureID = parseInt(myID.Idlecture)
    let navigate = useNavigate()

    useEffect(() => {

        const getDetailVideo = async () => {
            const getVideo = await courseApi.getDetailCourseVideo(myID.courseID, lectureID);
            setVideoCourse(getVideo.data[0])
        }

        const getPreviousVideo = async () => {
            let previousID = lectureID - 1;
            const getVideo = await courseApi.getDetailCourseVideo(myID.courseID, previousID);
            setPreviousCourse(getVideo.data[0])
        }
        const getNextVideo = async () => {
            let nextID = lectureID + 1;
            const getVideo = await courseApi.getDetailCourseVideo(myID.courseID, nextID);
            setNextCourse(getVideo.data[0])
        }
        getPreviousVideo();
        getDetailVideo();
        getNextVideo();
    }, [myID])

    useEffect(() => {
        if (videoCourse === undefined) {
            navigate('/404')
        }
    }, [videoCourse])

    document.title = 'Hệ thống học online'
    return (
        <>
            <Nav />
            <DetailLecture videoCourse={videoCourse} previousCourse={previousCourse} nextCourse={nextCourse} />
            <Footer />
        </>
    );
}

export default SuccessfulRegisterDetailLecture;