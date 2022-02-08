import {useEffect, useLayoutEffect, useState} from "react";
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


    const [needFetch, setNeedFetch] = useState<boolean>(true)
    const [settings, setSettings] = useState<ProcessSettings[]>([])
    const [processesList, setProcessesList] = useState<ProcessInfo[]>([])
    //const [processItem, setProcessItem] = useState<ProcessProgress>()
    const [activeProcesses, setNew] = useState<ProcessSettings[]>([])
    const [finished, setFinished] = useState(false)

    useLayoutEffect(() => {
        if (needFetch){
            fetchDone()
            fetchActive()
            setNeedFetch(false)
        }
    })

    function handleProcessCreated(item: ProcessSettings) {
        const url = "start-process"
        post(url, item)

        setNew(prev => [...prev, item])
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

    async function fetchDone() {
        const url = "fetch-list"
        const data =  await get(url) as ProcessInfo[];

        setProcessesList(data)
    }

    async function fetchActive(){
        const url = "fetch-active-list"
        const data =  await get(url) as ProcessSettings[];

        setNew(data)
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