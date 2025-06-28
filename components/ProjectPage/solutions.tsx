const Solutions = ({ solutions }: { solutions?: string[] }) => {
  return (
    <section className="solution">
      <div className="container">
        <div className="row">
          <div className="solution--wrapper">
            <h2 className="h2">
              SOLUTION &amp;
              <br /> WORKING PROCESS
            </h2>
            <div className="text">
              <ul className="list">
                {solutions?.map((solution,i) => {
                  return (
                    <li key={i}>
                      <span className="number">{i+1}</span>
                      <p>
                        {solution}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Solutions;
