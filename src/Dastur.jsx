import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
} from "@mui/material";
import Title from "./Title";
import {
  Add,
  Verified,
  PlusOne,
  Remove,
  Star,
  Check,
} from "@mui/icons-material";
import { font } from "./fonts/fonts";

export default function Dastur() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={font}>
      <Box>
        <Box sx={{ maxWidth: "800px", margin: "auto" }}>
          <Title textAlign={"center"} titleText={"O'quv markazi dasturi"} />
          <Accordion
            sx={{ mt: { lg: "1rem", md: "1rem", sm: ".8rem", xs: "0.8rem" } }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              sx={{
                p: { lg: "1rem", md: ".9rem", sm: ".8", xs: ".7" },
                background: expanded === "panel1" ? "#152259" : "",
                color: expanded === "panel1" ? "#F99417" : "#000",
              }}
              expandIcon={
                expanded === "panel1" ? (
                  <Remove
                    sx={{
                      color: "#F99417",
                      fontSize: {
                        lg: "2rem",
                        md: "1.9rem",
                        sm: "1.9rem",
                        xs: "1.9rem",
                      },
                    }}
                  />
                ) : (
                  <Add
                    sx={{
                      color: "#152259",
                      fontSize: {
                        lg: "2rem",
                        md: "1.9rem",
                        sm: "1.9rem",
                        xs: "1.9rem",
                      },
                    }}
                  />
                )
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Box sx={{ m: "0 1rem 0 0rem" }}>
                <Verified
                  sx={{
                    color: expanded === "panel1" ? "#F99417" : "#152259",
                    fontSize: "1.9rem",
                  }}
                />
              </Box>
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
                Davlat standarti fanlari
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ p: "1rem" }}>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                  aria-label="contacts"
                >
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <Check
                          sx={{
                            fontSize: {
                              lg: "2rem",
                              md: "1.9rem",
                              sm: "1.9rem",
                              xs: "1.9rem",
                            },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "text.secondary",
                          fontSize: {
                            lg: "1.1rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".8rem",
                          },
                        }}
                        primary="Matematika"
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <Check
                          sx={{
                            fontSize: {
                              lg: "2rem",
                              md: "1.9rem",
                              sm: "1.9rem",
                              xs: "1.9rem",
                            },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "text.secondary",
                          fontSize: {
                            lg: "1.1rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".8rem",
                          },
                        }}
                        primary="Fizika"
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <Check
                          sx={{
                            fontSize: {
                              lg: "2rem",
                              md: "1.9rem",
                              sm: "1.9rem",
                              xs: "1.9rem",
                            },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "text.secondary",
                          fontSize: {
                            lg: "1.1rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".8rem",
                          },
                        }}
                        primary="Fizika"
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <Check
                          sx={{
                            fontSize: {
                              lg: "2rem",
                              md: "1.9rem",
                              sm: "1.9rem",
                              xs: "1.9rem",
                            },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "text.secondary",
                          fontSize: {
                            lg: "1.1rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".8rem",
                          },
                        }}
                        primary="Kimyo"
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <Check
                          sx={{
                            fontSize: {
                              lg: "2rem",
                              md: "1.9rem",
                              sm: "1.9rem",
                              xs: "1.9rem",
                            },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "text.secondary",
                          fontSize: {
                            lg: "1.1rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".8rem",
                          },
                        }}
                        primary="Tarix"
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <Check
                          sx={{
                            fontSize: {
                              lg: "2rem",
                              md: "1.9rem",
                              sm: "1.9rem",
                              xs: "1.9rem",
                            },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "text.secondary",
                          fontSize: {
                            lg: "1.1rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".8rem",
                          },
                        }}
                        primary="Geografiya"
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <Check
                          sx={{
                            fontSize: {
                              lg: "2rem",
                              md: "1.9rem",
                              sm: "1.9rem",
                              xs: "1.9rem",
                            },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "text.secondary",
                          fontSize: {
                            lg: "1.1rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".8rem",
                          },
                        }}
                        primary="Tarix"
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <Check
                          sx={{
                            fontSize: {
                              lg: "2rem",
                              md: "1.9rem",
                              sm: "1.9rem",
                              xs: "1.9rem",
                            },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "text.secondary",
                          fontSize: {
                            lg: "1.1rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".8rem",
                          },
                        }}
                        primary="Ingliz tili"
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <Check
                          sx={{
                            fontSize: {
                              lg: "2rem",
                              md: "1.9rem",
                              sm: "1.9rem",
                              xs: "1.9rem",
                            },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "text.secondary",
                          fontSize: {
                            lg: "1.1rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".8rem",
                          },
                        }}
                        primary="Ona tili"
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <Check
                          sx={{
                            fontSize: {
                              lg: "2rem",
                              md: "1.9rem",
                              sm: "1.9rem",
                              xs: "1.9rem",
                            },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "text.secondary",
                          fontSize: {
                            lg: "1.1rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".8rem",
                          },
                        }}
                        primary="Jismoniy tarbiya"
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ mt: { lg: "1rem", md: "1rem", sm: ".8rem", xs: "0.8rem" } }}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              sx={{
                p: { lg: "1rem", md: ".9rem", sm: ".8", xs: ".7" },
                background: expanded === "panel2" ? "#152259" : "",
                color: expanded === "panel2" ? "#F99417" : "#000",
              }}
              expandIcon={
                expanded === "panel2" ? (
                  <Remove
                    sx={{
                      color: "#F99417",
                      fontSize: {
                        lg: "2rem",
                        md: "1.9rem",
                        sm: "1.9rem",
                        xs: "1.9rem",
                      },
                    }}
                  />
                ) : (
                  <Add
                    sx={{
                      color: "#152259",
                      fontSize: {
                        lg: "2rem",
                        md: "1.9rem",
                        sm: "1.9rem",
                        xs: "1.9rem",
                      },
                    }}
                  />
                )
              }
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Box sx={{ m: "0 1rem 0 0rem" }}>
                <Verified
                  sx={{
                    color: expanded === "panel2" ? "#F99417" : "#152259",
                    fontSize: "1.9rem",
                  }}
                />
              </Box>
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
                Chuqurlashtirilgan fanlar
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                m: { lg: "1rem", md: "1rem", sm: ".8rem", xs: ".7rem" },
              }}
            >
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                aria-label="contacts"
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Check
                        sx={{
                          fontSize: {
                            lg: "2rem",
                            md: "1.9rem",
                            sm: "1.9rem",
                            xs: "1.9rem",
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: "text.secondary",
                        fontSize: {
                          lg: "1.1rem",
                          md: "1rem",
                          sm: ".9rem",
                          xs: ".8rem",
                        },
                      }}
                      primary="SAT math"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Check
                        sx={{
                          fontSize: {
                            lg: "2rem",
                            md: "1.9rem",
                            sm: "1.9rem",
                            xs: "1.9rem",
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: "text.secondary",
                        fontSize: {
                          lg: "1.1rem",
                          md: "1rem",
                          sm: ".9rem",
                          xs: ".8rem",
                        },
                      }}
                      primary="SAT English"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Check
                        sx={{
                          fontSize: {
                            lg: "2rem",
                            md: "1.9rem",
                            sm: "1.9rem",
                            xs: "1.9rem",
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: "text.secondary",
                        fontSize: {
                          lg: "1.1rem",
                          md: "1rem",
                          sm: ".9rem",
                          xs: ".8rem",
                        },
                      }}
                      primary="Fizika"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Check
                        sx={{
                          fontSize: {
                            lg: "2rem",
                            md: "1.9rem",
                            sm: "1.9rem",
                            xs: "1.9rem",
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: "text.secondary",
                        fontSize: {
                          lg: "1.1rem",
                          md: "1rem",
                          sm: ".9rem",
                          xs: ".8rem",
                        },
                      }}
                      primary="IELTS"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Check
                        sx={{
                          fontSize: {
                            lg: "2rem",
                            md: "1.9rem",
                            sm: "1.9rem",
                            xs: "1.9rem",
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: "text.secondary",
                        fontSize: {
                          lg: "1.1rem",
                          md: "1rem",
                          sm: ".9rem",
                          xs: ".8rem",
                        },
                      }}
                      primary="IT"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Check
                        sx={{
                          fontSize: {
                            lg: "2rem",
                            md: "1.9rem",
                            sm: "1.9rem",
                            xs: "1.9rem",
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: "text.secondary",
                        fontSize: {
                          lg: "1.1rem",
                          md: "1rem",
                          sm: ".9rem",
                          xs: ".8rem",
                        },
                      }}
                      primary="Arab tili
                      "
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ mt: { lg: "1rem", md: "1rem", sm: ".8rem", xs: "0.8rem" } }}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              sx={{
                p: { lg: "1rem", md: ".9rem", sm: ".8", xs: ".7" },
                background: expanded === "panel3" ? "#152259" : "",
                color: expanded === "panel3" ? "#F99417" : "#000",
              }}
              expandIcon={
                expanded === "panel3" ? (
                  <Remove
                    sx={{
                      color: "#F99417",
                      fontSize: {
                        lg: "2rem",
                        md: "1.9rem",
                        sm: "1.9rem",
                        xs: "1.9rem",
                      },
                    }}
                  />
                ) : (
                  <Add
                    sx={{
                      color: "#152259",
                      fontSize: {
                        lg: "2rem",
                        md: "1.9rem",
                        sm: "1.9rem",
                        xs: "1.9rem",
                      },
                    }}
                  />
                )
              }
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Box sx={{ m: "0 1rem 0 0rem" }}>
                <Verified
                  sx={{
                    color: expanded === "panel3" ? "#F99417" : "#152259",
                    fontSize: "1.9rem",
                  }}
                />
              </Box>
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
                Qo'shimcha to'garaklar
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                m: { lg: "1rem", md: "1rem", sm: ".8rem", xs: ".7rem" },
              }}
            >
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                aria-label="contacts"
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Check
                        sx={{
                          fontSize: {
                            lg: "2rem",
                            md: "1.9rem",
                            sm: "1.9rem",
                            xs: "1.9rem",
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: "text.secondary",
                        fontSize: {
                          lg: "1.1rem",
                          md: "1rem",
                          sm: ".9rem",
                          xs: ".8rem",
                        },
                      }}
                      primary="Shaxmat"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Check
                        sx={{
                          fontSize: {
                            lg: "2rem",
                            md: "1.9rem",
                            sm: "1.9rem",
                            xs: "1.9rem",
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: "text.secondary",
                        fontSize: {
                          lg: "1.1rem",
                          md: "1rem",
                          sm: ".9rem",
                          xs: ".8rem",
                        },
                      }}
                      primary="Tasviriy San'at"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Check
                        sx={{
                          fontSize: {
                            lg: "2rem",
                            md: "1.9rem",
                            sm: "1.9rem",
                            xs: "1.9rem",
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: "text.secondary",
                        fontSize: {
                          lg: "1.1rem",
                          md: "1rem",
                          sm: ".9rem",
                          xs: ".8rem",
                        },
                      }}
                      primary="Arab tili"
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Check
                        sx={{
                          fontSize: {
                            lg: "2rem",
                            md: "1.9rem",
                            sm: "1.9rem",
                            xs: "1.9rem",
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: "text.secondary",
                        fontSize: {
                          lg: "1.1rem",
                          md: "1rem",
                          sm: ".9rem",
                          xs: ".8rem",
                        },
                      }}
                      primary="IT"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Check
                        sx={{
                          fontSize: {
                            lg: "2rem",
                            md: "1.9rem",
                            sm: "1.9rem",
                            xs: "1.9rem",
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: "text.secondary",
                        fontSize: {
                          lg: "1.1rem",
                          md: "1rem",
                          sm: ".9rem",
                          xs: ".8rem",
                        },
                      }}
                      primary="Zakovat
                      "
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ mt: { lg: "1rem", md: "1rem", sm: ".8rem", xs: "0.8rem" } }}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              sx={{
                p: { lg: "1rem", md: ".9rem", sm: ".8", xs: ".7" },
                background: expanded === "panel4" ? "#152259" : "",
                color: expanded === "panel4" ? "#F99417" : "#000",
              }}
              expandIcon={
                expanded === "panel4" ? (
                  <Remove
                    sx={{
                      color: "#fff",
                      fontSize: {
                        lg: "2rem",
                        md: "1.9rem",
                        sm: "1.9rem",
                        xs: "1.9rem",
                      },
                    }}
                  />
                ) : (
                  <Add
                    sx={{
                      color: "#152259",
                      fontSize: {
                        lg: "2rem",
                        md: "1.9rem",
                        sm: "1.9rem",
                        xs: "1.9rem",
                      },
                    }}
                  />
                )
              }
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Box sx={{ m: "0 1rem 0 0rem" }}>
                <Verified
                  sx={{
                    color: expanded === "panel4" ? "#F99417" : "#152259",
                    fontSize: "1.9rem",
                  }}
                />
              </Box>
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
                Maktabga tayyorgarlik
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                m: { lg: "1rem", md: "1rem", sm: ".8rem", xs: ".7rem" },
              }}
            >
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                aria-label="contacts"
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Check
                        sx={{
                          fontSize: {
                            lg: "2rem",
                            md: "1.9rem",
                            sm: "1.9rem",
                            xs: "1.9rem",
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: "text.secondary",
                        fontSize: {
                          lg: "1.1rem",
                          md: "1rem",
                          sm: ".9rem",
                          xs: ".8rem",
                        },
                      }}
                      primary="O'qish"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Check
                        sx={{
                          fontSize: {
                            lg: "2rem",
                            md: "1.9rem",
                            sm: "1.9rem",
                            xs: "1.9rem",
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: "text.secondary",
                        fontSize: {
                          lg: "1.1rem",
                          md: "1rem",
                          sm: ".9rem",
                          xs: ".8rem",
                        },
                      }}
                      primary="Yozish"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Check
                        sx={{
                          fontSize: {
                            lg: "2rem",
                            md: "1.9rem",
                            sm: "1.9rem",
                            xs: "1.9rem",
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: "text.secondary",
                        fontSize: {
                          lg: "1.1rem",
                          md: "1rem",
                          sm: ".9rem",
                          xs: ".8rem",
                        },
                      }}
                      primary="Tasviriy San'at"
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Check
                        sx={{
                          fontSize: {
                            lg: "2rem",
                            md: "1.9rem",
                            sm: "1.9rem",
                            xs: "1.9rem",
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: "text.secondary",
                        fontSize: {
                          lg: "1.1rem",
                          md: "1rem",
                          sm: ".9rem",
                          xs: ".8rem",
                        },
                      }}
                      primary="Mental arifmetika"
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Check
                        sx={{
                          fontSize: {
                            lg: "2rem",
                            md: "1.9rem",
                            sm: "1.9rem",
                            xs: "1.9rem",
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: "text.secondary",
                        fontSize: {
                          lg: "1.1rem",
                          md: "1rem",
                          sm: ".9rem",
                          xs: ".8rem",
                        },
                      }}
                      primary="Hisoblash
                      "
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
