import CustomLink from '@/src/ui/custom-link/CustomLink'
import {
	AUTH_PAGE,
	CREATE_PRODUCTS,
	EDIT_PRODUCT,
	HOME_PAGE,
	PRODUCT,
	PRODUCTS
} from '@/src/constants/routing'
import styles from './style.module.css'

const LayoutHeader = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.navLinksList}>
					<li className={styles.navLinksListItem}>
						<CustomLink
							href={HOME_PAGE}
							className={styles.navLinksListItemLink}
						>
							Главная страница
						</CustomLink>
					</li>
					<li>
						<CustomLink href={PRODUCTS} className={styles.navLinksListItemLink}>
							Статьи
						</CustomLink>
					</li>
					<li>
						<CustomLink
							href={CREATE_PRODUCTS}
							className={styles.navLinksListItemLink}
						>
							Добавить статью
						</CustomLink>
					</li>
					<li>
						<CustomLink
							href={AUTH_PAGE}
							className={styles.navLinksListItemLink}
						>
							Авторизация
						</CustomLink>
					</li>
					<li>
						<CustomLink href={PRODUCT} className={styles.navLinksListItemLink}>
							Статья
						</CustomLink>
					</li>
					<li>
						<CustomLink
							href={EDIT_PRODUCT}
							className={styles.navLinksListItemLink}
						>
							Редактировать статью
						</CustomLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default LayoutHeader
