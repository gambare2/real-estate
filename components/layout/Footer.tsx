"use client"

import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    useTheme,
    useMediaQuery,
    Divider
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const footerLinks = [
    {
        title: "Latest Projects",
        links: [
            "HCBS JHA-29 DDJAY Affordable Plots Sector 29 Jhajjar",
            "True Habitat Luxe Residency 112 DDJAY Affordable Plots Sector 112 Gurgaon",
            "JMS Silver Living Sector 95 Gurgaon",
            "Whiteland Blissville DDJAY Luxury Floors Sector 76 Gurgaon",
            "Suncity Vatsal Valley DDJAY Affordable Floors Sector 2 Gawal Pahari Gurgaon",
            "M3M Soulitude DDJAY Affordable Floors Sector 89 Gurgaon",
            "Smart World Gems DDJAY Affordable Floors Sector 89 Gurgaon",
            "The Rising Palm Floors Sector 95A Gurgaon",
            "M2K Olive Green Floors Sector 104 Gurgaon",
            "Roots Courtyard 2 DDJAY Affordable Plots Sector 95A Gurgaon",
            "Ganga Realty Liv89 DDJAY Affordable Floor Sector 89 Gurgaon",
            "Paras The Florett Enqlave Luxury Floors Sector 59 Gurgaon",
            "Signature Global Daxin Vistas DDJAY Affordable Floors Sohna",
            "ROF Pravasa DDJAY Affordable Floors Sector 88a Gurgaon"
        ]
    },
    {
        title: "Affordable News Articles",
        links: [
            "DTCP Set to Relaunch Upgraded Portal for Affordable Housing Allotments After Probe",
            "Invest in Emaar Serenity Hills Sector 86 Gurgaon Today",
            "Why Invest in IREO The Corridors Sector 67A Gurgaon?",
            "Why Invest in HCBS DDJAY Plots in Jhajjar, Haryana?",
            "HCBS JHA 29 Jhajjar: Affordable Plots for Families and Investors Near Delhi NCR",
            "Affordable Housing Opportunities at HCBS JHA 29 Sector 29 Jhajjar",
            "Top Reasons to Choose Grace Resilva Sector 78 Gurgaon for Your Family",
            "3rd Draw of Results Riseonic Solitaire Affordable Housing Sector 70 Gurgaon"
        ]
    },
    {
        title: "Latest Updates",
        links: [
            "Affordable Newspaper Ads",
            "Blog",
            "Events & Fest",
            "HUDA Affordable Draw Results 2015",
            "HUDA Affordable Draw Results 2016",
            "HUDA Affordable Draw Results 2017",
            "HUDA Affordable Draw Results 2018",
            "HUDA Affordable Draw Results 2019",
            "HUDA Affordable Draw Results 2020",
            "HUDA Affordable Draw Results 2021",
            "HUDA Affordable Draw Results 2022",
            "HUDA Affordable Draw Results 2023",
            "HUDA Affordable Draw Results 2024",
            "HUDA Affordable Draw Results 2025",
            "HUDA Affordable Housing Gurgaon",
            "HUDA Affordable Housing News",
            "Market Updates",
            "RERA (Real Estate Regulation Act)",
            "Site Visit"
        ]
    },
    {
        title: "HUDA Affordable Housing Scheme",
        links: [
            "Apply Online",
            "What is HUDA Affordable Housing?",
            "What is Deen Dayal Jan Awas Yojna?",
            "New Amendment in The Affordable Housing Policy-2013",
            "Amendment in the Affordable Housing Policy 2013",
            "Amendments in HUDA Affordable Housing Policy 2013",
            "HUDA Affordable Housing Document Required",
            "RERA Bill",
            "Haryana RERA",
            "Best Top10 Affordable Housing Projects in Gurgaon",
            "HUDA Affordable Housing List Of Licenses (Updated)",
            "Home Loans (EMI) Calculator",
            "PMAY Subsidy Calculator",
            "Know HUDA Affordable Draw Result",
            "Job Openings",
            "Privacy Policy",
            "Contact Us"
        ]
    }
];

const footerLink2 = [
    {
        title: "Unit Wise Apartments",
        links: [
            "1BHK Apartment",
            "2BHK Apartment",
            "3BHK Apartment"
        ]
    },
    {
        title: "Status Wise Apartments",
        links: [
            "Ready to Move",
            "Under Construction",
            "Upcoming Affordable"
        ]
    },
]

const bottomLink = [
    {label: "Privacy Policy", href: "/features/Privacy"},
    {label: "Terms", href: "/features/Terms"},
    {label: "Contact", href: "/features/Contact"}
]

function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "#0f172a",
                color: "#cbd5f5",
                mt: 8,
                pt: 6,
                pb: 3
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    {footerLinks.map((section, index) => (
                        <Grid size={{ xs: 12, md: 4, lg: 2 }} key={index}>
                            {isMobile ? (
                                <Accordion
                                    sx={{
                                        bgcolor: "transparent",
                                        color: "inherit",
                                        boxShadow: "none",
                                        "&:before": { display: "none" }
                                    }}
                                >
                                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#cbd5f5" }} />}>
                                        <Typography fontWeight={600}>
                                            {section.title}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {section.links.map((link, i) => (
                                            <Typography key={i} variant="body2" sx={{ mb: 1 }}>
                                                <Link
                                                    href="#"
                                                    underline="none"
                                                    color="inherit"
                                                    sx={{
                                                        "&:hover": { color: "#38bdf8" }
                                                    }}
                                                >
                                                    {link}
                                                </Link>
                                            </Typography>
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                            ) : (
                                <Box>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={700}
                                        sx={{ mb: 2, color: "#e0e7ff" }}
                                    >
                                        {section.title}
                                    </Typography>

                                    <Box
                                        sx={{
                                            // maxHeight: 220,
                                            // overflowY: "auto",
                                            pr: 1,
                                            "&::-webkit-scrollbar": { width: 4 },
                                            "&::-webkit-scrollbar-thumb": {
                                                bgcolor: "#334155",
                                                borderRadius: 2
                                            }
                                        }}
                                    >
                                        {section.links.map((link, i) => (
                                            <Typography
                                                key={i}
                                                sx={{ mb: 1, lineHeight: 1.5, fontSize: 12 }}
                                            >
                                                <Link
                                                    href="#"
                                                    underline="none"
                                                    color="inherit"
                                                    sx={{
                                                        "&:hover": { color: "#38bdf8" }
                                                    }}
                                                >
                                                    {link}
                                                </Link>
                                            </Typography>
                                        ))}
                                    </Box>
                                </Box>
                            )}
                        </Grid>
                    ))}
                    {footerLink2.map((section, index) => (
                       <Grid size={{ xs: 2 }} key={index}>
                            
                            {isMobile ? (
                                <Accordion
                                    sx={{
                                        bgcolor: "transparent",
                                        color: "inherit",
                                        boxShadow: "none",
                                        "&:before": { display: "none" }
                                    }}
                                >
                                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#cbd5f5" }} />}>
                                        <Typography fontWeight={600}>
                                            {section.title}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {section.links.map((link, i) => (
                                            <Typography key={i} variant="body2" sx={{ mb: 1 }}>
                                                <Link
                                                    href="#"
                                                    underline="none"
                                                    color="inherit"
                                                    sx={{
                                                        "&:hover": { color: "#38bdf8" }
                                                    }}
                                                >
                                                    {link}
                                                </Link>
                                            </Typography>
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                            ) : (
                                <Box>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={700}
                                        sx={{ mb: 2, color: "#e0e7ff" }}
                                    >
                                        {section.title}
                                    </Typography>

                                    <Box
                                        sx={{
                                            // maxHeight: 220,
                                            // overflowY: "auto",
                                            pr: 1,
                                            "&::-webkit-scrollbar": { width: 4 },
                                            "&::-webkit-scrollbar-thumb": {
                                                bgcolor: "#334155",
                                                borderRadius: 2
                                            }
                                        }}
                                    >
                                        {section.links.map((link, i) => (
                                            <Typography
                                                key={i}
                                                sx={{ mb: 1, lineHeight: 1.5, fontSize: 12 }}
                                            >
                                                <Link
                                                    href="#"
                                                    underline="none"
                                                    color="inherit"
                                                    sx={{
                                                        "&:hover": { color: "#38bdf8" }
                                                    }}
                                                >
                                                    {link}
                                                </Link>
                                            </Typography>
                                        ))}
                                    </Box>
                                </Box>
                            )}
                        </Grid>
                    ))}
                </Grid>

                <Divider sx={{ my: 4, borderColor: "#1e293b" }} />

                {/* Bottom bar */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 2
                    }}
                >
                
                </Box>
                <Box py={4} bgcolor="black" textAlign="center" sx={{display: "flex", justifyContent: "space-around"}}>
                <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                        © {new Date().getFullYear()} Affordable Housing. All rights reserved.
                    </Typography>
                    <div>
                        {bottomLink.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                underline="none"
                                color="#94a3b8"
                                sx={{
                                    fontSize: 14,
                                    "&:hover": { color: "#38bdf8" },
                                    marginLeft: 6
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    </Box>
            </Container>
        </Box>
    );
}

export default Footer;

