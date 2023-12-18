import { createExamples as createExamples108 } from '@/math-examples/9klass/lineynyye_neravenstva.js'
import { createExamples as createExamples109 } from '@/math-examples/9klass/chislovyye_promezhutki.js'
import { createExamples as createExamples110 } from '@/math-examples/9klass/neravenstva_odnoy_peremennoy.js'
import { createExamples as createExamples111 } from '@/math-examples/9klass/sistema_neravenstv.js'
import { createExamples as createExamples112 } from '@/math-examples/9klass/znacheniye_funktsii.js'
import { createExamples as createExamples113 } from '@/math-examples/9klass/oblast_opredeleniya.js'
import { createExamples as createExamples114 } from '@/math-examples/9klass/koren_n_stepeni.js'
import { createExamples as createExamples115 } from '@/math-examples/9klass/stepen_ratsionalnym.js'
import { createExamples as createExamples116 } from '@/math-examples/9klass/chislovyye_posledovatelnosti.js'
import { createExamples as createExamples117 } from '@/math-examples/9klass/zakonomernost_ryada_chisel.js'
import { createExamples as createExamples118 } from '@/math-examples/9klass/arifmeticheskaya_progressiya.js'
import { createExamples as createExamples119 } from '@/math-examples/9klass/absolyutnaya_pogreshnost.js'
import { createExamples as createExamples120 } from '@/math-examples/9klass/geometricheskaya_progressiya.js'
import { createExamples as createExamples121 } from '@/math-examples/9klass/metod_intervalov.js'
import { createExamples as createExamples122 } from '@/math-examples/9klass/napravleniye_vetvey_kvadratichnoy.js'
import { createExamples as createExamples123 } from '@/math-examples/9klass/nuli_funktsii.js'
import { createExamples as createExamples124 } from '@/math-examples/9klass/prenadlezhnost_tochki.js'
import { createExamples as createExamples125 } from '@/math-examples/9klass/vozrastaniye_ubyvaniye_lineynoy.js'


export default class Class9Controller {
    static get dict () {
        return [
            { fn: createExamples108, title: 'Линейные неравенства'},
            { fn: createExamples109, title: 'Числовые промежутки'},
            { fn: createExamples110, title: 'Неравенства с одной переменной'},
            { fn: createExamples111, title: 'Системы линейных неравенств'},
            { fn: createExamples112, title: 'Значение функции'},
            { fn: createExamples113, title: 'Область определения функции'},
            { fn: createExamples114, title: 'Корень n-ой степени'},
            { fn: createExamples115, title: 'Степень с рациональным показателем'},
            { fn: createExamples116, title: 'Числовые последовательности'},
            { fn: createExamples117, title: 'Закономерность ряда чисел'},
            { fn: createExamples118, title: 'Арифметическая прогрессия'},
            { fn: createExamples119, title: 'Абсолютая погрешность'},
            { fn: createExamples120, title: 'Геометричсекая прогрессия'},
            { fn: createExamples121, title: 'Метод интервалов'},
            { fn: createExamples122, title: 'Направление ветвей параболы'},
            { fn: createExamples123, title: 'Нули функции'},
            { fn: createExamples124, title: 'Принадлежность точки графику'},
            { fn: createExamples125, title: 'Возрастание и убывание линейной функции'}
        ]
    }
}
