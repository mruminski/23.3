import React, { PropTypes } from "react";
import Lane from "./LaneContainer";

const Lanes = ({ lames }) => {
  return (
    <div className="lanes">
      {Lanes.map(lane => (
        <Lane className="lane" key={lane.id} lane={lane} />
      ))}
    </div>
  );
};

// prettier-ignore
Lanes.propTypes = {
  // lanes: PropTypes.array,
};

export default Lanes;
