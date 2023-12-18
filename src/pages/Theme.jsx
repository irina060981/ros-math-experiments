import React from 'react'
import { useParams } from 'react-router';
import { ClassCProvider } from '@/contexts/classContext'

import Heading from '@/components/Theme/Heading/Heading'
import ExamplesList from '@/components/Theme/ExamplesList/ExamplesList'

export default function Theme() {
  const { classId, themeId } = useParams()

    return (
      <>
        <ClassCProvider>
          <Heading classId={classId} themeId={themeId} />
          <ExamplesList  classId={classId} themeId={themeId} />
        </ClassCProvider>
      </>
    )
  }