import { Avatar, Button, Grid, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import AboutUser from './AboutUser'
import UserContact from "./UserContact";
import DeleteIcon from '@mui/icons-material/Delete';
import ProfileHeader from "./ProfileHeader";


const UserProfile = () => {
    return (
        <div>
            <ProfileHeader />

            <AboutUser />
            <UserContact />
        </div>
    );
}

export default UserProfile;