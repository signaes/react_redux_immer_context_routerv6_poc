import { FC, useContext } from "react";
import { ConfigsContext } from "../../App";

export const DisplayConfig: FC<{ k: string }> = ({ k }) => {
  const { config } = useContext(ConfigsContext);

  return <div><strong>{k}:</strong>{config.get(k)}</div>;
};
