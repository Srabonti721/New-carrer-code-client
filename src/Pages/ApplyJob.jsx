import axios from "axios";
import { Link, useParams } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";

const ApplyJob = () => {
    const { id: jobId } = useParams();
    const { users } = useAuth();
    console.log(jobId, users);

    const handleApplyJobSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkedIn, github, resume);
        const applications = {
            jobId,
            application: users.email,
            linkedIn,
            github,
            resume,
        };
        axios
            .post("http://localhost:3000/applications", applications)
            .then((res) => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application have been submitted",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <h2>
                Apply for this jobs : <Link to={`/jobs/${jobId}`}>Details</Link>
            </h2>
            <form onSubmit={handleApplyJobSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <label className="label">LinkedIn link</label>
                    <input
                        name="linkedIn"
                        type="url"
                        className="input"
                        placeholder="linkedIn profile "
                    />

                    <label className="label">Github Link</label>
                    <input
                        name="github"
                        type="url"
                        className="input"
                        placeholder="github profile"
                    />

                    <label className="label">Resume</label>
                    <input
                        name="resume"
                        type="url"
                        className="input"
                        placeholder="resume"
                    />
                    <input type="submit" className="btn" value="Apply" />
                </fieldset>
            </form>
        </div>
    );
};

export default ApplyJob;
