"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
  Divider,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function CRMLayout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { label: "Dashboard", href: "/crm/dashboard", icon: <HomeIcon /> },
    { label: "Listings", href: "/crm/listings", icon: <ListAltIcon /> },
    // Add more items here
  ];

  const drawer = (
    <Box
      sx={{
        width: 240,
        p: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        bgcolor: "background.paper",
        borderRight: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box>
        <Typography variant="h6" mb={4}>
          Admin Panel
        </Typography>
        <List>
          {navItems.map((item) => (
            <ListItemButton
              key={item.label}
              component={Link}
              href={item.href}
              selected={pathname === item.href}
              sx={{
                borderRadius: 1,
                mb: 1,
                "&.Mui-selected": {
                  bgcolor: theme.palette.action.selected,
                  fontWeight: "bold",
                },
                "&:hover": { bgcolor: theme.palette.action.hover },
              }}
            >
              {item.icon && <Box sx={{ mr: 1 }}>{item.icon}</Box>}
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Box>
        <Divider sx={{ mb: 2 }} />
        <form action="/api/auth/logout" method="POST">
          <Button type="submit" startIcon={<LogoutIcon />} color="error" fullWidth>
            Logout
          </Button>
        </form>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Mobile Menu Button */}
      {isMobile && (
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ position: "fixed", top: 16, left: 16, zIndex: 2000 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Sidebar Drawer */}
      {!isMobile && <Box component="nav">{drawer}</Box>}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: theme.palette.background.default,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
