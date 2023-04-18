import React, {useState} from 'react';
import ShowElem from "./showElem";
import EditElem from "./editElem";

function ListElem ({elem, list, setList, active, id}) {
  let [name, setName] = useState({value: '', status:true})
  let [amount, setAmount] = useState({value: 0, status:true})
  let [previousName,setPreviousName] = useState('')
  return active ?
    <EditElem elem={elem} list={list} setList={setList} id={id} name={name} setName={setName} amount={amount} setAmount={setAmount} previousName={previousName}/>
    :
    <ShowElem elem={elem} list={list} setList={setList} id={id} name={name} setName={setName} amount={amount} setAmount={setAmount} setPreviousName={setPreviousName}/>
}

export default ListElem