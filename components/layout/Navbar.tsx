"use client";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";

import { Menu as MenuIcon, KeyboardArrowDown as KeyboardArrowDownIcon } from "@mui/icons-material";
import ApplyModal from "@/components/layout/ApplyModal";

/*  TYPES  */
type Listing = {
  title: string;
  slug: string;
  city: string;
};

const navItems = [
    {label: "Home", href: "/"}
]

/*  MAIN NAVBAR  */
export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [applyOpen, setApplyOpen] = React.useState(false);
  const [projects, setProjects] = React.useState<Listing[]>([]);

  React.useEffect(() => {
    fetch("/api/listings")
      .then((res) => res.json())
      .then(setProjects)
      .catch(() => setProjects([]));
  }, []);

  React.useEffect(() => {
    setApplyOpen(true);
  }, []);

  const uniqueCities = Array.from(
    new Set(projects.map((p) => p.city))
  );

  return (
    <>
      <ApplyModal open={applyOpen} onClose={() => setApplyOpen(false)} />

      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar>
          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Real Estate Platform
          </Typography>

          {/* DESKTOP NAV */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {navItems.map((item) =>
               
                  <Button
                    key={item.label}
                    component={Link}
                    href={item.href}
                    color="inherit"
                  >
                    {item.label}
                  </Button>
              )}
              <HoverProjects label="Projects" projects={projects} />
              <HoverLocations label="Locations" cities={uniqueCities} />

              <Button
                variant="contained"
                onClick={() => setApplyOpen(true)}
              >
                Apply
              </Button>

              <Button
                variant="contained"
                component="a"
                href="tel:+918860376646"
              >
                +91 88603 76646
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        projects={projects}
      />
    </>
  );
}

/*  HOVER: PROJECTS  */

function HoverProjects({
  label,
  projects,
}: {
  label: string;
  projects: Listing[];
}) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  return (
    <Box
      onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
      onMouseLeave={() => setAnchorEl(null)}
    >
      <Button color="inherit" endIcon={<KeyboardArrowDownIcon />}>
        {label}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{ onMouseLeave: () => setAnchorEl(null) }}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {projects.map((project) => (
          <MenuItem
            key={project.slug}
            component={Link}
            href={`/property/${project.slug}`}
            onClick={() => setAnchorEl(null)}
          >
            {project.title}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

/*  HOVER: LOCATIONS  */

function HoverLocations({
  label,
  cities,
}: {
  label: string;
  cities: string[];
}) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  return (
    <Box
      onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
      onMouseLeave={() => setAnchorEl(null)}
    >
      <Button color="inherit" endIcon={<KeyboardArrowDownIcon />}>
        {label}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {cities.map((city) => (
          <MenuItem
            key={city}
            component={Link}
            href={`/city/${city.toLowerCase()}`}
            onClick={() => setAnchorEl(null)}
          >
            {city}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
/*  MOBILE DRAWER  */
function MobileDrawer({
  open,
  onClose,
  projects,
}: {
  open: boolean;
  onClose: () => void;
  projects: Listing[];
}) {
  return (
    <Drawer open={open} onClose={onClose}>
      <Box sx={{ width: 280 }}>
        <Typography variant="h6" sx={{ p: 2 }}>
          Projects
        </Typography>

        <List>
          {projects.map((project) => (
            <ListItemButton
              key={project.slug}
              component={Link}
              href={`/property/${project.slug}`}
              onClick={onClose}
            >
              <ListItemText primary={project.title} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
