
import './about.css';
import avatar from '../../assets/cartoon.png'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
}));

// const StyledPaper = styled(Paper)(({ theme }) => ({
//     textAlign: 'center',
//   }));

const About = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
                {/* <StyledPaper
                    sx={{
                        my: 1,
                        mx: 'auto',
                        p: 1,
                    }}
                >
                </StyledPaper> */}
                <Grid container rowSpacing={12} columnSpacing={{ xs: 12 }}>
                    <Grid item={{ xs: 12, sm: 12, md: 6 }}>
                        <Item columnSpacing={{ xs: 12 }} rowSpacing={12}>
                            <img src={avatar} id="avatar" alt="Futurama style cartoon photo of me" />
                        </Item>
                    </Grid>
                    <Grid id="aboutMeBox">
                        <Item columnSpacing={{ xs: 12 }} rowSpacing={12}>
                            <h2 id="aboutMeTitle">About Me </h2>
                        </Item>
                        <Item container wrap="nowrap" item={{ xs: 12, sm: 12, md: 6 }} columnSpacing={{ xs: 12 }} rowSpacing={12}>
                            <p id="aboutMeBio">Aspiring Front-end-developer leveraging my communication and paralegal background to bring thoughtful and strategic user experience on the web through storytelling.  I am a student working on completing a certificate in full stack development from the University of Denver, with newly developed skills in JavaScript, CSS, and responsive web design. My undergraduate degree at University of Colorado at Boulder in Communication with a minor in Creative Writing helps me come up with creative user stories that come to fruition through my skills in web development. With each project, my aim is to create original and impactful designs. I’m excited to leverage my skills to make meaningful web applications with a collaborative team to build better experiences on the web.  Let me help you tell your story through your website.</p>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default About;