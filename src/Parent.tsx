import React from 'react'
import Child from './Child'

function Parent() {
    return (
        <div>
            <h1>This is a parent component, following are child components</h1>
            <Child 
            color='black'
            onClick={() => console.log('This is clicked')}
            />
        </div>
    )
}

export default Parent
