export function rgbToHex(ColorRGB) {
    let { r, g, b } = ColorRGB
    let hexR = r.toString(16)
    let hexG = g.toString(16)
    let hexB = b.toString(16)

    if (hexR.length === 1) hexR = `0${hexR}`
    if (hexG.length === 1) hexG = `0${hexG}`
    if (hexB.length === 1) hexB = `0${hexB}`

    return `#${hexR}${hexG}${hexB}`
}
export function hexToRgb(ColorHex) {
    let hex = ColorHex.replace('#', '')
    let r = parseInt(hex.substring(0, 2), 16)
    let g = parseInt(hex.substring(2, 4), 16)
    let b = parseInt(hex.substring(4, 6), 16)

    return { r, g, b }
}

export function rgbToHsv(ColorRGB) {
    let { r, g, b } = ColorRGB

    let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn
    rabs = r / 255
    gabs = g / 255
    babs = b / 255
    v = Math.max(rabs, gabs, babs)
    diff = v - Math.min(rabs, gabs, babs)
    diffc = (c) => (v - c) / 6 / diff + 1 / 2
    percentRoundFn = (num) => Math.round(num * 100) / 100
    if (diff === 0) {
        h = s = 0
    } else {
        s = diff / v
        rr = diffc(rabs)
        gg = diffc(gabs)
        bb = diffc(babs)

        if (rabs === v) {
            h = bb - gg
        } else if (gabs === v) {
            h = 1 / 3 + rr - bb
        } else if (babs === v) {
            h = 2 / 3 + gg - rr
        }
        if (h < 0) {
            h += 1
        } else if (h > 1) {
            h -= 1
        }
    }
    return {
        h: Math.round(h * 360),
        s: percentRoundFn(s * 100),
        v: percentRoundFn(v * 100),
    }
}

export function randomRGBColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    return { r, g, b }
}
export function randomHexColor() {
    let letters = '0123456789ABCDEF '
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}
const randomColor = () => '#' + ((Math.random() * (1 << 24)) | 0).toString(16)
