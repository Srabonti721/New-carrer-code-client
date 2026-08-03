import React from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({jobs}) => {
    const allJobs = jobs;
    console.log(allJobs);
    
    return (
        <div>
            <h2 className='text-3xl font-semibold'>Hot jobs collection</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    allJobs.map(jobs=><JobCard key={jobs._id} jobs={jobs}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;