import { useState } from "react"
import { Book } from "./Book"
import { Article } from "./Article"

export const Home = () => {
  const [isBook, setIsBook] = useState<boolean>(true)

  const changeMode = () => setIsBook(!isBook)

  return (
    <div>
      <div className="mb-4">
        <div className="mb-4">
          <p className="font-title text-3xl font-bold">
            REFS
          </p>
          <p className="font-body">
            Gerador de referências online
          </p>
        </div>
        <div>
          <button className="mr-4 hover:text-gray-700 duration-300" onClick={changeMode}>
            Book
          </button>
          <button className="mr-4 hover:text-gray-700 duration-300" onClick={changeMode}>
            Article
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