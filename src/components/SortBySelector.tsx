import { FC, useState, useRef } from "react";
import { useClickAway } from "react-use"
import { Box, ButtonDisplay, Text } from "../styles";
import { SortByTypes, SortReducerTypes } from "./CardList";

interface ISortBySelector {
  sortBy: SortByTypes
  action: (sort: SortByTypes) => void
}

enum SORT_LITERALS {
  DATE_ASC = 'Fecha de creación ascendente',
  DATE_DESC = 'Fecha de creación descendiente',
  TITLE_ASC = 'Título ascendente',
  TITLE_DESC = 'Título descendiente'
}

const SortBySelector: FC<ISortBySelector> = ({sortBy, action}) => {
  const [dropdownStatus, setDropdownStatus] = useState<boolean>(false)
  const refDropDown = useRef(null);
  useClickAway(refDropDown, () => setDropdownStatus(false));

  const clickHandler = (sort: SortByTypes) => {
    action(sort)
    setDropdownStatus(false)
  }
  return(
    <Box position="relative" width={{_:'100%', tablet: 'auto'}}>
      {!dropdownStatus && (
        <ButtonDisplay
          className="outline"
          onClick={() => setDropdownStatus(true)}
          px={6}
          py={2}
          borderRadius="m"
          width="100%"
        >
          <Text as="span" mr={4}>Ordenar por:  <strong>{SORT_LITERALS[sortBy]}</strong></Text>
        </ButtonDisplay>
      )}
      {dropdownStatus && (
        <Box 
          ref={refDropDown}
          display="flex"
          flexDirection="column"
          zIndex="dropDown"
          position="absolute"
          top= {0}
          right= {0}
          width={{_: "100%", tablet: "auto"}}
          backgroundColor={{_:"bgDefault", tablet: 'transparent'}}
        >
          <ButtonDisplay
            className="outline"
            onClick={() => clickHandler(SortReducerTypes.DATE_ASC)}
            px={6}
            py={2}
            borderRadius="m"
            mb={2}
          >
            {SORT_LITERALS.DATE_ASC}
          </ButtonDisplay>
          <ButtonDisplay
            className="outline"
            onClick={() => clickHandler(SortReducerTypes.DATE_DESC)}
            px={6}
            py={2}
            borderRadius="m"
            mb={2}
          >
            {SORT_LITERALS.DATE_DESC}
          </ButtonDisplay>
          <ButtonDisplay
            className="outline"
            onClick={() => clickHandler(SortReducerTypes.TITLE_ASC)}
            px={6}
            py={2}
            borderRadius="m"
            mb={2}
          >
            {SORT_LITERALS.TITLE_ASC}
          </ButtonDisplay>
          <ButtonDisplay
            className="outline"
            onClick={() => clickHandler(SortReducerTypes.TITLE_DESC)}
            px={6}
            py={2}
            borderRadius="m"
            mb={2}
          >
            {SORT_LITERALS.TITLE_DESC}
          </ButtonDisplay>
        </Box>
      )}
    </Box>
  )
}

export default SortBySelector