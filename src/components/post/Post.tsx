import cn from 'classnames'
// import Image, { StaticImageData } from 'next/image'

import { StaticImageData } from 'next/image'
import CustomLink from '@/src/ui/custom-link/CustomLink'
import { IPost } from '@/src/store/posts/posts.interface'
import styles from './style.module.css'

export interface PostItemProps {
	id: number
	photo: StaticImageData
	surname: string
	name: string
	position: string
	phone: string
	email: string
}

const Post = ({ post }: { post: IPost }) => {
	const { id, title, body } = post
	return (
		<CustomLink href={`${id}`} data-id={id} className={styles.postItem}>
			<div className={styles.postItemMedia}>
				<div className={styles.postItemPhotoWrapper}>
					{/* <Image
						src={photo}
						alt={`Фотография`}
						className={styles.postItemPhoto}
						width={180}
						height={220}
					/> */}
					<div className={styles.postItemPhotoVeil}></div>
				</div>
			</div>
			<div className={styles.postItemDivider} />
			<div className={styles.postItemInfo}>
				<h5>{title}</h5>
				<p className={cn(styles.postItemInfoText, 'p-medium-medium')}>{body}</p>
			</div>
		</CustomLink>
	)
}

export default Post
