import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

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
          Votar is Edu-tech software so that schools and other institutions can
          hold elections for certain roles, be it captains, head of house, head
          of a club etc.
        </Text>
        <Text>
          The app lets you create elections where people submit applications
          based on questions assigned to that election. Applications can be
          approved or denied, and from there the election can go live and people
          can vote. Applying and Voting can be restricted by year level.
        </Text>
        <Text>
          Elections can be administered easily and quickly, and includes built
          in graphing so you can see live results as voting taking place.
        </Text>
      </Box>
    </Flex>
  );
}
