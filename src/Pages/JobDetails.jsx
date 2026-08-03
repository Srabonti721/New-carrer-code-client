import { } from 'motion/react-client';
import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { FaIndustry, FaLocationDot } from 'react-icons/fa6';
import { MdOutlineCategory } from 'react-icons/md';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const {jobType, applicationDeadline, salaryRange, location, company} = useLoaderData();
    
    return (
        <div>
            <h2 className='text-2xl font-semibold text-center my-4'>Employment Information</h2>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th className='flex gap-1 items-center'><FaIndustry/>Industry</th>
        <th> <RiMoneyDollarCircleLine />Salary</th>
        <th> <MdOutlineCategory />JobType</th>
        <th ><FaLocationDot /> Location</th>
        <th className='flex gap-1 items-center'><CiCalendarDate />ApplicationDeadline</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
        <th>{company}</th>
        <td>${salaryRange.min} - ${salaryRange.max}</td>
        <td>{jobType}</td>
        <td>{location}</td>
        <td>{applicationDeadline}</td>
        <td className='btn btn-primary'>Apply Now</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
    );
};

export default JobDetails;