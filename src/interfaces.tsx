export interface Books {
  author: string,
  title: string,
  publisher: string,
  year: string,
  locale: string,
}

export interface Articles {
  author: string,
  title: string,
  publisher: string,
  mounth?: string,
  fascicle?: number,
  volume?: string,
  initialPage?: string,
  finalPage?: string,
  year: string,
  locale: string,
}