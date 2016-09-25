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
	},
	{
		"name": "День Рождения",
		"text": "Произведение было написано на рубеже 1970–80-х гг., и относится к раннему периоду творчества драматурга, хотя и является своего рода продолжением еще более ранней пьесы «Чинзано». \b История, рассказанная в пьесе «День рождения», словно подсмотрена в замочную скважину.Три женщины, которые терпеть одна другую не могут, начинают жаловаться на жизнь, как будто они – лучшие подруги. И так долго и проникновенно жалуются, что это переходит в хвастовство. И не только конкретными вещами (золотом, хрусталем), но и именно своим «счастливым несчастьем». Этот оксюморон вполне согласуется распространенным мнением о парадоксальности и абсурдности драматургии Петрушевской. \b Пьеса об одиночестве современного человека, в череде бытовых неурядиц утрачивающего нравственные ориентиры, жесткость психологического анализа, многообразие персонажей и речевых стилей, унизительных житейских реалий.",
		"date": "24.09 вс, 21.10, 19:00",
		"place": "Около дома станиславского, La Stalla",
		"price": "от 300 до 1500 руб",
		"main_img": "images/01/00.jpg",
		"src" : "den_rozhdeniya3"
	},
	{
		"name": "День Рождения",
		"text": "Произведение было написано на рубеже 1970–80-х гг., и относится к раннему периоду творчества драматурга, хотя и является своего рода продолжением еще более ранней пьесы «Чинзано». \b История, рассказанная в пьесе «День рождения», словно подсмотрена в замочную скважину.Три женщины, которые терпеть одна другую не могут, начинают жаловаться на жизнь, как будто они – лучшие подруги. И так долго и проникновенно жалуются, что это переходит в хвастовство. И не только конкретными вещами (золотом, хрусталем), но и именно своим «счастливым несчастьем». Этот оксюморон вполне согласуется распространенным мнением о парадоксальности и абсурдности драматургии Петрушевской. \b Пьеса об одиночестве современного человека, в череде бытовых неурядиц утрачивающего нравственные ориентиры, жесткость психологического анализа, многообразие персонажей и речевых стилей, унизительных житейских реалий.",
		"date": "24.09 вс, 21.10, 19:00",
		"place": "Около дома станиславского, La Stalla",
		"price": "от 300 до 1500 руб",
		"main_img": "images/01/00.jpg",
		"src" : "den_rozhdeniya4"
	}

	]

	//console.log('----------');
	//console.log(events[0].name);


	// check hashchange

	function hashchange() {
		$('body').css({'background-image':'none'});
		$('.content').removeClass('content_visible content_intro content_schedule content_article').empty();

		var hash = window.location.hash;
		//if (hash == '#schedule' || hash == '#about' || hash == '#events' || hash == '#actors' || hash == '#contacts') {$('.content.content_article').hide();}
		//else {$('.content.content_article').show();}


		// intro block
		if (hash == '#intro') {
			$('.content')
				.addClass('content_visible content_intro')
				.append('<div class="content_inner intro_title"><div class="intro_content"><div class="intro_header"><a href="/" class="header_logo"></a><div class="h5"></div><a class="h0"></a></div><div class="intro_buttons"><div class="but b1">Подробнее</div><div class="but b2">Купить</div></div></div></div>')

			$('.content_inner.intro_title .h0').html(events[0].name).attr('href','#event_' + events[0].src);
			$('.content_inner.intro_title .h5').html(events[0].date + ' (' + events[0].place + ')');
			$('.content_inner.intro_title').css({'background-image':'url('+ events[0].main_img +')'});
		}


		// event block
		if (hash.indexOf('#event_') != -1) {
			$('.content')
				.addClass('content_visible content_article')
				.append('<div class="content_article_image"><div class="content_article_header"><div class="h6"></div><div class="h0"></div></div></div>')
				.append('<div class="content_article_block"><div class="c_a_b c_a_b_l"><div class="h3">Описание</div><div class="text"></div></div><div class="c_a_b c_a_b_r"><div class="black_block"><div class="black_block_inner"><div class="h6">Ближайшие спектакли</div></div><div class="actors_block"></div></div></div></div>');
			hash = hash.split('#event_')[1];
			events.forEach(function(event,i) {
				if (events[i].src == hash) {
					$('.content.content_article .content_article_image').css({'background-image':'url('+ events[i].main_img +')'});
					$('.content.content_article .content_article_header .h0').html(events[i].name);
					$('.content.content_article .content_article_block .text').html(events[i].text);
				}
			})
		}


		//shedule block
		if (hash == '#schedule' || hash == '#' || hash == '') {
			var schedule_table = 'table';
			//$('body').css({'background-image':'url(trace.png)', 'height': '2000px'});
			$('.content')
				.addClass('content_visible content_schedule')
				.append('<div class="content_article_image"><div class="content_article_header"><div class="h5"></div><div class="h0"></div></div></div>')
				.append('<div class="content_table' + (schedule_table != 'table' ? '' : ' schedule_table') + '">');
			events.forEach(function(event,i) {
				if (i == 0) {
					$('.content.content_schedule .content_article_image').css({'background-image':'url('+ events[i].main_img +')'});
					$('.content.content_schedule .content_article_header .h5').html(events[i].date + ' (' + events[i].place + ')');
					$('.content.content_schedule .content_article_header .h0').html(events[i].name);
					$('.content.content_schedule .content_article_block .text').html(events[i].text);
				}
				var date = '<div class="shedule_block shedule_date">' + events[i].date + '</div>';
				var name = '<div class="shedule_block shedule_name">' + events[i].name + '</div>';
				var place = '<div class="shedule_block shedule_place">' + events[i].place + '</div>';
				var tickets = '<div class="shedule_block shedule_tickets">Билеты</div>';
				var url= events[i].src;
				var img = events[i].main_img;
				$('.content_table').append('<a href="#event_' + url + '" style="background-image:url(' + img + ')" class="shedule_item">' + date + name + place + tickets + '</div>');
			})
		}
	}





	hashchange();

	$(window).on('hashchange', function() {
		hashchange();
	});
});