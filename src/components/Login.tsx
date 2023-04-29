import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Center from "./Center";

export default function Login() {
  return (
    <Center>
      <Card
        sx={{
          borderRadius: "25px",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          width: "350px",
        }}
      >
        <CardContent
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              my: 2,
            }}
          >
            Представьтесь
          </Typography>
          <TextField
            sx={{
              justifyContent: "center",
              margin: "10px 10px 5px 10px",
              width: "90%",
            }}
            label="Email"
            name="email"
            variant="outlined"
          />
          <TextField
            sx={{
              margin: "5px 10px 10px 10px",
              width: "90%",
            }}
            label="Name"
            name="name"
            variant="outlined"
          />
          <Button
            sx={{
              marginTop: "5px",
              alignItems: "center",
              justifyContent: "center",
              width: "32%",
            }}
            type="submit"
            variant="outlined"
            size="large"
          >
            Поехали
          </Button>
        </CardContent>
      </Card>
    </Center>
  );
}
