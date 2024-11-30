
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 
import Navbar from '../components/Navbar';

function MenuPage() {
    return (
        <div>
            <Navbar />
            <div className="container container-90vh text-center">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-6">
                        <h1 className="tituindex">EduBridge</h1>
                        <div className="prin">
                            <div className="icon-box">
                                <img src="./images/teachers.png" alt="Teachers" className="icon" />
                                <Link to="/teachers">TEACHERS</Link>
                            </div>
                            <div className="icon-box">
                                <img src="./images/forumss.png" alt="Forums" className="icon" />
                                <Link to="/foros">FORUMS</Link>
                            </div>
                            <div className="icon-box">
                                <img src="./images/matr.png" alt="Material" className="icon" />
                                <Link to="/material">MATERIAL</Link>
                            </div>
                            <div className="icon-box">
                                <img src="./images/exam.png" alt="Quizzes" className="icon" />
                                <Link to="/quizes">QUIZZES</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    );
}

export default MenuPage;
