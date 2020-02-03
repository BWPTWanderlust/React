import React, { useState } from 'react'

const EditExperience = props => {

    const [ exp, setExp ] = useState({
        trip:'',
        location:'',
        duration:'',
        privPro:''
    })

    const changeHandler = event => {
        setExp({ 
            ...exp,
            [ event.target.name ]: event.target.value
        })
    }

    const submitHandler = event => {
        event.preventDefault()
        props.setEvent(otherExp => [ ...otherExp, exp ])
        setExp({
            trip:'',
            location:'',
            duration:'',
            privPro:''
        })
    }

    return (

        <div>
            <form onSubmit = { submitHandler }>
                <label>
                    Trip:
                    <input 
                        required 
                        name = 'trip'
                        value = { exp.trip }
                        onChange = { changeHandler }
                        type = 'text'
                    /> 
                </label>
                <br/>
                <label>
                    Location:
                    <input
                        required
                        name = 'location'
                        value = { exp.location }
                        onChange = { changeHandler }
                        type = 'text'
                    />
                </label>
                <br/>
                <label>
                    Duration:
                    <input
                        required
                        name = 'duration'
                        value = { exp.duration }
                        onChange = { changeHandler }
                        type = 'text'
                    />
                </label>
                <br/>
                <label>
                    <select
                        name = 'privPro'
                        value = { exp.privPro }
                        onChange = { changeHandler }
                    >
                        <option value = ''></option>
                        <option value = 'Private'>Private</option>
                        <option value = 'Professional'>Professional</option>
                    </select>
                </label>
                <button type = 'submit'>Submit</button>
            </form>
        </div>

    )

}

export default EditExperience