import Job from "./Job";

const Jobs = ({ jobs }) => {
  return (
    <div className="container">
      {jobs.map((job) => (
        <Job
          key={job.id}
          className={job.className}
          title={job.title}
          contractType={job.contractType}
          country={job.country}
          city={job.city}
        />
      ))}
    </div>
  );
};

export default Jobs;
