import { useState } from "react"
import { Book } from "./Book"
import { Books as BookIcon, Article as ArticleIcon } from "@phosphor-icons/react"
import { Article } from "./Article"

export const Home = () => {
  const [isBook, setIsBook] = useState<boolean>(true)

  const changeMode = () => setIsBook(!isBook)

  return (
    <div>
      <div className="mb-4">
        <div className="mb-6">
          <p className="font-title text-5xl font-bold">
            REFS
          </p>
          <p className="font-body text-xs font-semibold">
            Gerador de referências online
          </p>
        </div>
        <div className="flex items-center justify-evenly">
          <button className="flex flex-col justify-center items-center hover:text-slate-400 duration-300" onClick={changeMode}>
            <BookIcon className="text-3xl" />
            <p className="text-sm">
              Livros
            </p>
          </button>
          <button className="flex flex-col justify-center items-center hover:text-sky-700 duration-300" onClick={changeMode}>
            <ArticleIcon className="text-3xl" />
            <p className="text-sm">
              Artigos
            </p>
          </button>
        </div>
      </div>
      <div>
        {isBook ? (
          <Book />
        ) : (
          <Article />
        )}
      </div>
    </div>
  )
} 