import { Card } from '@/components/ui/card'
import React from 'react'
import BookForm from './components/BookForm'

const CadastrarPage = () => {
  
  return (
    <div className='flex flex-col items-center justify-center h-full w-full'>
      <Card>
      <BookForm/>

      </Card>
    </div>
  )
}

export default CadastrarPage