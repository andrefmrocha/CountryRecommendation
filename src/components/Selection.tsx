import { useState } from 'react'
import Category from './Category'
import Parameter from './Parameter'

function Selection() {
  const [importanceFactor, setImportanceFactor] = useState<number>(0)
  const [selectedCategory, setSelectedCategory] = useState<string>()
  const [includeCategory, setIncludeCategory] = useState<boolean>(false)

  return (
    <>
        <Category importanceFactor={importanceFactor} selectedCategory={selectedCategory} includeCategory={includeCategory} setImportanceFactor={setImportanceFactor} setSelectedCategory={setSelectedCategory} setIncludeCategory={setIncludeCategory} />
        <Parameter selectedCategory={selectedCategory} includeCategory={includeCategory}/>
    </>
  )
}

export default Selection