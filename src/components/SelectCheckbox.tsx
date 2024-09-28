import React, { memo } from "react";
import { SELECT_CHECKBOX_TYPE } from "../utils/types";

const SelectCheckbox = ({
  color,
  size,
  onCheckboxSelect,
  value,
  quizTopic,
  id: questionId,
  isChecked,
}: SELECT_CHECKBOX_TYPE) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      onCheckboxSelect({
        topic: quizTopic,
        id: questionId,
        selectionOption: value,
      });
    }
  };
  return (
    <div className={`main-checkbox-container checkbox-${size}`}>
      <label>{value}</label>
      <input
        type="checkbox"
        name={quizTopic}
        value={value}
        onChange={handleCheckboxChange}
        checked={isChecked}
      />
    </div>
  );
};

export default memo(SelectCheckbox);
