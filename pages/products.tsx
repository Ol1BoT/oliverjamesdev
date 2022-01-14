import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Products() {
  return (
    <Flex justifyContent={"center"}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDir={"column"}
        alignItems={"center"}
        w={["3xl", "6xl"]}
        gap={2}
        p={2}
        mb={55}
      >
        <Heading size={"sm"}>Votar</Heading>
        <Text>
          Votar is Edu-tech software that lets schools and other institutions
          hold elections for certain roles. Be it captains, head of house, head
          of a club etc.
        </Text>
        <Text>
          The app lets you create elections where people submit applications
          based on questions assigned to that election. Applications can be
          approved or denied, and from there the election can go live and people
          can vote. Applying and Voting can be restricted by year level.
        </Text>
        <Heading size={"sm"} mt="3">
          Features
        </Heading>
        <List mb="4">
          <ListItem>
            <ListIcon as={FaCheckCircle} size={"xs"} />
            OAuth2
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} size={"xs"} />
            Light and Dark Mode
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} size={"xs"} />
            Live Graphs Showing Results
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} size={"xs"} />
            Download Results
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} size={"xs"} />
            Bulk Upload Users
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} size={"xs"} />
            Limit Applications and Voting By Year Level
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} size={"xs"} />
            Ranked Voting
          </ListItem>
        </List>
        <Flex height={"full"} width={"full"} gap="4">
          <Box
            bg={"red.300"}
            position={"relative"}
            w="100%"
            rounded="lg"
            shadow="lg"
          >
            <Image
              src="/admin_page.png"
              layout="responsive"
              width={"640px"}
              height={"323px"}
            />
          </Box>
          <Box
            bg={"red.300"}
            position={"relative"}
            w="100%"
            rounded="lg"
            shadow="lg"
          >
            <Image
              src="/admin_page_dark.png"
              layout="responsive"
              width={"640px"}
              height={"323px"}
            />
          </Box>
        </Flex>
        <Flex height={"full"} width={"full"} gap="4">
          <Box
            bg={"red.300"}
            position={"relative"}
            w="100%"
            rounded="lg"
            shadow="lg"
          >
            <Image
              src="/application_page.png"
              layout="responsive"
              width={"640px"}
              height={"323px"}
            />
          </Box>
          <Box
            bg={"red.300"}
            position={"relative"}
            w="100%"
            rounded="lg"
            shadow="lg"
          >
            <Image
              src="/profile_desktop.png"
              layout="responsive"
              width={"640px"}
              height={"323px"}
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
