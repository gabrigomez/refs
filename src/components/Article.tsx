import { Field, Form } from "react-final-form"
import { Articles } from "../interfaces"
import { validateArticles } from "../utils"

export const Article = () => {
  
  const onSubmit = (values: Articles) => {
    console.log(values)
  }

  return (
    <div className="bg-sky-700 rounded-md">
      <div className='flex flex-col jus items-center'>
        <div className='mt-2'>
          <p>Article</p>
        </div>
        <Form
          onSubmit={onSubmit}
          validate={validateArticles}
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
              <Field name="mounth">
                {({ input, meta }) => (
                  <div className="flex flex-col my-3">
                    <input 
                      type="text"
                      {...input} 
                      placeholder="Mês" 
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
              <Field name="fascicle">
                {({ input, meta }) => (
                  <div className="flex flex-col my-3">
                    <input 
                      type="text"
                      {...input} 
                      placeholder="N° do Fascículo" 
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
              <Field name="volume">
                {({ input, meta }) => (
                  <div className="flex flex-col my-3">
                    <input 
                      type="text"
                      {...input} 
                      placeholder="N° do Volume" 
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
              <Field name="initialPage">
                {({ input, meta }) => (
                  <div className="flex flex-col my-3">
                    <input 
                      type="text"
                      {...input} 
                      placeholder="Página Inicial" 
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
              <Field name="finalPage">
                {({ input, meta }) => (
                  <div className="flex flex-col my-3">
                    <input 
                      type="text"
                      {...input} 
                      placeholder="Página Final" 
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