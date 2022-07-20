import React, { useEffect, useRef, useState } from 'react'
import Stopwatch from './Stopwatch';

import { Box } from '@chakra-ui/react';
const Timer = () => {

  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + "h:" + minutes + "m:" + seconds + "." + milliseconds+"s";
  }
    const [type,settype]=useState(false);
    const [count,setCount]=useState(0);
    const [timerid,settimerid]=useState(0)
    const [flag,setflag]=useState(false)
    const [onet,setonet]=useState(false)
    const [count2,setcount2]=useState(null)
    const value=useRef(count)
    const [countdown,setcountdown]=useState(null)
    const [timerdid,settimerdid]=useState(0)
    const handlechange=(e)=>{
      setCount(e.target.value)
      value.current=e.target.value
      
      
 }
 const abc=(count)=>{
  setflag(true)
    // value.current=value.current+1
    let id=setInterval(() => {
        if(value.current==0){
           return  clearInterval(timerid)
        }
        else{
            
           value.current=value.current-1
             setCount(value.current) 
        }
       
    },1000);
    settimerid(id)
    // setcount(value.current)
    
}
      
 
    const handlestart=()=>{
      if(!onet){
        setflag(true)
        let id=setInterval(()=>{
            setCount((prev)=>prev+100)
        },100)
        settimerid(id);
        console.log("start")
      }
      else{
        abc(count)
      }
    }
    useEffect(()=>{
    
    },[count])
    const handlestop=()=>{
         if(!onet){
          clearInterval(timerid);
          setflag(false)
          console.log("stop")
         }
         else{
          clearInterval(timerid);
          setflag(false)
         }
    }
    const handlereset=()=>{
          if(!onet){
            clearTimeout(timerid);
            setflag(false)
            setCount(0)
          }
          else{
            clearInterval(timerid);
            setflag(false);
            setCount(0)
            value.current=0
          }
    }
    const handletimer=()=>{
      settype(true)
      setonet(true)
    handlereset()
  }
  const handlestopwatch=()=>{
    setonet(false)
      settype(false)
      handlereset()
  }
  return (
    <div style={{width:"400px", margin:"auto" ,border:"1px solid red" }}>
     <div style={{display:"flex",justifyContent:"space-evenly" ,marginTop:"20px",marginBottom:"20px"}}>
<Box id='timer'
  as='button'
  height='24px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='#f5f6f7'
  borderColor='#ccd0d5'
  color='#4b4f56'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
  onClick={handletimer}
>
  Timer
</Box>
<Box
  as='button'
  height='24px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='2px'
  fontSize='14px'
  fontWeight='semibold'
  bg='#f5f6f7'
  borderColor='#ccd0d5'
  color='#4b4f56'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
  onClick={handlestopwatch}
>
  StopWatch
</Box>
     
     </div>
     <div style={{height:"80px"}}>
      {!type ? <Stopwatch/>: <div>
        <div>
        <input type="number" placeholder="00h 00m 00s" onChange={handlechange } value={count}></input>
        </div>
        <div>
          <h2>{value.current==0 ?<h2>Time Up</h2>:`${value.current} sec`}</h2>
          </div>
        </div>}
     </div>
       <h2>{!type ? msToTime(count): countdown}</h2>
        <div style={{display:"flex" ,justifyContent:"space-evenly" ,marginTop:"20px"}}>
        <button onClick={!flag ? handlestart:handlestop }  style={{backgroundColor:"red" ,color:"white",width:"70px"}}>{!flag ? "START":"STOP"}</button>
        <button onClick={handlereset} style={{backgroundColor:"red",color:"white",width:"70px"}}>Reset</button>
        </div>
       
    </div>
  )
}
export default Timer
