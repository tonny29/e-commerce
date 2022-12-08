import React from "react";
import { Grid, TextField, Typography, Autocomplete } from '@mui/material';
import { CancelButton, PrimaryButton } from "../../core/buttons/AppButtons";
import MediumModal from "../../core/modals/MediumModal";

const PaymentMethodModal = (props) => {
    const { openModal, setOpenModal } = props;

    const getPurpose = () => {
        return ["Billing", "Package"];
    }

    const closeModal = () => {
        setOpenModal(false);
    }

    return (
        <MediumModal open={openModal} setOpen={setOpenModal}>
            <Typography variant="h5" gutterBottom>
                Payment
            </Typography>
            <Grid container spacing={2}>
                <Grid item md={6} lg={6} xs={6}>
                    <TextField
                        margin={"normal"}
                        required
                        fullWidth
                        size={"small"}
                        label={"Name"}
                        name={"name"}
                        autoFocus={true}
                        sx={{ background: 'white' }}
                    />
                </Grid>

                <Grid item md={6} lg={6} xs={6}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={getPurpose()}
                        renderInput={(params) => <TextField
                            required
                            {...params}
                            label="Purpose"
                            fullWidth

                        />}
                        size='small'
                        fullWidth
                        sx={{ mt: 2 }}
                    />
                </Grid>
                <Grid item md={12} lg={12} xs={12}>
                    <PrimaryButton sx={{ mt: 2 }}>Submit</PrimaryButton>
                    <CancelButton sx={{ mt: 2, ml: 2 }} onClick={() => closeModal()}>Cancel</CancelButton>

                </Grid>
            </Grid>
        </MediumModal>
    )
}

export default PaymentMethodModal;