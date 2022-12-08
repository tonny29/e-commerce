import React from "react";
import { Grid, TextField, Typography, Autocomplete } from '@mui/material';
import BigModal from "../../core/modals/BigModal";
import { CancelButton, PrimaryButton } from "../../core/buttons/AppButtons";

const CustomerModal = (props) => {
    const { openModal, setOpenModal } = props;

    const getOrganisations = () => {
        return ["ABA Company", "GoUpp Ltd", "ABC Company", "XYZ Company"];
    }

    const closeModal = () => {
        setOpenModal(false);
    }

    return (
        <BigModal open={openModal} setOpen={setOpenModal}>
            <Typography variant="h5" gutterBottom>
                New Customer
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
                    <TextField
                        margin={"normal"}
                        required
                        fullWidth
                        size={"small"}
                        label={"Phone"}
                        name={"phone"}
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
                            label="Select Organisation"
                            fullWidth

                        />}
                        size='small'
                        fullWidth
                        sx={{ mt: 2 }}
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
                        sx={{ mt: 2 }}
                    />

                </Grid>

                <Grid item md={12} lg={12} xs={12}>
                    <PrimaryButton sx={{ mt: 2 }}>Create Customer</PrimaryButton>
                    <CancelButton sx={{ mt: 2, ml: 2 }} onClick={() => closeModal()}>Cancel</CancelButton>

                </Grid>
            </Grid>
        </BigModal>
    )
}

export default CustomerModal;