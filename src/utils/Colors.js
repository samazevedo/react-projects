// function componentToHex(c) {
//     var hex = c.toString(16)
//     return hex.length === 1 ? '0' + hex : hex
// }
// function rgbToHex(r, g, b) {
//     return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
// }

// export default rgbToHex

// convert from hex to rgb

export const hexToRgb = (color) => {
    if (color.length === 4) {
        color = color.replace(/([^#])/g, '$1$1')
    }
    if (color.length === 7) {
        color = color.replace(/([^#])/g, '$1$1')
    }
}

// export const hexToRgb = (hex) => {
//     let r = 0
//     let g = 0
//     let b = 0

//     // 3 digits
//     if (hex.length === 4) {
//         r = Number('0x' + hex[1] + hex[1])
//         g = Number('0x' + hex[2] + hex[2])
//         b = Number('0x' + hex[3] + hex[3])
//         // 6 digits
//     } else if (hex.length === 7) {
//         r = Number('0x' + hex[1] + hex[2])
//         g = Number('0x' + hex[3] + hex[4])
//         b = Number('0x' + hex[5] + hex[6])
//     }
//     return { r, g, b }
// }

// convert from rgb to hex
export const rgbToHex = (r, g, b) => {
    let hexR = r.toString(16)
    let hexG = g.toString(16)
    let hexB = b.toString(16)

    if (hexR.length === 1) hexR = '0' + r
    if (hexG.length === 1) hexG = '0' + g
    if (hexB.length === 1) hexB = '0' + b

    return '#' + hexR + hexG + hexB
}

export const rgbToShadeList = (r, g, b) => {
    let shades = []
    shades.push({ r, g, b })
    shades.push({ r: r * 0.9, g: g * 0.9, b: b * 0.9 })
    shades.push({ r: r * 0.8, g: g * 0.8, b: b * 0.8 })
    shades.push({ r: r * 0.7, g: g * 0.7, b: b * 0.7 })
    shades.push({ r: r * 0.6, g: g * 0.6, b: b * 0.6 })
    shades.push({ r: r * 0.5, g: g * 0.5, b: b * 0.5 })
    shades.push({ r: r * 0.4, g: g * 0.4, b: b * 0.4 })
    shades.push({ r: r * 0.3, g: g * 0.3, b: b * 0.3 })
    shades.push({ r: r * 0.2, g: g * 0.2, b: b * 0.2 })
    shades.push({ r: r * 0.1, g: g * 0.1, b: b * 0.1 })
    return shades
}
