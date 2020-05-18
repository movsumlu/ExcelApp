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
            listeners: ['input', 'click']
        })
    }

    toHTML() {
        return createTable()
    }

    onClick() {
        console.log('onClick')
    }

    onMousedown(event) {
        console.log('onMousemove', event.target)
    }

    onMousemove() {
        console.log('onMousemove')
    }

    onMouseup() {
        console.log('onMouseUp')
    }
}