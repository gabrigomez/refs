import { Form, Field } from 'react-final-form'

export const Book = () => {
  
  const onSubmit = (...values: Array<any>) => {
    console.log(values[0])
  }
  
  return (
    <div className="bg-gray-700 rounded-md">
      <div className='flex flex-col jus items-center'>
        <div className='mt-2'>
          <p>Book</p>
        </div>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form action="submit" onSubmit={handleSubmit}>
              <Field name="autor">
                {({ input, meta }) => (
                  <div className="flex flex-col my-3">
                    <input 
                      type="text"
                      {...input} 
                      placeholder="Autor" 
                      className="p-2 rounded-md"
                      />
                    {meta.error && meta.touched && 
                      <span className="text-xs text-red-600 mt-1">
                        {meta.error}
                      </span>
                    }
                  </div>
                )}
              </Field>
              <Field name="titulo">
                {({ input, meta }) => (
                  <div className="flex flex-col my-3">
                    <input 
                      type="text"
                      {...input} 
                      placeholder="Título" 
                      className="p-2 rounded-md"
                      />
                    {meta.error && meta.touched && 
                      <span className="text-xs text-red-600 mt-1">
                        {meta.error}
                      </span>
                    }
                  </div>
                )}
              </Field>
              <Field name="editora">
                {({ input, meta }) => (
                  <div className="flex flex-col my-3">
                    <input 
                      type="text"
                      {...input} 
                      placeholder="Editora" 
                      className="p-2 rounded-md"
                      />
                    {meta.error && meta.touched && 
                      <span className="text-xs text-red-600 mt-1">
                        {meta.error}
                      </span>
                    }
                  </div>
                )}
              </Field>              
              <Field name="ano">
                {({ input, meta }) => (
                  <div className="flex flex-col my-3">
                    <input 
                      type="text"
                      {...input} 
                      placeholder="Ano" 
                      className="p-2 rounded-md"
                      />
                    {meta.error && meta.touched && 
                      <span className="text-xs text-red-600 mt-1">
                        {meta.error}
                      </span>
                    }
                  </div>
                )}
              </Field>              
              <Field name="local">
                {({ input, meta }) => (
                  <div className="flex flex-col my-3">
                    <input 
                      type="text"
                      {...input} 
                      placeholder="Local" 
                      className="p-2 rounded-md"
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