import {useState} from 'react';
import  './Diary.css';

const Diary = () => {
    const [num, setNum] = useState('인사');
    const [color, setColor] = useState('black');;
    const [number, setNumber] = useState(0)

    const onclickEnter = () => {
        setNum('안녕하세요');   
    }
    const onclickLeave = () => {
        setNum("안녕히가세요");
    }

    const increaseNumber = () => {
        setNumber(number+1);
    }

    const decreaseNumber = () => {
        setNumber(number-1);
    }
    
    return (
        <>
        <h1>이벤트처리하기</h1>
        <p style={{color}}>{num}</p>

        <button onClick={onclickEnter}> 입장 </button>
        <button onClick={onclickLeave}> 퇴장 </button>
        <br />
        <button onClick={()=>{setColor('red')} }>빨강</button>
        <button onClick={()=>{setColor('blue')}}>파랑</button>
        <button onClick={()=>{setColor('green')}}>초롱</button>

        <p>{number}</p>
        <button onClick={increaseNumber}>+</button>
        <button onClick={decreaseNumber}>-</button>
        <br />
        <input onChange={(e)=>{setNum(e.target.value)}} type='text' placeholder='미리보기'/>
        <br />
        
        </>
    )
}

export default Diary;
