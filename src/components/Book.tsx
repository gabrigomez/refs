import { Form, Field } from 'react-final-form'
import { Books } from '../interfaces'
import { validateBooks } from '../utils'

export const Book = () => {
  
  const onSubmit = (values: Books) => {
    console.log(values)
  }

  return (
    <div className="bg-slate-400 rounded-md">
      <div className='flex flex-col jus items-center'>
        <div className='mt-2'>
          <p>Book</p>
        </div>
        <Form
          onSubmit={onSubmit}
          validate={validateBooks}
          render={({ handleSubmit }) => (
            <form action="submit" onSubmit={handleSubmit}>
              <Field name="author">
                {({ input, meta }) => (
                  <div className="flex flex-col my-3">
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
                  <div className="flex flex-col my-3">
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
                  <div className="flex flex-col my-3">
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
                  <div className="flex flex-col my-3">
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
                  <div className="flex flex-col my-3">
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
              <button className='mb-4 p-2 rounded-md hover:bg-gray-800 duration-200'>
                Gerar!
              </button>
            </form>
          )}
        />
      </div>
    </div>
  )
}