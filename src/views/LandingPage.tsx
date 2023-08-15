import { useState } from "react";
import "../styles/styles.scss";
import { Button, Grid, TextField } from "@mui/material";
import { landingPage } from "../constants/message";

const LandingPage: any = () => {
  const [leafIndex, setLeafIndex] = useState<Number>();

  const labelList = {
    message: landingPage.message,
  };

  const handleClick = (num: any) => {
    alert(labelList.message + num);
  };

  const handleInputChange = (e: any) => {
    setLeafIndex(Number(e.target.value));
  };

  return (
    <Grid>
      <Grid className="landing-page--title">{landingPage.title}</Grid>
      <Grid item className="textfield">
        <TextField
          type="number"
          value={leafIndex}
          onChange={handleInputChange}
          placeholder={landingPage.textfield}
          size="small"
        />
      </Grid>
      <Grid className="leaf-arr">
        {[...new Array(leafIndex)].map((data: any, index: any) => (
          <Button onClick={() => handleClick(index)} key={index}>
            <Grid
              className={
                (index + 1) % 6 === 0
                  ? "leaf six"
                  : (index + 1) % 2 === 0
                  ? "leaf even"
                  : "leaf"
              }
              key={index}
            >
              <Grid className="button-center">{index + 1}</Grid>
            </Grid>
          </Button>
        ))}
      </Grid>
    </Grid>
  );
};

export default LandingPage;
