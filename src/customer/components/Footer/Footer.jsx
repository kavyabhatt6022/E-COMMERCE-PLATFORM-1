import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Company{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" sx={{ marginBottom: 2 }}>
              {" "}
              About{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ marginBottom: 2 }}>
              {" "}
              Blog{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ marginBottom: 2 }}>
              {" "}
              Press{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ marginBottom: 2 }}>
              {" "}
              Jobs{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ marginBottom: 2 }}>
              {" "}
              Partners{" "}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Solutions{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" sx={{ marginBottom: 2 }}>
              {" "}
              Insight{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ marginBottom: 2 }}>
              {" "}
              Support{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ marginBottom: 2 }}>
              {" "}
              Commerce{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ marginBottom: 2 }}>
              {" "}
              Analytics{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ marginBottom: 2 }}>
              {" "}
              Marketing{" "}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
           Documentation{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" sx={{ marginBottom: 2 }}>
              {" "}
              Guides{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ marginBottom: 2 }}>
              {" "}
              API Status{" "}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Legal{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" sx={{ marginBottom: 2 }}>
              {" "}
              Claim{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ marginBottom: 2 }}>
              {" "}
              Privacy{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" sx={{ marginBottom: 2 }}>
              {" "}
              Terms{" "}
            </Button>
          </div>



        </Grid>
        <Grid className="pt-20" item xs={12}>
            <Typography variant="body2" component="p" align="center">
                &copyrigtFree; 2024 My Company . All rights are reserved.
            </Typography>
            <Typography variant="body2" component="p" align="center">
                Made with love by Me.
            </Typography>
            <Typography variant="body2" component="p" align="center">
                Icons made by{' '}
                <a href="https://www.iconfinder.com" color="inherit" underline="always">
                   Iconfinder
                </a>{' '}
                from{' '}
                <a href="https://www.canva.com/" color="inherit" underline="always">
                   www.canva.com
                </a>

                
            </Typography>

        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
