export const getTime = (time: number) => {
    const seconds = time % 60
    const minutes = (time - seconds) / 60
    return minutes + ":" + seconds
}