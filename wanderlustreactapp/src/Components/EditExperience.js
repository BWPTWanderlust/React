import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";

const EditExperience = props => {
  // BLAIR'S CODE STARTS

  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();

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
      .post(
        `https://bewanderlust.herokuapp.com/api/exps/org/${localStorage.getItem(
          "id"
        )}`,
        exp
      )
      .then(res => {
        setExp(res.data);
        props.update();
      })
      .then(history.push("/"))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        <input
          placeholder="Trip Type"
          id="type"
          type="text"
          onChange={handleChanges}
          name="type"
          ref={register({ required: true })}
        />

        {errors.type && "Required field"}
      </p>
      <p>
        <input
          placeholder="Location"
          name="location"
          onChange={handleChanges}
          id="location"
          ref={register({ required: true })}
        />
        {errors.location && "Location is Required"}
      </p>
      <p>
        <input
          placeholder="Duration"
          name="duration"
          onChange={handleChanges}
          id="duration"
          ref={register({ required: true })}
        />
        {errors.duration && "Duration is Required"}
      </p>
      <p>
        <input
          placeholder="Description"
          name="description"
          onChange={handleChanges}
          id="description"
          ref={register({ required: true })}
        />
        {errors.description && "Description is Required"}
      </p>
      <p>
        <input
          placeholder="Title"
          name="title"
          onChange={handleChanges}
          id="title"
          ref={register({ required: true })}
        />
        {errors.title && "Title is Required"}
      </p>
      <p>
        <input
          placeholder="Image URL"
          name="imgurl"
          onChange={handleChanges}
          id="imgurl"
          ref={register({ required: true })}
        />
        {errors.imgurl && "Image URL is Required"}
      </p>
      <input type="submit" />
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