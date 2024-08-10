import { useNavigate } from "react-router-dom";
import { Button, Flex } from "antd";
const Account = () => {
  const navigate = useNavigate();
  const handleVendor = () => {
    navigate("/vendor");
  };
  return (
    <div>
      账号
      <Button type="primary" onClick={handleVendor}>
        去供应商页面
      </Button>
    </div>
  );
};
export default Account;
