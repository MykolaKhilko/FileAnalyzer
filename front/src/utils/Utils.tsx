export const getTime = (time: number) => {
    const seconds = time % 60
    const minutes = (time - seconds) / 60

    let sec: string = seconds.toString()
    if (seconds < 10)
        sec = '0' + seconds
    return minutes + ":" + sec
}