import { createExamples as createExamples8000 } from '@/math-examples/8klass/znacheniye_drobi.js'
import { createExamples as createExamples8001 } from '@/math-examples/8klass/dopustimyye_znacheniya.js'
import { createExamples as createExamples8002 } from '@/math-examples/8klass/sokrashcheniye_drobey.js'
import { createExamples as createExamples8003 } from '@/math-examples/8klass/summa_raznost_droyey_odinin_znamenatel.js'
import { createExamples as createExamples8004 } from '@/math-examples/8klass/summa_raznost_droyey_raznie_znamenatel.js'
import { createExamples as createExamples8005 } from '@/math-examples/8klass/proizvedeniye_drobey.js'
import { createExamples as createExamples8006 } from '@/math-examples/8klass/stepen_racionlanoi_drobi.js'
import { createExamples as createExamples8007 } from '@/math-examples/8klass/chastnoye_drobey.js'
import { createExamples as createExamples8008 } from '@/math-examples/8klass/znacheniye_kornya.js'
import { createExamples as createExamples8009 } from '@/math-examples/8klass/koren_proizvedeniya_i_drobey.js'
import { createExamples as createExamples8010 } from '@/math-examples/8klass/koren_stepeni.js'
import { createExamples as createExamples8011 } from '@/math-examples/8klass/vyneseniye_mnozhitelya_kornya.js'
import { createExamples as createExamples8012 } from '@/math-examples/8klass/nepolnyye_kvadratnyye_b_0.js'
import { createExamples as createExamples8013 } from '@/math-examples/8klass/nepolnyye_kvadratnyye_c_0.js'
import { createExamples as createExamples8014 } from '@/math-examples/8klass/diskriminant.js'
import { createExamples as createExamples8015 } from '@/math-examples/8klass/formula_korney_kvadratnogo.js'
import { createExamples as createExamples8016 } from '@/math-examples/8klass/teorema_viyeta.js'
import { createExamples as createExamples8017 } from '@/math-examples/8klass/neravenstva_odna_perem.js'
import { createExamples as createExamples8018 } from '@/math-examples/8klass/sistema_neravenstv.js'
import { createExamples as createExamples8019 } from '@/math-examples/8klass/stepen_naturalny.js'
import { createExamples as createExamples8020 } from '@/math-examples/8klass/proizvedeniye_stepeney_natural.js'
import { createExamples as createExamples8021 } from '@/math-examples/8klass/stepen_chastnogo_natural.js'
import { createExamples as createExamples8022 } from '@/math-examples/8klass/chastnoye_stepeney_natural.js'

export default class Class8Controller {
    static get dict () {
        return [
            { fn: createExamples8000, title: 'Рациональные дроби. Найти значение дроби'},
            { fn: createExamples8001, title: 'Рациональные дроби. Допустимые значения'},
            { fn: createExamples8002, title: 'Рациональные дроби. Сокращение дробей'},
            { fn: createExamples8003, title: 'Сложение и вычитание дробей с одинаковыми знаменателями'},
            { fn: createExamples8004, title: 'Сложение и вычитание дробей с разными знаменателями'},
            { fn: createExamples8005, title: 'Произведение рациональных дробей'},
            { fn: createExamples8006, title: 'Частное рациональных дробей'},
            { fn: createExamples8007, title: 'Степень рациональной дроби'},
            { fn: createExamples8008, title: 'Вычисление значения квадратного корня'},
            { fn: createExamples8009, title: 'Корень произведедния и дроби'},
            { fn: createExamples8010, title: 'Корень степени'},
            { fn: createExamples8011, title: 'Вынесение множителя за знак корня'},
            { fn: createExamples8012, title: 'Неполные квадратные уравнения (b=0)'},
            { fn: createExamples8013, title: 'Неполные квадратные уравнения (c=0)'},
            { fn: createExamples8014, title: 'Дискриминант'},
            { fn: createExamples8015, title: 'Формула корней квадратного уравнения'},
            { fn: createExamples8016, title: 'Теорема Виета'},
            { fn: createExamples8017, title: 'Неравенства с одной переменной'},
            { fn: createExamples8018, title: 'Системы неравенства с одной переменной'},
            { fn: createExamples8019, title: 'Степень с целым показателем'},
            { fn: createExamples8020, title: 'Произведение степеней с целым показателем'},
            { fn: createExamples8021, title: 'Степень частного с целым показателем'},
            { fn: createExamples8022, title: 'Частное степеней с целым показателем'}
           
        ]
    }
}
