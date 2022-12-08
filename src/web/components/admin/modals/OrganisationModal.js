import React from "react";
import { Grid, TextField, Typography, Button } from '@mui/material';
import { CancelButton, PrimaryButton } from "../../core/buttons/AppButtons";
import MediumModal from "../../core/modals/MediumModal";

const OrganisationModal = (props) => {
    const { openModal, setOpenModal } = props;

    const getOrganisations = () => {
        return ["ABA Company", "GoUpp Ltd", "ABC Company", "XYZ Company"];
    }

    const closeModal = () => {
        setOpenModal(false);
    }

    return (
        <MediumModal open={openModal} setOpen={setOpenModal}>
            <Typography variant="h5" gutterBottom>
                New Organisation
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item md={6} lg={6} xs={6} sx={{ mb: 1 }}>
                    <TextField
                        margin={"normal"}
                        required
                        fullWidth
                        size={"small"}
                        label={"Organisation Name"}
                        name={"organisationName"}
                        autoFocus={true}
                        sx={{ background: 'white', m: 0 }}
                    />
                </Grid>
                <Grid item md={6} lg={6} xs={6} sx={{ mb: 1 }}>
                    <TextField
                        margin={"normal"}
                        required
                        fullWidth
                        size={"small"}
                        label={"Website"}
                        name={"website"}
                        autoFocus={true}
                        sx={{ background: 'white', m: 0 }}
                    />
                </Grid>
                <Grid item md={6} lg={6} xs={6} sx={{ mb: 1 }}>
                    <TextField
                        margin={"normal"}
                        required
                        fullWidth
                        size={"small"}
                        label={"Number of Employees"}
                        name={"employees"}
                        autoFocus={true}
                        sx={{ background: 'white', m: 0 }}
                    />
                </Grid>
                <Grid item md={12} lg={12} xs={12} sx={{ mt: 2 }}>
                    <PrimaryButton variant="contained">Submit</PrimaryButton>
                    <CancelButton sx={{ ml: 2 }} variant="contained" onClick={() => closeModal()}>Close</CancelButton>
                </Grid>
            </Grid>
        </MediumModal>
    )
}

export default OrganisationModal;