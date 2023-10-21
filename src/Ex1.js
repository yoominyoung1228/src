import { useState } from 'react'

export default function Ex1(){
    //const names = ['눈사람','얼음','눈','바람'];
    /*const names =  [{id:1, txt:'눈사람'},
                    {id:2, txt:'얼음'},
                    {id:3, txt:'눈'},
                    {id:4, txt:'바람'},];*/

    const [names, setNames] = useState([
                                        {id:1, txt:'눈사람'},
                                        {id:2, txt:'얼음'},
                                        {id:3, txt:'눈'},
                                        {id:4, txt:'바람'},]
    )                    

    const [nextId,setNextId] = useState(names.length+1);
    const [winterNm,setWinterNm] = useState("ddd");
    const [num,setNum] = useState(0)

    let nameList = names.map((name,index)=> <li key={name.id}>{name.id} // {name.txt}</li> );

    const addNames = () =>{
        console.log(nextId)
        setNextId(nextId+1);
        console.log(nextId)

        const nextName = names.concat({
            id:nextId,
            txt:winterNm
        });
        
        setNames(nextName);


    }
    
    const removeNames = () =>{
        console.log(names.length);
        const nextNames = names.filter(name => names.length !== name.id);
        setNames(nextNames);
       
    }


    return(
        <>
        <h1>map </h1>
        <ul>
            {nameList}
        </ul>
        <input type='text' id ='winter' onChange={(e)=>{setWinterNm(e.target.value)}} />
        <button onClick={addNames}>추가</button>
        <button onClick={removeNames}>제거</button> 
        </>
    )
}
