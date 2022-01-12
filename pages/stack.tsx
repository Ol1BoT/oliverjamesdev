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
    description: `NodeJS is one of my favourite back-end's to use for API creation. The NPM eco-system makes it easy to get stuff done fast, and with the addition of TypeScript it enjoy it even more.
			Drawbacks are that I don't enjoy dependency hell, updating packages can be annoying and I've had to rebuild a few projects becaue of it.`,
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
    description: `My first role out of University was that of a DBA, and it isn't a role I hold dearly, nor one that I would go back to if I had the choice. However thanks
			to that role I picked up strong SQL/T-SQL skills, the majority of which are transferable to other SQL based DB's. Since that job I have used both MS SQL Server
			and PostgreSQL in production.`,
    icon: AiOutlineConsoleSql,
  },

  {
    name: "Python",
    description: `When I first started doing automations I used Python as it is a great beginner language, and there are some very good libaries out there for automating 
			tasks. I have used to wrangle data using Numpy, Pandas and Jupyter Notebook.`,
    icon: FaPython,
  },
  {
    name: "Vue",
    description: `Vue was the first front-end framework that I really enjoyed and started making projects with it. Vuetify was a big incentive to use Vue as well as it is an
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
    description: `I've only used React for personal projects due to wanting to improve at it, as it is the worlds most popular front-end "library" (can we just call it a framework already?).
			This website was made using React (specifically NextJS) and tailwindcss`,
    icon: FaReact,
  },
  {
    name: "AWS",
    description: `I have used a range of AWS services, but mainly RDS, ECS and EC2. 
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
