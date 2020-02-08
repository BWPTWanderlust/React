import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";


const EditExperience = props => {
  

  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  const {id} = useParams()

  const [exp, setExp] = useState({
    type: "",
    location: "",
    duration: "",
    description: "",
    title: ""
  });

  const handleChanges = e => {
    setExp({ ...exp, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    console.log("Edit experience", exp);
    axios
      .put(
        `https://bewanderlust.herokuapp.com/api/exps/${id}`,
        exp
      )
      .then(res => {
        setExp(res.data);
        console.log('res: ', res)
        props.update();
      })
      .then(history.push("/"))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    axios
    .get(`https://bewanderlust.herokuapp.com/api/exps/${id}`)
    .then(res => {
        setExp(res.data)
    })
    .catch(err => console.log(err))
  },[]) 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        <input
          placeholder="Trip Type"
          id="type"
          type="text"
          onChange={handleChanges}
          name="type"
          ref={register({ required: false })}
          value = { exp.type }
        />

        {errors.type && "Required field"}
      </p>
      <p>
        <input
          placeholder="Location"
          name="location"
          onChange={handleChanges}
          id="location"
          ref={register({ required: false })}
          value = { exp.location }
        />
        {errors.location && "Location is Required"}
      </p>
      <p>
        <input
          placeholder="Duration"
          name="duration"
          onChange={handleChanges}
          id="duration"
          ref={register({ required: false })}
          value = { exp.duration }
        />
        {errors.duration && "Duration is Required"}
      </p>
      <p>
        <input
          placeholder="Description"
          name="description"
          onChange={handleChanges}
          id="description"
          ref={register({ required: false })}
          value = { exp.description }
        />
        {errors.description && "Description is Required"}
      </p>
      <p>
        <input
          placeholder="Title"
          name="title"
          onChange={handleChanges}
          id="title"
          ref={register({ required: false })}
          value = { exp.title }
        />
        {errors.title && "Title is Required"}
      </p>
      <p>
        <input
          placeholder="Image URL"
          name="imgurl"
          onChange={handleChanges}
          id="imgurl"
          ref={register({ required: false })}
          value = { exp.imgurl }
        />
        {errors.imgurl && "Image URL is Required"}
      </p>
      <button type="submit">Update</button>
    </form>
  );
};

export default EditExperience;


























// import React, { useState } from 'react'

// const EditExperience = props => {

//     const [ exp, setExp ] = useState({
//         trip:'',
//         location:'',
//         duration:'',
//         privPro:''
//     })

//     const changeHandler = event => {
//         setExp({ 
//             ...exp,
//             [ event.target.name ]: event.target.value
//         })
//     }

//     const submitHandler = event => {
//         event.preventDefault()
//         props.setEvent(otherExp => [ ...otherExp, exp ])
//         setExp({
//             trip:'',
//             location:'',
//             duration:'',
//             privPro:''
//         })
//     }

//     return (

//         <div>
//             <form onSubmit = { submitHandler }>
//                 <label>
//                     Trip:
//                     <input 
//                         required 
//                         name = 'trip'
//                         value = { exp.trip }
//                         onChange = { changeHandler }
//                         type = 'text'
//                     /> 
//                 </label>
//                 <br/>
//                 <label>
//                     Location:
//                     <input
//                         required
//                         name = 'location'
//                         value = { exp.location }
//                         onChange = { changeHandler }
//                         type = 'text'
//                     />
//                 </label>
//                 <br/>
//                 <label>
//                     Duration:
//                     <input
//                         required
//                         name = 'duration'
//                         value = { exp.duration }
//                         onChange = { changeHandler }
//                         type = 'text'
//                     />
//                 </label>
//                 <br/>
//                 <label>
//                     <select
//                         name = 'privPro'
//                         value = { exp.privPro }
//                         onChange = { changeHandler }
//                     >
//                         <option value = ''></option>
//                         <option value = 'Private'>Private</option>
//                         <option value = 'Professional'>Professional</option>
//                     </select>
//                 </label>
//                 <button type = 'submit'>Submit</button>
//             </form>
//         </div>

//     )

// }

// export default EditExperience