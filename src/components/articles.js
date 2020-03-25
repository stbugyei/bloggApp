import uuid from "uuid";
const articles = [
    {
      id: uuid.v4(),
      title: 'My day in integrify',
      category: 'Work',
      content: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    },
    {
      id: uuid.v4(),
      title: 'My talk at React Meetup',
      category: 'Speech',
      content: 'Something content here. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
    },
    {
      id: uuid.v4(),
      title: 'Running in the forest',
      category: 'Sport',
      content: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
    }
]

/*const loadArticles = ()=> {
    return articles
}*/

  
export default articles;