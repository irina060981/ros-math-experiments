import React from 'react'
import { useParams } from 'react-router';
import { ClassCProvider } from '@/contexts/classContext'

import Heading from '@/components/ClassGroup/Heading/Heading'
import ThemesList from '@/components/ClassGroup/ThemesList/ThemesList'

export default function ClassGroup() {
    const { classId } = useParams()
    return (
      <>
        <ClassCProvider>
          <Heading classId={classId}/>
          <ThemesList classId={classId}/>
        </ClassCProvider >
      </>
    )
  }