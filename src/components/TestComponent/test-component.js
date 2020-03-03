import React, { memo } from 'react'
import getPeople from '../../services/people'

const TestComponent = memo(() => {

  console.log(getPeople.getPeople());

  return (
    <div className={"test-component"}>
    </div>
  )
})

export default TestComponent;