import React from 'react';
import Form from 'next/form';

const SearchForm = () => {
    const query = 'query';
    const reset = () =>{}
  return (
      <Form action="/" scroll={false} className='search-form'>
          <input type="text"
              name='query'
              defaultValue={query}
              className='search-input'
              placeholder='Search Startups'
          />
          <div className='flex gap-2'>
              {query && (
                  <button type='reset'
                  onClick={reset}></button>
              )}
          </div>
          
    </Form>
  )
}

export default SearchForm
