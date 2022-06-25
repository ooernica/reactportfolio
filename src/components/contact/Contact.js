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
                        <i className="fab fa-github"></i><a href="https://github.com/ooernica" target="_blank" rel="noopener">
                        <GitHubIcon /></a>
                        <i className="fab fa-linkedin-in"></i><a href="https://www.linkedin.com/in/ernal/" target="_blank" rel="noopener">
                        <LinkedInIcon /></a>
                        <i className="fas fa-send"></i><a href="mailto:e.lukac@outlook.com">
                        <SendIcon /></a>
                        <i className="fas fa-phoneandriod"></i><a href="tel:+17206467668">
                        <PhoneAndroidIcon /></a>
                    </Stack>
                </div>
            </nav>
        </section>
    )
}
export default Contact;