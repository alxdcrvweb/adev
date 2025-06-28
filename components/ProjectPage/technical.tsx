const Technical = ({
  technology,
  dev,
  image3
}: {
  technology?: string;
  dev?: string[];
  image3?: string
}) => {
  return (
    <section className="technical">
      <div className="container">
        <div className="row">
          <h2 className="h2">
            TECHNICAL ASPECTS <span>TECHNICAL ASPECTS</span>
          </h2>
          <div className="technical--wrapper">
            <div className="image">
              <img src={image3} alt="ECHNICAL ASPECTS" />
            </div>
            <div className="text">
              <ul className="list">
                <li>
                  <h4 className="h4">
                    <span className="number">1</span>
                    TECHNOLOGIES:
                  </h4>
                  <p>{technology}</p>
                </li>
                <li>
                  <h4 className="h4">
                    <span className="number">2</span>
                    Iterative development:
                  </h4>
                  <ul>
                    {dev?.map((el, i) => {
                      return <li key={i}>{el}</li>;
                    })}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technical;
