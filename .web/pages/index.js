/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Avatar as RadixThemesAvatar, Button as RadixThemesButton, Card as RadixThemesCard, Flex as RadixThemesFlex, Link as RadixThemesLink, Section as RadixThemesSection, Text as RadixThemesText } from "@radix-ui/themes"
import { isTrue } from "/utils/state"
import NextLink from "next/link"
import { GithubIcon as LucideGithubIcon, LinkedinIcon as LucideLinkedinIcon } from "lucide-react"
import NextHead from "next/head"



export function Link_5b436dc2510c1913db9ef1c7c5894485 () {


  return (
    <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/picasso-matias-5b9834b6/`} passHref={true}>
  <RadixThemesButton>
  <LucideLinkedinIcon css={{"color": "var(--current-color)"}}>
  {`linkedin`}
</LucideLinkedinIcon>
  <RadixThemesText as={`p`}>
  {`Linkedin`}
</RadixThemesText>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_7962214d177576f565f25b9d8a8fc9cd () {


  return (
    <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/Rhagis`} passHref={true}>
  <RadixThemesButton>
  <LucideGithubIcon css={{"color": "var(--current-color)"}}>
  {`github`}
</LucideGithubIcon>
  <RadixThemesText as={`p`}>
  {`Github`}
</RadixThemesText>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_5d12ffa614f8e85130eb67a9658f9e80 () {


  return (
    <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/Rhagis/Proyectos-Python/tree/main/Proyecto%20juego`} passHref={true}>
  <RadixThemesButton>
  <LucideGithubIcon css={{"color": "var(--current-color)"}}>
  {`Github`}
</LucideGithubIcon>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesAvatar size={`9`} src={`logo_horda.jpg`}/>
  <RadixThemesText as={`p`} size={`5`}>
  {`Picasso Matias`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesText as={`p`}>
  {`Soy Picasso Matias, soy docente, Desarrollador Web Full Stack y un apacionado por la ciencia. Tengo conocimientos principalmente de Python y nociones basicas de PHP y Javascript.`}
</RadixThemesText>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <Link_7962214d177576f565f25b9d8a8fc9cd/>
  <Link_5b436dc2510c1913db9ef1c7c5894485/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <RadixThemesSection>
  <RadixThemesText as={`p`} size={`7`}>
  {`Formación`}
</RadixThemesText>
</RadixThemesSection>
  <RadixThemesSection>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`proyectos`}
</RadixThemesText>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesFlex>
  <RadixThemesCard css={{"alignItem": "flex-start", "border": "none", "width": "100%"}} size={`1`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <img css={{"width": "100%"}} src={`invasion_espacial.png`}/>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontWeigth": "bold", "fontSize": "2em"}}>
  {`INVASION ESPACIAL`}
</RadixThemesText>
  <Link_5d12ffa614f8e85130eb67a9658f9e80/>
</RadixThemesFlex>
  <RadixThemesText as={`p`}>
  {`asddsa`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesFlex>
  <RadixThemesFlex>
  <RadixThemesCard css={{"alignItem": "flex-start", "border": "none", "width": "100%"}} size={`1`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <img css={{"width": "100%"}} src={`invasion_espacial.png`}/>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontWeigth": "bold", "fontSize": "2em"}}>
  {`INVASION ESPACIAL`}
</RadixThemesText>
  <Link_5d12ffa614f8e85130eb67a9658f9e80/>
</RadixThemesFlex>
  <RadixThemesText as={`p`}>
  {`asddsa`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesFlex>
  <RadixThemesFlex>
  <RadixThemesCard css={{"alignItem": "flex-start", "border": "none", "width": "100%"}} size={`1`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <img css={{"width": "100%"}} src={`invasion_espacial.png`}/>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontWeigth": "bold", "fontSize": "2em"}}>
  {`INVASION ESPACIAL`}
</RadixThemesText>
  <Link_5d12ffa614f8e85130eb67a9658f9e80/>
</RadixThemesFlex>
  <RadixThemesText as={`p`}>
  {`asddsa`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesFlex>
  <RadixThemesFlex>
  <RadixThemesCard css={{"alignItem": "flex-start", "border": "none", "width": "100%"}} size={`1`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <img css={{"width": "100%"}} src={`invasion_espacial.png`}/>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontWeigth": "bold", "fontSize": "2em"}}>
  {`INVASION ESPACIAL`}
</RadixThemesText>
  <Link_5d12ffa614f8e85130eb67a9658f9e80/>
</RadixThemesFlex>
  <RadixThemesText as={`p`}>
  {`asddsa`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesSection>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <Link_7962214d177576f565f25b9d8a8fc9cd/>
  <Link_5b436dc2510c1913db9ef1c7c5894485/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
