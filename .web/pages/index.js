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

export function Link_ff64b1a0c22d2133f851655d9b91a3cc () {


  return (
    <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/Rhagis/Proyectos-Python/tree/main/Proyecto%20juego`} passHref={true}>
  <RadixThemesText as={`p`}>
  {`invasion espacial`}
</RadixThemesText>
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
  {`Descripcion`}
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
  <RadixThemesCard css={{"alignItem": "flex-start", "border": "none"}} size={`1`}>
  <img src={`invasion_espacial.png`}/>
  <Link_ff64b1a0c22d2133f851655d9b91a3cc/>
</RadixThemesCard>
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
