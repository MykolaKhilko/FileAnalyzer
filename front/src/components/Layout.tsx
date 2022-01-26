import {useState} from "react";
import {ProcessSettings, ProcessProgress} from "../Types";
import {ProcessList} from "./ProcessList";
import {ProcessSettingsForm} from "./ProcessSettingsForm";
import {get, post} from "../Requests";
import {Div, MainButton} from "../styles/Styles";
import {ProcessItem} from "./ProcessItem";
import {Box, CircularProgress} from "@mui/material";

export default function Layout() {

    const [processes, setProcess] = useState<ProcessSettings[]>([])
    const [processItem, setProcessItem] = useState<ProcessProgress>()
    const [activeProcess, setNew] = useState<ProcessSettings>()
    const [startedNew, setStart] = useState(false)
    const [loading, setLoading] = useState(true)

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
        return setProcess(prev => [...prev, item]);
    }

    function handleProcessFinished(){

    }

    function handleOnClick(){
        const url = "/ProcessDirectoryTest"

        get(url)
    }


    return (
        <Div>
            <ProcessSettingsForm onCreate={handleProcessCreated}/>
            {loading ??
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            }
            <MainButton onClick={handleOnClick}>Test</MainButton>
            {startedNew ??
                <ProcessItem process={activeProcess!!} onFinish={handleProcessFinished}/>
            }
            <ProcessList processes={processes}/>
        </Div>
    )
}