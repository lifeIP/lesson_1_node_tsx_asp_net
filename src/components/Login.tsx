import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Center from "./Center";
import useForm from "../hooks/useForm";

const getFreshModel = () => ({
  name: "",
  email: "",
});

export default function Login() {
  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(getFreshModel);

  const login = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validate()) console.log(values);
  };

  const validate = () => {
    let temp = {
      email: "",
      name: "",
    };
    temp.email =
      /\S+@\S+\.\S+/.test(values.email) &&
      !(
        /\S+ \S+@\S+\.+\S+/.test(values.email) ||
        /\S+@\S+\.+\S+ \S+/.test(values.email) ||
        / \S+\S+@\S+\.+\S+/.test(values.email)
      )
        ? ""
        : "Email is not valid";
    temp.name = values.name != "" ? "" : "This field is required.";
    setErrors(temp);
    return Object.values(temp).every((x) => x == "");
  };

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
          <form noValidate onSubmit={login}>
            <TextField
              sx={{
                justifyContent: "center",
                margin: "10px 10px 5px 10px",
                width: "90%",
              }}
              label="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
              variant="outlined"
              {...(errors.email && { errors: true, helperText: errors.email })}
            />
            <TextField
              sx={{
                margin: "5px 10px 10px 10px",
                width: "90%",
              }}
              label="Name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
              variant="outlined"
              {...(errors.name && { errors: true, helperText: errors.name })}
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
          </form>
        </CardContent>
      </Card>
    </Center>
  );
}
