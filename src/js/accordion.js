const scrollToAccordion = (aid, accItem, accHead) => {
	const anchorElement = $(`${accItem}${aid} ${accHead}`);
	$('html,body').animate({ scrollTop: anchorElement.offset() }, 'slow');
}
const kodzillaAccordion = () => {
	let closedOthers = false;
	const acc = '.kdz-accordion',
		accItem = '.kdz-accItem',
		accPane ='.kdz-accPane',
		accHead = '.kdz-accHead' ;

	if ($(acc).data('closed-other') == "yes") {
		closedOthers = true;
	}
	$(`${accItem} ${accHead}`).on('click', function (e) {
		e.preventDefault();
		if ($(this).closest(accItem).hasClass('active')) {
			$(accItem).removeClass('active');
			$(accPane).stop().slideUp();
		} else {
			if (closedOthers) {
				$(accItem).removeClass('active');
				$(accPane).stop().slideUp();
			}
			$(this).closest(accItem).addClass('active');
			$(this).next(accPane).stop().slideDown();
		}
	});

	if($(acc).data('first-open') == "yes")
		$(`${accItem}:first-child ${accHead}`, this).trigger('click')

	if (window.location.hash) {
		scrollToAccordion( window.location.hash, accItem, accHead);
		$(`${accItem}${window.location.hash} ${accHead}`).trigger('click');
	}
}

export default kodzillaAccordion;