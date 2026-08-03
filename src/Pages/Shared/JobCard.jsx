import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const JobCard = ({ jobs }) => {
    const {_id,
        salaryRange,
        description,
        company_logo,
        requirements,
        title,
        company,
        category,
        location,
    } = jobs;
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="flex gap-2 items-center">
                <figure>
                    <img className="w-20" src={company_logo} alt="Shoes" />
                </figure>
                <div>
                    <h2 className="text-xl font-bold">{company}</h2>
                    <p className="flex items-center gap-1">
                        <FaLocationDot />
                        {location}
                    </p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <h2 className="text-3xl font-bold">{category}</h2>
                <div>
                    <p>
                        Salary: {salaryRange.min} - {salaryRange.max}{" "}
                        {salaryRange.currency}
                    </p>
                </div>
                <p>{description}</p>
                <div className="card-actions">
                    {requirements.map((skills, index) => (
                        <div key={index} className="badge badge-outline">
                            {skills}
                        </div>
                    ))}
                </div>
                <div className=" card-actions justify-end">
                    <Link to={`/jobs/${_id}`} className="btn btn-primary ">Apply Now</Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
