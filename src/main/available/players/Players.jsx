import profileicon from "../../../assets/images/user.png"
import flagicon from "../../../assets/images/report.png"
import dollericon from "../../../assets/images/doller.png"



const Players = ({players,handleSelectedPlayer}) => {
    const {id,name,country,role,batting_style,bowling_style,rating,price,photo} = players;
  return (
    <div>
        <div className="card bg-base-100 w-96 shadow-xl py-6">
  <figure>
    <img className="w-full h-[250px]"
      src={photo}
      alt="Shoes" />
  </figure>
  <div className="py-2 px-4">
    <h2 className="card-title">
        <img src={profileicon} alt="" />{name} 
    </h2>
    <div className="flex justify-between items-center">
    <div className="flex gap-2 items-center py-2">
        <img src={flagicon} alt="" />
        <p className="text-lg mb-1">Bangladesh</p>
        
    </div>
    <h2 className="text-lg">{role}</h2>

    </div>
    <hr />
    <h2 className="text-lg">Ratting</h2>
    <div className="flex justify-between py-2">
        <p className="text-lg">{batting_style}</p>
        <p className="text-lg">{bowling_style}</p>

    </div>
    <div className="flex justify-between py-2">
        <p className="text-lg">Price ${price}</p>
        <button onClick={()=>handleSelectedPlayer(players)} className="choseplayer-btn px-2 rounded-md">Choose Player</button>

    </div>
   
    
  </div>
</div>
    </div>
  )
}

Players.propTypes = {}

export default Players