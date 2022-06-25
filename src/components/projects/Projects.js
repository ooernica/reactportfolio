import './projects.css';
import famyouly from '../../assets/famyouly.png';
import raqballrank from '../../assets/raqballrank.png';
import puppyluv from '../../assets/puppyluv.png';
import avsquiz from '../../assets/avsquiz.png';
import notetaker from '../../assets/notetaker.png';
import teamprofile from '../../assets/teamprofile.png';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Projects = () => {
    return (
        <section>
            <div>
                <div>
                    <img class="projectImg" src={famyouly} alt=""/>
                        <Stack spacing={3} direction="row">
                            <Button variant="contained" class="deployedBtn"><a href="https://evening-island-73261.herokuapp.com/login">Live </a></Button>
                            <Button variant="outlined" class="repoBtn"><a href="https://github.com/EsotericZ/famYOUly">Repo </a></Button>                        
                        </Stack>   
             </div>
                <div>
                    <img class="projectImg" src={raqballrank} alt=""/>
                        <Stack spacing={3} direction="row">
                            <Button variant="contained" class="deployedBtn"><a href="https://github.com/EsotericZ/coRBallRank"> Live </a></Button>
                            <Button variant="outlined" class="repoBtn"><a href="https://corballrank.herokuapp.com/"> Repo </a></Button>
                        </Stack>
                </div>
            </div>
            <div>
                <div>
                    <img class="projectImg" src={puppyluv} alt=""/>
                        <Stack spacing={3} direction="row">
                            <Button variant="contained" class="deployedBtn"><a href="https://github.com/EsotericZ/project01"> Live </a></Button>
                            <Button variant="outlined" class="repoBtn"><a href="https://esotericz.github.io/project01/"> Repo </a></Button>
                        </Stack>
                </div>
                <div>
                    <img class="projectImg" src={avsquiz} alt=""/>
                    <Stack spacing={3} direction="row">
                        <Button variant="contained" class="deployedBtn"><a href="https://ooernica.github.io/4WeekHomework-CodeQuiz/"> Live </a></Button>
                        <Button variant="outlined" class="repoBtn"><a href="https://github.com/ooernica/4WeekHomework-CodeQuiz"> Repo </a></Button>
                        </Stack>
                </div>
                <div>
                    <img class="projectImg" src={notetaker}alt=""/>
                     <Stack spacing={3} direction="row">
                        <Button variant="contained" class="deployedBtn"><a href="https://github.com/ooernica/11WeekHomework-NoteTaker"> Live </a></Button>
                        <Button variant="outlined" class="repoBtn"><a href="https://notetaker11el.herokuapp.com/"> Repo </a></Button>
                    </Stack>
                </div>
                <div>
                    <img class="projectImg" src={teamprofile} alt=""/>
                        <Button variant="outlined" class="repoBtn" id="teamProfile"><a href="https://github.com/ooernica/10WeekHomework-TeamProfileGenerator"> Repo </a></Button>
                </div>
            </div>
        </section>
       )
    } 

export default Projects;