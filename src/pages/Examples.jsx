import React from 'react'
import { Typography, Container, Box } from '@mui/material';
import { createExamples as createExamples1 } from '@mathExamples/7klass/znacheniye_vyrazheniya.js'
import { createExamples as createExamples2 } from '@mathExamples/7klass/chastnoye_stepeney.js'
import { createExamples as createExamples3} from '@mathExamples/7klass/proizvedeniye_stepeney.js'
import { createExamples as createExamples4} from '@mathExamples/7klass/stepen_stepeni.js'
import { createExamples as createExamples5 } from '@mathExamples/7klass/lineynyye_uravneniya.js'
import { createExamples as createExamples6 } from '@mathExamples/7klass/sistemy_sposob_slozheniya.js'
import { createExamples as createExamples7 } from '@mathExamples/7klass/proizvedeniye_v_vide_stepeni.js'
import { createExamples as createExamples8 } from '@mathExamples/7klass/stepen_chastnogo.js'
import { createExamples as createExamples9 } from '@mathExamples/7klass/stepen_proizvedeniya.js'
import { createExamples as createExamples10 } from '@mathExamples/7klass/kvdarat_summy_i_kvadrat_raznosti.js'
import { createExamples as createExamples11 } from '@mathExamples/7klass/proizvedeniye_raznosti_na_summu.js'
import { createExamples as createExamples12 } from '@mathExamples/7klass/raznost_kvadratov.js'
import { createExamples as createExamples13 } from '@mathExamples/7klass/de_kvdarat_summy_i_kvadrat_raznosti.js'
import { createExamples as createExamples14 } from '@mathExamples/7klass/summa_raznost_kubov.js'
import { createExamples as createExamples15 } from '@mathExamples/7klass/de_summa_raznost_kubov.js'
import { createExamples as createExamples16 } from '@mathExamples/7klass/privedeniye_podobnykh_slagayemykh.js'
import { createExamples as createExamples17 } from '@mathExamples/7klass/vyrazheniya_desyatichnykh_drobi.js'
import { createExamples as createExamples18 } from '@mathExamples/7klass/vyrazheniya_drobi.js'
import { createExamples as createExamples19 } from '@mathExamples/7klass/vyrazheniya_ratsionalnyye_vychisleniya.js'
import { createExamples as createExamples20 } from '@mathExamples/7klass/raspredelitelnoye_svoystvo.js'
import { createExamples as createExamples21 } from '@mathExamples/7klass/odnochleny.js'
import { createExamples as createExamples22 } from '@mathExamples/7klass/odnochlen_na_mnogochlen.js'
import { createExamples as createExamples23 } from '@mathExamples/7klass/vyneseniye_za_skobki.js'
import { createExamples as createExamples24 } from '@mathExamples/7klass/mnogochlen_na_mnogochlen.js'
import { createExamples as createExamples25 } from '@mathExamples/7klass/metod_gruppirovki.js'
import { createExamples as createExamples26 } from '@mathExamples/7klass/proizvedeniye_odnochlenov.js'
import { createExamples as createExamples27 } from '@mathExamples/7klass/vozvedeniye_odnochlena_stepen.js'
import { createExamples as createExamples28 } from '@mathExamples/7klass/mnogochleny_standartnyy_vyid.js'
import { createExamples as createExamples29 } from '@mathExamples/7klass/summa_raznost_mnogochlenov.js'
import { createExamples as createExamples30 } from '@mathExamples/7klass/vyrazheniya_sravneniy.js'
import { createExamples as createExamples31 } from '@mathExamples/8klass/znacheniye_drobi.js'
import { createExamples as createExamples32 } from '@mathExamples/8klass/dopustimyye_znacheniya.js'
import { createExamples as createExamples33 } from '@mathExamples/8klass/sokrashcheniye_drobey.js'
import { createExamples as createExamples34 } from '@mathExamples/8klass/summa_raznost_droyey_odinin_znamenatel.js'
import { createExamples as createExamples35 } from '@mathExamples/8klass/summa_raznost_droyey_raznie_znamenatel.js'
import { createExamples as createExamples36 } from '@mathExamples/8klass/proizvedeniye_drobey.js'
import { createExamples as createExamples37 } from '@mathExamples/8klass/chastnoye_drobey.js'
import { createExamples as createExamples38 } from '@mathExamples/8klass/znacheniye_kornya.js'
import { createExamples as createExamples39 } from '@mathExamples/8klass/koren_proizvedeniya_i_drobey.js'
import { createExamples as createExamples40 } from '@mathExamples/8klass/koren_stepeni.js'
import { createExamples as createExamples41 } from '@mathExamples/8klass/vyneseniye_mnozhitelya_kornya.js'
import { createExamples as createExamples42 } from '@mathExamples/8klass/nepolnyye_kvadratnyye_b_0.js'
import { createExamples as createExamples43 } from '@mathExamples/8klass/nepolnyye_kvadratnyye_c_0.js'
import { createExamples as createExamples44 } from '@mathExamples/8klass/diskriminant.js'
import { createExamples as createExamples45 } from '@mathExamples/8klass/teorema_viyeta.js'
import { createExamples as createExamples46 } from '@mathExamples/8klass/neravenstva_odna_perem.js'
import { createExamples as createExamples47 } from '@mathExamples/8klass/sistema_neravenstv.js'
import { createExamples as createExamples48 } from '@mathExamples/8klass/stepen_naturalny.js'
import { createExamples as createExamples49 } from '@mathExamples/8klass/proizvedeniye_stepeney_natural.js'
import { createExamples as createExamples50 } from '@mathExamples/8klass/stepen_chastnogo_natural.js'

import ExampleBlock from "../components/ExampleBlock";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const dict = {
    1: { fn: createExamples1, title: 'Значение выражений' },
    2: { fn: createExamples2, title: 'Частное степеней' },
    3: { fn: createExamples3, title: 'Произведение степеней' },
    4: { fn: createExamples4, title: 'Степень степени' },
    5: { fn: createExamples5, title: 'Линейные уравнения' },
    6: { fn: createExamples6, title: 'Системы уравнений. Способ Сложения.' },
    7: { fn: createExamples7, title: 'Произведение в виде степени' },
    8: { fn: createExamples8, title: 'Степень частного' },
    9: { fn: createExamples9, title: 'Степень произведения' },
    10: { fn: createExamples10, title: 'Квадрат суммы и разности двух выражений' },
    11: { fn: createExamples11, title: 'Произведение разности на сумму' },
    12: { fn: createExamples12, title: 'Разность квадратов' },
    13: { fn: createExamples13, title: 'Разложение на множители.Квадрат суммы и разности.' },
    14: { fn: createExamples14, title: 'Сумма и разность кубов' },
    15: { fn: createExamples15, title: 'Разложение на множители. Сумма и разность кубов' },
    16: { fn: createExamples16, title: 'Приведение подобных слагаемых' },
    17: { fn: createExamples17, title: 'Числовые выражения. Десятичные дроби' },
    18: { fn: createExamples18, title: 'Числовые выражения. Дроби' },
    19: { fn: createExamples19, title: 'Числовые выражения. Рациональные вычисления' },
    20: { fn: createExamples20, title: 'Распределительное свойство умножения' },
    21: { fn: createExamples21, title: 'Одночлены. Стандартный вид' },
    22: { fn: createExamples22, title: 'Произведение одночлена на многочлен' },
    23: { fn: createExamples23, title: 'Вынесение общего множителя за скобки' },
    24: { fn: createExamples24, title: 'Произведение многочленов' },
    25: { fn: createExamples25, title: 'Метод группировки' },
    26: { fn: createExamples26, title: 'Произведение одночленов' },
    27: { fn: createExamples27, title: 'Возведение одночлена в степень'},
    28: { fn: createExamples28, title: 'Многочлены. Стандартный вид'},
    29: { fn: createExamples29, title: 'Сумма и разность многочленов'},
    30: { fn: createExamples30, title: 'Сравнение выражений'},
    31: { fn: createExamples31, title: 'Рациональные дроби. Найти значение дроби'},
    32: { fn: createExamples32, title: 'Рациональные дроби. Допустимые значения'},
    33: { fn: createExamples33, title: 'Рациональные дроби. Сокращение дробей'},
    34: { fn: createExamples34, title: 'Сложение и вычитание дробей с одинаковыми знаменателями'},
    35: { fn: createExamples35, title: 'Сложение и вычитание дробей с разными знаменателями'},
    36: { fn: createExamples36, title: 'Произведение рациональных дробей'},
    37: { fn: createExamples37, title: 'Частное рациональных дробей'},
    38: { fn: createExamples38, title: 'Вычисление значения квадратного корня'},
    39: { fn: createExamples39, title: 'Корень произведедния и дроби'},
    40: { fn: createExamples40, title: 'Корень степени'},
    41: { fn: createExamples41, title: 'Вынесение множителя за знак корня'},
    42: { fn: createExamples42, title: 'Неполные квадратные уравнения (b=0)'},
    43: { fn: createExamples43, title: 'Неполные квадратные уравнения (c=0)'},
    44: { fn: createExamples44, title: 'Дискриминант'},
    45: { fn: createExamples45, title: 'Теорема Виета'},
    46: { fn: createExamples46, title: 'Неравенства с одной переменной'},
    47: { fn: createExamples47, title: 'Системы неравенства с одной переменной'},
    48: { fn: createExamples48, title: 'Степень с целым показателем'},
    49: { fn: createExamples49, title: 'Произведение степеней с целым показателем'},
    50: { fn: createExamples50, title: 'Степень частного с целым показателем'}
  }
  return { examplesFn: (dict[params.examplesGroupId] ?? dict[1]) };
}

const Examples = () => {
  const { examplesFn } = useLoaderData();
  return (
    <Box
        sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
        }}
    >
        <Container fixed>
        <Typography
            component="h2"
            variant="h3"
            align="center"
            color="#2a8b2c"
            gutterBottom
            sx = {{ mb: "20px" }}
        >
            { examplesFn.title }
        </Typography>
        <ExampleBlock createExamples={examplesFn.fn}  />
        </Container>
    </Box>

  )
}

export default Examples