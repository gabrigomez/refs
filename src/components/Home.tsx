import { useState } from "react"
import { Book } from "./Book"
import { Book as BookIcon, Article as ArticleIcon } from "@phosphor-icons/react"
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
          <button className="flex flex-col justify-center items-center hover:text-gray-700 duration-300" onClick={changeMode}>
            <BookIcon className="text-3xl" />
            <p className="text-sm">
              Book
            </p>
          </button>
          <button className="flex flex-col justify-center items-center hover:text-gray-700 duration-300" onClick={changeMode}>
            <ArticleIcon className="text-3xl" />
            <p className="text-sm">
              Article
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