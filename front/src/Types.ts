export interface Process {
    path: string,
    names: string,
    extensions: string,
    keywords: string,
    id: number
}

export interface ProcessProgress{
    percentage: number,
    done: string,
    speed: string
}