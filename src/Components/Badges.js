import { useState } from "react"

function Badges() {

    const badges = ['you', 'me', 'flower', 'cat', 'dog', 'bear', 'glass', 'apple', 'pear', 'sun', 'moon', 'friend', 'strawberry', 'book', 'doll', 
    'car', 'we', 'baby', 'stairs', 'window', 'icecream', 'monkey', 'lion', 'bird', 'stone', 'rose', 'planet', 'kitchen', 'mommy', 'ome', 'daddy', 
    'girl', 'boy', 'sunset', 'butterfly', 'cold', 'winter', 'sea', 'ski' ]
    const [input, setInput] = useState('')
    const inputList = input.split(' ')
    let content = ''
    const highlightMatch = (event) => {
        setInput(event.target.value)
    }
    const badgesList = badges.map ((badge, index) => {
        let badgeClass = 'badge rounded-pill bg-secondary m-1'
        if (inputList.includes(badge)) {
            badgeClass = 'badge rounded-pill bg-success m-1'
        }
        content = inputList.join(', ')
        return (
         <span class={badgeClass} key={index}>{badge}</span>
        )
    })

    return (
        <div className="container" style={{minHeight: '40rem'}}>
            <div className="row mt-5">
            <h5 className="display-4">Looking for tags: {content}</h5>
            </div>
            <div className="row mt-2">
            <input onChange={highlightMatch} value={input}></input>
            </div>
            <div className="row mt-2">
            {badgesList}
            </div>  
        </div>
    )
}

export default Badges