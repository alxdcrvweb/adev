interface IInfo  {
    subtitle:string
    title: string
    text:string
}
const TextBlock = ({info}:{info:IInfo}) => {
  return (
    <div className="text-block">
      <div className="subtitle">{info.subtitle}</div>
      <h1 className="title">{info.title}</h1>
      <div className="line"></div>
      <div className="text">
        {info.text}
      </div>
    </div>
  );
};
export default TextBlock;
