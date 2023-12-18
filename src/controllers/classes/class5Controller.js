import { createExamples as createExamples83 } from '@/math-examples/5klass/povtoreniye_4_klass.js'
import { createExamples as createExamples84 } from '@/math-examples/5klass/razryadnyye_slagayemyye.js'
import { createExamples as createExamples85 } from '@/math-examples/5klass/sravneniye_naturalnykh.js'
import { createExamples as createExamples86 } from '@/math-examples/5klass/svoystva_slozheniya_naturalnykh_chisel.js'
import { createExamples as createExamples87 } from '@/math-examples/5klass/vychitaniye_naturalnykh.js'
import { createExamples as createExamples88 } from '@/math-examples/5klass/bukvennyye_vyrazheniya.js'
import { createExamples as createExamples89 } from '@/math-examples/5klass/uravneniya_summa_raznost.js'
import { createExamples as createExamples90 } from '@/math-examples/5klass/uravneniya_proizvedeniye_chastnoye.js'
import { createExamples as createExamples91 } from '@/math-examples/5klass/umnozheniye_naturalnykh_chisel.js'
import { createExamples as createExamples92 } from '@/math-examples/5klass/svoystva_umnozheniya.js'
import { createExamples as createExamples93 } from '@/math-examples/5klass/deleniye_naturalnykh.js'
import { createExamples as createExamples94 } from '@/math-examples/5klass/proizvedeniye_v_vide_stepeni.js'
import { createExamples as createExamples95 } from '@/math-examples/5klass/obyknovnnyye_drobi.js'
import { createExamples as createExamples96 } from '@/math-examples/5klass/sravneniye_drobey.js'
import { createExamples as createExamples97 } from '@/math-examples/5klass/summa_raznost_drrobey.js'
import { createExamples as createExamples98 } from '@/math-examples/5klass/chastnoye_vide_drobi.js'
import { createExamples as createExamples99 } from '@/math-examples/5klass/smeshanoye_v_drob.js'
import { createExamples as createExamples100 } from '@/math-examples/5klass/drob_v_smeshanoye.js'
import { createExamples as createExamples101 } from '@/math-examples/5klass/slozheniye_vychitaniye_smeshanykh.js'
import { createExamples as createExamples102 } from '@/math-examples/5klass/desyatichnyye_drobi.js'
import { createExamples as createExamples103 } from '@/math-examples/5klass/sravneniye_desyatichnykh_drobey.js'
import { createExamples as createExamples104 } from '@/math-examples/5klass/slozheniye_vychitaniye_desyatichnykh.js'
import { createExamples as createExamples105 } from '@/math-examples/5klass/umnozheniye_desyatichnykh.js'
import { createExamples as createExamples106 } from '@/math-examples/5klass/delenie_desyatichnykh.js'

export default class Class5Controller {
    static get dict () {
        return [
            { fn: createExamples83, title: 'Повторение 4 класс'},
            { fn: createExamples84, title: 'Разрядные слагаемые'},
            { fn: createExamples85, title: 'Сравнение натуральных чисел'},
            { fn: createExamples86, title: 'Свойства сложения натуральных чисел'},
            { fn: createExamples87, title: 'Вычитание натуральных чисел'},
            { fn: createExamples88, title: 'Буквенные выражения'},
            { fn: createExamples89, title: 'Уравнения. Сумма и разность'},
            { fn: createExamples90, title: 'Уравнения. Произведение и частное'},
            { fn: createExamples91, title: 'Умножение натуральных чисел'},
            { fn: createExamples92, title: 'Свойства умножения'},
            { fn: createExamples93, title: 'Деление натуральных чисел'},
            { fn: createExamples94, title: 'Произведение в виде степени'},
            { fn: createExamples95, title: 'Обыкновенные дроби'},
            { fn: createExamples96, title: 'Сравнение дробей'},
            { fn: createExamples97, title: 'Сложение и вычитание дробей с одинаковыми знаменателями'},
            { fn: createExamples98, title: 'Частное в виде дроби'},
            { fn: createExamples99, title: 'Смешаное число в дробь'},
            { fn: createExamples100, title: 'Дробь в смешаное число'},
            { fn: createExamples101, title: 'Сложение и вычитание смешаных чисел'},
            { fn: createExamples102, title: 'Десятичные дроби'},
            { fn: createExamples103, title: 'Сравнение десятичных дробей'},
            { fn: createExamples104, title: 'Сложение и вычитание десятичных дробей'},
            { fn: createExamples105, title: 'Умножение десятичных дробей'},
            { fn: createExamples106, title: 'Деление десятичных дробей'}
        ]
    }
}
