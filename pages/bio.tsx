import { Box, List, ListItem, ListIcon } from "@chakra-ui/react";
import React from "react";
import {
  FaHospitalAlt,
  FaUniversity,
  FaHammer,
  FaPlaneDeparture,
  FaCar,
} from "react-icons/fa";

export default function Bio() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDir={"column"}
      alignItems={"center"}
      overflow={"auto"}
      mb={10}
    >
      <List>
        <ListItem>
          <ListIcon as={FaHospitalAlt} />
          1989 Born Eastbourne, UK
        </ListItem>
        <ListItem>
          <ListIcon as={FaUniversity} />
          2010 BA in Digital Media
        </ListItem>
        <ListItem>
          {" "}
          <ListIcon as={FaHammer} />
          2011 DBA
          <ListItem>
            {" "}
            <ListIcon as={FaCar} />
            2011 Moved to Brighton, UK
          </ListItem>{" "}
        </ListItem>
        <ListItem>
          {" "}
          <ListIcon as={FaPlaneDeparture} />
          2016 Moved to Sydney, Australia
        </ListItem>
        <ListItem>
          <ListIcon as={FaHammer} />
          2017 Database Developer
        </ListItem>
        <ListItem>
          <ListIcon as={FaHammer} />
          2022 Founded Red Rogue Software
        </ListItem>
      </List>
    </Box>
  );
}
