import CommonHeader from "../common/commonHeader";

const Header = ({name, image1}:{name?:string, image1?:string}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <CommonHeader />
          <div className="header--title">
            <div className="title">
              <h1 className="h1">
                {name} <span>{name}</span>
              </h1>
              <span className="date">06-12-2021</span>
            </div>
            <div className="image">
              <img src={image1} alt={name} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
