import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
} from "@mui/material";

import { Add, Verified, Remove, FiberManualRecord } from "@mui/icons-material";
import { font } from "./fonts/fonts";

export default function Dastur() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={font}>
      <Box sx={{ p: { lg: "0", md: "0", sm: "10px", xs: "10px" } }}>
        <Grid container spacing={2}>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Accordion
              sx={{
                mt: { lg: "1rem", md: "1rem", sm: ".8rem", xs: "0.8rem" },
              }}
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
                          lg: "1.7rem",
                          md: "1.5rem",
                          sm: "1.4rem",
                          xs: "1.4rem",
                        },
                      }}
                    />
                  ) : (
                    <Add
                      sx={{
                        color: "#152259",
                        fontSize: {
                          lg: "1.7rem",
                          md: "1.5rem",
                          sm: "1.4rem",
                          xs: "1.4rem",
                        },
                      }}
                    />
                  )
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box sx={{ m: "0 .6rem 0 0rem" }}>
                  <Verified
                    sx={{
                      color: expanded === "panel1" ? "#F99417" : "#152259",
                      fontSize: "1.5rem",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontWeight: "500",
                    width: "98%",
                    fontSize: {
                      lg: "1rem",
                      md: "1rem",
                      sm: ".9rem",
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
                      <ListItemIcon>
                        <FiberManualRecord
                          sx={{
                            fontSize: {
                              lg: "1.2rem",
                              md: "1rem",
                              sm: ".9rem",
                              xs: ".9rem",
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
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <FiberManualRecord
                          sx={{
                            fontSize: {
                              lg: "1.2rem",
                              md: "1rem",
                              sm: ".9rem",
                              xs: ".9rem",
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
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <FiberManualRecord
                          sx={{
                            fontSize: {
                              lg: "1.2rem",
                              md: "1rem",
                              sm: ".9rem",
                              xs: ".9rem",
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
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <FiberManualRecord
                          sx={{
                            fontSize: {
                              lg: "1.2rem",
                              md: "1rem",
                              sm: ".9rem",
                              xs: ".9rem",
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
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <FiberManualRecord
                          sx={{
                            fontSize: {
                              lg: "1.2rem",
                              md: "1rem",
                              sm: ".9rem",
                              xs: ".9rem",
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
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <FiberManualRecord
                          sx={{
                            fontSize: {
                              lg: "1.2rem",
                              md: "1rem",
                              sm: ".9rem",
                              xs: ".9rem",
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
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <FiberManualRecord
                          sx={{
                            fontSize: {
                              lg: "1.2rem",
                              md: "1rem",
                              sm: ".9rem",
                              xs: ".9rem",
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
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <FiberManualRecord
                          sx={{
                            fontSize: {
                              lg: "1.2rem",
                              md: "1rem",
                              sm: ".9rem",
                              xs: ".9rem",
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
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <FiberManualRecord
                          sx={{
                            fontSize: {
                              lg: "1.2rem",
                              md: "1rem",
                              sm: ".9rem",
                              xs: ".9rem",
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
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <FiberManualRecord
                          sx={{
                            fontSize: {
                              lg: "1.2rem",
                              md: "1rem",
                              sm: ".9rem",
                              xs: ".9rem",
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
                    </ListItem>
                  </List>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Grid>

          <Grid item lg={3} md={3} sm={12} xs={12}>
            {" "}
            <Accordion
              sx={{
                mt: { lg: "1rem", md: "1rem", sm: ".8rem", xs: "0.8rem" },
              }}
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
                          lg: "1.7rem",
                          md: "1.5rem",
                          sm: "1.4rem",
                          xs: "1.4rem",
                        },
                      }}
                    />
                  ) : (
                    <Add
                      sx={{
                        color: "#152259",
                        fontSize: {
                          lg: "1.7rem",
                          md: "1.5rem",
                          sm: "1.4rem",
                          xs: "1.4rem",
                        },
                      }}
                    />
                  )
                }
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Box sx={{ m: "0 .6rem 0 0rem" }}>
                  <Verified
                    sx={{
                      color: expanded === "panel2" ? "#F99417" : "#152259",
                      fontSize: "1.5rem",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontWeight: "500",
                    width: "98%",
                    fontSize: {
                      lg: "1rem",
                      md: "1rem",
                      sm: ".9rem",
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
                    <ListItemIcon>
                      <FiberManualRecord
                        sx={{
                          fontSize: {
                            lg: "1.2rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".9rem",
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
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <FiberManualRecord
                        sx={{
                          fontSize: {
                            lg: "1.2rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".9rem",
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
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <FiberManualRecord
                        sx={{
                          fontSize: {
                            lg: "1.2rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".9rem",
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
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <FiberManualRecord
                        sx={{
                          fontSize: {
                            lg: "1.2rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".9rem",
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
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <FiberManualRecord
                        sx={{
                          fontSize: {
                            lg: "1.2rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".9rem",
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
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <FiberManualRecord
                        sx={{
                          fontSize: {
                            lg: "1.2rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".9rem",
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
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>{" "}
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Accordion
              sx={{
                mt: { lg: "1rem", md: "1rem", sm: ".8rem", xs: "0.8rem" },
              }}
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
                          lg: "1.7rem",
                          md: "1.5rem",
                          sm: "1.4rem",
                          xs: "1.4rem",
                        },
                      }}
                    />
                  ) : (
                    <Add
                      sx={{
                        color: "#152259",
                        fontSize: {
                          lg: "1.7rem",
                          md: "1.5rem",
                          sm: "1.4rem",
                          xs: "1.4rem",
                        },
                      }}
                    />
                  )
                }
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Box sx={{ m: "0 .6rem 0 0rem" }}>
                  <Verified
                    sx={{
                      color: expanded === "panel3" ? "#F99417" : "#152259",
                      fontSize: "1.5rem",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontWeight: "500",
                    width: "98%",
                    fontSize: {
                      lg: "1rem",
                      md: "1rem",
                      sm: ".9rem",
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
                    <ListItemIcon>
                      <FiberManualRecord
                        sx={{
                          fontSize: {
                            lg: "1.2rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".9rem",
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
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <FiberManualRecord
                        sx={{
                          fontSize: {
                            lg: "1.2rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".9rem",
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
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <FiberManualRecord
                        sx={{
                          fontSize: {
                            lg: "1.2rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".9rem",
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
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemIcon>
                      <FiberManualRecord
                        sx={{
                          fontSize: {
                            lg: "1.2rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".9rem",
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
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <FiberManualRecord
                        sx={{
                          fontSize: {
                            lg: "1.2rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".9rem",
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
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Accordion
              sx={{
                mt: { lg: "1rem", md: "1rem", sm: ".8rem", xs: "0.8rem" },
              }}
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
                        color: "#F99417",
                        fontSize: {
                          lg: "1.7rem",
                          md: "1.5rem",
                          sm: "1.4rem",
                          xs: "1.4rem",
                        },
                      }}
                    />
                  ) : (
                    <Add
                      sx={{
                        color: "#152259",
                        fontSize: {
                          lg: "1.7rem",
                          md: "1.5rem",
                          sm: "1.4rem",
                          xs: "1.4rem",
                        },
                      }}
                    />
                  )
                }
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Box sx={{ m: "0 .6rem 0 0rem" }}>
                  <Verified
                    sx={{
                      color: expanded === "panel4" ? "#F99417" : "#152259",
                      fontSize: "1.5rem",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontWeight: "500",
                    width: "98%",
                    fontSize: {
                      lg: "1rem",
                      md: "1rem",
                      sm: ".9rem",
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
                    <ListItemIcon>
                      <FiberManualRecord
                        sx={{
                          fontSize: {
                            lg: "1.2rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".9rem",
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
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <FiberManualRecord
                        sx={{
                          fontSize: {
                            lg: "1.2rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".9rem",
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
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <FiberManualRecord
                        sx={{
                          fontSize: {
                            lg: "1.2rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".9rem",
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
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemIcon>
                      <FiberManualRecord
                        sx={{
                          fontSize: {
                            lg: "1.2rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".9rem",
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
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemIcon>
                      <FiberManualRecord
                        sx={{
                          fontSize: {
                            lg: "1.2rem",
                            md: "1rem",
                            sm: ".9rem",
                            xs: ".9rem",
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
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
