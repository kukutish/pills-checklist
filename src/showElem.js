import React from "react";

function ShowElem({elem, setList, list, id}){

  function changeChecked (num) {
    let copy = Object.assign([], list)
    copy[id].values[num] = !copy[id].values[num]
    setList(copy)
  }

  function createInput () {
    let res = elem.values.map((tag, num) => {
      return <input className={'mx-1'} key={num} type={"checkbox"} checked={tag} onChange={()=>changeChecked(num)}/>
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
    <td className={'text-[#2B3467] py-1.5 px-4 border-b border-[#2B3467] last:border-0'}>{elem.name}</td>
    <td className={'py-1.5 px-4 bg-[#FCFFE7] border-b border-[#2B3467] min-w-[10rem]'}>{createInput()}</td>
    <td className={'py-1.5 px-4 border-b border-[#2B3467] text-[#2B3467]'}>{elem.values.reduce((sum, item) => sum += item ? 1 : 0, 0)}/{elem.values.length}</td>
    <td>
      <button className={'py-1.5 px-3 rounded-2xl bg-[#BAD7E9]'} onClick={()=>startEdit()}>Редактировать</button>
    </td>
    <td>
      <button className={'py-1.5 px-3 rounded-2xl bg-[#EB455F] text-[#ffffff]'} onClick={()=>delElem()}>Удалить</button>
    </td>
  </tr>

}
export default ShowElem

