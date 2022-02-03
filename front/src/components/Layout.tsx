import {useState} from "react";
import {ProcessSettings, ProcessProgress, ProcessInfo} from "../Types";
import {ProcessList} from "./ProcessList";
import {ProcessSettingsForm} from "./ProcessSettingsForm";
import {get, post} from "../Requests";
import {Div, MainButton} from "../styles/Styles";
import {ProcessItem} from "./ProcessItem";
import {Box, CircularProgress} from "@mui/material";

export default function Layout() {

    const [setttings, setSettings] = useState<ProcessSettings[]>([])
    const [processesList, setProcessesList] = useState<ProcessInfo[]>([])
    const [processItem, setProcessItem] = useState<ProcessProgress>()
    const [activeProcess, setNew] = useState<ProcessSettings>()
    const [startedNew, setStart] = useState(false)
    const [loading, setLoading] = useState(false)

    function handleProcessCreated(item: ProcessSettings) {
        const url = "start-process"
        setLoading(true)

        post(url, item).then(response =>
            {
                if (response.status == 200)
                {
                    setNew(item)
                    setStart(true)
                }
            }
        )
        setNew(item)
        setStart(true)
        return setSettings(prev => [...prev, item]);
    }

    function handleProcessFinished(info: ProcessInfo) {
        //setNew()
        setStart(false)
        setProcessesList(prev => [...prev, info])
    }

    function handleOnClick(){
        const url = "/ProcessDirectoryTest"

        get(url)
    }

    function componentDidMount() {
        const url = "fetch-list"
    }

    return (
        <Div>
            <ProcessSettingsForm onCreate={handleProcessCreated}/>

            <MainButton onClick={handleOnClick}>Test</MainButton>
            <div>
            {startedNew ?
                <ProcessItem process={activeProcess!!} onFinish={handleProcessFinished}/>
                : <div></div>
            }
            </div>
            <ProcessList processes={processesList}/>
        </Div>
    )
}