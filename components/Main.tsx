import {
  Box,
  Button,
  Heading,
  useColorModeValue,
  Link,
  Flex,
  useDisclosure,
  SlideFade,
  ScaleFade,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import { FiMoon, FiSun } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

const Home: NextPage = ({ children }) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const router = useRouter();

  return (
    <Box>
      <Flex
        justifyContent={"center"}
        bg={useColorModeValue("gray.50", "gray.900")}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          bg={useColorModeValue("gray.50", "gray.900")}
          w={["full", "full", "6xl"]}
          px={4}
          justifyContent={"space-between"}
        >
          <Box w={50} mt={2}>
            <Image src="/oj_small.png" height={500} width={500}></Image>
          </Box>
          <Button
            onClick={() => {
              toggleColorMode();
              console.log("clickkkk");
            }}
          >
            {colorMode === "light" ? <FiMoon /> : <FiSun />}
          </Button>
        </Box>
      </Flex>
      <Box mt={6}>
        <Heading
          // bgGradient="linear(to-l, #7928CA, #FF0080)"
          // bgClip="text"
          fontSize="6xl"
          letterSpacing={2}
          textAlign={"center"}
          px={2}
        >
          Oliver James Mignot
        </Heading>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mt={7}>
        <Heading
          fontSize="3xl"
          fontWeight="extrabold"
          letterSpacing={4}
          textAlign={"center"}
          mb={1}
        >
          Full Stack Developer
        </Heading>
      </Box>
      <div>
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={5}
          my={2}
          p={5}
          flexWrap={"wrap"}
        >
          <NextLink href="/" passHref>
            <Link>Bio</Link>
          </NextLink>
          <NextLink href="/stack" passHref>
            <Link>Stack</Link>
          </NextLink>
          <NextLink href="/products" passHref>
            <Link>Products</Link>
          </NextLink>
          <NextLink href="/work" passHref>
            <Link>Work</Link>
          </NextLink>
          <NextLink href="/contributions" passHref>
            <Link>Contributions</Link>
          </NextLink>
        </Box>
        <SlideFade key={router.route} in={true} offsetY={20}>
          <Box>{children}</Box>
        </SlideFade>
      </div>
      <Box as={"footer"} pos={"fixed"} bottom={0} w={"100%"} h={50}>
        <Flex
          w={"full"}
          justifyContent={"center"}
          h="100%"
          alignItems={"center"}
          gap={7}
          bg={useColorModeValue("gray.50", "gray.900")}
        >
          <FaGithub size={35} />
          <FaLinkedin size={35} />
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
