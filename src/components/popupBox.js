import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function PopupBox({ currentQuestion, setOpen, open }) {
  return (
    <div>
      {currentQuestion && (
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogTitle id="dialog-title">{currentQuestion.title}</DialogTitle>
          <DialogContent>
            <DialogContentText
              id="dialog-description"
              style={{ display: "flex" }}
            >
              <div style={{ display: "flex", width: "60%" }}>
                <div id="pic">
                  <img
                    src={currentQuestion.owner.profile_image}
                    alt={currentQuestion.owner.display_name + "profile"}
                    height="40px"
                    style={{ borderRadius: "50px" }}
                  />
                </div>
                <div style={{ marginLeft: "5%" }}>
                  <div id="ownerName">{currentQuestion.owner.display_name}</div>
                  <div id="creationDate">
                    {new Date(currentQuestion.creation_date).toLocaleString()}
                  </div>
                </div>
              </div>
              <DialogActions style={{ width: "40%" }}>
                <a
                  href={currentQuestion.link}
                  style={{ textDecoration: "none" }}
                >
                  <Button color="primary" autoFocus>
                    Open Thread
                  </Button>
                </a>
              </DialogActions>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
