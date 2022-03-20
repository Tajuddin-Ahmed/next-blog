import Logo from "./logo";
import Link from "next/link";
import classes from "./main-navigation.module.css";
import { FaBlog } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <span style={{ color: "white" }}>
              <FaBlog />
            </span>

            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <span style={{ color: "white" }}>
              <MdContactPage />
            </span>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
