import { useNavigate } from "react-router-dom";
const Account = () => {
  const navigate = useNavigate();
  const handleVendor = () => {
    navigate("/vendor");
  };
  return (
    <div>
      账号
      <button onClick={handleVendor}>去供应商页面</button>
    </div>
  );
};
export default Account;
