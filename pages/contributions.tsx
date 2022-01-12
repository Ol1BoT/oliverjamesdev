import {
  Flex,
  Box,
  Heading,
  List,
  ListItem,
  ListIcon,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { FaPython } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import NextLink from "next/link";

export default function Contributions() {
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
        mb={50}
      >
        <Heading size={"sm"} mb={5}>
          Open Source Contributions / Forks
        </Heading>
        <List spacing={8}>
          <ListItem>
            <Flex flexDir={"column"}>
              <NextLink href={"https://github.com/Ol1BoT/PySSRS"} passHref>
                <Link isExternal>
                  <Heading size={"sm"} display={"flex"} alignItems={"center"}>
                    <ListIcon as={FaPython} />
                    PySSRS
                    <Box ml={3}>
                      <FiExternalLink />
                    </Box>
                  </Heading>
                </Link>
              </NextLink>
              Forked to add NTLM auth + take in an array of parameters
            </Flex>
          </ListItem>
          <ListItem>
            <Flex flexDir={"column"}>
              <NextLink href={"https://github.com/unsupported/canvas"} passHref>
                <Link isExternal>
                  <Heading size={"sm"} display={"flex"} alignItems={"center"}>
                    <ListIcon as={FaPython} />
                    Unsupported/Canvas
                    <Box ml={3}>
                      <FiExternalLink />
                    </Box>
                  </Heading>
                </Link>
              </NextLink>
              Minor improvement to profile picture upload, as it would fail if a
              user profile picture did not exist
            </Flex>
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
}
