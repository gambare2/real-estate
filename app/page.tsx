"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid
} from "@mui/material";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LandingSections() {
  return (
    <>
    <Navbar/>
      {/* HERO */}
      <Box
        id="home"
        sx={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          backgroundImage:
            "url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: "white"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)"
          }}
        />

        <Container sx={{ position: "relative", textAlign: "center" }}>
          <Typography variant="h2" fontWeight="bold">
            Find Your Dream Shops
          </Typography>
          <Typography
            variant="h4"
            color="success.main"
            fontWeight="bold"
            mt={1}
          >
            By Adore Properties
          </Typography>
          <Typography mt={3} color="grey.300" fontSize={18}>
          Adore Prosperity Homes Affordable Shops
          </Typography>

          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ mt: 5, px: 6, py: 1.5 }}
          >
            Explore Shops in Adore
          </Button>
        </Container>
      </Box>

      {/* PROPERTIES */}
      <Box id="properties" py={10} bgcolor="#f9fafb">
        <Container>
          <Typography variant="h3" fontWeight="bold" textAlign="center">
            Featured Shops
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            mt={2}
            mb={6}
          >
            Handpicked premium listings
          </Typography>

          <Grid container spacing={4}>
            {[
              "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
              "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
              "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg"
            ].map((img, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <Card elevation={4}>
                  <CardMedia component="img" height="240" image={img} />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      Luxury Property
                    </Typography>
                    <Typography color="text.secondary">
                      Prime location · Modern design
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SERVICES */}
      <Box id="services" py={10}>
        <Container>
          <Typography variant="h3" fontWeight="bold" textAlign="center">
            Why Choose Us
          </Typography>

          <Grid container spacing={4} mt={4}>
            {[
              { title: "Market Insights", desc: "Data-driven pricing & trends" },
              { title: "Secure Deals", desc: "Verified listings & compliance" },
              { title: "24/7 Support", desc: "Expert help anytime" }
            ].map((item, i) => (
                <Card sx={{ p: 4, textAlign: "center" }} elevation={3}>
                  <Typography variant="h5" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography mt={2} color="text.secondary">
                    {item.desc}
                  </Typography>
                </Card>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ABOUT */}
      <Box id="about" py={10} bgcolor="#f9fafb">
        <Container>
          <Grid container spacing={6} alignItems="center">
              <Typography variant="h3" fontWeight="bold">
                About EstateVista
              </Typography>
              <Typography mt={3} color="text.secondary" fontSize={17}>
                15+ years of experience helping families and investors
                find premium real estate with trust and transparency.
              </Typography>
            </Grid>

              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                style={{ width: "100%", borderRadius: 12 }}
                alt="Real estate team"
              />
        </Container>
      </Box>

      <Footer/>

      {/* CONTACT
      <Box id="contact" py={10} bgcolor="#111" color="white">
          <Typography variant="h3" fontWeight="bold">
            Get In Touch
          </Typography>
          <Typography mt={2} color="grey.400">
            Let us guide you through your property journey
          </Typography>

          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ mt: 4, px: 6 }}
          >
            Contact Us
          </Button>
      </Box> */}

      {/* FOOTER */}
    </>
  );
}
