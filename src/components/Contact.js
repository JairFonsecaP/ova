import React from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";

const Contact = () => {
  const button = { margin: "10px auto" };
  const avatar = { backgroundColor: "#ff1780" };
  const paper = { padding: "20px 30px", width: "300px", margin: "20px auto" };
  const titulo = { margin: "0" };
  return (
    <Grid>
      <Paper elevation={20} style={paper}>
        <Grid align="center">
          <Avatar style={avatar}>
            <MailOutlineRoundedIcon />
          </Avatar>
          <h2 style={titulo}>Contactanos</h2>
          <Typography variant="caption">
            Llena este formulario y nos pondremos en contacto contigo a la
            brevedd
          </Typography>
        </Grid>
        <form>
          <TextField fullWidth label="Name" placeholder="Ingresa tu nombre" />
          <TextField
            fullWidth
            label="Email"
            placeholder="Ingresa un e-mail valido"
          />
          <TextField fullWidth label="Telefono" placeholder="Te llamaremos" />
          <TextField fullWidth label="Comentario" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={button}
          >
            Enviar
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Contact;
