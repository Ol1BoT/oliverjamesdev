import React from "react";
import {
  FaNodeJs,
  FaPython,
  FaVuejs,
  FaDocker,
  FaReact,
  FaAws,
} from "react-icons/fa";

import { AiOutlineConsoleSql } from "react-icons/ai";
import { Box, Flex, Text } from "@chakra-ui/react";
import GoIcon from "../components/GoIcon";

const tech = [
  {
    name: "NodeJS",
    description: `NodeJS is one of my favourite back-end's to use for API creation. The NPM eco-system makes it easy to get stuff done fast, and with the addition of TypeScript I enjoy it even more.`,
    icon: FaNodeJs,
  },
  {
    name: "Golang",
    description: `Golang is my favourite and go-to language currently. The performance, ease of deployment, readability and amazing standard library make it top tier. However there is a lot of boilerplate to write
			so don't expect to see results as fast as Node.`,
    icon: GoIcon,
  },
  {
    name: "SQL",
    description: `My first job out of University was Database Administrator. Thanks to that role I developed strong SQL skills,
     which can be used across many DB's. I have experience in both MSSQL Server and PostreSQL in production.`,
    icon: AiOutlineConsoleSql,
  },

  {
    name: "Python",
    description: `When I first began doing automations I used Python as it is a great beginner language, and there are some very good libaries out there for automating 
			tasks. I have also used Numpy and Pandas for data wrangling`,
    icon: FaPython,
  },
  {
    name: "Vue",
    description: `Vue was the first front-end framework that I really enjoyed and started creating projects with it. Vuetify was a big incentive to use Vue as well as it is an
			excellent material design component library that extracted a lot of the pains out of making dynamic web components.`,
    icon: FaVuejs,
  },
  {
    name: "Docker",
    description: `I love Docker. I would not create a major project without it. I have used Docker for a number of years and have a few production applications running in
			AWS ECS, and while there is a bit of a learning curve to creating and operating containers, it doesn't take much at all to getting something up and running
	 locally.`,
    icon: FaDocker,
  },
  {
    name: "React",
    description: `React is currently my tool of choice for creating web app (specifically NextJS). I used React for my Votur app as well as this website.`,
    icon: FaReact,
  },
  {
    name: "AWS",
    description: `I have used a range of AWS services, mainly RDS, ECS and EC2. 
	I have also used the AWS SDK for JavaScript and Golang making it easier to integrate services such as S3 into applications`,
    icon: FaAws,
  },
];

export default function Stack() {
  return (
    <Flex w={"full"} justifyContent={"center"} mb={"60px"}>
      <Box
        w={["3xl", "6xl"]}
        display={"flex"}
        justifyContent={"center"}
        gap={9}
        flexDir={["column", "row"]}
        flexWrap={"wrap"}
      >
        {tech.map((t) => (
          <Flex
            key={t.name}
            gap={2}
            w={["100%", "40%"]}
            flexDir={["column", "column", "row"]}
            p={2}
          >
            <Flex flexDir={["row", "column"]} alignItems={"center"} gap={4}>
              <Box
                rounded={"lg"}
                bg={"teal.300"}
                display={"flex"}
                height={50}
                w={50}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <t.icon size={40} />
              </Box>
              <Text fontWeight={"semibold"}>{t.name}</Text>
            </Flex>
            <dd>{t.description}</dd>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
}
