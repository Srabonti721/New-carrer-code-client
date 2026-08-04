import axios from 'axios';
import React from 'react';

const ApplicationRow = ({index, application,applications, setApplications}) => {
    const {title, company, company_logo, github, resume, _id} = application;
    const handleDeleteApplyJob = (id) =>{
axios.delete(`http://localhost:3000/applications/${id}`)
.then(res=>{
    console.log(res.data);
    if(res.data.deletedCount){
        const remaining = applications.filter(app=>app._id !== id);
        setApplications(remaining)
    }
})
.catch(error=>{
    console.log(error)
})
    }
    return (
      <tr>
        <th>
          <label>
            {index +1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={company_logo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">{company}</div>
            </div>
          </div>
        </td>
        <td>
 {github}
        </td>
        <td>{resume}</td>
        <th>
          <button onClick={()=>handleDeleteApplyJob(_id)} className="btn btn-secondary ">Delete</button>
        </th>
      </tr>
    );
};

export default ApplicationRow;