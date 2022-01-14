import {useState} from "react";
import {Process} from "../Types";
import {ProcessList} from "./ProcessList";
import {ProcessSettingsForm} from "./ProcessSettingsForm";

export default function Layout() {

    const [processes, setProcess] = useState<Process[]>([])

    return (
        <>
            <ProcessList processes={processes}/>
            <ProcessSettingsForm create={(item: Process) =>
                setProcess(processes.concat(item))}
            />
        </>
    )
}