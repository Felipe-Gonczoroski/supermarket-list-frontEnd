import { useState } from "react";
import { updateItem } from "../../services/request";
import "./index.css";

export const ListCard = ({ item, onClick }) => {
  const [checked, setChecked] = useState(item?.checked);

  const handleChange = async () => {
    const newChecked = !checked;
    setChecked(newChecked);

    const updatedItem = { ...item, checked: newChecked };
    await updateItem(item?._id, updatedItem);
  };

  return (
    <div className={`list-card-container ${checked ? "checked" : ""}`}>
      <div className="checkbox">
        <input
          onChange={handleChange}
          checked={checked}
          id={`checkbox-${item._id}`}
          type="checkbox"
        />

        <label htmlFor={`checkbox-${item._id}`} />
      </div>
      <div className={"list-card-text-container"}>
        <span className={`list-card-title ${checked ? "checked-title" : ""}`}>
          {item.name}
        </span>
        <span className="list-card-sutitle">{item.quantity} unidades</span>
      </div>
      <img
        src="/images/arrow.svg"
        alt="arrow-icon"
        className="arrow-icon"
        onClick={() => onClick(item)}
      />
    </div>
  );
};
