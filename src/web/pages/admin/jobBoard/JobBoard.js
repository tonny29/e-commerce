import { CardHeader, Avatar, Box, Checkbox, Grid, Paper, TableCell, TableRow, TextField, Typography, AvatarGroup } from "@mui/material";
import React, { useState } from "react";
import NewIssueModal from "../../../components/admin/modals/NewIssueModal";
import { PrimaryButton } from "../../../components/core/buttons/AppButtons";
import BasicTable from "../../../components/core/table/BasicTable";
import avatar from "./img.jpg";


const demoDataJobBoard = [
    {
        "key": "ERP-49",
        "summary": "Create User Form Modal",
        "assignee": "Aimun Nahar",
        "reporter": "Nazmul Hasan",
        "status": ["In Progress", "Done", "Select For Development", "Review", "BackLog"],
        "resolution": "Unresolved",
        "created": "Nov 10, 2022",
        "update": "Nov 10, 2022",

    },
    {
        "key": "ERP-47",
        "summary": "Make Action Clickable",
        "assignee": "Zannatul Nayem",
        "reporter": "Nazmul Hasan",
        "status": ["In Progress", "Done", "Select For Development", "Review", "BackLog"],
        "resolution": "Unresolved",
        "created": "Nov 9, 2022",
        "update": "Nov 9, 2022",

    },
    {
        "key": "ERP-45",
        "summary": "Explore ERP Features",
        "assignee": "Nazmul Hasan",
        "reporter": "Nazmul Hasan",
        "status": ["In Progress", "Done", "Select For Development", "Review", "BackLog"],
        "resolution": "Unresolved",
        "created": "Nov 7, 2022",
        "update": "Nov 7, 2022",

    },
    {
        "key": "ERP-44",
        "summary": "Create Billing Creation Form",
        "assignee": "Aimun Nahar",
        "reporter": "Nazmul Hasan",
        "status": ["In Progress", "Done", "Select For Development", "Review", "BackLog"],
        "resolution": "Done",
        "created": "Nov 7, 2022",
        "update": "Nov 7, 2022",

    },
    {
        "key": "ERP-30",
        "summary": "Research & Planning",
        "assignee": "Nazmul Hasan",
        "reporter": "Nazmul Hasan",
        "status": ["In Progress", "Done", "Select For Development", "Review", "BackLog"],
        "resolution": "Unresolved",
        "created": "Oct 30, 2022",
        "update": "Oct 30, 2022",

    },
    {
        "key": "ERP-35",
        "summary": "Add Fields For Package Modal",
        "assignee": "Zannatul Nayem",
        "reporter": "Nazmul Hasan",
        "status": ["In Progress", "Done", "Select For Development", "Review", "BackLog"],

        "resolution": "Done",
        "created": "Nov 5, 2022",
        "update": "Nov 5, 2022",

    },


];


const JobBoard = () => {

    const tableHeader = ["Type", "Key", "Summary", "Assignee", "Reporter", "Status", "Resolution", "Created", "Update",]
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [newIssueModal, setNewIssueModal] = useState(false);



    return (
        <>
            <Paper elevation={0} sx={{ mb: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3} md={3} lg={3}>
                        <Typography variant="h5" gutterBottom>
                            Job Board
                        </Typography>
                    </Grid>
                    <Grid item xs={7} md={7} lg={7}>
                        <TextField
                            required
                            type="search"
                            size={"small"}
                            label={"Search"}
                            name={"email"}
                            autoFocus={true}
                            sx={{ background: 'white', width: '80%', margin: 'auto' }}
                        />
                    </Grid>
                    <Grid item xs={2} md={2} lg={2}>
                        <PrimaryButton variant="contained" sx={{ float: 'right', fontSize: '12px' }} onClick={() => setNewIssueModal(true)}>Create Task</PrimaryButton>
                    </Grid>
                </Grid>

            </Paper>
            <Box sx={{ width: '100%' }}>

                <AvatarGroup sx={{ justifyContent: 'flex', float: 'left' }} total={20} >
                    <Avatar src={avatar} />
                    <Avatar src={avatar} />
                    <Avatar src={avatar} />
                    <Avatar src={avatar} />
                    <Avatar src={avatar} />
                    <Avatar src={avatar} />
                </AvatarGroup>
                <PrimaryButton sx={{ ml: 3 }} variant="contained" size="small">My Issues</PrimaryButton>

            </Box>

            <Box sx={{ mt: 5 }}>

                <BasicTable tableHeader={tableHeader} sx={{ padding: '0px' }}>
                    {demoDataJobBoard.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell align="left" sx={{ fontSize: '13px', padding: '0px' }}><Checkbox {...label} defaultChecked /></TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px', padding: '0px' }}>{row?.key}</TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px', padding: '0px' }}>{row?.summary}</TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px', padding: '0px' }}>

                                <CardHeader
                                    sx={{ p: 0 }}
                                    avatar={
                                        <Avatar src={avatar} sx={{ width: 18, height: 18 }} />
                                    }
                                    title={row?.assignee}
                                />
                            </TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px', padding: '0px' }}>
                                <CardHeader
                                    sx={{ p: 0 }}
                                    avatar={
                                        <Avatar src={avatar} sx={{ width: 18, height: 18 }} />
                                    }
                                    title={row?.reporter}
                                />

                            </TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px', padding: '0px' }}>
                                <select id="statusStyle">
                                    {
                                        row.status.map((statusData, index) => <option
                                            value={statusData}
                                            key={index}
                                            className={statusData}
                                        >{statusData}</option>)
                                    }

                                </select>
                            </TableCell>

                            <TableCell align="left" sx={{ fontSize: '13px', padding: '0px' }}>
                                <span className={row?.resolution} id="statusStyle">
                                    {row?.resolution}
                                </span>

                            </TableCell>

                            <TableCell align="left" sx={{ fontSize: '13px', padding: '0px' }}>{row?.created}</TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px', padding: '0px' }}>{row?.update}</TableCell>
                        </TableRow>
                    ))}
                </BasicTable>
            </Box>
            <NewIssueModal openModal={newIssueModal} setOpenModal={setNewIssueModal} />
        </>
    )
}


export default JobBoard;
