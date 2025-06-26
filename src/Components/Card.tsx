import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import personFoto from "../assets/profile.png"
import type { Person } from "../model/Person";

type CardProps = {
    person: Person
}

//{ imgUrl }: CardProps

const Card = ({ person }: CardProps) => {
    return (
        <div className="bg-gray-500 max-w-max border-2 rounded-3xl flex flex-col">
            <div className="flex flex-row justify-center">
                <img className="inset-shadow-amber-50 object-cover rounded-[50%]  h-[90px] w-[90px] sm:w-[110px] sm:h-[110px] md:w-[140px] md:h-[140px] lg:w-[170px] lg:h-[170px] border-1 mt-6 mb-4 mx-6" src={person.imgUrl || personFoto} alt="profil fotografı" />
            </div>
            <div className="flex flex-col justify-center items-center ">
                <p className="font-semibold text-[18px] text-amber-50">{person.name}</p>
                <p className="font-normal text-amber-50">{person.status}</p>
            </div>
            <hr className="w-[170px] self-center mt-2 mb-3 text-white" />
            <div className="flex flex-row justify-center gap-2 mt-3 mb-10 text-[20px] text-amber-50">
                <a className="hover:text-red-400 transition-all" href={person.instagram}><FaInstagram /></a>
                <a className="hover:text-red-400 transition-all" href={person.twitter}><FaTwitter /></a>
                <a className="hover:text-red-400 transition-all" href={person.linked}><FaLinkedin /></a>
            </div>
        </div>
    )
}

export default Card