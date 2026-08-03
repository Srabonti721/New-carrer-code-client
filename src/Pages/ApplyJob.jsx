import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';

const ApplyJob = () => {
    const {id:jobId} = useParams();
    const {users} = useAuth()
    console.log(jobId, users);

    const handleApplyJobSubmit = e =>{
        e.preventDefault();
        const form  = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkedIn, github, resume);
        

    }
    
    return (
        <div>
            <h2>Apply for this jobs : <Link to={`/jobs/${jobId}`}>Details</Link></h2>
            <form onSubmit={handleApplyJobSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

  <label className="label">LinkedIn link</label>
  <input name='linkedIn' type="url" className="input" placeholder="linkedIn profile " />

  <label className="label">Github Link</label>
  <input name='github' type="url" className="input" placeholder="github profile" />

  <label className="label">Resume</label>
  <input name='resume' type="url" className="input" placeholder="resume" />
<input type="submit" className='btn' value="Apply" />
</fieldset>

            </form>
        </div>
    );
};

export default ApplyJob;