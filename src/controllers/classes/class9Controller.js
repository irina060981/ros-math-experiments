import { createExamples as createExamples9000 } from '@/math-examples/9klass/lineynyye_neravenstva.js'
import { createExamples as createExamples9001 } from '@/math-examples/9klass/chislovyye_promezhutki.js'
import { createExamples as createExamples9002 } from '@/math-examples/9klass/neravenstva_odnoy_peremennoy.js'
import { createExamples as createExamples9003 } from '@/math-examples/9klass/sistema_neravenstv.js'
import { createExamples as createExamples9004 } from '@/math-examples/9klass/metod_intervalov.js'
import { createExamples as createExamples9005 } from '@/math-examples/9klass/znacheniye_funktsii.js'
import { createExamples as createExamples9006 } from '@/math-examples/9klass/oblast_opredeleniya.js'
import { createExamples as createExamples9007 } from '@/math-examples/9klass/nuli_funktsii.js'
import { createExamples as createExamples9008 } from '@/math-examples/9klass/vozrastaniye_ubyvaniye_lineynoy.js'
import { createExamples as createExamples9009 } from '@/math-examples/9klass/napravleniye_vetvey_kvadratichnoy.js'
import { createExamples as createExamples9010 } from '@/math-examples/9klass/prenadlezhnost_tochki.js'
import { createExamples as createExamples9011 } from '@/math-examples/9klass/koren_n_stepeni.js'
import { createExamples as createExamples9012 } from '@/math-examples/9klass/stepen_ratsionalnym.js'
import { createExamples as createExamples9013 } from '@/math-examples/9klass/absolyutnaya_pogreshnost.js'
import { createExamples as createExamples9014 } from '@/math-examples/9klass/zakonomernost_ryada_chisel.js'
import { createExamples as createExamples9015 } from '@/math-examples/9klass/chislovyye_posledovatelnosti.js'
import { createExamples as createExamples9016 } from '@/math-examples/9klass/arifmeticheskaya_progressiya.js'
import { createExamples as createExamples9017 } from '@/math-examples/9klass/geometricheskaya_progressiya.js'


export default class Class9Controller {
    static get dict () {
        return [
            { fn: createExamples9000, title: 'Линейные неравенства'},
            { fn: createExamples9001, title: 'Числовые промежутки'},
            { fn: createExamples9002, title: 'Неравенства с одной переменной'},
            { fn: createExamples9003, title: 'Системы линейных неравенств'},
            { fn: createExamples9004, title: 'Метод интервалов'},
            { fn: createExamples9005, title: 'Значение функции'},
            { fn: createExamples9006, title: 'Область определения функции'},
            { fn: createExamples9007, title: 'Нули функции'},
            { fn: createExamples9008, title: 'Возрастание и убывание линейной функции'},
            { fn: createExamples9009, title: 'Направление ветвей параболы'},
            { fn: createExamples9010, title: 'Принадлежность точки графику'},
            { fn: createExamples9011, title: 'Корень n-ой степени'},
            { fn: createExamples9012, title: 'Степень с рациональным показателем'},
            { fn: createExamples9013, title: 'Абсолютая погрешность'},
            { fn: createExamples9014, title: 'Закономерность ряда чисел'},
            { fn: createExamples9015, title: 'Числовые последовательности'},
            { fn: createExamples9016, title: 'Арифметическая прогрессия'},
            { fn: createExamples9017, title: 'Геометричсекая прогрессия'},
        ]
    }
}
