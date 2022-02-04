import {useState} from "react";
import {ProcessSettings, ProcessProgress, ProcessInfo} from "../Types";
import {ProcessList} from "./ProcessList";
import {ProcessSettingsForm} from "./ProcessSettingsForm";
import {get, post} from "../Requests";
import {Block, Div, MainButton, } from "../styles/Styles";
import {ProcessItem} from "./ProcessItem";
import {Box, CircularProgress} from "@mui/material";
import {ActiveProcessesList} from "./ActiveProcessesList";

export default function Layout() {

    const [setttings, setSettings] = useState<ProcessSettings[]>([])
    const [processesList, setProcessesList] = useState<ProcessInfo[]>([])
    const [processItem, setProcessItem] = useState<ProcessProgress>()
    const [activeProcesses, setNew] = useState<ProcessSettings[]>([])
    //const [startedNew, setStart] = useState(false)
    const [loading, setLoading] = useState(false)

    function handleProcessCreated(item: ProcessSettings) {
        const url = "start-process"
        setLoading(true)

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
    }

    function handleProcessDeleted(id: number){
        const list = processesList.filter(p => p.settings.id !== id)
        setProcessesList(list)

        //to server delete
    }

    function handleProcessDetails(id: number){

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

            <ProcessList processes={processesList} onProcessDeleted={handleProcessDeleted} onProcessDetails={handleProcessDetails}/>
        </Div>
    )
}
//<ProcessItem process={activeProcess!!} onFinish={handleProcessFinished}/>