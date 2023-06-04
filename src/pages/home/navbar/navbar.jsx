import React from "react";
import Logo from "../../../assets/icon/Logo";
import { Button, Container, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

export const Navbar = () => {
  return (
    <Container style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <a>
        <Logo />
      </a>
      <Button
        variant="contained"
        sx={{ background: "#40CAA3", ":hover": { background: "#42bc9a" } }}
        style={{ marginLeft: "30px", marginRight: "10px" }}
      >
        ХОЧУ ПОПРОБОВАТЬ
      </Button>

      <Typography>статьи</Typography>
      <span
        className="navbar__span"
        style={{
          display: "block",
          backgroundColor: "#000",
          width: "11px",
          height: "0.5px",
          transform: "rotate(90deg)",
          opacity: "0.3",
        }}
      ></span>
      <Typography>отзывы</Typography>
      <span
        className="navbar__span"
        style={{
          display: "block",
          backgroundColor: "#000",
          width: "11px",
          height: "0.5px",
          transform: "rotate(90deg)",
          opacity: "0.3",
        }}
      ></span>
      <Typography>сми о нас</Typography>
      <span
        className="navbar__span"
        style={{
          display: "block",
          backgroundColor: "#000",
          width: "11px",
          height: "0.5px",
          transform: "rotate(90deg)",
          opacity: "0.3",
        }}
      ></span>
      <Typography>партнерам</Typography>
      <span
        className="navbar__span"
        style={{
          display: "block",
          backgroundColor: "#000",
          width: "11px",
          height: "0.5px",
          transform: "rotate(90deg)",
          opacity: "0.3",
        }}
      ></span>
      <Typography style={{ marginRight: "45px" }}>контакты</Typography>
      <div>
        <Typography>+7 499 444-69-02</Typography>
        <Typography
          color="blue"
          style={{
            display: "inline-block",
            position: "relative",
            color: "#000",
          }}
        >
          обратный звонок
        </Typography>
      </div>
    </Container>
  );
};
