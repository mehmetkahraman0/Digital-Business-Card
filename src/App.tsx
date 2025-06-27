import Card from './Components/Card';
import type { Person } from './model/Person';

function App() {

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
      {personList.map((personItem, index) => (
        <Card key={index} person={personItem} />
      ))}
    </div>
  )
}

export default App
