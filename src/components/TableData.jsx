import React, { useEffect ,useState} from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import { Link } from "react-router-dom";
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import ShowChartRoundedIcon from '@material-ui/icons/ShowChartRounded';
import Add from './Add'


export default function TableData() {
  const [localStorageData, setlocalStorageData]=useState([])
  const [Open, setOpen] = useState(false)

  //import localStorage
  useEffect(()=>{
    setlocalStorageData(JSON.parse(localStorage.getItem("session")).slice(1));

  }
  ,[])

  const removeTheItem= (o)=>{
  //get list
   let a=JSON.parse(localStorage.getItem("session"))
   //up list without item
   localStorage.setItem("session",JSON.stringify( a.filter(p => p.id !== o)))
   //return
   setlocalStorageData(JSON.parse(localStorage.getItem("session")).slice(1))
}
  const clear=()=>{
    let clear = [{
      name:"",
      percent:0,
      grade:0,
      id:0,
    }];
    localStorage.setItem('session',JSON.stringify(clear))
    setlocalStorageData(JSON.parse(localStorage.getItem("session")).slice(1))

  }
  

  const getgetPercent= localStorageData.map(x=>(x.percent))
  const MakeNumber=getgetPercent.map(i=>Number(i))
  const  sum=MakeNumber.reduce((a, b) => a + b, 0)

  const useStyles = makeStyles({
    table: {
      minWidth: "80%",
    },
    link:{
       textDecoration: 'none',
      color: "success.main",
     
    },
  });
  
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor:"rgb(63, 81, 181)",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const classes = useStyles();

  return (
    <div>
      {Open?

     <Add
     list={(b)=>{setlocalStorageData(b);setOpen(false)}}
      close={()=>{setOpen(false)}}
      sum={sum}/>
      :<></>} 
      {localStorageData.length>=1?
      <TableContainer component={Paper}>
       <Table className={classes.table} aria-label="customized table">
         <TableHead>
           <TableRow>
             <StyledTableCell align="center">מחיקת רכיב</StyledTableCell>
             <StyledTableCell  align="center">רכיב הציון</StyledTableCell>
             <StyledTableCell align="center">ציון</StyledTableCell>
             <StyledTableCell align="center">אחוז מהציון</StyledTableCell>
           </TableRow>
         </TableHead>
          <TableBody>
            {localStorageData.map(o => (
            <StyledTableRow key={o.id}>
              <StyledTableCell align="center" >
                <IconButton onClick={()=>removeTheItem(o.id)}>
                  <DeleteOutlineRoundedIcon color="secondary" />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align= "center">{o.name}</StyledTableCell>
              <StyledTableCell align="center">{o.grade}</StyledTableCell>
              <StyledTableCell align="center">{o.percent}%</StyledTableCell>
            </StyledTableRow>))
            }
          </TableBody>
        </Table>
      </TableContainer>
      :""}


      {sum<100&&localStorageData.length>=1?
      <Button onClick={()=>{setOpen(true)}}
      variant="outlined"
      color="primary"
      size="large"
      className={classes.button}
      startIcon={<AddCircleOutlineRoundedIcon />}>
            הוסף ציון
        </Button>
      :""}

       {localStorageData.length===0?
        <Button onClick={()=>{setOpen(true)}}
        variant="outlined"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AddCircleOutlineRoundedIcon />}>
            התחל
        </Button>:""}
       {localStorageData.length===null?
        <Button onClick={()=>{setOpen(true)}}
        variant="outlined"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AddCircleOutlineRoundedIcon />}>
            התחל
        </Button>:""}
        {sum===100?
         <Link to={"/grade"} className={classes.link}>
      <Button
      variant="outlined"
      color="primary"
      size="large"
      className={classes.button}
      startIcon={<ShowChartRoundedIcon />}>
            הצג ציון
        </Button>
       </Link>
        :""}
       {sum<100&&localStorageData.length>=1 ?
        <Button onClick={clear}
        variant="outlined"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<DeleteOutlineRoundedIcon />}>
            נקה
        </Button>
      :""}
       {sum===100 ?
        <Button onClick={clear}
        variant="outlined"
        color="secondary"
        size="large"
        className={classes.button}
        startIcon={<DeleteOutlineRoundedIcon />}>
            נקה
        </Button>
       :""}
        <div></div> 
    </div>
  )
}
