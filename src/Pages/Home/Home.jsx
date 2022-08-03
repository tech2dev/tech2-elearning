import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../Components/Nav/Nav";
import Courses from "../../Components/Home/Courses/Courses";
import Footer from "../../Components/Footer/Footer";
import courseApi from "../../Api/courseApi";



const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const getCourses = async () => {
            const fullCourses = await courseApi.getFullCourses();
            setCourses(fullCourses.data)
        }
        getCourses();
    }, [])
    return (
        <>
            <Nav />
            <div className="list-courses">
                <Courses courses={courses} />
            </div>
            <Footer />
        </>
    );
};

export default Home;
