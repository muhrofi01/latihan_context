import * as React from "react";
import { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import DialogContext from "./context/DialogProvider";
import User from "./User";
import Post from "./Post";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogTransition(props) {
  const dialogCtx = useContext(DialogContext);

  const handleClose = () => {
    dialogCtx.setDialog((prev) => !prev);
  };

  let dialogContent;

  if (props.url === "/users") {
    dialogContent = <User urlEnd="/users" />;
  } else {
    dialogContent = <Post urlEnd="/posts" />;
  }

  return (
    <Dialog
      open={dialogCtx.dialog}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>User Data</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {dialogContent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
