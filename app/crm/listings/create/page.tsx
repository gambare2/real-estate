"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

export default function CreateListingPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [city, setCity] = useState("");
  const [priceFrom, setPriceFrom] = useState<number | "">("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const cities = ["Mumbai", "Pune", "Bangalore", "Delhi"]; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!title || !slug || !city || !priceFrom) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/listings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, slug, city, priceFrom }),
      });

      if (!res.ok) throw new Error("Failed to create listing");

      router.push("/crm/listings"); // Redirect to listings page
    } catch (err) {
      setError((err as Error).message);
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", py: 4 }}>
      <Container maxWidth="sm">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h5" fontWeight={600} textAlign="center">
            Create Listing
          </Typography>

          {error && (
            <Typography color="error" textAlign="center">
              {error}
            </Typography>
          )}

          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <TextField
            label="Slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            helperText="Unique identifier for the URL"
          />

          <TextField
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            select
            required
          >
            {cities.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Price From (₹)"
            type="number"
            value={priceFrom}
            onChange={(e) => setPriceFrom(Number(e.target.value))}
            required
          />

          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{ mt: 2 }}
          >
            {loading ? "Creating..." : "Create Listing"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
