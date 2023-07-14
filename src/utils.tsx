import { Articles, Books } from "./interfaces";

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

export const validateArticles = (values: Articles) => {
  const errors = {
    author: false,
    title: false,
    publisher: false,
    mounth: false,
    year: false,
    fascicle: false,
    volume: false,
    initialPage: false,
    finalPage: false,
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
  if (!values.mounth) {
    errors.mounth = true
    return errors
  }
  if (!values.year) {
    errors.year = true
    return errors
  }
  if (!values.fascicle) {
    errors.fascicle = true
    return errors
  }
  if (!values.volume) {
    errors.volume = true
    return errors
  }
  if (!values.initialPage) {
    errors.initialPage = true
    return errors
  }
  if (!values.finalPage) {
    errors.finalPage = true
    return errors
  }
  if (!values.locale) {
    errors.locale = true
    return errors
  }

  return
}