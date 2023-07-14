import { Books } from "./interfaces";

export const validateBooks = (values: Books) => {
  const errors = {
    author: false,
    title: false,
    publisher: false,
    year: false,
    locale: false,      
  }
  
  if (!values.author) {
    errors.author = true
    return errors
  }
  if (!values.title) {
    errors.title = true
    return errors
  }
  if (!values.publisher) {
    errors.publisher = true
    return errors
  }
  if (!values.year) {
    errors.year = true
    return errors
  }
  if (!values.locale) {
    errors.locale = true
    return errors
  }

  return
}