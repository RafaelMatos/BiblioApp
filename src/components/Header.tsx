import React from 'react'
import { Card } from './ui/card'
import Link from 'next/link'

const Header = () => {
  return (
    <Card className='bg-zinc-800 border-zinc-500 justify-between flex items-center p-4'>
      <h1 className='text-2xl font-bold text-white  '>BiblioApp</h1>

      <div className='sm:hidden md:flex font-semibold gap-2'>
        <Link href='/cadastrar'>Cadastrar</Link>
        <Link href='/'>Consultar</Link>
        <Link href='/'>Alugar</Link>
        <Link href='/'>Devolver</Link>
      </div>

    </Card>
  )
}

export default Header