import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../Components/Nav/Nav";
import Courses from "../../Components/Home/Courses/Courses";
import Footer from "../../Components/Footer/Footer";


const Home = () => {
    const [courses, setCourses] = useState([]);
    const url = "http://localhost:3001/courses";
    useEffect(() => {
        const callApi = async () => {
            try {
                const res = await axios.get(url);
                setCourses(res.data);
            } catch (error) {
                console.log("error");
            }
        };
        callApi();
    }, []);
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
