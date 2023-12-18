import { createExamples as createExamples1 } from '@/math-examples/7klass/znacheniye_vyrazheniya.js'
import { createExamples as createExamples2 } from '@/math-examples/7klass/chastnoye_stepeney.js'
import { createExamples as createExamples3} from '@/math-examples/7klass/proizvedeniye_stepeney.js'
import { createExamples as createExamples4} from '@/math-examples/7klass/stepen_stepeni.js'
import { createExamples as createExamples5 } from '@/math-examples/7klass/lineynyye_uravneniya.js'
import { createExamples as createExamples6 } from '@/math-examples/7klass/sistemy_sposob_slozheniya.js'
import { createExamples as createExamples7 } from '@/math-examples/7klass/proizvedeniye_v_vide_stepeni.js'
import { createExamples as createExamples8 } from '@/math-examples/7klass/stepen_chastnogo.js'
import { createExamples as createExamples9 } from '@/math-examples/7klass/stepen_proizvedeniya.js'
import { createExamples as createExamples10 } from '@/math-examples/7klass/kvdarat_summy_i_kvadrat_raznosti.js'
import { createExamples as createExamples11 } from '@/math-examples/7klass/proizvedeniye_raznosti_na_summu.js'
import { createExamples as createExamples12 } from '@/math-examples/7klass/raznost_kvadratov.js'
import { createExamples as createExamples13 } from '@/math-examples/7klass/de_kvdarat_summy_i_kvadrat_raznosti.js'
import { createExamples as createExamples14 } from '@/math-examples/7klass/summa_raznost_kubov.js'
import { createExamples as createExamples15 } from '@/math-examples/7klass/de_summa_raznost_kubov.js'
import { createExamples as createExamples16 } from '@/math-examples/7klass/privedeniye_podobnykh_slagayemykh.js'
import { createExamples as createExamples17 } from '@/math-examples/7klass/vyrazheniya_desyatichnykh_drobi.js'
import { createExamples as createExamples18 } from '@/math-examples/7klass/vyrazheniya_drobi.js'
import { createExamples as createExamples19 } from '@/math-examples/7klass/vyrazheniya_ratsionalnyye_vychisleniya.js'
import { createExamples as createExamples20 } from '@/math-examples/7klass/raspredelitelnoye_svoystvo.js'
import { createExamples as createExamples21 } from '@/math-examples/7klass/odnochleny.js'
import { createExamples as createExamples22 } from '@/math-examples/7klass/odnochlen_na_mnogochlen.js'
import { createExamples as createExamples23 } from '@/math-examples/7klass/vyneseniye_za_skobki.js'
import { createExamples as createExamples24 } from '@/math-examples/7klass/mnogochlen_na_mnogochlen.js'
import { createExamples as createExamples25 } from '@/math-examples/7klass/metod_gruppirovki.js'
import { createExamples as createExamples26 } from '@/math-examples/7klass/proizvedeniye_odnochlenov.js'
import { createExamples as createExamples27 } from '@/math-examples/7klass/vozvedeniye_odnochlena_stepen.js'
import { createExamples as createExamples28 } from '@/math-examples/7klass/mnogochleny_standartnyy_vyid.js'
import { createExamples as createExamples29 } from '@/math-examples/7klass/summa_raznost_mnogochlenov.js'
import { createExamples as createExamples30 } from '@/math-examples/7klass/vyrazheniya_sravneniy.js'


export default class Class7Controller {
    static get dict () {
        return [
            { fn: createExamples1, title: 'Значение выражений' },
            { fn: createExamples2, title: 'Частное степеней' },
            { fn: createExamples3, title: 'Произведение степеней' },
            { fn: createExamples4, title: 'Степень степени' },
            { fn: createExamples5, title: 'Линейные уравнения' },
            { fn: createExamples6, title: 'Системы уравнений. Способ Сложения.' },
            { fn: createExamples7, title: 'Произведение в виде степени' },
            { fn: createExamples8, title: 'Степень частного' },
            { fn: createExamples9, title: 'Степень произведения' },
            { fn: createExamples10, title: 'Квадрат суммы и разности двух выражений' },
            { fn: createExamples11, title: 'Произведение разности на сумму' },
            { fn: createExamples12, title: 'Разность квадратов' },
            { fn: createExamples13, title: 'Разложение на множители.Квадрат суммы и разности.' },
            { fn: createExamples14, title: 'Сумма и разность кубов' },
            { fn: createExamples15, title: 'Разложение на множители. Сумма и разность кубов' },
            { fn: createExamples16, title: 'Приведение подобных слагаемых' },
            { fn: createExamples17, title: 'Числовые выражения. Десятичные дроби' },
            { fn: createExamples18, title: 'Числовые выражения. Дроби' },
            { fn: createExamples19, title: 'Числовые выражения. Рациональные вычисления' },
            { fn: createExamples20, title: 'Распределительное свойство умножения' },
            { fn: createExamples21, title: 'Одночлены. Стандартный вид' },
            { fn: createExamples22, title: 'Произведение одночлена на многочлен' },
            { fn: createExamples23, title: 'Вынесение общего множителя за скобки' },
            { fn: createExamples24, title: 'Произведение многочленов' },
            { fn: createExamples25, title: 'Метод группировки' },
            { fn: createExamples26, title: 'Произведение одночленов' },
            { fn: createExamples27, title: 'Возведение одночлена в степень'},
            { fn: createExamples28, title: 'Многочлены. Стандартный вид'},
            { fn: createExamples29, title: 'Сумма и разность многочленов'},
            { fn: createExamples30, title: 'Сравнение выражений'}
        ]
    }
}
