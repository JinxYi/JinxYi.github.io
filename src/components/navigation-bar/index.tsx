import "./index.css";
import { createRef } from "preact";
import { useEffect } from "preact/hooks";

interface NavigationBarProps {
  title: string;
  items?: NavItem[];
}

interface NavItem extends Partial<HTMLAnchorElement> {
  name: string;
  icon?: preact.VNode;
}

export const NavigationBar = ({ title, items }: NavigationBarProps) => {
  const stickyNavBarRef = createRef();
  const navListRef = createRef();
  const stickyNavBar = () => {
    if (window.scrollY >= 100) {
      stickyNavBarRef?.current.classList.add("sticky-header");
    } else {
      stickyNavBarRef?.current.classList.remove("sticky-header");
    }
  };
  const toggleMenu = () => {
    navListRef?.current.classList.toggle("show");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => stickyNavBar());
  }, []);

  return (
    <div id="navbar-wrapper" class="wrapper sticky" ref={stickyNavBarRef}>
      <header>
        <a class="hide-bar logo" href="#">
          {title}
        </a>

        <nav class="navbar">
          <ul class="nav-list" ref={navListRef}>
            {items?.map((item) => (
              <li class="nav-item">
                <a href={item.href}>
                  {item.name}
                  {item.icon && <span class="nav-icon">{item.icon}</span>}
                </a>
              </li>
            ))}
            {/* <li class="nav-item">
              <a target="_blank" href="./pages/cv.html">
                CV &nbsp;
                
              </a>
            </li> */}
          </ul>
          <span class="nav-item" id="menu-bar-icon" onClick={toggleMenu}>
            <span>
              <i class="fa-solid fa-bars-staggered"></i>
            </span>
          </span>
          {/* <fa-icon .icon=${faBarsStaggered}></fa-icon> */}
        </nav>
      </header>
    </div>
  );
};
