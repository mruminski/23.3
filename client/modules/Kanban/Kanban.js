import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Lanes from "../Lane/Lanes";
import styles from "../Lane/Lane.css";
import { createLane, fetchLanes } from "../Lane/LaneActions";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { compose } from "redux";

// prettier-ignore
const Kanban = props => (
  <div>
    <button
      className={styles.AddLine}
      onClick={() =>
        props.createLane({
          name: "New line",
        })
      }
    >
      Add lane
    </button>
    <Lanes lanes={props.lanes} />
  </div>
);

Kanban.need = [
  () => {
    return fetchLanes();
  }
];

// prettier-ignore
Kanban.propTypes = {
  lanes: PropTypes.array,
  createLane: PropTypes.func,
};

// prettier-ignore
const mapStateToProps = state => ({ 
  lanes: Object.values(state.lanes),
});

// prettier-ignore
const mapDispatchToProps = {
  createLane,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  DragDropContext(HTML5Backend)
)(Kanban);
