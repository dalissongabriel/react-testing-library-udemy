import { useState } from "react";

const Tooltip = ({ message, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {open && (
        <div
          className="absolute 
          -right-40 
          -top-14 
          bg-gray-200
          rounded-sm
          shadow-sm
          p-2"
        >
          {message}
        </div>
      )}
      <div onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
