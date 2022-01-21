import {useState} from "react";
import {Process, ProcessProgress} from "../Types";
import {ProcessList} from "./ProcessList";
import {ProcessSettingsForm} from "./ProcessSettingsForm";
import {get, post} from "../Requests";
import {Div, MainButton} from "../styles/Styles";
import {ProcessItem} from "./ProcessItem";

export default function Layout() {

    const [processes, setProcess] = useState<Process[]>([])
    const [processItem, setProcessItem] = useState<ProcessProgress>()
    const [activeProcess, setNew] = useState<Process>()
    const [startedNew, setStart] = useState(false)

    function handleProcessCreated(item: Process) {
        const url = "start-process"

        post(url, item).then(response => {
                if (response.status == 200) {
                    setNew(item)
                    setStart(true)
                }
            }
        )
        //return setProcess(prev => [...prev, item]);
    }

    function handleOnClick(){
        const url = "/ProcessDirectoryTest"

        get(url)
    }


    return (
        <Div>
            <ProcessSettingsForm onCreate={handleProcessCreated}/>
            <MainButton onClick={handleOnClick}>Test</MainButton>
            {startedNew == true ??
                <ProcessItem process={activeProcess!!}/>
            }
            <ProcessList processes={processes}/>
        </Div>
    )
}