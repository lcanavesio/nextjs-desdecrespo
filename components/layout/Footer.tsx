import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Mail from "@material-ui/icons/Mail";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        TiendLine
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "black",
    color: "white",
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title} - {description}
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          Centro Radial y Televisivo Canal 6 - El Observador del Litoral - San
          Martin 1260 Crespo - Contactos: (343) 4951080 / Whatsapp +54 9 343
          425-4585{" "}
          <a
            className="btn btn-icon btn-whatsapp"
            href="https://api.whatsapp.com/send?phone=5493434254585"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-whatsapp">
              <WhatsAppIcon />{" "}
            </i>
            <span style={{ maxHeight: 42 }}>Escribinos al Whatsapp</span>
          </a>
          <a
            className="btn btn-icon btn-globe"
            href="mailto:elobservadorcrespo@gmail.com"
          >
            <i className="fa fa-globe">
              <Mail />{" "}
            </i>
            <span style={{ maxHeight: 42 }}>Envianos un mail</span>
          </a>
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
