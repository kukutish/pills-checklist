import React from "react";

function ShowElem({elem, setList, list, id}){

  function changeChecked (num) {
    let copy = Object.assign([], list)
    copy[id].values[num] = !copy[id].values[num]
    setList(copy)
  }

  function createInput () {
    let res = elem.values.map((tag, num) => {
      return <input key={num} type={"checkbox"} checked={tag} onChange={()=>changeChecked(num)}/>
    })

    return <>
      {res}
    </>
  }




  function startEdit() {
    let copy = Object.assign([], list)
    copy[id].active = true
    setList(copy)
  }

  function delElem () {
    setList([...list.slice(0, id),...list.slice(id+1)])
  }


  return <tr>
    <td>{elem.name}</td>
    <td>{createInput()}</td>
    <td>{elem.values.reduce((sum, item) => sum += item ? 1 : 0, 0)}/{elem.values.length}</td>
    <td>
      <button onClick={()=>startEdit()}>Редактировать</button>
    </td>
    <td>
      <button onClick={()=>delElem()}>Удалить</button>
    </td>
  </tr>

}
export default ShowElem

