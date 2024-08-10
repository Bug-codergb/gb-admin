import React, { memo, useState, useEffect } from "react";
import { Drawer } from "antd";
const ProDrawer = props => {
  const { open, onClose, title, width = 378, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  const handleClose = () => {
    onClose && onClose();
    setIsOpen(false);
  };
  return (
    <div>
      <Drawer title={title} onClose={handleClose} open={isOpen} width={width} maskClosable={false}>
        {children}
      </Drawer>
    </div>
  );
};
export default memo(ProDrawer);
