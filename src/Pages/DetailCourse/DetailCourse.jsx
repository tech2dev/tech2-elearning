import React, { useEffect, useState } from 'react';
import TitleCourse from '../../Components/DetailCourse/TitleCourse/TitleCourse';
import Nav from '../../Components/Nav/Nav';
import DescriptionCourse from '../../Components/DetailCourse/DescriptionCourse/DescriptionCourse';
import ListVideo from '../../Components/DetailCourse/ListVideo/ListVideo';
import courseApi from '../../Api/courseApi';
import { useParams } from "react-router-dom";
import Footer from '../../Components/Footer/Footer';

function DetailCourse(props) {
    const [demoCourse, setDemoCourse] = useState([]);
    let ID = useParams().courseID;

    useEffect(() => {
        const getDemoCourse = async () => {
            const getDemo = await courseApi.getUnregisterCourse(ID);
            setDemoCourse(getDemo.data)
        }
        getDemoCourse();
    }, [])
    return (
        <>
            <Nav />
            <TitleCourse title={demoCourse && demoCourse.title} />
            <DescriptionCourse description={demoCourse && demoCourse.description} />
            <ListVideo ID={ID} />
            <Footer />
        </>
    );
}

export default DetailCourse;