import './App.css';
import {w3cwebsocket as W3CWebSocket} from "websocket";
import {useEffect, useState} from "react";

const url='ws://localhost:8080/chat';  //тут ми кажемо що ми в майбутньому будем підписуватися на цю урлу
const client=new W3CWebSocket(url); //це клієнт який на цю урлу підписується
function App() {

  let [msgs,setMsgs]=useState([]);

  useEffect(()=>{
    client.onopen=(e)=>{
      console.log("connected",e)
    };
    client.onmessage=(e)=>{
      console.log(e.data);
      msgs.push(e.data);
      setMsgs([...msgs]);
    }
  },[])

  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();
       let messageToSend= e.target.message.value;//звертаємося до нашої форми його поля message і зчитуєм його value
        console.log(messageToSend);
        client.send(messageToSend);  //звертаємося до нашого клієнта який вже связаний з чим чатом і кажемо сенд
      }}>
        <input type="text" name={'message'}/>
        <button>send msg</button>
      </form>
      {
        msgs.map(value => <div>{value}</div>)
      }
    </div>
  );
}

export default App;
