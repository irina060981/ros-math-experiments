
import { createExamples as createExamples11000 } from '@/math-examples/11klass/radianny_mera_ugla.js'
import { createExamples as createExamples11001 } from '@/math-examples/11klass/gradusnaya_mera_ugla.js'
import { createExamples as createExamples11002 } from '@/math-examples/11klass/sin_cos_tabl.js'
import { createExamples as createExamples11003 } from '@/math-examples/11klass/sin_cos_tabl_rad.js'
import { createExamples as createExamples11004 } from '@/math-examples/11klass/tg_ctg_tabl.js'
import { createExamples as createExamples11005 } from '@/math-examples/11klass/tg_ctg_tabl_rad.js'
import { createExamples as createExamples11006 } from '@/math-examples/11klass/vychislit_trigonometrich_vyrazheniye.js'
import { createExamples as createExamples11007 } from '@/math-examples/11klass/yedinichnaya_okruzhnost.js'
import { createExamples as createExamples11008 } from '@/math-examples/11klass/znak_sinusa_kosinusa_ugla.js'
import { createExamples as createExamples11009 } from '@/math-examples/11klass/znak_tg_ctg_ugla.js'
import { createExamples as createExamples11010 } from '@/math-examples/11klass/osnovnyye_trigonom_tozhdestva.js'
import { createExamples as createExamples11011 } from '@/math-examples/11klass/sin_cos_tg_otritsatelnogo_ugla.js'
import { createExamples as createExamples11012 } from '@/math-examples/11klass/formuly_slozheniya.js'
import { createExamples as createExamples11013 } from '@/math-examples/11klass/formula_dvoynogo_ugla.js'
import { createExamples as createExamples11014 } from '@/math-examples/11klass/formuly_privedeniya.js'
import { createExamples as createExamples11015 } from '@/math-examples/11klass/summa_sin_cos.js'
import { createExamples as createExamples11016 } from '@/math-examples/11klass/arcsin_arccos.js'
import { createExamples as createExamples11017 } from '@/math-examples/11klass/arctg_arcctg.js'

export default class Class11Controller {
    static get dict () {
        return [
            { fn: createExamples11000, title: 'Радианная мера угла'},
            { fn: createExamples11001, title: 'Градусная мера угла'},
            { fn: createExamples11002, title: 'Вычисление синуса и косинуса. Табличные значения'},
            { fn: createExamples11003, title: 'Вычисление синуса и косинуса. Табличные значения'},
            { fn: createExamples11004, title: 'Вычисление тангенса и котангенса. Табличные значения'},
            { fn: createExamples11005, title: 'Вычисление тангенса и котангенса. Табличные значения'},
            { fn: createExamples11006, title: 'Тригонометрические выражения'},
            { fn: createExamples11007, title: 'Единичная окружность'},
            { fn: createExamples11008, title: 'Знак синуса и косинуса определенного угла'},
            { fn: createExamples11009, title: 'Знак тангенса и котангенса определенного угла'},
            { fn: createExamples11010, title: 'Основные тригонометрические тождества'},
            { fn: createExamples11011, title: 'Синус, косинус, тангенс и котангенс отрицательного угла'},
            { fn: createExamples11012, title: 'Формулы сложения тригонометрических функций'},
            { fn: createExamples11013, title: 'Формулы двойного угла'},
            { fn: createExamples11014, title: 'Формулы приведения'},
            { fn: createExamples11015, title: 'Сумма и разность синусов/косинусов'},
            { fn: createExamples11016, title: 'Арксинус и арккосинус'},
            { fn: createExamples11017, title: 'Арктангенс и арккотангенс'}        
     
        ]
    }
}
