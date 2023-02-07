import React from "react";

function EditElem({elem, setList, list, id}) {
  let copy = Object.assign([], list)

  function changeValue (event, val) {
    copy[id][val] = event.target.value
    setList(copy)
  }

  function endEdit () {
    copy[id].active = false
    copy[id].values = []
    for (let i=0; i<elem.amount; i++) {
      copy[id].values.push(false)
    }
    setList(copy)
  }

  function cancellationEdit () {
    copy[id].active = false
    setList(copy)
  }

  return <tr className={'pt-3'}>
    <td>
      <div>
        <input className={'py-1 px-3 rounded-2xl border border-[#2B3467]'} placeholder="Название препарата" type={'text'} value={elem.name} onChange={event => changeValue (event, 'name')}/>
      </div>
    </td>
    <td>
      <div>
        <input className={'py-1 px-3 rounded-2xl border border-[#2B3467]'} placeholder="Количество таблеток" type={'text'} value={elem.amount} onChange={event => changeValue (event, 'amount')}/>
      </div>
    </td>
    <td></td>
    <td><button className={'py-1.5 px-3 rounded-2xl bg-[#BAD7E9]'} onClick={()=>endEdit()}>Сохранить</button></td>
    <td><button className={'py-1.5 px-3 rounded-2xl bg-[#BAD7E9]'} onClick={()=>cancellationEdit()}>Отмена</button></td>
  </tr>

}

export default EditElem