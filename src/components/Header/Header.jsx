import LOGO from "../../assets/logo.svg";
import Favorite from "./Favorite";
import FavoriteListModal from "./FavoriteListModal";
import Search from "./Search";

const Header = () => {
  return (
    <header class="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav class="container flex items-center justify-between py-6">
        <a href="./index.html">
          <img class="h-9" src={LOGO} alt="Weather App" />
        </a>

        <div class="flex items-center gap-4 relative">
          <Search />
          <Favorite />
          <FavoriteListModal />
        </div>
      </nav>
    </header>
  );
};

export default Header;
