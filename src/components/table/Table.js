import {
    ExcelComponent
} from '@core/ExcelComponent'
import {
    createTable
} from './table.template'

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
        })
    }

    toHTML() {
        return createTable()
    }

    onClick() {

    }

    onMousedown(event) {

    }

    onMousemove() {

    }

    onMouseup() {

    }
}