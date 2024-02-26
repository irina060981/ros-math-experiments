
import { createExamples as createExamples1000 } from '@/math-examples/10klass/koren_n_stepeni.js'
import { createExamples as createExamples1001 } from '@/math-examples/10klass/uravnenia_koeren_n_stepeni.js'
import { createExamples as createExamples1002 } from '@/math-examples/10klass/koren_proizvedeniya_i_drobey.js'
import { createExamples as createExamples1003 } from '@/math-examples/10klass/koren_stepeni.js'
import { createExamples as createExamples1004 } from '@/math-examples/10klass/vyneseniye_mnozhitelya_kornya.js'
import { createExamples as createExamples1005 } from '@/math-examples/10klass/opredeleniye_stepeni.js'
import { createExamples as createExamples1006 } from '@/math-examples/10klass/opredeleniye_stepeni_koren.js'
import { createExamples as createExamples1007 } from '@/math-examples/10klass/vychisleniya_stepen_rats.js'
import { createExamples as createExamples1008 } from '@/math-examples/10klass/proizvedeniye_stepeney.js'
import { createExamples as createExamples1009 } from '@/math-examples/10klass/stepen_proizvedenia.js'
import { createExamples as createExamples1010 } from '@/math-examples/10klass/chastnoye_stepeney.js'
import { createExamples as createExamples1011 } from '@/math-examples/10klass/stepen_chastnogo.js'
import { createExamples as createExamples1012 } from '@/math-examples/10klass/stepen_stepeni.js'
import { createExamples as createExamples1013 } from '@/math-examples/10klass/uravneniya_stepen_rats.js'


import { createExamples as createExamples1020 } from '@/math-examples/10klass/opredeleniye_logarifma.js'
import { createExamples as createExamples1021 } from '@/math-examples/10klass/logarifmicheskoye_tozhdestvo.js'
import { createExamples as createExamples1022 } from '@/math-examples/10klass/logarifm.js'

export default class Class10Controller {
    static get dict () {
        return [
            { fn: createExamples1000, title: 'Определение корня n-ой степени'},
            { fn: createExamples1001, title: 'Уравнения. Корень n-ой степени'},
            { fn: createExamples1002, title: 'Корень произведения и дроби'},
            { fn: createExamples1003, title: 'Корень степени и степень корня'},
            { fn: createExamples1004, title: 'Вынесение множителя за знак корня'},
            { fn: createExamples1005, title: 'Определение степени с рациональным показателем. Степень'},
            { fn: createExamples1006, title: 'Определение степени с рациональным показателем. Корень'},
            { fn: createExamples1007, title: 'Вычисления. Степень с рациональным показателем'},
            { fn: createExamples1008, title: 'Произведение степеней'},
            { fn: createExamples1009, title: 'Степень произведения'},
            { fn: createExamples1010, title: 'Частное степеней'},
            { fn: createExamples1011, title: 'Степень частного'},
            { fn: createExamples1012, title: 'Степень степени'},
            { fn: createExamples1013, title: 'Уравнения. Степень с рациональным показателем'},

            { fn: createExamples1020, title: 'Определение логарифма'},
            { fn: createExamples1021, title: 'Логарифмическое тождество'},
            { fn: createExamples1022, title: 'Логарифм'},
        ]
    }
}
