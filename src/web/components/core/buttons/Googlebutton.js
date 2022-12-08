import React from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Google from "@mui/icons-material/Google";

const Googlebutton = ({text}) => {
  
  return (
    <>
      <Button
        startIcon={<Google fontSize="small" />}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: '#DE5246', '&:hover':{backgroundColor: '#DE5246'} }}
      >
       {text}
      </Button>
      <Divider style={{ width: "100%" }}>or</Divider>
    </>
  );
};

export default Googlebutton;
