import { AppState as ListProps } from "../App"

const List: React.FC<ListProps> = ({people}) => {

    const runList = ():JSX.Element[] => {
        return people.map(person => (
            <li className='List'>
                <div className="List-header">
                    <img src={person.img} alt="img" className="List-img" />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className='discription'>{person.discription}</p>
            </li>
        ))
    }

  return (
    <>
       {runList()} 
    </>
  )
}

export default List