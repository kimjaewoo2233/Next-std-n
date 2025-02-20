import React from 'react'
import Logo from './Logo'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <div className='w-full flex items-center p-6 bg-background z-50'>
        <Logo/>
        <div className='md:justify-end md:ml-auto flex items-center justify-between w-full gap-x-2 text-muted-foreground'>
            <Button variant="ghost" size="sm">
                Privacy Policy
            </Button>

            <Button>
                Terms & Conditions
            </Button>
        </div>
    </div>
  )
}

export default Footer