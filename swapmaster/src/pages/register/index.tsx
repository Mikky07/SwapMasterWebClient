import React, { type FC, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Alert } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup'

interface Values {
  username?: string;
  password?: string;
  confirm_password?: string;
  email?: string;
}

const validate = (values: Values) => {
  let errors: Values = {};

  if (!values.username) {
    errors.username = "Обязательно к заполнению";
  } else if (values.username.length > 15) {
    errors.username = "Юзернейм не должен превышать 15 символов!";
  }

  if (!values.password) {
    errors.password = "Обязательно к заполнению";
  } else if (values.password.length < 8) {
    errors.password = "Пароль должен содержать не менее 8 символов!";
  }

  if (!values.confirm_password) {
    errors.confirm_password = "Обязательно к заполнению";
  } else if (
    values.password &&
    values.confirm_password &&
    values.confirm_password !== values.password
  ) {
    errors.confirm_password = "Пароли не совпадают!";
  }

  if (!values.email) {
    errors.email = "Обязательно к заполнению";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Некорректный адрес электронной почты";
  }

  return errors;
};

export const SignUp: FC = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirm_password: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "orange" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {formik.errors.username && formik.touched.username ? (
                  <Alert severity="error">{formik.errors.username}</Alert>
                ) : null}
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="firstName"
                  label="Логин"
                  value={formik.values.username}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                {formik.errors.email && formik.touched.email ? (
                  <Alert severity="error">{formik.errors.email}</Alert>
                ) : null}
                <TextField
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Адрес электронной почты"
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                {formik.errors.password && formik.touched.password ? (
                  <Alert severity="error">{formik.errors.password}</Alert>
                ) : null}
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  id="password"
                />
              </Grid>
              <Grid item xs={12}>
                {formik.errors.confirm_password && formik.touched.confirm_password ? (
                  <Alert severity="error">
                    {formik.errors.confirm_password}
                  </Alert>
                ) : null}
                <TextField
                  required
                  fullWidth
                  name="confirm_password"
                  label="Повторите пароль"
                  type="password"
                  value={formik.values.confirm_password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  id="confirm_password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Зарегестрироваться
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="../enter" variant="body2">
                  У вас уже есть аккаунт? Войти
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};
