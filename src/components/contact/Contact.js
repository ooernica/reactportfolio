import './contact.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

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
                    <i className="fas fa-envelope"></i><a id="email" href="mailto:e.lukac@outlook.com">Email</a>
                    <EmailIcon id="email"/>
                    <i className="fas fa-phone"></i><a id="phone" href="tel:+17206467668">Phone</a>
                    <PhoneIcon id="phone"/>
                </div>
            </nav>
        </section>
    )
}
export default Contact;