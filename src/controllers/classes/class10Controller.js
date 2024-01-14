import { createExamples as createExamples1000 } from '@/math-examples/10klass/opredeleniye_logarifma.js'
import { createExamples as createExamples1001 } from '@/math-examples/10klass/logarifmicheskoye_tozhdestvo.js'
import { createExamples as createExamples1002 } from '@/math-examples/10klass/logarifm.js'

export default class Class10Controller {
    static get dict () {
        return [
            { fn: createExamples1000, title: 'Определение логарифма'},
            { fn: createExamples1001, title: 'Логарифмическое тождество'},
            { fn: createExamples1002, title: 'Логарифм'},
        ]
    }
}
