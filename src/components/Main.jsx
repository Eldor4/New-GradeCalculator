import React, { useEffect,useState } from 'react'
import Info from './Info'
import TableData from './TableData'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';

export default function Main() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
    marginRight: theme.spacing(0),
    },
    title: {
       flexGrow: 1,
      fontFamily:"Alef",
      //marginRight: theme.spacing()
      marginLeft: theme.spacing(8)
    },
    tableDiv:{
      margin: theme.spacing(),}
    
  }));
  const classes = useStyles();

  const [info, setInfo]=useState(false)
  const [list, setList]=useState(false)

  useEffect(()=>{
    if(localStorage.getItem('session')==null||localStorage.getItem('session')===undefined){
      let a = [{
        name:"",
        percent:0,
        grade:0,
        id:0,
      }];
      localStorage.setItem('session',JSON.stringify(a))
      setList(true)
    }
  },[])

  return (
    <div>
      {info?<Info 
      close={()=>{setInfo(false)}}
      />:""}
        <AppBar position="static">
  <Toolbar>
    <Typography variant="h6" className={classes.title}>
    מחשבון ציונים
    </Typography>
    <Button onClick={()=>{setInfo(true)}}
     color="inherit"
    className={classes.menuButton}>
 <InfoRoundedIcon />
    </Button>
  </Toolbar>
</AppBar>
      <div className={classes.tableDiv}>
      {localStorage.getItem('session')!=null?(
      <TableData list={list}/>)
      :<></>}
      </div>
    </div>
  )
}