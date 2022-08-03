import React from 'react';
import './TitleCourse.scss'

function TitleCourse({ title }) {
    return (
        <div className="title-course">
            <div className="container mx-auto">
                <div className="grid grid-cols-1">
                    <h2 className="title-course__content">{title}</h2>
                </div>
            </div>
        </div>
    );
}

export default TitleCourse;