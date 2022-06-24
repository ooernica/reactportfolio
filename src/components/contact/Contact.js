import './contact.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const Contact = () => {
    return (
        <section id='contact'>
            <nav className="navbarBottom">
                <div className="container-fluid contactArea" >
                    <a className="navbar-brand" id="contact" href="contact">Contact</a>   
                    <i className="fab fa-github"></i><a id="git" href="https://github.com/ooernica" target="_blank">GitHub</a>
                    <GitHubIcon id="git"/>
                    <i className="fab fa-linkedin-in"></i><a id="linkedin" href="https://www.linkedin.com/in/ernal/">LinkedIn</a>
                    <LinkedInIcon id="linkedin"/>
                    <i className="fas fa-send"></i><a id="send" href="mailto:e.lukac@outlook.com">Email</a>
                    <SendIcon id="send"/>
                    <i className="fas fa-phoneandriod"></i><a id="phoneandroid" href="tel:+17206467668">Phone</a>
                    <PhoneAndroidIcon id="phoneandroid"/>
                </div>
            </nav>
        </section>
    )
}
export default Contact;