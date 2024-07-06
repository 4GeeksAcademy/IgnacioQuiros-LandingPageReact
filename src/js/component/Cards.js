import React from 'react'
import Card from './Card'

const Cards = () => {
    return (
        <div className="container bg-warning bg-gradient">
            <div className="row justify-content-between mx-1">
                <Card title="Tags" imgSrc="https://static6.depositphotos.com/1066961/552/i/450/depositphotos_5526033-stock-photo-blank-tag.jpg"
                    description=
                    "All tags have to be closed, that is, for example in img, now you we put a sidebar at the end" />
                <Card title="Class" imgSrc="https://files.realpython.com/media/Object-Oriented-Programming-OOP-in-Python-3_Watermarked.0d29780806d5.jpg"
                    description="All the: ´class´ properties are changed now to ´className´" />
                <Card title="Styles" imgSrc="https://static.javatpoint.com/tutorial/software-engineering/images/software-engineering-programming-style.png"
                    description="The inline style now looks like this: style={{width: ´18rem´, height: ´14rem´}}" />
                <Card title="Props" imgSrc="https://i.ytimg.com/vi/uvEAvxWvwOs/maxresdefault.jpg"
                    description="Style properties inline with camelCase: backgroundColor:´red´ instead of background-color: ´red´" />
            </div>
        </div>
    );
}

export default Cards