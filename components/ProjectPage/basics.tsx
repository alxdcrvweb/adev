const Basics = ({project, result, links,inputs,image2}:{inputs?:string, links?:string[], result?:string, project?:string, image2?:string}) =>{
    return (
        <section className="basics">
        <div className="container">
          <div className="row">
            <h2 className="h2">BASICS</h2>
            <div className="basics--wrapper">
              <div className="text">
                <ul className="list">
                  <li>
                    <h4 className="h4">
                      <span className="number">1</span>
                      PROJECT:
                    </h4>
                    <p>
                      {project}
                    </p>
                  </li>
                  <li>
                    <h4 className="h4">
                      <span className="number">2</span>
                      FINAL RESULT:
                    </h4>
                    <p>
                      {result}
                    </p>
                  </li>
                  <li>
                    <h4 className="h4">
                      <span className="number">3</span>
                      LINKS:
                    </h4>
                    <p>
                      {links?.map((el,i)=>{
                        return (
                          <a key={i} href={el} target="_blank">{el}</a>
                        )
                      })}
                      
                    </p>
                  </li>
                  <li>
                    <h4 className="h4">
                      <span className="number">4</span>
                      INPUTS:
                    </h4>
                    <p>
                    {inputs}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="image">
                <img src={image2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Basics