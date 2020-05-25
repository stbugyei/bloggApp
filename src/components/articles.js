import uuid from "uuid";
import Image1 from './images/sunset.jpg'
import Image2 from './images/afternoon.jpg'
import Image3 from './images/background.jpg'


const getTime = () => {

  const months = ["JANUARY", "FEBUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

  let currentDate = new Date()
  let formatedDate = currentDate.getDate() + "-" + months[currentDate.getMonth()] + "-" + currentDate.getFullYear() + ' ' + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();

  return formatedDate
}


const articles = [
  {
    id: uuid.v4(),
    image: Image1,
    title: 'My day in integrify',
    date: getTime(),
    sypnosis: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
    category: 'Work',
    content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  },
  {
    id: uuid.v4(),
    image: Image2,
    title: 'My talk at React Meetup',
    date: getTime(),
    sypnosis: 'Something content here. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
    category: 'Speech',
    content: 'Something content here. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
  },
  {
    id: uuid.v4(),
    image: Image3,
    title: 'Running in the forest',
    date: getTime(),
    sypnosis: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
    category: 'Sport',
    content: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content'
  },
 
]

/*const loadArticles = ()=> {
    return articles
}*/


export default articles;