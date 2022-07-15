import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import {MDBValidation, MDBInput, MDBBtn} from 'mdb-react-ui-kit'
const initial={
    title:"",
    author:"",
    category:"",
    content:"",
    
}
const category="";
const options= ["Travel", "Fashion", "Fitness","Sports"];
const AddEditBlog = () => {
    const [formValue, setFormValue] = useState(initial);
    const[ categoryerr, setCategoryerr] = useState(null);
    const {title,author,content} = formValue;

    const navigate = useNavigate();
    const handleSubmit= async(e)=>{
        e.preventDefault();
          if(!category){
            setCategoryerr("Please select a category");
          }
          if(title && author && content){
                const update={...formValue}
               
          }
    }

    const onInputChange=(e)=>{
        let {name,value} =e.target;
        setFormValue({...formValue, [name]: value});

    }

    const onCategoryChange=(e)=>{
        setCategoryerr(null)
        setFormValue({...formValue, category:e.target.value})
    }
  return (
    <MDBValidation className='row g-3 ' style={{marginTop:"100px"}} noValidate onSubmit={handleSubmit}>
            <p className='fs-2 fw-bold'>Add Blog</p>
            <div style={{
                margin: "auto",
                padding:"15px",
                maxWidth: "400px",
                alignContent: "center",
            }}>

               <MDBInput
               value={title || ""}
               name="title"
               type="text"
               onChange={onInputChange}
               required
               label="Title"
               validation="Please provide a title"
               invalid
               /> 
               <br/>

               <MDBInput
               value={author || ""}
               name="author"
               type="text"
               onChange={onInputChange}
               required
               label="Author"
               validation="Please provide a author"
               invalid
               /> 
               <br/>
               <MDBInput
               value={content || ""}
               name="content"
               type="text"
               onChange={onInputChange}
               required
               label="Content"
               validation="Please provide a content"
               textarea
               rows={5}
               invalid
               /> 
               <br/>

            <select className='categoryDropdown' onChange={onCategoryChange} value={category}>
                <option>Plesase select category</option>
                {options.map((option,index)=>(
                    <option value={option || ""} key={index}>{option}</option>

                    ))}
            </select>
            {categoryerr && 
                <div className='categoryerr'>{categoryerr}</div>
            }
            <br/>
            <br/>
            <MDBBtn type='submit' style={{marginRight: "10px"}}>Add</MDBBtn> 
            <MDBBtn type='danger' style={{marginRight: "10px"}} onClick={()=>{navigate('/')}}>Go Back</MDBBtn>       
         </div>
    </MDBValidation>

    
  )
}

export default AddEditBlog