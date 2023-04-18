import React, {useState} from "react";

function EditElem({elem, setList, list, id, amount, setAmount, name, setName, previousName}) {
  let copy = Object.assign([], list)
  let copyName = Object.assign([], name)
  let copyAmount = Object.assign([], amount)

  function changeValueName(event, val) {
    copyName.status = true
    copyName.value = event.target.value
    setName(copyName)
    copy[id][val] = event.target.value
    setList(copy)
  }

  function changeValueAmount(event, val) {
    copyAmount.status = true
    copyAmount.value = event.target.value
    setAmount(copyAmount)
    copy[id][val] = event.target.value
    setList(copy)
  }

  function copyArr(state, elem, status) {
    elem.status = status
    state(elem)
  }

  function endEdit() {
    if (name.value !== '' && amount.value > 0) {
      copy[id].active = false
      copy[id].values = []
      for (let i = 0; i < elem.amount; i++) {
        copy[id].values.push(false)
      }
      setList(copy)
    } else {
      if (name.value === '' && (amount.value === '' || amount.value === 0)) {
        copyArr(setName, copyName, false)
        copyArr(setAmount, copyAmount, false)
      } else {
        if (name.value === '') {
          copyArr(setName, copyName, false)
        } else {
          copyArr(setAmount, copyAmount, false)
        }
      }
    }
  }

  function cancellationEdit() {
    copyArr(setName, copyName, true)
    copyArr(setAmount, copyAmount, true)
    copy[id].active = false
    copy[id].name = previousName
    copy[id].amount = copy[id].values.length
    if (copy[id].values.length === 0) {
      copy = copy.filter(elem => elem !== copy[id])
    }
    setList(copy)
  }

  return <tr>
    <td className={'border-b border-[#2B3467] py-4 align-top px-4'}>
      <div className={'flex flex-col'}>
        <label htmlFor={'name'} className={'text-xs text-[#2B3467] leading-none mb-1'}>Название</label>
        <input id={'name'} required className={'py-1 px-3 rounded-2xl border border-[#2B3467] w-[7rem] md:w-[13rem]'}
               placeholder="Название препарата" type={'text'} value={elem.name}
               onChange={event => changeValueName(event, 'name')}/>
        <div
          className={`text-xs text-[#EB455F] leading-3 mt-1 ${(name.status === false) ? 'block' : 'hidden'}`}>Заполните
          поле *
        </div>
      </div>
    </td>
    <td className={'border-b border-[#2B3467] py-4 align-top px-4'}>
      <div className={'flex flex-col'}>
        <label htmlFor={'amount'} className={'text-xs text-[#2B3467] leading-none mb-1'}>Количество</label>
        <input id={'amount'} required className={'py-1 px-3 rounded-2xl border border-[#2B3467] w-[4rem] md:w-[13rem]'}
               placeholder="Количество таблеток" type={'number'} value={elem.amount}
               onChange={event => changeValueAmount(event, 'amount')}/>
        <div
          className={`text-xs text-[#EB455F] leading-3 mt-1 ${(amount.status === false) ? 'block' : 'hidden'}`}>Заполните
          поле *
        </div>
      </div>
    </td>
    <td className={'border-b border-[#2B3467]'}></td>
    <td>
      <div>
        <button className={'py-1.5 px-3 rounded-2xl bg-[#BAD7E9]'} onClick={() => endEdit()}>
          <span className={'hidden md:inline'}>Сохранить</span>
          <div className={'md:hidden'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
            </svg>
          </div>
        </button>
        <button className={'py-1.5 px-3 rounded-2xl bg-[#EB455F] text-white'} onClick={() => cancellationEdit()}>
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