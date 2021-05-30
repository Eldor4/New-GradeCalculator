import React, { useState,useEffect } from 'react'
import { Doughnut} from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import { Link } from "react-router-dom";
export default function Grade() {
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
        buttons:{
            backgroundColor: "white",
            marginTop: theme.spacing(8),
            display: "inline",
            alignItems: 'center',},
        title:{
            fontFamily:"Alef"
        }
    }))
    
    const classes = useStyles();
    const [ChartData, setChartData] = useState();
    const localStorageData=JSON.parse(localStorage.getItem("session")).slice(1)
    const grade=localStorageData.map(i=>i.percent*i.grade*0.01)
    const MakeNumber=grade.map(i=>Number(i))
    const sum=grade.reduce((a, b) => a + b, 0)
    
    const chart=()=>{
        setChartData({
            labels:localStorageData.map(i=>i.name),
            datasets:[{
                label:'grade',
                data:MakeNumber,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(161, 245, 66, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(161, 245, 66, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
            }]
            
        })
    }
    useEffect(()=>{
        
        chart()},[])
    
    return (
        <div className={classes.paper}>
            <h1 className={classes.title}>
                {sum} : ציון סופי 
            </h1>
        <div className={classes.paper}>
            {console.log(MakeNumber)}
            <Doughnut data={ChartData}/>
        </div>
        <div className={classes.buttons}>
           <Link to={"/"}>
        <Button
       variant="outlined"
       color="primary"
       size="large"
       className={classes.button}
       startIcon={<ExitToAppRoundedIcon />}>
             חזור 
         </Button>
           </Link>
        {/* <Button
       variant="outlined"
       color="secondary"
       size="large"
       className={classes.button}
       startIcon={<GetAppRoundedIcon />}>
             הורד 
         </Button> */}
         </div>        
        </div>
    )
}


