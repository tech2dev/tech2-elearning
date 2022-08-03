import requestClient from './requestClient';

const courseApi = {
    getFullCourses() {
        const url = `courses`;
        return requestClient.get(url);
    },
    getUnregisterCourse(ID) {
        const url = `courses/${ID}`;
        return requestClient.get(url);
    },
    makeAccordionContent(ID) {
        const url = `courses/${ID}/accordionHeadings/?_embed=listVideo`;
        return requestClient.get(url);
    },
    getDetailCourseVideo(course, ID) {
        const url = `/courses/${course}/listVideo?id=${ID}`;
        return requestClient.get(url);
    },
    addBookmarkToUser(ID) {
        const url = `UserDemo/${ID}`;
        return requestClient.post(url);
    }
}
export default courseApi;

