import { Form, Field } from 'react-final-form'
import { Books } from '../interfaces'
import { validateBooks } from '../utils'
import { GearSix } from '@phosphor-icons/react'
import { useState } from 'react'
import { Refs } from './Refs'

export const Book = () => {
  const [data, setData] = useState<Books | null>(null)
  
  const onSubmit = (values: Books) => {
    setData({...values})
  }

  return (
    <div className="bg-slate-400 rounded-md">
      <div className='flex flex-col jus items-center'>
        <div className='mt-2'>
          <p className="font-title font-semibold text-3xl">
            LIVRO
          </p>
        </div>
        <Form
          onSubmit={onSubmit}
          validate={validateBooks}
          render={({ handleSubmit }) => (
            <form className='flex flex-col' action="submit" onSubmit={handleSubmit}>
              <Field name="author">
                {({ input, meta }) => (
                  <div className="flex flex-col my-2">
                    <input 
                      type="text"
                      {...input} 
                      placeholder="Autor" 
                      className={`p-2 rounded-md ${meta.error && meta.touched ? 'border-2 border-red-500' : ''}`}
                      />
                    {meta.error && meta.touched && 
                      <span className="text-xs text-red-600 mt-1">
                        {meta.error}
                      </span>
                    }
                  </div>
                )}
              </Field>
              <Field name="title">
                {({ input, meta }) => (
                  <div className="flex flex-col my-2">
                    <input 
                      type="text"
                      {...input} 
                      placeholder="Título" 
                      className={`p-2 rounded-md ${meta.error && meta.touched ? 'border-2 border-red-500' : ''}`}
                      />
                    {meta.error && meta.touched && 
                      <span className="text-xs text-red-600 mt-1">
                        {meta.error}
                      </span>
                    }
                  </div>
                )}
              </Field>
              <Field name="publisher">
                {({ input, meta }) => (
                  <div className="flex flex-col my-2">
                    <input 
                      type="text"
                      {...input} 
                      placeholder="Editora" 
                      className={`p-2 rounded-md ${meta.error && meta.touched ? 'border-2 border-red-500' : ''}`}
                      />
                    {meta.error && meta.touched && 
                      <span className="text-xs text-red-600 mt-1">
                        {meta.error}
                      </span>
                    }
                  </div>
                )}
              </Field>              
              <Field name="year">
                {({ input, meta }) => (
                  <div className="flex flex-col my-2">
                    <input 
                      type="text"
                      {...input} 
                      placeholder="Ano" 
                      className={`p-2 rounded-md ${meta.error && meta.touched ? 'border-2 border-red-500' : ''}`}
                      />
                    {meta.error && meta.touched && 
                      <span className="text-xs text-red-600 mt-1">
                        {meta.error}
                      </span>
                    }
                  </div>
                )}
              </Field>              
              <Field name="locale">
                {({ input, meta }) => (
                  <div className="flex flex-col my-2">
                    <input 
                      type="text"
                      {...input} 
                      placeholder="Local" 
                      className={`p-2 rounded-md ${meta.error && meta.touched ? 'border-2 border-red-500' : ''}`}
                      />
                    {meta.error && meta.touched && 
                      <span className="text-xs text-red-600 mt-1">
                        {meta.error}
                      </span>
                    }
                  </div>
                )}
              </Field>
              <button className='flex items-center self-center my-4 p-2 rounded-md border border-slate-600 hover:bg-slate-500 duration-200 group'>
                <GearSix className='text-md mr-1 group-hover:animate-spin' />
                <p className='font-semibold'>
                  Gerar
                </p>
              </button>
            </form>
          )}
        />
        {data && (
          <Refs author={data.author} title={data.title} publisher={data.publisher} locale={data.locale} year={data.year} />
        )}
      </div>
    </div>
  )
}