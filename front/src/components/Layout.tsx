import {useState} from "react";
import {Process} from "../Types";
import {ProcessList} from "./ProcessList";
import {ProcessSettingsForm} from "./ProcessSettingsForm";
import {get} from "../Requests";
import {MainButton} from "../styles/Styles";

export default function Layout() {

    const [processes, setProcess] = useState<Process[]>([])

    function handleProcessCreated(item: Process) {
        const url = "/start-process"
        const httpMethod = "POST"

        fetch(url, {method: httpMethod, body:JSON.stringify(item)} ).then()
        return setProcess(prev => [...prev, item]);
    }

    function handleOnClick(){
        const url = "/ProcessDirectoryTest"

        get(url)
    }


    return (
        <>
            <ProcessList processes={processes}/>
            <ProcessSettingsForm onCreate={handleProcessCreated}/>
            <MainButton onClick={handleOnClick}>Test</MainButton>
        </>
    )
}