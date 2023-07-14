import { FC } from "react"
import { Articles } from "../interfaces"

export const Refs: FC<Articles> = ({...props}) => {
  const author = (props.author).split(' ')
  const firstName = (author[author.length -1]).toUpperCase()
  const lastName = author[0]
  
  console.log(props.className)

  return (
    <div className={`w-full flex flex-col ${props.className ? props.className : 'text-black'}`}>
      <div>
        <p className="font-semibold">
          REFERÊNCIA
        </p>
      </div>
      <div className="flex flex-col justify-center items-center sm:flex-row">
        <div className="flex">
          <p className="mr-1">
            {firstName}, 
          </p>
          <p className="mr-1">
            {lastName}.
          </p>       
          <p className="font-bold mr-1">
            {props.title}.
          </p>     
        </div>
        <div className="flex">
          <p className="mr-1">
            {props.publisher}:
          </p>
          <p className="mr-1">
            {props.locale},
          </p>
          {props.volume && (
            <p className="mr-1">
              v. {props.volume},
            </p>
          )}
          {props.volume && (
            <p className="mr-1">
              n. {props.fascicle},
            </p>
          )}
          {props.initialPage && (
            <p className="mr-1">
              p. {props.initialPage}-
            </p>
          )}
          {props.finalPage && (
            <p className="mr-1">
              {props.finalPage},
            </p>
          )}
          {props.mounth && (
            <p className="mr-1">
              {props.mounth}
            </p>
          )}
          <p className="mr-1">
            {props.year}.
          </p>
        </div>
      </div>
    </div>
  )
}