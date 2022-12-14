import React, { useState, useEffect } from 'react';
import { Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Chart from "react-apexcharts";
import { getRegisteredStationCount } from "../../utils/api/admin";


//main function
const OngoingComponent = () => {

  const [ceypetcoCount, setCeypetcoCount] = useState();
  const [iocCount, setIocCount] = useState();

  useEffect(() => {

    async function fetchData() {

        try {

            let ceypetcoResponse = await getRegisteredStationCount("ceypetco");

            let ceypetcoCount = ceypetcoResponse.stationCount;

            if (ceypetcoResponse.status === 'ok') {
              setCeypetcoCount(ceypetcoCount)
            }
            else {
                console.log(ceypetcoResponse.error);
            }

            let iocResponse = await getRegisteredStationCount("ioc");

            let iocCount = iocResponse.stationCount;

            if (iocResponse.status === 'ok') {
              setIocCount(iocCount)
            }
            else {
                console.log(iocResponse.error);
            }

        }
        catch (err) {
            console.log(err)
        }
    }

    fetchData();
    
  }, []);


  //data for pie chart
  const options1 = {
    labels: ["CEYPETCO", "IOC"],
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
  const series1 = [ceypetcoCount, iocCount];

  return (
    <Container>
      <Grid
        marginY={2}
        container
        display="flex"
        alignItems={"center"}
        justifyContent="space-around"
      >
        <Grid
          item
          xs={12}
          sm={9}
          md={5}
          marginY={2}
          sx={{ backgroundColor: "#dadada", borderRadius: 8 }}
        >
          <Typography variant="h5" marginY={2} textAlign={"center"}>
            Station Details
          </Typography>
          <Grid marginY={0}>
            <Chart
              options={options1}
              series={series1}
              type="donut"
              width="100%"
              height={500}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OngoingComponent;
