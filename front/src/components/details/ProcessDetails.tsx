import {FileInfo} from "../../Types";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem} from "@mui/material";
import {useState} from "react";
import {FileDetails} from "./FileDetails";
import {GeneralButton} from "../styledComponents/GeneralButton";
import {MainButton} from "../styledComponents/MainButton";

interface Props {
    info: FileInfo[]
}

export function ProcessDetails(props: Props) {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            scroll={"body"}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title"></DialogTitle>
            <DialogContent>
                <List sx={{width: '100%'}}>
                    {props.info.map((file, index) => {
                        return (
                            <ListItem key={index}>
                                <FileDetails file={file}/>
                            </ListItem>
                        )
                    })}
                </List>
            </DialogContent>
            <DialogActions>
                <GeneralButton onClick={handleClose}>Cancel</GeneralButton>
                <MainButton onClick={handleClose}>Print</MainButton>
            </DialogActions>
        </Dialog>
    )
}