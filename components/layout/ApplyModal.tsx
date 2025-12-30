"use client";

import { Dialog, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ApplyForm from "./ApplyForm";

export default function ApplyModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      BackdropProps={{
        sx: {
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(0, 0, 0, 0.50)",
        },
      }}
      PaperProps={{
        sx: {
          backgroundColor: "rgba(1, 1, 1, 0.25)",
          color: "#fff",
          borderRadius: 3,
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
        },
      }}
    >
      <Box sx={{ position: "relative", p: 2 }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 12,
            top: 12,
            color: "#fff",
          }}
        >
          <CloseIcon />
        </IconButton>

        <ApplyForm onClose={onClose} />
      </Box>
    </Dialog>
  );
}
