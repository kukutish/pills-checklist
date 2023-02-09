import React, {useState} from "react";

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
    copy[id].amount = copy[id].values.length
    if(copy[id].values.length === 0) {
      copy = copy.filter(elem => elem !== copy[id])
    }
    setList(copy)
  }

  return <tr >
    <td className={'border-b border-[#2B3467]'}>
      <div className={'mb-3'}>
        <div><label htmlFor={'name'} className={'text-xs text-[#2B3467] leading-none'}>Название</label></div>
        <input id={'name'} required className={'py-1 px-3 rounded-2xl border border-[#2B3467] w-[7rem] md:w-[13rem]'} placeholder="Название препарата" type={'text'} value={elem.name} onChange={event => changeValue (event, 'name')}/>
      </div>
    </td>
    <td className={'border-b border-[#2B3467]'}>
      <div className={'mb-3'}>
        <div><label htmlFor={'amount'} className={'text-xs text-[#2B3467] leading-none'}>Количество</label></div>
        <input id={'amount'} required className={'py-1 px-3 rounded-2xl border border-[#2B3467] w-[4rem] md:w-[13rem]'} placeholder="Количество таблеток" type={'number'} value={elem.amount} onChange={event => changeValue (event, 'amount')}/>
      </div>
    </td>
    <td className={'border-b border-[#2B3467]'}></td>
    <td>
      <div>
        <button className={'py-1.5 px-3 rounded-2xl bg-[#BAD7E9]'} onClick={()=>endEdit()}>
          <span className={'hidden md:inline'} >Сохранить</span>
          <div className={'md:hidden'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
            </svg>

          </div>
        </button>
        <button className={'py-1.5 px-3 rounded-2xl bg-[#EB455F] text-white'} onClick={()=>cancellationEdit()}>
         <span className={'hidden md:inline'}>Отмена</span>
         <div className={'md:hidden'}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round"
                   d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
           </svg>
         </div>
        </button>
      </div>
    </td>
  </tr>

}

export default EditElem