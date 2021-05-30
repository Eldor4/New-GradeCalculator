import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



export default function Info({close}) {
   

  
  const useStyles = makeStyles((theme) => ({
    modal: {
        fontFamily:"Nunito",
        position: "fixed", 
        zIndex: "1", 
        paddingTop: "100px", 
        left: "0",
        top: "0",
        width: "100%", 
        height: "100%", 
        overflow: "auto", 
        backgroundColor: "rgba(0,0,0,0.4)", 
      },
      paper: {
        backgroundColor: "white",
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      }
    }
  )
  );

  const handlClick=()=>{
    close(close)
  };

  
  const classes = useStyles();  

  return (
    <div 
    className={classes.modal}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <InfoRoundedIcon />
          </Avatar>
          <h3>מחשבון ציונים</h3>
          <h6>(תנאי שימוש)</h6>
          <ul dir="rtl">
              <li>מטרת האתר היא לסייע למורה/תלמיד/ה לחשב ממוצע ציונים.</li>
              <li>כדי להמנע מבלבול לא פתחנו אופציה לנק' בונוס.</li>
              <li>.איננו לוקחים אחראיות על שגיאות חישוב (טל"ח) </li>
              <li>אנו מקווים שתמצאו את האתר יעיל ונוח לשימוש.</li>
              <li>בהצלחה</li>
          </ul>
          <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                 onClick={close}
                >חזור
                </Button>
        </div>
      </Container>
    </div>
  )
}
