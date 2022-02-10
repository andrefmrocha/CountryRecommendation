import React, { useState } from 'react'

type Category = {
  name: string,
  value: string,
}

const categories: Array<Category> = [
  {
    name: "Climate",
    value: "climate"
  },
  {
    name: "Politics",
    value: "politics"
  },
  {
    name: "Education",
    value: "education"
  },
  {
    name: "Culture",
    value: "culture"
  }
]

function Category() {
  const [importanceFator, setImportanceFactor] = useState<number>(0)

  function changeImportanceFactor(e: React.ChangeEvent<HTMLInputElement>) {
    setImportanceFactor(Math.min(1.0, Math.max(0.0, parseFloat(e.currentTarget.value))))
  }

  function getOptions() {
    return categories.map(({name, value}) => <option value={value}>{name}</option>)
  }

  return (
    <div className='category-panel'>
      <div className='category-selection'>
        <label htmlFor="category">Category</label>
        <select name="category" id="category">
          {getOptions()}
        </select>
        <label className="container">
          <input type="checkbox" name="category" />
          <span className="checkmark" />
        </label>
      </div>
      <div className='importance-factor-selection'>
        <label htmlFor="importance-factor">Importance Factor</label>
        <input type="range" id="importance-factor" name="importance-factor" min="0" max="1" value={importanceFator} step="0.01" onChange={changeImportanceFactor}/>
        <span className="thumb" style={{ left: `${importanceFator * 360 + 10}px`}}></span>
        <input type="number" name="importance-factor" min="0" max="1" value={importanceFator} step="0.01" onChange={changeImportanceFactor}/>
      </div>
    </div>
  )
}

export default Category