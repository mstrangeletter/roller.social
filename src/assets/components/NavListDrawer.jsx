
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import InboxIcon from "@mui/icons-material/Inbox"
import DraftsIcon from "@mui/icons-material/Drafts"
import DeleteIcon from '@mui/icons-material/Delete';

export default function NavListDrawer() {
    return <Box sx={{
        width: 250,
        height: "100%"
    }}>
        <nav>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItem>
                    <Divider />
                    <nav>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <DeleteIcon />
                                </ListItemIcon>
                                <ListItemButton>
                                    <ListItemText> Trash </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
            </List>
        </nav>
    </Box>
}