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
    let delElem = window.confirm("Удалить?")
    if (delElem) {
      setList([...list.slice(0, id),...list.slice(id+1)])
    }
  }


  return <tr>
    <td className={'text-[#2B3467] py-1.5 px-4 border-b border-[#2B3467] last:border-0 md:w-[13rem]'}>{elem.name}</td>
    <td className={'py-1.5 px-4 bg-[#FCFFE7] border-b border-[#2B3467] md:min-w-[13rem]'}>{createInput()}</td>
    <td className={'py-1.5 px-4 border-b border-[#2B3467] text-[#2B3467] '}>{elem.values.reduce((sum, item) => sum += item ? 1 : 0, 0)}/{elem.values.length}</td>
    <td className={'py-1.5'}>
      <div>
        <button className={'py-1.5 px-3 rounded-2xl bg-[#BAD7E9]'} onClick={()=>startEdit()}>
          <span className={'hidden md:inline'}>Редактировать</span>
          <div className={'md:hidden'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
            </svg>
          </div>
        </button>
        <button className={'py-1.5 px-3 rounded-2xl bg-[#EB455F] text-[#ffffff]'} onClick={()=>delElem()}>
          <span className={'hidden md:inline'}>Удалить</span>
          <div className={'md:hidden'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
            </svg>
          </div>
        </button>
      </div>
    </td>
  </tr>

}
export default ShowElem

