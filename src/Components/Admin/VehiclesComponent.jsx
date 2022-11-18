import React, { useState, useEffect } from 'react';
import { Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Chart from "react-apexcharts";
import { getVehicleCount } from '../../utils/api/admin';

const VehiclesComponent = () => {

  const [vehicleType, setVehicleType] = useState(["A-Bicycle", "B-Car", "C-Lorry", "D-Bus", "G-Agricultural", "J-Special Purpose"]);

  const [series1, setSeries1] = useState([]);
  const [series2, setSeries2] = useState([]);
  let [total, setTotal] = useState("0");

  useEffect(() => {

    async function fetchData() {

        try {
          
          let response = await getVehicleCount();

          let petVehicleCount = response.petrolVelCount; 
          let dieVehicleCount = response.dieselVelCount; 

          if (response.status === 'ok') {
            setSeries1(petVehicleCount);
            setSeries2(dieVehicleCount);
          }
          else {
              console.log(response.error);
          }
          let sum = 0
          for (let i = 0; i < vehicleType.length; i++) {
            sum += petVehicleCount[i] + dieVehicleCount[i];
          };
          setTotal(sum);
        
        }
        catch (err) {
            console.log(err)
        }
    }

    fetchData();
    
  }, []);

  // Petrol vehicles details
  const options1 = {
    labels: vehicleType,
    plotOptions: {
      pie: {
        donut: {
          size: "60px",
          labels: {
            show: true,
            total: {
              show: true,
              fontSize: "20px",
              color: "#000000",
            },
          },
        },
      },
    },
  };

  //Diesel vehicles details
  const options2 = {
    labels: vehicleType.slice(1,6),
    plotOptions: {
      pie: {
        donut: {
          size: "60px",
          labels: {
            show: true,
            total: {
              show: true,
              fontSize: "20px",
              color: "#000000",
            },
          },
        },
      },
    },
  };

  return (
    <Container>
      <Grid item xs={12} sx={{ pl: { xs: "unset", lg: 3 }, mt: -3 }}>
        <h1>Vehicle Details</h1>
      </Grid>
      <Grid
        marginY={2}
        paddingY={1}
        sx={{ backgroundColor: "#dadada", borderRadius: 3 }}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        textAlign={"center"}
        container
      >
        <Grid item xs={8} sm={6} md={4}>
          <Typography variant="h5" marginY={0}>
            Total Registered Vehicle:
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          md={3}
          sx={{ backgroundColor: "#ffffff", borderRadius: 3 }}
        >
          <Typography variant="h5" marginY={0} paddingY={1}>
            {total}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        marginY={2}
        container
        display="flex"
        alignItems={"center"}
        justifyContent="space-around"
      >
        <Grid
          item
          xs={11}
          sm={9}
          md={5}
          marginY={2}
          sx={{ backgroundColor: "#dadada", borderRadius: 8 }}
        >
          <Typography variant="h5" marginY={2} textAlign={"center"}>
            Petrol Vehicles
          </Typography>
          <Grid marginY={2}>
            <Chart
              options={options1}
              series={series1}
              type="donut"
              width="100%"
              //height={500}
            ></Chart>
          </Grid>
        </Grid>
        <Grid
          item
          xs={11}
          sm={9}
          md={5}
          marginY={2}
          sx={{ backgroundColor: "#dadada", borderRadius: 8 }}
        >
          <Typography variant="h5" marginY={2} textAlign={"center"}>
            Diesel Vehicles
          </Typography>
          <Grid marginY={2}>
            <Chart
              options={options2}
              series={series2.slice(1,6)}
              type="donut"
              width="100%"
              //height={500}
            ></Chart>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VehiclesComponent;
