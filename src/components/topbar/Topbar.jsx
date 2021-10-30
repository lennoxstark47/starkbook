import React from 'react';
import {
	Search,
	Person,
	Chat,
	Notifications,
} from '@material-ui/icons';
import './topbar.css';

export default function Topbar() {
	return (
		<div className='topbarConatainer'>
			<div className='topbarLeft'>
				<span className='logo'>starkbook</span>
			</div>
			<div className='topbarCenter'>
				<div className='searchbar'>
					<Search classname='searchIcon' />
					<input
						placeholder='search for friends, posts or videos'
						className='searchInput'
					/>
				</div>
			</div>
			<div className='topbarRight'>
				<div className='topbarLinks'>
					<span className='topbarLink'>
						Homepage
					</span>
					<span className='topbarLink'>
						Timeline
					</span>
				</div>
				<div className='topbarIcons'>
					<div className='topbarIconItem'>
						<Person />
						<span className='topbarIconBadge'>
							1
						</span>
					</div>
					<div className='topbarIconItem'>
						<Chat />
						<span className='topbarIconBadge'>
							2
						</span>
					</div>
					<div className='topbarIconItem'>
						<Notifications />
						<span className='topbarIconBadge'>
							3
						</span>
					</div>
				</div>
				<img
					src='/assets/person/1.jpeg'
					alt='person'
					className='topbarImg'
				/>
			</div>
		</div>
	);
}
