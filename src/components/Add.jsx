import React, { useState,useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



export default function Add({list,close,sum}) {
   
  const {register,handleSubmit}=useForm()
  const [valueGrade, setValueGrade] = useState();
  const [valuePercent, setValuePercent] = useState();
  
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
  useEffect(()=>{
  })
  //Main function
  const onSubmit=(data)=>{
     //Imports exist 
    const a= JSON.parse(localStorage.getItem('session'))
    //Push new
    a.push(data);
    //Up all
    localStorage.setItem('session', JSON.stringify(a));
    //import(again)
    const b =JSON.parse(localStorage.getItem('session'))
    //Add id
    b.forEach((o, i) => o.id = i + 1)
    //Up all(again)
    localStorage.setItem('session', JSON.stringify(b));
    close(close)
    list(b.slice(1))
  };

  const handlChangeGrade = () => {
      if (valueGrade < 0) {
        setValueGrade(0);
      } else if (valueGrade > 110) {
        setValueGrade(100);
      }
  };
  
  const handlChangePercent = () => {
      if (valuePercent < 0) {
        setValuePercent(1);
      } else if (valuePercent > 100-sum) {
        setValuePercent(100-sum);
      }
  };
  
  const classes = useStyles();  

  return (
    <div 
    className={classes.modal}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <BarChartRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            הוספת פרמטר
          </Typography>
          <form className={classes.form}
            onSubmit={handleSubmit(onSubmit)}
            >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  {...register("name")}
                  variant="outlined"
                  required
                  fullWidth
                  id="parameter"
                  label="שם הפרמטר"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                value={valuePercent}
                {...register("percent")}
                  variant="outlined"
                  required
                  label="אחוז"
                  type="number"
                  inputProps={{ min: "0", max:`${100-sum}` }}
                  onChange={handlChangePercent}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                {...register("grade")}
                  variant="outlined"
                  required
                  label="ציון"
                  type="number"
                  value={valueGrade}
                  onChange={handlChangeGrade}
                  inputProps={{ min: "0", max: "100" }} 
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  // onClick={close}
                >הוסף
              </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                 onClick={close}
                >חזור
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  )
}
