export interface ProcessSettings {
    path: string,
    names: string[],
    extensions: string[],
    keywords: string[],
    id: number
}

export interface ProcessProgress{
    percentage: number,
    done: number,
    all: number
    timeSpent: number
    foundMatches: number
    finished: boolean
}

export interface ProcessInfo{
    settings: ProcessSettings,
    progress: ProcessProgress
}