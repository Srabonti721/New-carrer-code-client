import { Suspense, use } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const jobsPromise = fetch("http://localhost:3000/jobs").then((res) =>
    res.json(),
);
const Home = () => {
    const jobs = use(jobsPromise);
    return (
        <div>
            <Banner />
            <Suspense
                fallback={
                    <span className="loading loading-dots loading-xl"></span>
                }
            >
                <HotJobs jobs={jobs} />
            </Suspense>
        </div>
    );
};

export default Home;
