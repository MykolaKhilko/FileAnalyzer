import {FileInfo} from "../../Types";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem} from "@mui/material";
import {useEffect, useState} from "react";
import {FileDetails} from "./FileDetails";
import {GeneralButton} from "../styledComponents/GeneralButton";
import {MainButton} from "../styledComponents/MainButton";

interface Props {
    info: FileInfo[]
    open: boolean
    onClose(): void
}

export function ProcessDetails(props: Props) {
    const [open, setOpen] = useState<boolean>(props.open);
    useEffect(() => setOpen(props.open))

    const handleClose = () => {
        setOpen(false);
        props.onClose()
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            scroll={"body"}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            fullWidth={false}
            maxWidth={"xl"}
            sx={{marginTop: '2%'}}
        >
            <DialogTitle sx={{background: '#5f0a87'}}/>
            <DialogContent sx={{background: 'linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)'}}>
                <List sx={{width: '100%'}}>
                    {props.info.map((file, index) => {
                        return (
                            <ListItem key={index} sx={{border: "3px solid rgba(249, 105, 14, 1)", marginTop: '2%', borderRadius: 5}}>
                                <FileDetails file={file}/>
                            </ListItem>
                        )
                    })}
                </List>
            </DialogContent>
            <DialogActions sx={{background: "#a4508b"}}>
                <GeneralButton onClick={handleClose}>Cancel</GeneralButton>
                <MainButton onClick={handleClose}>Print</MainButton>
            </DialogActions>
        </Dialog>
    )
}