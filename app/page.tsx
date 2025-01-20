import CustomLink from '@/src/ui/custom-link/CustomLink'
import { AUTH_PAGE, PRODUCTS } from '@/src/constants/routing'
import styles from './style.module.css'

const HomePage = () => {
	return (
		<section className={styles.main}>
			<h1 className={styles.heading}>Добро пожаловать</h1>
			<hr className={styles.divider} />
			<nav>
				<ul>
					<li>
						<CustomLink href={AUTH_PAGE}>Ссылка 1: Авторизация</CustomLink>
					</li>
					<li>
						<CustomLink href={PRODUCTS}>Ссылка 2: Статьи</CustomLink>
					</li>
				</ul>
			</nav>
		</section>
	)
}

export default HomePage
