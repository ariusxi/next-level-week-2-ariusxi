import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

function TeacherList() {
	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Estes são os proffys disponíveis.">
				<form id="search-teachers">
					<div className="input-block">
						<label htmlFor="subject">Matéria</label>
						<input type="text" id="subject" />
					</div>
					<div className="input-block">
						<label htmlFor="week_day">Dia da Semana</label>
						<input type="text" id="week_day" />
					</div>
					<div className="input-block">
						<label htmlFor="time">Hora</label>
						<input type="text" id="time" />
					</div>
				</form>
			</PageHeader>

			<main>
				<TeacherItem 
					teacherName="Alef Felix"
					teacherImage="https://avatars1.githubusercontent.com/u/15126865?s=460&u=06510e0c866c68de7e08565f7a8590eeeb854070&v=4"
					teacherSubject="Lógica de Programação"
					teacherDescription="Trabalho há 5 anos como desenvolvedor Fullstack, me interesso muito pelo que a tecnologia proporciona e como ela muda o mundo a nossa volta."
					teacherPrice="R$ 100,00"
				/>
				<TeacherItem 
					teacherName="Alef Felix"
					teacherImage="https://avatars1.githubusercontent.com/u/15126865?s=460&u=06510e0c866c68de7e08565f7a8590eeeb854070&v=4"
					teacherSubject="Lógica de Programação"
					teacherDescription="Trabalho há 5 anos como desenvolvedor Fullstack, me interesso muito pelo que a tecnologia proporciona e como ela muda o mundo a nossa volta."
					teacherPrice="R$ 100,00"
				/>
				<TeacherItem 
					teacherName="Alef Felix"
					teacherImage="https://avatars1.githubusercontent.com/u/15126865?s=460&u=06510e0c866c68de7e08565f7a8590eeeb854070&v=4"
					teacherSubject="Lógica de Programação"
					teacherDescription="Trabalho há 5 anos como desenvolvedor Fullstack, me interesso muito pelo que a tecnologia proporciona e como ela muda o mundo a nossa volta."
					teacherPrice="R$ 100,00"
				/>
				<TeacherItem 
					teacherName="Alef Felix"
					teacherImage="https://avatars1.githubusercontent.com/u/15126865?s=460&u=06510e0c866c68de7e08565f7a8590eeeb854070&v=4"
					teacherSubject="Lógica de Programação"
					teacherDescription="Trabalho há 5 anos como desenvolvedor Fullstack, me interesso muito pelo que a tecnologia proporciona e como ela muda o mundo a nossa volta."
					teacherPrice="R$ 100,00"
				/>
			</main>
		</div>
	);
}

export default TeacherList;