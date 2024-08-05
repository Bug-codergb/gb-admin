import { useOutlet } from "react-router-dom";
const Setting = () => {
  const o = useOutlet();
  return <div className="card table-box">设置{o}</div>;
};
export default Setting;
