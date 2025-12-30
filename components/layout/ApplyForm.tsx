"use client";

import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function ApplyForm({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    onClose();
  };
  return (
    <Box sx={{ p: 3, width: 400 }}>
      <Typography variant="h6" mb={2} sx={{
        display: "flex",
        justifyContent: "center",
      }}>
        Enquiry Now
      </Typography>

      <TextField
        fullWidth
        label="Name"
        margin="normal"
        variant="standard"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        InputLabelProps={{ style: { color: "#ccc" } }}
        InputProps={{
          style: { color: "#fff" },
        }}
      />

      <TextField
        fullWidth
        label="Phone Number"
        margin="normal"
        variant="standard"
        type="tel"
        defaultValue="+91 "
        InputLabelProps={{ style: { color: "#ccc" } }}
        InputProps={{
          style: { color: "#fff" },
          inputProps: {
            maxLength: 14,
            pattern: "[0-9]{10}",
            inputMode: "numeric",
          },
          onChange: (e) => {
            let value = e.target.value.replace(/\D/g, "");

            // Ensure it starts with 91
            if (!value.startsWith("91")) {
              value = "91" + value;
            }

            // Limit to +91 + 10 digits
            value = value.slice(0, 12);

            const formatted = "+91 " + value.slice(2);
            e.target.value = formatted;
            setForm({ ...form, phone: formatted });
          },
        }}
      />

      <TextField
        fullWidth
        label="E-mail"
        margin="normal"
        variant="standard"
        type="email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        InputLabelProps={{ style: { color: "#ccc" } }}
        InputProps={{
          style: { color: "#fff" },
        }}
        helperText="Enter a valid email address"
        FormHelperTextProps={{ style: { color: "#aaa" } }}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2 }}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Sending..." : "Enquiry"}
      </Button>
    </Box>
  );
}
