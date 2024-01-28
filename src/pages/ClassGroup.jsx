import React from 'react'
import { useParams } from 'react-router';

import Heading from '@/components/ClassGroup/Heading/Heading'
import ThemesList from '@/components/ClassGroup/ThemesList/ThemesList'

export default function ClassGroup() {
    const { classId } = useParams()
    return (
      <>
          <Heading classId={classId}/>
          <ThemesList classId={classId}/>
      </>
    )
  }