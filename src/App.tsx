import Card from './Components/Card';
import type { Person } from './model/Person';

function App() {

  const person1: Person = {
    imgUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    name: "Mehmet Kahraman",
    status: "Yazılım Mühendisi",
    linked: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.x.com",
  }
  const person2: Person = {
    imgUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    name: "Harun Sakallı",
    status: "Müdür",
    linked: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.x.com",
  }

  const person3: Person = {
    imgUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    name: "Sultan Yılmaz",
    status: "Müdür Yardımcısı",
    linked: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.x.com",
  }

    const person4: Person = {
    imgUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    name: "Ahmet Taşkın",
    status: "Müdür Yardımcısı",
    linked: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.x.com",
  }

  const person: Person[] = [person1, person2, person3, person4]

  const personList: Person[] = [
    {
    imgUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    name: "Ahmet Taşkın",
    status: "Müdür Yardımcısı",
    linked: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.x.com",
    },
    {
    imgUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    name: "Ahmet Taşkın",
    status: "Müdür Yardımcısı",
    linked: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.x.com",
    },
    {
    imgUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    name: "Ahmet Taşkın",
    status: "Müdür Yardımcısı",
    linked: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.x.com",
    },
    {
    imgUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    name: "Ahmet Taşkın",
    status: "Müdür Yardımcısı",
    linked: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.x.com",
    },
    {
    imgUrl: "https://images.pexels.co2m/photos/614810/pexels-photo-614810.jpeg",
    name: "Ahmet Taşkın",
    status: "Müdür Yardımcısı",
    linked: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.x.com",
    },
  ]

  return (
    <div className='w-[100vw] h-[100vh] flex flex-row flex-wrap justify-center items-center gap-15'>
      {/* <Card person={person1} />
      <Card person={person2} />
      <Card person={person3} /> 
      <Card person={person4} />
      */}
      {personList.map((person, index) => (
        <Card key={index} person={person} />
      ))}
    </div>
  )
}

export default App
