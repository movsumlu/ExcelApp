const CODES = {
    A: 65,
    Z: 90
}

function toCell() {
    return `<div class="cell"></div>`
}

function toCollumn(coll) {
    return `
        <div class="column">
           ${coll}
        </div>
        `
}

function createRow(index, content) {
    return `
        <div class="row">
            <div class="row-info">${index ? index : ''}</div>
            <div class="row-data">${content}</div>
        </div>
        `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toCollumn)
        .join('')

    rows.push(createRow(null, cols))

    for (let i = 0; i < rowCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell)
            .join('')

        rows.push(createRow(i + 1, cells))
    }

    return rows.join('')
}