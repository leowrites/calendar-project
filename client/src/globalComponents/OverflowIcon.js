import { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import { StyledMenuItem, NavbarMenu } from './NavbarMenu'
import Avatar from '@mui/material/Avatar'
import initialToColor from './InitialToColor';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider'

export default function OverflowIcon({ sx, remainCount, remainFriends }) {
    const [anchorEl, setAnchorEl] = useState(null)
    // using md as breakpoints for mobile version
    const handleMenuClose = () => {
        setAnchorEl(null)
    }
    return (
        <>
            <IconButton size='large'
                aria-controls='friend-menu'
                aria-haspopup='true'
                color='inherit'
                onClick={e => setAnchorEl(e.currentTarget)}
                sx={sx}>
                <Avatar
                    sx={{
                        width: 30,
                        height: 30,
                    }}
                    aria-controls='mouse-over-popover'
                    aria-haspopup='true'
                >
                    <Typography>
                        {`+${remainCount}`}
                    </Typography>
                </Avatar>
            </IconButton>
            <NavbarMenu id='friend-menu'
                anchorElNav={anchorEl}
                handleMenuClose={handleMenuClose}>
                {
                    remainFriends.map((v, i) => (
                        <StyledMenuItem key={v._id}>
                            <Avatar
                                sx={{
                                    width: 30,
                                    height: 30,
                                    mr: 1,
                                    backgroundColor: initialToColor(`${v.first[0]}${v.last[0]}`)
                                }}
                                aria-controls='mouse-over-popover'
                                aria-haspopup='true'
                                src={v.profileImg}>
                                <Typography>
                                    {`${v.first[0]}${v.last[0]}`}
                                </Typography>
                            </Avatar>
                            <Typography>
                                {`${v.first} ${v.last}`}
                            </Typography>
                        </StyledMenuItem>
                    ))
                }
            </NavbarMenu>
        </>
    )
}