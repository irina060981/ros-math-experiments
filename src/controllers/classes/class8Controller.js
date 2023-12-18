import { createExamples as createExamples31 } from '@/math-examples/8klass/znacheniye_drobi.js'
import { createExamples as createExamples32 } from '@/math-examples/8klass/dopustimyye_znacheniya.js'
import { createExamples as createExamples33 } from '@/math-examples/8klass/sokrashcheniye_drobey.js'
import { createExamples as createExamples34 } from '@/math-examples/8klass/summa_raznost_droyey_odinin_znamenatel.js'
import { createExamples as createExamples35 } from '@/math-examples/8klass/summa_raznost_droyey_raznie_znamenatel.js'
import { createExamples as createExamples36 } from '@/math-examples/8klass/proizvedeniye_drobey.js'
import { createExamples as createExamples37 } from '@/math-examples/8klass/chastnoye_drobey.js'
import { createExamples as createExamples38 } from '@/math-examples/8klass/znacheniye_kornya.js'
import { createExamples as createExamples39 } from '@/math-examples/8klass/koren_proizvedeniya_i_drobey.js'
import { createExamples as createExamples40 } from '@/math-examples/8klass/koren_stepeni.js'
import { createExamples as createExamples41 } from '@/math-examples/8klass/vyneseniye_mnozhitelya_kornya.js'
import { createExamples as createExamples42 } from '@/math-examples/8klass/nepolnyye_kvadratnyye_b_0.js'
import { createExamples as createExamples43 } from '@/math-examples/8klass/nepolnyye_kvadratnyye_c_0.js'
import { createExamples as createExamples44 } from '@/math-examples/8klass/diskriminant.js'
import { createExamples as createExamples45 } from '@/math-examples/8klass/teorema_viyeta.js'
import { createExamples as createExamples46 } from '@/math-examples/8klass/neravenstva_odna_perem.js'
import { createExamples as createExamples47 } from '@/math-examples/8klass/sistema_neravenstv.js'
import { createExamples as createExamples48 } from '@/math-examples/8klass/stepen_naturalny.js'
import { createExamples as createExamples49 } from '@/math-examples/8klass/proizvedeniye_stepeney_natural.js'
import { createExamples as createExamples50 } from '@/math-examples/8klass/stepen_chastnogo_natural.js'
import { createExamples as createExamples51 } from '@/math-examples/8klass/chastnoye_stepeney_natural.js'
import { createExamples as createExamples52 } from '@/math-examples/8klass/stepen_racionlanoi_drobi.js'
import { createExamples as createExamples53 } from '@/math-examples/8klass/formula_korney_kvadratnogo.js'


export default class Class8Controller {
    static get dict () {
        return [
            { fn: createExamples31, title: 'Рациональные дроби. Найти значение дроби'},
            { fn: createExamples32, title: 'Рациональные дроби. Допустимые значения'},
            { fn: createExamples33, title: 'Рациональные дроби. Сокращение дробей'},
            { fn: createExamples34, title: 'Сложение и вычитание дробей с одинаковыми знаменателями'},
            { fn: createExamples35, title: 'Сложение и вычитание дробей с разными знаменателями'},
            { fn: createExamples36, title: 'Произведение рациональных дробей'},
            { fn: createExamples37, title: 'Частное рациональных дробей'},
            { fn: createExamples38, title: 'Вычисление значения квадратного корня'},
            { fn: createExamples39, title: 'Корень произведедния и дроби'},
            { fn: createExamples40, title: 'Корень степени'},
            { fn: createExamples41, title: 'Вынесение множителя за знак корня'},
            { fn: createExamples42, title: 'Неполные квадратные уравнения (b=0)'},
            { fn: createExamples43, title: 'Неполные квадратные уравнения (c=0)'},
            { fn: createExamples44, title: 'Дискриминант'},
            { fn: createExamples45, title: 'Теорема Виета'},
            { fn: createExamples46, title: 'Неравенства с одной переменной'},
            { fn: createExamples47, title: 'Системы неравенства с одной переменной'},
            { fn: createExamples48, title: 'Степень с целым показателем'},
            { fn: createExamples49, title: 'Произведение степеней с целым показателем'},
            { fn: createExamples50, title: 'Степень частного с целым показателем'},
            { fn: createExamples51, title: 'Частное степеней с целым показателем'},
            { fn: createExamples52, title: 'Степень рациональной дроби'},
            { fn: createExamples53, title: 'Формула корней квадратного уравнения'}
        ]
    }
}
