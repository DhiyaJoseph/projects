import React, { useState } from 'react';
import './App.css';
function App() {
  const [formdata, setFormdata] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Comments: '',
    isGraduate: true,
    Qualification: '',
    gender:''
  });
  console.log(formdata)
  function handleChange(event) {
    const { name, type, checked, value } = event.target;
    setFormdata(function (preFormData) {
      return {
        ...preFormData,
        [name]: type === "checkbox" ? checked : value
      }
    });
  }
  return (
    <div className='form-div'>

      <form>
        <label>First Name :</label>
        <input type="text" onChange={handleChange} name="FirstName" value={formdata.FirstName} />

        <label>Last Name :</label>
        <input type="text" onChange={handleChange} name="LastName" value={formdata.LastName} />

        <label>Email :</label>
        <input type="email" onChange={handleChange} name="Email" value={formdata.Email} />

        <label>Comments :</label>
        <textarea name="Comments" onChange={handleChange} value={formdata.Comments} />

        <label>Is Graduate :</label>
        <input type="checkbox" onChange={handleChange} name="isGraduate" checked={formdata.isGraduate} />

        <label>Qualification:</label>
        <select onChange={handleChange} name='qualification'>
          <option value="">Select</option>
          <option value="Btech">Btech</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
        </select>

        <label>Gender: </label>
        <label>Male
          <input type="radio" name="gender" value="male" onChange={handleChange} checked={formdata.gender==="male"}
          />
        </label>
        <label>female
          <input type="radio" name="gender" value="female" onChange={handleChange} checked={formdata.gender==="female"}
          />
        </label>
      </form>

    </div>

  );
}

export default App;