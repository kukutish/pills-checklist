import React from "react";

function EditElem({elem, setList, list, id}) {
  let copy = Object.assign([], list)

  function changeValue (event, val) {
    copy[id][val] = event.target.value
    setList(copy)
  }

  function endEdit () {
    copy[id].active = false
    for (let i=0; i<elem.amount; i++) {
      copy[id].values.push(false)
    }
    setList(copy)
  }

  return <tr>
    <td><input type={'text'} value={elem.name} onChange={event => changeValue (event, 'name')}/></td>
    <td><input type={'text'} value={elem.amount} onChange={event => changeValue (event, 'amount')}/></td>
    <td></td>
    <td><button onClick={()=>endEdit()}>Сохранить</button></td>
  </tr>

}

export default EditElem