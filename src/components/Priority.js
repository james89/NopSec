import React, { useState } from "react";

const Priority = ({ level, selected }) => {
  const shouldRenderPriority = selected.includes(level[0]);
  const priorityClass = level[0].toLowerCase();

  // react 'state hook'
  const [tooltip, toggleTooltip] = useState(false);

  if (shouldRenderPriority) {
    return (
      <div
        className={`priority-bar__priority ${priorityClass}`}
        onMouseEnter={() => toggleTooltip(!tooltip)}
        onMouseLeave={() => toggleTooltip(!tooltip)}
      >
        {tooltip && (
          <span className={"tooltip"}>
            # {level[0]}: {level[1]}
          </span>
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default Priority;
