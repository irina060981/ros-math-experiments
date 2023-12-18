import React from 'react'

import { ClassCProvider } from '@/contexts/classContext'

import Heading from '@/components/Home/Heading/Heading'
import ClassesList from '@/components/Home/ClassesList/ClassesList'

export default function Home() {
    return (
      <>
        <ClassCProvider>
          <Heading />
          <ClassesList />
        </ClassCProvider>
      </>
    )
  }
  