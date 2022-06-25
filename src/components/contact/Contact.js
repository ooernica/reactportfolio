import './contact.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Stack from '@mui/material/Stack';

const Contact = () => {
    return (
        <section id='contact'>
            <nav>
                <div>
                    <a id="contact" href="contact"></a>
                    <Stack spacing={2} direction="row" textAlign="center">
                        <i className="fab fa-github"></i><a href="https://github.com/ooernica" target="_blank"></a>
                        <GitHubIcon />
                        <i className="fab fa-linkedin-in"></i><a href="https://www.linkedin.com/in/ernal/"></a>
                        <LinkedInIcon />
                        <i className="fas fa-send"></i><a href="mailto:e.lukac@outlook.com"></a>
                        <SendIcon />
                        <i className="fas fa-phoneandriod"></i><a href="tel:+17206467668"></a>
                        <PhoneAndroidIcon />
                    </Stack>
                </div>
            </nav>
        </section>
    )
}
export default Contact;