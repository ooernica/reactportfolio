import './header.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Header = () => {
    return (
        <section id='header'>
            <header>
                <div class="jumbotron-fluid text-center">
                    <div class="container" id="jumbotron">
                        <h1 class="display-4">Erna (air-na) Lukač</h1>
                        <p class="lead">she/her/hers</br>
                        <p class="lead">Full Stack Developer</p>
                    </div>
                </div>
            </header>
        </section>
    )
}

export default Header;