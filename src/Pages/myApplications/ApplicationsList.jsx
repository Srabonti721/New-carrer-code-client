import React, { use, useState } from 'react';
import ApplicationRow from './ApplicationRow';

const ApplicationsList = ({myApplicationsPromise}) => {
    const initialApplications= use(myApplicationsPromise);
    const [applications, setApplications] = useState(initialApplications);
    console.log(applications);
    
    return (
        <div>
            <h2 className='text-3xl'>Job applied so far : {applications.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            #
          </label>
        </th>
        <th>Name</th>
        <th>Github</th>
        <th>Resume</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
applications.map((application, index)=><ApplicationRow
 key={application._id} 
 index={index}
 applications={applications}
 setApplications={setApplications}
 application={application}
 ></ApplicationRow>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ApplicationsList;