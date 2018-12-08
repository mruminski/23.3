import { connect } from "react-redux";
import Notes from "./Notes";
import * as noteActions from "../Note/NoteActions";

// prettier-ignore
const mapDispatchToProps = {
  ...noteActions,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
