import './App.scss';
import {
  Routes,
  Route,
} from "react-router-dom";
import DetailCourse from './Pages/DetailCourse/DetailCourse';
import SuccessfulRegisterDetailLecture from './Pages/SuccessfulRegisterDetailLecture/SuccessfulRegisterDetailLecture';
import SignIn from './Pages/SignIn/SignIn';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'video.js/dist/video-js.css';



function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/khoa-hoc/:courseID" element={<DetailCourse />} />
        <Route exact path="/khoa-hoc/:courseID/bai-hoc/bai-:Idlecture" element={<SuccessfulRegisterDetailLecture />} />
        <Route exact path="/dang-nhap" element={<SignIn />} />
        <Route path="*" element={<NotFound />} status={404} />
      </Routes>
    </div>
  );
}

export default App;
