import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { navbar } from "../Static/utils";

const Drawer1 = ({ open, setOpen }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Drawer
        open={matches && open}
        PaperProps={{
          sx: {
            width: "150px",
            backgroundColor: "#1c1c1c",
            color: "white",
            borderTopRightRadius: "50px",
            borderBottomRightRadius: "50px",
          },
        }}
      >
        <IconButton
          sx={{
            color: "white",
            marginLeft: "80px",
            cursor: "pointer",
          }}
          onClick={() => setOpen(false)}
        >
          {theme.direction === "ltr" ? <CloseIcon /> : <CloseIcon />}
        </IconButton>

        <List>
          {navbar.map((e, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton href={e.path} sx={{ textAlign: "center" }}>
                <ListItemText primary={e.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Drawer1;
