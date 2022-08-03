import React from 'react';
import './DescriptionCourse.scss';

function DescriptionCourse({ description }) {
    return (
        <div className='description-course section'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1">
                    <div className="description-wrapper content-wrapper">
                        <h4 className="description-title heading-title">Mô Tả</h4>
                        <p>{description && description.content}</p>
                        {(description && description.list) ? <p><strong>Bạn nhận được gì trong khoá học?</strong></p> : null}
                        <ul>
                            {(description && description.list) && description.list.map((item, i) => {
                                return (
                                    <li key={i}>{item}</li>
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DescriptionCourse;