const FormatTimeString = (second) => {
    let modSecond = second % 60;
    let minutes = Math.floor(second / 60)
    return `${minutes}:${modSecond < 10 ? '0' + modSecond : modSecond}`
}

export default FormatTimeString;