import {useState} from "react";
import {ProcessSettings, ProcessProgress, ProcessInfo, FileInfo} from "../Types";
import {ProcessList} from "./doneProcess/ProcessList";
import {ProcessSettingsForm} from "./ProcessSettingsForm";
import {get, post} from "../Requests";
import {ActiveProcessItem} from "./activeProcess/ActiveProcessItem";
import {Box, CircularProgress, Snackbar} from "@mui/material";
import {ActiveProcessesList} from "./activeProcess/ActiveProcessesList";
import {ProcessDetails} from "./details/ProcessDetails";
import {Div} from "./styledComponents/Div";
import {Block} from "./styledComponents/Block";

export default function Layout() {

    const [settings, setSettings] = useState<ProcessSettings[]>([])
    const [processesList, setProcessesList] = useState<ProcessInfo[]>([])
    const [processItem, setProcessItem] = useState<ProcessProgress>()
    const [activeProcesses, setNew] = useState<ProcessSettings[]>([])
    const [finished, setFinished] = useState(false)

    function handleProcessCreated(item: ProcessSettings) {
        const url = "start-process"

        post(url, item).then(response => {
                if (response.status == 200) {
                    setNew(prev => [...prev, item])
                    //setStart(true)
                }
            }
        )
        setNew(prev => [...prev, item])
        //setStart(true)
        return setSettings(prev => [...prev, item]);
    }

    function handleProcessFinished(info: ProcessInfo) {
        const act = activeProcesses.filter(deleted => deleted.id !== info.settings.id)
        setNew(act)
        //setStart(false)
        setProcessesList(prev => [...prev, info])

        setFinished(true)
    }

    function handleProcessDeleted(id: number){
        const list = processesList.filter(p => p.settings.id !== id)
        setProcessesList(list)

        const url = "delete-process"

        post(url, id).then(r => {})
    }

    function componentDidMount() {
        const url = "fetch-list"
    }

    return (
        <Div>
            <Block>
                <ProcessSettingsForm onCreate={handleProcessCreated}/>
                <ActiveProcessesList processes={activeProcesses} onFinish={handleProcessFinished}/>
            </Block>

            <ProcessList processes={processesList} onProcessDeleted={handleProcessDeleted}/>

            <Snackbar
                open={finished}
                autoHideDuration={6000}
                message="Process finished"
                onClose={() => setFinished(false)}
            />
        </Div>
    )
}
//<ActiveProcessItem process={activeProcess!!} onFinish={handleProcessFinished}/>