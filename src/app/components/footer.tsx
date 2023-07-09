import {Container} from "@/app/layout/wrapper";
import {vstack, hstack} from "../../../styled-system/patterns";
import Image from "next/image";
import {css} from "../../../styled-system/css";
import Logo from "@/../public/assets/logo.svg"

export const Footer = () => {
  return (
    <footer className={css({
      backgroundColor: 'gray.100',
      py: '20',
      borderTop: '1px  solid #e5e7eb'
    })}>
      <Container>
        <div className={vstack({gap: '8', alignItems: 'center'})}>
          <Image
            src={Logo} alt={"picture of a image"} width="200" height="200"/>
          <div>
            <ul className={hstack({gap: '4', alignItems: 'center'})}>
              <li>
                <a className={css({_hover: {textDecoration: 'underline'}})}
                   href={"#"}>Home</a>
              </li>
              <li>
                <a className={css({_hover: {textDecoration: 'underline'}})}
                   href={"#"}>About</a>
              </li>
              <li>
                <a className={css({_hover: {textDecoration: 'underline'}})}
                   href={"#"}>Blog</a>
              </li>
              <li>
                <a className={css({_hover: {textDecoration: 'underline'}})}
                   href={"#"}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}