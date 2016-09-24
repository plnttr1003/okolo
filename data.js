$(document).ready(function($) {

	// content


	var events = [
	{
		"name": "День Рождения",
		"text": "Произведение было написано на рубеже 1970–80-х гг., и относится к раннему периоду творчества драматурга, хотя и является своего рода продолжением еще более ранней пьесы «Чинзано». \b История, рассказанная в пьесе «День рождения», словно подсмотрена в замочную скважину.Три женщины, которые терпеть одна другую не могут, начинают жаловаться на жизнь, как будто они – лучшие подруги. И так долго и проникновенно жалуются, что это переходит в хвастовство. И не только конкретными вещами (золотом, хрусталем), но и именно своим «счастливым несчастьем». Этот оксюморон вполне согласуется распространенным мнением о парадоксальности и абсурдности драматургии Петрушевской. \b Пьеса об одиночестве современного человека, в череде бытовых неурядиц утрачивающего нравственные ориентиры, жесткость психологического анализа, многообразие персонажей и речевых стилей, унизительных житейских реалий.",
		"date": "24.09 вс, 21.10, 19:00",
		"place": "Около дома станиславского, La Stalla",
		"price": "от 300 до 1500 руб",
		"main_img": "images/01/00.jpg",
		"src" : "den_rozhdeniya"
	},
	{
		"name": "День Рождения",
		"text": "Произведение было написано на рубеже 1970–80-х гг., и относится к раннему периоду творчества драматурга, хотя и является своего рода продолжением еще более ранней пьесы «Чинзано». \b История, рассказанная в пьесе «День рождения», словно подсмотрена в замочную скважину.Три женщины, которые терпеть одна другую не могут, начинают жаловаться на жизнь, как будто они – лучшие подруги. И так долго и проникновенно жалуются, что это переходит в хвастовство. И не только конкретными вещами (золотом, хрусталем), но и именно своим «счастливым несчастьем». Этот оксюморон вполне согласуется распространенным мнением о парадоксальности и абсурдности драматургии Петрушевской. \b Пьеса об одиночестве современного человека, в череде бытовых неурядиц утрачивающего нравственные ориентиры, жесткость психологического анализа, многообразие персонажей и речевых стилей, унизительных житейских реалий.",
		"date": "24.09 вс, 21.10, 19:00",
		"place": "Около дома станиславского, La Stalla",
		"price": "от 300 до 1500 руб",
		"main_img": "images/01/00.jpg",
		"src" : "den_rozhdeniya2"
	}]

	console.log('----------');
	console.log(events[0].name);


	// add content to DOM

	$('.content_inner.intro_title .h0').html(events[0].name).attr('href','#event_' + events[0].src);
	$('.content_inner.intro_title .h5').html(events[0].date + ' (' + events[0].place + ')');
	$('.content_inner.intro_title').css({'background-image':'url('+ events[0].main_img +')'});


	// check hashchange

	function hashchange() {
		var hash = window.location.hash;
		if (hash.indexOf('#event_') != -1) {
			hash = hash.split('#event_')[1];
			events.forEach(function(event,i) {
				if (events[i].src == hash) {console.log(i)}
			})
		}
	}
	hashchange();

	$(window).on('hashchange', function() {
		hashchange();
	});
});