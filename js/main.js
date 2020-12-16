function randNum(min, max) {  
    return Math.random() * (max - min) + min; 
}

let ran = 0;

function checkWidth(window, minMax, size, fn) {
    let windowSize = $(window).width();

    if(minMax == 'min') {

        if(windowSize >= size) {
            fn();
        }

    } else {

        if(windowSize <= size) {
            fn();
        }

    }
}

let checkWidthStuff = [
    {maxMin: 'max', size: 576, fn: positionMobile},
    {maxMin: 'min', size: 576, fn: positionTablet},
    {maxMin: 'min', size: 768, fn: positionTablet2},
    {maxMin: 'min', size: 992, fn: sizeDesktop},
];

function sizeDesktop() {
    let $nameInput = $('#name-input'),
    $submitButton = $('#submit-button')

    // HOME
    $('#home-scrollDown')
        .velocity({top: "300px"}, {loop: true})
        .velocity('reverse');
    
    // SKILLS

    let $ulLang = $('ul#languages'),
    $ulFrame = $('ul#frameworks');

    if(ran < 1) {
        $ulLang.each((i, el) => {
            $(el).css('left', '-1000');
        });

        $ulFrame.each((i, el) => {
            $(el).css('left', '1000');
        });
    }

    ran++;
    
    // get image container and add the height 100 then remove the padding
    $('#skills-middle')
        .addClass('h-100').css('padding', '0');

    // add floats from languages and frameworks lists
    if(!$ulLang.hasClass('float-end')) {
        $ulLang.addClass('float-end').css('margin', '0');
    }

    if(!$ulFrame.hasClass('float-start')) {
        $ulFrame.addClass('float-start').css('margin', '0');
    }

    // EDUCATION
    $('#education .li-heading').each((i, e) => {
        $(e).css('left', '-250px');
    });

    // EXPERIENCE
    $('#experience .li-heading').each((i, e) => {
        $(e).css('left', '-250px');
    });

    // -- CONTACT
    if(!$nameInput.hasClass('mr-3')) {
        $nameInput.addClass('mr-3');
    } else if($nameInput.hasClass('mb-2')) {
        $nameInput.removeClass('mb-2');
    }

    if(!$submitButton.hasClass('mr-3')) {
        $submitButton.addClass('mr-3');
    }
}

function positionTablet() {
    // SKILLS SECTION
    let elements = ['#languages li', '#frameworks li'],
    $nameInput = $('#name-input'),
    $submitButton = $('#submit-button');

    elements.forEach(e => {

        $(e).each((i, el) => {
            $(el).css('left', '0');
        });

    });

    let $img = $('#skills-img');

    if($img.width() == 0) {
        $img.css({'width': '100%', 'height': '100%'}); // size image
    }

    // get image container and remove the height 100 then add some padding to center it
    $('#skills-middle')
        .addClass('h-100').css('padding', '0');

    // remove floats from languages and frameworks lists
    $('ul#languages').addClass('float-end').css('margin', '0');
    $('ul#frameworks').addClass('float-start').css('margin', '0');

    // EDUCATION
    $('#education .li-heading').each((i, e) => {
        $(e).css('left', '0');
    });

    // EXPERIENCE
    $('#experience .li-heading').each((i, e) => {
        $(e).css('left', '0');
    });

    // -- CONTACT
    if(!$nameInput.hasClass('mr-3')) {
        $nameInput.addClass('mr-3');
    } else if($nameInput.hasClass('mb-2')) {
        $nameInput.removeClass('mb-2');
    }

    if(!$submitButton.hasClass('mr-3')) {
        $submitButton.addClass('mr-3');
    }
}

function positionTablet2() {
    // SKILLS SECTION
    let $nameInput = $('#name-input'),
    $submitButton = $('#submit-button');
    
    // -- CONTACT
    if($nameInput.hasClass('mr-3')) {
        $nameInput.removeClass('mr-3').addClass('mb-2');
    }

    if($submitButton.hasClass('mr-3')) {
        $submitButton.removeClass('mr-3');
    }
}

function positionMobile() {
    // SKILLS
    let elements = ['#languages li', '#frameworks li'],
        $img = $('#skills-img'),
        $skillsMiddle = $('#skills-middle'),
        $ulLang = $('ul#languages'),
        $ulFrame = $('ul#frameworks'),
        $nameInput = $('#name-input'),
        $submitButton = $('#submit-button');

    elements.forEach(e => {

        $(e).each((i, el) => {
            $(el).css('left', '0');
        });

    });

    if($img.width() == 0) {
        $img.css({'width': '100%', 'height': '100%'}); // size image
    }

    // get image container and remove the height 100 then add some padding to center it
    $skillsMiddle.removeClass('h-100').css('padding', '50px 150px');

    // remove floats from languages and frameworks lists
    if($ulLang.hasClass('float-end')) {
        $ulLang.removeClass('float-end').css('margin', '0 auto');
    }

    if($ulFrame.hasClass('float-start')) {
        $ulFrame.removeClass('float-start').css('margin', '0 auto');
    }

    // EDUCATION
    $('#education .li-heading').each((i, e) => {
        $(e).css('left', '0');
    });

    // EXPERIENCE
    $('#experience .li-heading').each((i, e) => {
        $(e).css('left', '0');
    });

    // -- PORTFOLIO

    // -- CONTACT
    if($nameInput.hasClass('mr-3')) {
        $nameInput.removeClass('mr-3').addClass('mb-2');
    }

    if($submitButton.hasClass('mr-3')) {
        $submitButton.removeClass('mr-3');
    }
    

}


$(document).ready(function() {
    let hasRun = [false, false, false, false, false, false];

    //checkWidth('min', 992, sizeDesktop);
    // function loadTrigger(els, widths) {
    //     els.forEach(e => {
    //         widths.forEach((obj, i, arr) => {
    //             $(e).trigger('load', checkWidth($(window), arr[i].maxMin, arr[i].size, arr[i].fn));
    //         })
    //     });
    // }

    // loadTrigger(['#portfolio', '#education', '#experience', '#contact'], checkWidthStuff);
    $('#portfolio').trigger('load', checkWidth($(window), checkWidthStuff[2].maxMin, checkWidthStuff[2].size, checkWidthStuff[2].fn));

    $('#pagepiling').pagepiling({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: null,
        setAllowScrolling: true,
        setKeyboardScrolling: true,
        
        afterLoad: function(anchorLink, index){
            let $window = $(window).width();
            //using anchorLink
            if(index == 2 && hasRun[1] == false) {
                if($window >= 576) {
                    changePosition();
                } else {
                    positionMobile();
                }
            }

            if(index == 4 && hasRun[3] == false) {
                    if($window >= 768) {
                        moveLi('#education', '.li-heading', -250);
                    }
                    moveLi('#education', 'li', -17);
            }

            if(index == 5 && hasRun[4] == false) {
                if($window >= 768) {
                    moveLi('#experience', '.li-heading', -180);
                }
                moveLi('#experience', 'li', -50);
            }
            
            let $nav = $('header nav');
            
            if($nav.css('top') == '-100px') {
                $nav.velocity({top: 0});
            }
            hasRun[index - 1] = true;
        }
    });

    let $grid = $('.grid');

    $grid.isotope({
        // options
        filter: '*',
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    
    $('.sort-links').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        if(filterValue != '*') {
            filterValue = '.' + filterValue;
        }
        $grid.isotope({ filter: filterValue });
    });
    
    function changePosition() {

        $('#languages li').each(function(e) {
            $(this).velocity({left: 0}, {duration: randNum(1000, 1500)}, [ 250, 15 ]);
        });

        $('#frameworks li').each(function(e) {
            $(this).velocity({left: 0}, {duration: randNum(1000, 1500)}, [ 250, 15 ]);
        });

        $('#skills-img').velocity(
            {height: "100%", width: "100%", rotateZ: '360deg'}, {duration: 1000}, [.54, .1, .75, .98]
        );
    };

    function moveLi(div, el, pos) {
        let time = 1000;

        $(div + ' ' + el).each(function(e) {
            $(this).velocity({left: pos}, {duration: time}, [ 250, 15 ]);
            time += 50;
        });
    }

    function changeBack() {
        $('#languages li').each(function(e) {
            $(this).css('left', '-1000px');
        });

        $('#frameworks li').each(function(e) {
            $(this).css('left', '1000px');
        });
    };

});

let resizeId;

window.addEventListener('resize', function() {
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 250);
});

function doneResizing(){
    checkWidthStuff.forEach((e) => {
        checkWidth($(window), e.maxMin, e.size, e.fn);
    })
}

// Contact Form
$("#contact-form").on('submit', function(e) {
    e.preventDefault();
    
    var data = {
        name: $("#name").val(),
        email: $("#email").val(),
        concerning: $('#concerning').val(),
        message: $("#msg").val()
    };
    $.ajax({
        type: "POST",
        url: "form_process.php",
        data: data,
        success: function(){
            $('#contact-form').html("<h3>Message Sent.</h3>");
        }
    });
});