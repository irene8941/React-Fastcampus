import React from 'react'

function Welcom(props) {
    return <h1>Hello, {props.name}</h1>;
}

export default function Composition() {
    return (
        <div>
            <Welcom name="Jimmy" />
        </div>
    )
}
