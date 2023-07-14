import { FC } from "react"
import { Books } from "../interfaces"

export const Refs: FC<Books> = ({...props}) => {
  const author = (props.author).split(' ')
  const firstName = (author[author.length -1]).toUpperCase()
  const lastName = author[0]

  return (
    <div className="w-full flex flex-col">
      <div>
        <p className="font-semibold">
          REFERÊNCIA
        </p>
      </div>
      <div className="flex flex-col justify-center items-center sm:flex-row text-black">
        <div className="flex">
          <p className="mr-1">
            {firstName}, 
          </p>
          <p className="mr-1">
            {lastName}.
          </p>       
          <p className="font-bold mr-1">
            {props.title},
          </p>     
        </div>
        <div className="flex">
          <p className="mr-1">
            {props.publisher}:
          </p>
          <p className="mr-1">
            {props.locale},
          </p>
          <p className="mr-1">
            {props.year}.
          </p>
        </div>
      </div>
    </div>
  )
}