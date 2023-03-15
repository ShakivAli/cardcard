function cardcard(options) {
    let cards = document.querySelectorAll('cardcard');

    if(options.shadow_type === 'hard')
    options.shadow_type = '0px'
    else 
    options.shadow_type = '15px'

    cards.forEach(card => {
        card.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`; 

        if(options.padding) {
            cards.style.padding = `1em`;
        }
    })
}

module.exports.cardcard = cardcard;