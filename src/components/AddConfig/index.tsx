import { FC, useContext, useState } from "react";
import { ConfigsContext } from "../../App";

export const AddConfig: FC = () => {
  const { update } = useContext(ConfigsContext);
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const addContext = () => {
    if (!key || !value) {
      return;
    }

    update(key, value);
  };

  return (
    <div>
      <input type="text" id="key" onChange={(e) => setKey(e.target.value)} />
      <input
        type="text"
        id="value"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addContext}>Add context</button>
    </div>
  );
};
