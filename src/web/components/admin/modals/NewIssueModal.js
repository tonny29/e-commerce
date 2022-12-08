import React, { useRef, useState } from "react";
import { Autocomplete, Grid, TextField, Typography } from '@mui/material';
import { CancelButton, PrimaryButton } from "../../core/buttons/AppButtons";
import MediumModal from "../../core/modals/MediumModal";
import JoditEditor from "jodit-react";

const NewIssueModal = (props) => {
    const editor = useRef(null)
    const [content, setContent] = useState('')
    const { openModal, setOpenModal } = props;
    const project = () => {
        return ["ERP (ERP)"];
    }
    const IssueType = () => {
        return ["Task", "Bug", "Story", "Epic"];
    }
    const status = () => {
        return ["Select For Development", "In Progress", "Done", "BackLog", "Review"];
    }
    const Assignee = () => {
        return ["Nazmul Hasan", "Aimun Nahar", "Ashutush Dash", "Zannatul Nayem Tonny"];
    }
    const Priority = () => {
        return ["Medium", "Highest", "High", "Lowest", "Low"];
    }
    const closeModal = () => {
        setOpenModal(false);
    }

    return (
        <MediumModal open={openModal} setOpen={setOpenModal}>
            <Typography variant="h5" gutterBottom>
                Create Issue
            </Typography>
            <Grid container spacing={2}>
                <Grid item md={6} lg={6} xs={12}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={project()}
                        renderInput={(params) => <TextField
                            required
                            {...params}
                            label="Project"

                        />}
                        size='small'
                    />
                </Grid>
                <Grid item md={6} lg={6} xs={12}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={IssueType()}
                        renderInput={(params) => <TextField
                            required
                            {...params}
                            label="Issue Type"

                        />}
                        size='small'
                    />
                </Grid>
                <Grid item md={6} lg={6} xs={12}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={status()}
                        renderInput={(params) => <TextField
                            required
                            {...params}
                            label="Status"

                        />}
                        size='small'
                    />
                </Grid>
                <Grid item md={6} lg={6} xs={12}>
                    <TextField
                        required
                        fullWidth
                        size={"small"}
                        label={"Summary"}
                    />
                </Grid>
                <Grid item md={12} lg={12} xs={12}>
                    <JoditEditor
                        className="editor"
                        ref={editor}
                        value={content}
                        tabIndex={1}
                        onBlur={newContent => setContent(newContent)}
                        onChange={newContent => { }}
                    />
                </Grid>
                <Grid item md={6} lg={6} xs={12}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={Assignee()}
                        renderInput={(params) => <TextField
                            required
                            {...params}
                            label="Assignee"

                        />}
                        size='small'
                    />
                </Grid>
                <Grid item md={6} lg={6} xs={12}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={Priority()}
                        renderInput={(params) => <TextField
                            required
                            {...params}
                            label="Priority"

                        />}
                        size='small'
                    />
                </Grid>

                <Grid item md={12} lg={12} xs={12}>
                    <PrimaryButton sx={{ mt: 1 }}>Create</PrimaryButton>
                    <CancelButton sx={{ mt: 1, ml: 2 }} onClick={() => closeModal()}>Cancel</CancelButton>

                </Grid>
            </Grid>
        </MediumModal>
    )
}

export default NewIssueModal;