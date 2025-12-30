"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface Listing {
  id: string;
  title: string;
  slug: string;
  city: string;
  priceFrom: number;
}

export default function ListingsPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchListings() {
      try {
        const res = await fetch("/api/listings");
        const data = await res.json();
        setListings(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchListings();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Delete this listing?")) return;

    try {
      await fetch(`/api/listings/${id}`, { method: "DELETE" });
      setListings((prev) => prev.filter((listing) => listing.id !== id));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", py: 4 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="h5" fontWeight={600}>
            Listings
          </Typography>

          <Button
            component={Link}
            href="/crm/listings/create"
            variant="contained"
            sx={{ bgcolor: "primary.main", "&:hover": { bgcolor: "primary.dark" } }}
          >
            + Add Listing
          </Button>
        </Box>

        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          <TableContainer component={Paper} sx={{ borderRadius: 2, overflow: "hidden" }}>
            <Table>
              <TableHead sx={{ bgcolor: "grey.100" }}>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {listings.map((listing) => (
                  <TableRow key={listing.id} hover>
                    <TableCell>
                      <Typography fontWeight={500}>{listing.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        /property/{listing.slug}
                      </Typography>
                    </TableCell>

                    <TableCell>{listing.city}</TableCell>

                    <TableCell>
                      ₹ {listing.priceFrom?.toLocaleString() ?? "N/A"}
                    </TableCell>


                    <TableCell align="center">
                      <Button
                        component={Link}
                        href={`/crm/listings/edit/${listing.id}`}
                        startIcon={<EditIcon />}
                        sx={{ mr: 1 }}
                        variant="outlined"
                        size="small"
                      >
                        Edit
                      </Button>

                      <IconButton color="error" size="small" onClick={() => handleDelete(listing.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </Box>
  );
}
