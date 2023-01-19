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

  return <>
    <table>
      <tbody>
        {result}
      </tbody>
    </table>
    <button onClick={addElem}>Добавить</button>
  </>
}


export default App;
