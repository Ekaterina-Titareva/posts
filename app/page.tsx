import CustomLink from "@/components/custom-link/CustomLink";
import { AUTH_PAGE, PRODUCTS } from "@/constants/routing";

const HomePage = () => {



    return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <span>Добро пожаловать</span>
      <span>С начала нужно написать регистрацию и авторизацию </span>
      <span>а потом уже можно будет добавлять товары</span>
      <hr className="w-1/2 m-2 " />
      <CustomLink href={AUTH_PAGE}>Ссылка 1: Авторизация</CustomLink>
      <CustomLink href={PRODUCTS}>Ссылка 2: Продукты</CustomLink>
    </div>
  );
};

export default HomePage;
