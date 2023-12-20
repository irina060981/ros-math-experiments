import { createExamples as createExamples126 } from '@/math-examples/10klass/opredeleniye_logarifma.js'
import { createExamples as createExamples127 } from '@/math-examples/10klass/logarifmicheskoye_tozhdestvo.js'
import { createExamples as createExamples128 } from '@/math-examples/10klass/logarifm.js'

export default class Class10Controller {
    static get dict () {
        return [
            { fn: createExamples126, title: 'Определение логарифма'},
            { fn: createExamples127, title: 'Логарифмическое тождество'},
            { fn: createExamples128, title: 'Логарифм'},
        ]
    }
}
