type Props = {
    src?: string;
  };

const ArticleImage: React.FC<Props> = ({src }) => {
    const random1 = Math.floor(Math.random() * 51)
    const random2 = Math.floor(Math.random() * 51)
    return (

        <img src={src ? src : `https://picsum.photos/${500 + random1}/${250 + random2}`} className='article-img' ></img>
    )
}

export default ArticleImage