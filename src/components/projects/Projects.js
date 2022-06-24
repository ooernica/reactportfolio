import './projects.css';
import famyouly from '../../assets/famyouly.png';

const Projects = () => {
    return (
        <section id='projects'>
            <div className="row" id="projects">
                <div className="col" id="project1">
                    <img src={famyouly} id="projectLeft"alt=""/>
                        <button type="button" className="btn btn p3b justify-content-center" id="famyouly"><a href="https://github.com/EsotericZ/famYOUly"> FamYOUly </a></button>
                        <button type="button" className="btn btn p3b justify-content-center" id="famyouly"><a href="https://evening-island-73261.herokuapp.com/login"> FamYOUly </a></button>
                        
                </div>
                <div className="col" id="project2">
                    <img src={raqballrank} id="projectRight"alt=""/>
                        <button type="button" className="btn btn p3b" id="raqball"><a href="https://github.com/EsotericZ/coRBallRank"> Deployed </a></button>
                        <button type="button" className="btn btn p3b" id="raqball"><a href="https://corballrank.herokuapp.com/"> GitHub </a></button>
                </div>
            </div>
            <div className="row">
                <div className="col" id="project3">
                    <img src={puppyluv} id="bottomLeft"alt=""/>
                        <button type="button" className="btn btn p3b" id="puppyLove"><a href="https://github.com/EsotericZ/project01"> Deployed </a></button>
                        <button type="button" className="btn btn p3b" id="puppyLove"><a href="https://esotericz.github.io/project01/"> GitHub </a></button>
                        
                </div>
                <div className="col" id="project4">
                    <img src={avsquiz} id="bottomMiddle"alt=""/>
                        <button type="button" className="btn btn p3b" id="avsQuiz"><a href="https://ooernica.github.io/4WeekHomework-CodeQuiz/"> Deployed </a></button>
                        <button type="button" className="btn btn p3b" id="avsQuiz"><a href="https://github.com/ooernica/4WeekHomework-CodeQuiz"> GitHub </a></button>
                        
                </div>
                <div className="col" id="project5">
                    <img src={notetaker} id="bottomRight"alt=""/>
                        <button type="button" className="btn btn p3b" id="noteTaker"><a href="https://github.com/ooernica/11WeekHomework-NoteTaker"> Deployed </a></button>
                        <button type="button" className="btn btn p3b" id="noteTaker"><a href="https://notetaker11el.herokuapp.com/"> GitHub </a></button>
                </div>
                <div className="col" id="project6">
                    <img src={teamprofile} id="bottomLeft"alt=""/>
                        <button type="button" className="btn btn p3b" id="profileGenerator"><a href="https://github.com/ooernica/10WeekHomework-TeamProfileGenerator"> GitHub </a></button>
                </div>
            </div>
        </section>
    

export default Projects;