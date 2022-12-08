import React from "react";
import { Grid, TextField, Typography, Autocomplete } from '@mui/material';
import BigModal from "../../core/modals/BigModal";
import { CancelButton, PrimaryButton } from "../../core/buttons/AppButtons";

const BillingModal = (props) => {
    const { openModal, setOpenModal } = props;

    const getOrganisations = () => {
        return ["Package one", "Package two", "Package three"];
    }
    const closeModal = () => {
        setOpenModal(false);
    }
const handleSubmit=()=>{
    
}

    return (
        <BigModal open={openModal} setOpen={setOpenModal}>
            <Typography variant="h5" gutterBottom>
                New Customer Billing
            </Typography>
            <Grid container spacing={2}>
                <Grid item md={4} lg={4} xs={4}>
                    <TextField
                        margin={"normal"}
                        required
                        fullWidth
                        size={"small"}
                        label={"First Name"}
                        name={"firstName"}
                        autoFocus={true}
                        sx={{ background: 'white' }}
                        disabled
                    />
                </Grid>
                <Grid item md={4} lg={4} xs={4}>
                    <TextField
                        margin={"normal"}
                        required
                        fullWidth
                        size={"small"}
                        label={"Last Name"}
                        name={"lastName"}
                        autoFocus={true}
                        sx={{ background: 'white' }}
                        disabled
                    />
                </Grid>
                <Grid item md={4} lg={4} xs={4}>
                    <TextField
                        margin={"normal"}
                        required
                        fullWidth
                        size={"small"}
                        label={"Email"}
                        name={"email"}
                        autoFocus={true}
                        sx={{ background: 'white' }}
                    />
                </Grid>
                <Grid item md={4} lg={4} xs={4}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={getOrganisations()}
                        renderInput={(params) => <TextField
                            required
                            {...params}
                            label="Select Package"
                            fullWidth

                        />}
                        size='small'
                        fullWidth
                    />

                </Grid>
                <Grid item md={4} lg={4} xs={4}>
                    <TextField
                        required
                        fullWidth
                        size={"small"}
                        label={"Price"}
                        name={"price"}
                        autoFocus={true}
                        sx={{ background: 'white' }}
                        disabled
                    />
                </Grid>
                <Grid item md={4} lg={4} xs={4}>
                    <TextField
                        required
                        fullWidth
                        size={"small"}
                        label={"Discount"}
                        name={"discount"}
                        autoFocus={true}
                        sx={{ background: 'white' }}
                      
                    />
                </Grid>
                <Grid item md={4} lg={4} xs={4}>
                    <TextField
                        required
                        fullWidth
                        size={"small"}
                        label={"Total"}
                        name={"total"}
                        autoFocus={true}
                        sx={{ background: 'white' }}
                      
                    />
                </Grid>
            </Grid>
            <Grid item md={12} lg={12} xs={12} sx={{ mt: 2 }}>
                    <PrimaryButton sx={{ mt: 2 }} variant="contained" type="submit" onSubmit={handleSubmit}>Create Package</PrimaryButton>
                    <CancelButton sx={{ ml: 2, mt: 2 }} variant="contained" onClick={() => closeModal()}>Close</CancelButton>
                </Grid>
        </BigModal>
    )
}

export default BillingModal;