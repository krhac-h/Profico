import React, { useState, useEffect } from "react";
type Props = {
    src?: string;
};


const ArticleImage: React.FC<Props> = ({ src }) => {

    const [randomNumber, setRandomNumber] = useState(0);

    useEffect(() => {
        const random1 = Math.floor(Math.random() * 51);
        setRandomNumber(random1);
    }, []);



    return (

        <img src={src ? src : `https://picsum.photos/${400 + randomNumber}/200`} className='article-img'  ></img>
    )
}

export default ArticleImage