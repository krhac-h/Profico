interface Props {
  isLoading: boolean;
}

const SimpleLoading:React.FC<Props> = ({isLoading}) => {
  return (
      isLoading &&
      <article>

      <div style={{ gridColumn: "span 3" }}><progress /></div>
      </article>
  )
}

export default SimpleLoading