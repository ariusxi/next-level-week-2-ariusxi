import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps {
	teacherName: string;
	teacherImage: string;
	teacherSubject: string;
	teacherDescription: string;
	teacherPrice: string;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
	const {
		teacherName,
		teacherImage,
		teacherSubject,
		teacherDescription,
		teacherPrice
	} = props;

	return (
		<article className="teacher-item">
			<header>
				<img 
					src={teacherImage} 
					alt={teacherName} 
				/>
				<div>
					<strong>{teacherName}</strong>
					<span>{teacherSubject}</span>
				</div>
			</header>
			<p>
				{teacherDescription}
			</p>
			<footer>
				<p>
					Preço/hora
					<strong>{teacherPrice}</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="Entrar em contato" />
					Entrar em contato
				</button>
			</footer>
		</article>
	);
}

export default TeacherItem;