import CustomLink from "@/src/ui/custom-link/CustomLink";
import { AUTH_PAGE, PRODUCTS } from "@/src/constants/routing";

const HomePage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1>Добро пожаловать</h1>
      <hr className="w-1/6 m-2 " />
      <CustomLink href={AUTH_PAGE}>Ссылка 1: Авторизация</CustomLink>
      <CustomLink href={PRODUCTS}>Ссылка 2: Статьи</CustomLink>
    </div>
  );
};

export default HomePage;
