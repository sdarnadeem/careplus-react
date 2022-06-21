import React from "react";
import { Grid, Button, Typography, Stack, Avatar, Paper } from "@mui/material";

const SinglePatient = ({
  src,
  name,
  address,
  age,
  phone,
  reg,
  lastAppointment,
}) => {
  return (
    <Paper elevation={1} width="100%" style={{ padding: "8px" }}>
      <Stack direction="row" alignItems="center" spacing={4}>
        <Avatar alt={name} src={src} />
        <Typography variant="body2">{name}</Typography>
        <Typography variant="body2">{age}</Typography>
        <Typography variant="body2">{address}</Typography>
        <Typography variant="body2">{phone}</Typography>
        <Typography variant="body2">{reg}</Typography>
        <Typography variant="body2">{lastAppointment}</Typography>
      </Stack>
    </Paper>
  );
};
const Header = () => {
  return (
    <Paper elevation={1} width="100%" style={{ padding: "8px" }}>
      <Stack direction="row" alignItems="center" spacing={4}>
        <Typography variant="body1">Profile Pic</Typography>
        <Typography variant="body1">Name</Typography>
        <Typography variant="body1">Age</Typography>
        <Typography variant="body1">Address</Typography>
        <Typography variant="body1">Phone</Typography>
        <Typography variant="body1">Registration</Typography>
        <Typography variant="body1">Last Appointment</Typography>
      </Stack>
    </Paper>
  );
};

const Patient = () => {
  return (
    <>
      <Grid container justifyContent="end">
        <Button variant="contained" size="small">
          Add New
        </Button>
      </Grid>
      <Typography variant="h4">Patients List</Typography>

      <Grid container spacing={2}>
        {/* <Header /> */}
        <Grid item>
          <SinglePatient
            name="Nasyx Nadeem"
            src="https://images.unsplash.com/photo-1655693487557-be52fd36955c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            age={20}
            address={"Sagipora Sopore"}
            phone="9149575307"
            reg="02-October-2020"
            lastAppointment="08-March-2022"
          />
        </Grid>
        <Grid item>
          <SinglePatient
            name="Nasyx Nadeem"
            src="https://images.unsplash.com/photo-1655693487557-be52fd36955c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            age={20}
            address={"Sagipora Sopore"}
            phone="9149575307"
            reg="02-October-2020"
            lastAppointment="08-March-2022"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Patient;
