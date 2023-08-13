import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'

function ExperienceCard({id, company, jobtitle, startYear, endYear, details}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:theme.primary30,
        },
    }));

    const classes = useStyles();

    const detailsPoints = details.split('●').map((point, index) => (
        <li key={index}>{point.trim()}</li>
      ));


    return (
        // <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? expImgWhite : expImgWhite} alt="" />
                </div>
                <div className="experience-details">
                    <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{jobtitle}</h4>
                    <h5 style={{color: theme.tertiary80}}>{company}</h5>
                    {/* <p style={{color: theme.tertiary80}}>{details}</p> */}
                    <ul style={{ color: theme.tertiary80 }}>
                    {detailsPoints}
                    </ul>
                </div>
            </div>
        // </Fade>   
    )
}

export default ExperienceCard
