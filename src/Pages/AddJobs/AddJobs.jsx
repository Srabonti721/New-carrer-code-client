const AddJobs = () => {
    return (
        <div className="text-center p-4">
            <h2>please add a job</h2>
            <form >
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-2xl mx-auto border p-4">
                    <legend className="fieldset-legend">Basic info</legend>

                    <label className="label">Job Title</label>
                    <input
                        name="title"
                        type="text"
                        className="input w-full"
                        placeholder="job title"
                    />

                    <label className="label">Company </label>
                    <input
                        name="company"
                        type="text"
                        className="input w-full"
                        placeholder="company name"
                    />

                    <label className="label">location</label>
                    <input
                        name="location"
                        type="text"
                        className="input w-full"
                        placeholder="company location"
                    />

                    <label className="label">company logo</label>
                    <input
                        name="company_logo"
                        type="url"
                        className="input w-full"
                        placeholder="company photo url"
                    />
                </fieldset>
                {/* job type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-2xl mx-auto border p-4">
                    <legend className="fieldset-legend"> Job type</legend>
                    <form className="filter">                     
  <input className="btn btn-square" type="reset" value="×"/>
  <input className="btn" type="radio" name="jobType" aria-label="On site"/>
  <input className="btn" type="radio" name="jobType" aria-label="Remote"/>
  <input className="btn" type="radio" name="jobType" aria-label="Hybrid"/>
</form>
                </fieldset>
                {/* job category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-2xl mx-auto border p-4">
                    <legend className="fieldset-legend">Job Category</legend>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Category</legend>
                        <select
                            defaultValue="Pick a category"
                            className="select w-full"
                        >
                            <option disabled={true}>Category</option>
                            <option>Developer</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Finance</option>
                        </select>
                    </fieldset>
                </fieldset>
                {/* application deadline */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-2xl mx-auto border p-4">
                    <legend className="fieldset-legend">
                        Application Deadline
                    </legend>
                    <input type="date" className="input w-full" />
                </fieldset>
                {/* salary  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-2xl mx-auto border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 w-full">
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input
                            name="salaryMin"
                                type="text"
                                className="input"
                                placeholder="Minimum Salary"
                            />
                        </div>

                        <div>
                            <label className="label">Maximum Salary</label>
                            <input
                            name="salaryMax"
                                type="text"
                                className="input"
                                placeholder="Maximum Salary"
                            />
                        </div>
                        <div>
                            <label className="label">Currency</label>
                            <select
                                defaultValue="Select a currency"
                                className="select select-ghost"
                            >
                                <option disabled={true}>
                                    Select a currency
                                </option>
                                <option>bdt</option>
                                <option>usb</option>
                                <option>eu</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default AddJobs;
