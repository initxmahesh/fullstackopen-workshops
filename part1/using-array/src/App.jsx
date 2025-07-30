import SayHello from "./SayHello"

let App = () => {

    const peoples = [
        {
            firstName: "Mahesh",
            lastName: "Chaudhary",
            id: 101
        },
        {
            firstName: "Bijay",
            lastName: "Pokhrel",
            id: 190
        },
        {
            firstName: "Lokesh",
            lastName: "Chaudhary",
            id: 250
        }
    ]
    
    return (
        <>
            {peoples.length > 0 ?
                (
                    peoples.filter(element => element.id>200).map((people) => (
                        <SayHello name={people} id={people.id}></SayHello>
                    ))
                ) : (
                    <p>There are no people</p>
                )
            }
        </>
    )

}

export default App