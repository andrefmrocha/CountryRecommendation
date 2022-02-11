import React, { useState, useEffect } from 'react'
import { datasetsMappingByTheme, ThemeMappingItem } from '../data/datasets/datasetsMapping'
import Checkbox from './common/Checkbox'
import InfoIcon from './common/InfoIcon'

type props = {
  selectedCategory: string | undefined,
  includeCategory: boolean,
}

function Parameter({ selectedCategory, includeCategory }: props) {
  const [parameters, setParameters] = useState<Array<ThemeMappingItem>>()
  const [parameterSelection, setParameterSelection] = useState<Array<boolean>>()

  useEffect(() => {
    // @ts-ignore
    const params: Array<ThemeMappingItem> = datasetsMappingByTheme[selectedCategory]
    const paramSelection = Array(params?.length).fill(false)

    // @ts-ignore
    setParameters(params)
    setParameterSelection(paramSelection)
  }, [selectedCategory])

  function getParameters() {
    if(!parameterSelection)
      return <></>
    

    return parameters?.map((parameter, index) => <div className='parameter'>
      <Checkbox 
        checked={parameterSelection[index]} 
        disabled={!includeCategory}
        onClick={() => {
          let newParameterSelection = [...parameterSelection]
          newParameterSelection[index] = !newParameterSelection[index]
          setParameterSelection(newParameterSelection)
        }} 
        type="small"/>
      <p>{parameter.name}</p>
      <InfoIcon parameter={parameter.name} dataset={parameter.dataset} fields={parameter.fields}/>
    </div>)
  }

  return (
    <div className='parameter-panel'>
      <label htmlFor="parameters">{ selectedCategory } Parameters</label>
      <section className='parameters-selection'>
        {getParameters()}
      </section>
      <button disabled={!includeCategory} onClick={() => console.log("YAY")}>Calculate</button>
    </div>
  )
}

export default Parameter