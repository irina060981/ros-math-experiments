import React from 'react'
import { useParams } from 'react-router';

import Heading from '@/components/Theme/Heading/Heading'
import ExamplesList from '@/components/Theme/ExamplesList/ExamplesList'

export default function Theme() {
  const { classId, themeId } = useParams()

    return (
      <>
          <Heading classId={classId} themeId={themeId} />
          <ExamplesList  classId={classId} themeId={themeId} />
      </>
    )
  }