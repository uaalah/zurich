import { FC } from "react";
import { ICardProps } from "../models";
import { Box, CardDisplay, Image, Text } from "../styles";


const Card: FC<ICardProps> = ( props ) => {
  const { descripcion, titulo, url } = props
  return(
    <CardDisplay>
      <div className="card--header">
        <Text as="h3" className="cardHeader">{titulo}</Text>
        <Image src={url} alt={titulo} />
      </div>
      <div className="card--content">
        <div className="card--content--text">
          {descripcion}
        </div>
      </div>
    </CardDisplay>
  )
}

export default Card