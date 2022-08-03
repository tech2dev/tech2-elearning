import React from "react";
import { FaPlay } from "react-icons/fa";

const CourseContent = ({
    img,
    price,
    release,
    authorCourse,
    totalCourse,
    nameCourse,
}) => {
    return (
        <div className="bg-white relative rounded-lg">
            <div className="course-image">
                <img src={img} alt="course-image" />
            </div>
            <div className="absolute top-0 left-0">
                <p className="px-4 py-2 rounded-br-lg bg-red-400 border-r-4 border-b-4 border-green-300">
                    {price}đ
                </p>
            </div>
            <div className="absolute top-0 right-0">
                <p className="px-4 py-2 rounded-bl-lg bg-red-400 border-l-4 border-b-4 border-green-300">
                    {release ? "Đã ra mắt" : "Chưa ra mắt"}
                </p>
            </div>
            <div className="mt-5 mb-7 px-5 py-2">
                <h2 className="font-semibold hover:text-red-500 pl-3 text-lg transition-all ease-linear duration-200">
                    {nameCourse}
                </h2>
            </div>
            <div className="flex justify-between items-center border-t-[1px] border-red-300 p-5">
                <span className="ml-3">{authorCourse}</span>
                <span className="flex items-center bg-red-400 px-3 py-1 rounded-lg hover:shadow-red-600 hover:shadow-md transition-all ease-linear duration-200">
                    <FaPlay className="mr-2" />
                    {totalCourse} bài học
                </span>
            </div>
        </div>
    );
};

export default CourseContent;
