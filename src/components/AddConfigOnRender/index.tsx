import { FC, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ConfigsContext } from "../../App";

export const AddConfigOnRender: FC<{ k: string; v: object | string | number }> =
  ({ k, v, children }) => {
    const location = useLocation();
    const { update } = useContext(ConfigsContext);

    useEffect(() => {
      console.log("useEffect", k, v);
      update(k, v);
    }, [location]);

    return (
      <div>
        Added "{k}: {v}" on render
        {children}
      </div>
    );
  };
