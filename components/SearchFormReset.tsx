"use client"
import React from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement; //typescript asks for type clarification
        if (form) form.reset();
    }
    return (
      <div>
          <button type='reset'
          onClick={reset}>
          <Link href="/" className="search-btn text-white">
            <X className='size-5'/>
          
          </Link>
                  </button>
    </div>
  )
}

export default SearchFormReset
