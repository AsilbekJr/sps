import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container, ThemeProvider } from "@mui/material";
import Title from "./Title";
import { Add, PlusOne, Remove } from "@mui/icons-material";
import { font } from "./fonts/fonts";

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={font}>
      <Box sx={{ my: "5rem" }}>
        <Container maxWidth="lg">
          <Title textAlign={"center"} titleText={"Ko'p beriladigan savollar"} />
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              sx={{
                transition: "all .6s",
                p: { lg: "1rem", md: ".9rem", sm: ".8", xs: ".7" },
                background: expanded === "panel1" ? "#132043" : "",
                color: expanded === "panel1" ? "#fff" : "#000",
              }}
              expandIcon={
                expanded === "panel1" ? (
                  <Remove
                    sx={{
                      color: "#fff",
                      fontSize: {
                        lg: "2.5rem",
                        md: "2rem",
                        sm: "2rem",
                        xs: "2rem",
                      },
                    }}
                  />
                ) : (
                  <Add
                    sx={{
                      fontSize: {
                        lg: "2.5rem",
                        md: "2rem",
                        sm: "2rem",
                        xs: "2rem",
                      },
                    }}
                  />
                )
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  width: "98%",
                  fontSize: {
                    lg: "1.2rem",
                    md: "1.1rem",
                    sm: "1rem",
                    xs: ".9rem",
                  },
                }}
              >
                Xususiy maktabga necha yoshdan qabul qilinadi?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ p: "1rem" }}>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: {
                      lg: "1.1rem",
                      md: "1rem",
                      sm: ".9rem",
                      xs: ".8rem",
                    },
                  }}
                >
                  Maktabimiz o'quvchilarni 7 yoshdan boshlab qabul qiladi. Bu
                  yoshdan boshlab, biz o'quvchilarga muvaffaqiyatli ta'lim va
                  tarbiya berish uchun barcha zarur imkoniyatlarni ta'minlaymiz.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              sx={{
                p: { lg: "1rem", md: ".9rem", sm: ".8", xs: ".7" },
                background: expanded === "panel2" ? "#132043" : "",
                color: expanded === "panel2" ? "#fff" : "#000",
              }}
              expandIcon={
                expanded === "panel2" ? (
                  <Remove
                    sx={{
                      color: "#fff",
                      fontSize: {
                        lg: "2.5rem",
                        md: "2rem",
                        sm: "2rem",
                        xs: "2rem",
                      },
                    }}
                  />
                ) : (
                  <Add
                    sx={{
                      fontSize: {
                        lg: "2.5rem",
                        md: "2rem",
                        sm: "2rem",
                        xs: "2rem",
                      },
                    }}
                  />
                )
              }
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  width: "98%",
                  fontSize: {
                    lg: "1.2rem",
                    md: "1.1rem",
                    sm: "1rem",
                    xs: ".9rem",
                  },
                }}
              >
                Maktabda qanday qo'shimcha mashg'ulotlar mavjud ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                m: { lg: "1rem", md: "1rem", sm: ".8rem", xs: ".7rem" },
              }}
            >
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: {
                    lg: "1.1rem",
                    md: "1rem",
                    sm: ".9rem",
                    xs: ".8rem",
                  },
                }}
              >
                <u> Ilimiy mashg'ulotlar:</u> kimyo yoki biologiya guruhlarida
                ishtirok etish kabi imkoniyatlar orqali o'quvchilarning ilmiy
                qobiliyatlarini rivojlantirishga yordam beradi.
                <br />
                <u>Ijodiy mashg'ulotlar:</u> foto, chizma, musiqa, dizayn va
                boshqa sohalarda ishtirok etish imkoniyatlarini o'quvchilarga
                taqdim etish mumkin.
                <br />
                <u>Sport mashg'ulotlari:</u> Futbol, basketbol, tenis kabi sport
                turlarida ishtirok etish imkoniyatlarini o'quvchilarga taqdim
                etish mumkin.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              sx={{
                p: { lg: "1rem", md: ".9rem", sm: ".8", xs: ".7" },
                background: expanded === "panel3" ? "#132043" : "",
                color: expanded === "panel3" ? "#fff" : "#000",
              }}
              expandIcon={
                expanded === "panel3" ? (
                  <Remove
                    sx={{
                      color: "#fff",
                      fontSize: {
                        lg: "2.5rem",
                        md: "2rem",
                        sm: "2rem",
                        xs: "2rem",
                      },
                    }}
                  />
                ) : (
                  <Add
                    sx={{
                      fontSize: {
                        lg: "2.5rem",
                        md: "2rem",
                        sm: "2rem",
                        xs: "2rem",
                      },
                    }}
                  />
                )
              }
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  width: "98%",
                  fontSize: {
                    lg: "1.2rem",
                    md: "1.1rem",
                    sm: "1rem",
                    xs: ".9rem",
                  },
                }}
              >
                O'qish uchun qancha to'lov qilaman?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                m: { lg: "1rem", md: "1rem", sm: ".8rem", xs: ".7rem" },
              }}
            >
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: {
                    lg: "1.1rem",
                    md: "1rem",
                    sm: ".9rem",
                    xs: ".8rem",
                  },
                }}
              >
                Batafsil ma'lumotni admindan olishingiz mumkin. +998997397157
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              sx={{
                p: { lg: "1rem", md: ".9rem", sm: ".8", xs: ".7" },
                background: expanded === "panel4" ? "#132043" : "",
                color: expanded === "panel4" ? "#fff" : "#000",
              }}
              expandIcon={
                expanded === "panel4" ? (
                  <Remove
                    sx={{
                      color: "#fff",
                      fontSize: {
                        lg: "2.5rem",
                        md: "2rem",
                        sm: "2rem",
                        xs: "2rem",
                      },
                    }}
                  />
                ) : (
                  <Add
                    sx={{
                      fontSize: {
                        lg: "2.5rem",
                        md: "2rem",
                        sm: "2rem",
                        xs: "2rem",
                      },
                    }}
                  />
                )
              }
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  width: "98%",
                  fontSize: {
                    lg: "1.2rem",
                    md: "1.1rem",
                    sm: "1rem",
                    xs: ".9rem",
                  },
                }}
              >
                Uzoqdan qatnaydiganlar uchun yotoqxona mavjudmi?
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                m: { lg: "1rem", md: "1rem", sm: ".8rem", xs: ".7rem" },
              }}
            >
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: {
                    lg: "1.1rem",
                    md: "1rem",
                    sm: ".9rem",
                    xs: ".8rem",
                  },
                }}
              >
                Albatta, uzoqdan kelganlarga yotoqxona mavjud.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
