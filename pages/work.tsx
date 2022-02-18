import { Box, Flex, Heading, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const projects = [
  {
    title: "Student Analytics Dashboard",
    repo: false,
    repo_link: "",
    text: `SPA made with Vue and Node, showing various student analytics from attendance to academic performance. 
    As I was in charge of the entire project, I used Vuetify (Material Design framework) so that I didn't have to worry about designing all the components.`,
  },
  {
    title: "Canvas LMS Scraper - Extend SharePoint Expiry Links",
    text: `There was an ongoing issue with SharePoint links expiring in courses, as the policy was a share link would only stay active for a month at a time.
    Using the Canvas API I cycled through all published courses scrapping pages bodies looking for SharePoint links using Regex. Once the links were collated,
    MS Graph was used to update the expiry dates for the drive items`,
  },
  {
    title: "Student Information System",
    repo: false,
    postman: true,
    text: `Side project made using Go and Vue. A modern Student information system built API first, make it easier for schools to expand their ecosystem without having
  to give developers access to their database.`,
  },

  {
    title:
      "Microsoft SharePoint Members & Teams: Automation based of AD Groups",
    repo: false,
    repo_link: "",
    text: `Using Go and the Microsoft Graph API, I automated the group and user syncing based on Microsoft AD security groups.`,
  },
  {
    title: "AD Distribution Groups",
    repo: false,
    repo_link: "",
    text: "Using Go, I automated the creation and syncing of distribution groups. These groups were based on different staff identifers within the HR software, using SQL to extract the necessary data.",
  },
  {
    title: "Automating LMS Sync",
    repo: false,
    repo_link: "",
    text: `A multi part project made up of multiple small programs mainly written in Go and Python`,
  },
  {
    title: "SSRS Reports - Running, Grouping and Emailing",
    repo: false,
    repo_link: "",
    text: `While SSRS comes with a built in email scheduler, if you wanted to collate reports together and email them off to certain users, you have to do it yourself.
    I forked the PySSRS library as I needed NLTM authentication and multi value parameters.`,
  },
  {
    title: "MailChimp - Audience Upload",
    repo: false,
    repo_link: "",
    text: `Rather than upload CSVs to MailChimp, using their API I created a Go program that posts user information into our audience, so they can receiving mail`,
  },
];

export default function Work() {
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
          Projects
        </Heading>
        <List spacing={10}>
          {projects.map((v) => (
            <ListItem display={"flex"} flexDir={"column"} key={v.title}>
              <Heading size="sm" mw={"25%"}>
                {v.title}
              </Heading>
              <Text>{v.text}</Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </Flex>
  );
}
