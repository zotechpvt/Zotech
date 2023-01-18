import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [test, setTest] = useState(false); // Defaults to `false`
  const router = useRouter();

  const [color, setColor] = useState(false);
  const [show, setShow] = useState();

  useEffect(() => {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    if (router.pathname === "/") {
      setTest(true);
      header.classList.add("headerTest");
      nav.classList.add("menuTest");
    }
  }, []);

  useEffect(() => {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    function checkScroll() {
      if (window.innerWidth <= 768) {
        setColor(true);
      }
      if (window.scrollY === 0) {
        setColor(false);
      }
    }
    if (test) {
      window.addEventListener("scroll", checkScroll);
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", checkScroll);
    }
  }, [test]);

  console.log(color);

  return (
    <header
      style={{
        backgroundColor: color ? "#1c1c1c" : "transparent",
        height: "90px",
        boxShadow: "none",
      }}
    >
      <h1>
        <Link href="/">
          <span className="offscreen">Home</span>
        </Link>
      </h1>
      <nav id="menu">
        <ul>
          <li>
            <Link href="/mvg">MVG</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
