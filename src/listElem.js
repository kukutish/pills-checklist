import React from 'react';
import ShowElem from "./showElem";
import EditElem from "./editElem";

function ListElem ({elem, list, setList, active, id}) {
  return active ? <EditElem elem={elem} list={list} setList={setList} id={id}/> : <ShowElem elem={elem} list={list} setList={setList} id={id}/>
}

export default ListElem