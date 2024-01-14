import { createExamples as createExamples5000 } from '@/math-examples/5klass/povtoreniye_4_klass.js'
import { createExamples as createExamples5001 } from '@/math-examples/5klass/povtoreniye_4_klass_1.js'
import { createExamples as createExamples5002 } from '@/math-examples/5klass/razryadnyye_slagayemyye.js'
import { createExamples as createExamples5003 } from '@/math-examples/5klass/sravneniye_naturalnykh.js'
import { createExamples as createExamples5004 } from '@/math-examples/5klass/svoystva_slozheniya_naturalnykh_chisel.js'
import { createExamples as createExamples5005 } from '@/math-examples/5klass/vychitaniye_naturalnykh.js'
import { createExamples as createExamples5006 } from '@/math-examples/5klass/bukvennyye_vyrazheniya.js'
import { createExamples as createExamples5007 } from '@/math-examples/5klass/uravneniya_summa_raznost.js'
import { createExamples as createExamples5008 } from '@/math-examples/5klass/umnozheniye_naturalnykh_chisel.js'
import { createExamples as createExamples5009 } from '@/math-examples/5klass/svoystva_umnozheniya.js'
import { createExamples as createExamples5010 } from '@/math-examples/5klass/deleniye_naturalnykh.js'
import { createExamples as createExamples5011 } from '@/math-examples/5klass/proizvedeniye_v_vide_stepeni.js'
import { createExamples as createExamples5012 } from '@/math-examples/5klass/uravneniya_proizvedeniye_chastnoye.js'
import { createExamples as createExamples5013 } from '@/math-examples/5klass/obyknovnnyye_drobi.js'
import { createExamples as createExamples5014 } from '@/math-examples/5klass/sravneniye_drobey.js'
import { createExamples as createExamples5015 } from '@/math-examples/5klass/summa_raznost_drrobey.js'
import { createExamples as createExamples5016 } from '@/math-examples/5klass/chastnoye_vide_drobi.js'
import { createExamples as createExamples5017 } from '@/math-examples/5klass/smeshanoye_v_drob.js'
import { createExamples as createExamples5018 } from '@/math-examples/5klass/drob_v_smeshanoye.js'
import { createExamples as createExamples5019 } from '@/math-examples/5klass/slozheniye_vychitaniye_smeshanykh.js'
import { createExamples as createExamples5020 } from '@/math-examples/5klass/desyatichnyye_drobi.js'
import { createExamples as createExamples5021 } from '@/math-examples/5klass/sravneniye_desyatichnykh_drobey.js'
import { createExamples as createExamples5022 } from '@/math-examples/5klass/slozheniye_vychitaniye_desyatichnykh.js'
import { createExamples as createExamples5023 } from '@/math-examples/5klass/umnozheniye_desyatichnykh.js'
import { createExamples as createExamples5024 } from '@/math-examples/5klass/delenie_desyatichnykh.js'
import { createExamples as createExamples5025 } from '@/math-examples/5klass/protsent_ot_chisla.js'


export default class Class5Controller {
    static get dict () {
        return [
            { fn: createExamples5000, title: 'Повторение 4 класс (1)'},
            { fn: createExamples5001, title: 'Повторение 4 класс (2)'},
            { fn: createExamples5002, title: 'Разрядные слагаемые'},
            { fn: createExamples5003, title: 'Сравнение натуральных чисел'},
            { fn: createExamples5004, title: 'Свойства сложения натуральных чисел'},
            { fn: createExamples5005, title: 'Вычитание натуральных чисел'},
            { fn: createExamples5006, title: 'Буквенные выражения'},
            { fn: createExamples5007, title: 'Уравнения. Сумма и разность'},
            { fn: createExamples5008, title: 'Умножение натуральных чисел'},
            { fn: createExamples5009, title: 'Свойства умножения'},
            { fn: createExamples5010, title: 'Деление натуральных чисел'},
            { fn: createExamples5011, title: 'Произведение в виде степени'},
            { fn: createExamples5012, title: 'Уравнения. Произведение и частное'},
            { fn: createExamples5013, title: 'Обыкновенные дроби'},
            { fn: createExamples5014, title: 'Сравнение дробей'},
            { fn: createExamples5015, title: 'Сложение и вычитание дробей с одинаковыми знаменателями'},
            { fn: createExamples5016, title: 'Частное в виде дроби'},
            { fn: createExamples5017, title: 'Смешаное число в дробь'},
            { fn: createExamples5018, title: 'Дробь в смешаное число'},
            { fn: createExamples5019, title: 'Сложение и вычитание смешаных чисел'}, 
            { fn: createExamples5020, title: 'Десятичные дроби'},
            { fn: createExamples5021, title: 'Сравнение десятичных дробей'},
            { fn: createExamples5022, title: 'Сложение и вычитание десятичных дробей'},
            { fn: createExamples5023, title: 'Умножение десятичных дробей'},
            { fn: createExamples5024, title: 'Деление десятичных дробей'},
            { fn: createExamples5025, title: 'Процент от числа'},
        ]
    }
}
