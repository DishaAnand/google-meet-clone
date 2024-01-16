import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';
import {useRouter} from 'next/navigation';
import styles from '../styles/home.module.css'

export default function Home (){
  const router = useRouter()
  const [roomId,setroomId] = useState('') 
//reuse tailwind classes using apply and it creates mulitple copies of the same and use 
//them inside jsx rather than css files
  const createAndJoin = () =>{
    const roomID = uuidv4()
    router.push(`/${roomID}`)
  }
  const onJoin =() =>{
    if(roomId)router.push(`/${roomId}`)
    else{
      alert('please provide valid room Id')  
    }
  }
  return (
   <div className ={styles.homeContainer}>
    <h1>Google meet clone</h1>
    <div className = {styles.enterRoom}>
      <input placeholder='Enter Room Id' value = {roomId} onChange={(e)=>setroomId(e?.target?.value)}/>
      <button onClick = {onJoin}>Join room</button>
    </div>
    <span className = {styles.separatorText}>-------------OR-------------</span>
    <button onClick= {createAndJoin}>Create A New Room</button>
   </div>  )
}