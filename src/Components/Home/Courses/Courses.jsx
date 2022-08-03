import React from 'react';
import CourseContent from './CourseContent';
import { Link } from 'react-router-dom'
import './Courses.scss'

const Courses = ({ courses }) => {
    return (
        <div className="container mx-auto">
            <h3 className="title-courses">Khóa học gợi ý</h3>
            <div className="grid grid-cols-3 gap-5">
                {courses.map((course) => (
                    <Link
                        to={`/khoa-hoc/${course.id}`}
                        key={course.id}
                    >
                        <CourseContent
                            img={course.image}
                            price={course.price}
                            release={course.release}
                            authorCourse={course.author}
                            totalCourse={course.totalVideo}
                            nameCourse={course.title}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Courses;