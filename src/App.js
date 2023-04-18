import './App.css';
import React, { useState } from 'react';
import ListElem from "./listElem";


const lis = [
  {name: 'Витамин Д', amount: 2, active: false, values:[false, false]},
  {name: 'Витамин C', amount: 1, active: false, values:[false] },
  {name: 'Железо', amount: 2, active: false, values:[false, false]}
]


function App() {
  const [list, setList] = useState(lis)

  let result = list.map((elem, id) => {
      return <ListElem
        key={id}
        elem={elem}
        list={list}
        setList={setList}
        active={elem.active}
        id={id}

      />
  })

  function addElem () {
    let obj = {name: '', amount: '', active: true, values: [] }
    setList([...list,obj])
  }

  return <div className={'container mx-auto'}>
    <h1 className={'text-4xl text-[#2B3467] my-5'}>Трекер лекарств</h1>
    <table className={'mb-5'}>
      <tbody>
        {result}
      </tbody>
    </table>
    <button className={'py-1.5 px-3 rounded-2xl bg-[#2B3467] text-[#ffffff] max-w-[8rem]'} onClick={addElem}>Добавить</button>
  </div>
}


export default App;
