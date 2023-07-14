import { FC } from "react"
import { Work } from "../interfaces"

export const Refs: FC<Work> = ({...props}) => {
  const author = (props.author).split(' ')
  const firstName = (author[author.length -1]).toUpperCase()
  const lastName = author[0]

  const workData = {
    lastName: firstName + ',',
    firstName: lastName + '.',
    title: props.title + ',',
    publisher: props.publisher + ',',
    locale: props.locale  + ',',
    year: props.year + '.'
  }

  // const array = Object.values({...workData}).splice(1, 1)
  //const object = Object.values({...workData}).join(' ')

  const object = Object.values({...workData})

  return (
    <div className={`w-full flex flex-col ${props.className ? props.className : 'text-black'}`}>
      <div>
        <p className="font-semibold">
          REFERÊNCIA
        </p>
      </div>
      <div className="flex m-2 justify-center items-center sm:flex-row">
        <div className="flex">
          <p>          
            {firstName}, {lastName}. <span className="font-bold">{props.title}</span>. {props.publisher}: 
            {props.locale}, {props.year}.
          </p>          
        </div>       
      </div>
    </div>
  )
}