import React from "react";
import { Grid, Typography } from '@mui/material';
import BigModal from "../../core/modals/BigModal";



const FeatureModal = (props) => {
    const { openModal, setOpenModal } = props;

    return (
        <BigModal open={openModal} setOpen={setOpenModal}>

            <Typography variant="h5" gutterBottom>
                New Feature
            </Typography>
            <Grid spacing={2} sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                <Grid item md={6} lg={6} xs={6}>
                    <Typography variant="h6" gutterBottom>
                        Package Information
                    </Typography>
                </Grid>
            </Grid>

        </BigModal>
    )
}

export default FeatureModal;