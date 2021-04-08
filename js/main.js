$(document).ready(function () {

var lang = window.location.href;

$('.mobile-wrap').on('click', function () {
    $('.line-burger').toggleClass('line-active');
    $('.main-header__box').toggleClass('main-header__box--active');
    $('.main-header__list').slideToggle();
});

$(window).resize(function () {
    if ($(window).width() >= 650) {
        $('.main-header__list').attr('style', '');
        $('.line-burger').removeClass('line-active');
    }

});

const sponsors = $('.sponsors__wrap');
let arrowsSponsors = sponsors.parent('.sponsors__block').find('.sponsors__arrows');
sponsors.slick({
    infinite: true,
    // speed: 600,
    slidesToShow: 4,
    // autoplay: true,
    //autoplaySpeed:5000,
    draggable: true,
    fade: false,
    arrows: true,
    appendArrows: arrowsSponsors,
    prevArrow: '<button class="sponsors__arrow sponsors__arrow--dir_left"></button>',
    nextArrow: '<button class="sponsors__arrow sponsors__arrow--dir_right"></button>',
    responsive: [{
            breakpoint: 1050,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

const sliders = $('.news');
sliders.each(function (index, element) {
    let __this = $(this);
    let gallery = __this.find('.news__wrap');
    let arrowsNews = __this.find('.news__arrows');
    gallery.slick({
        infinite: false,
        // speed: 600,
        slidesToShow: 3,
        // autoplay: true,
        //autoplaySpeed:5000,
        draggable: true,
        fade: false,
        arrows: true,
        appendArrows: arrowsNews,
        prevArrow: '<button class="news__arrow news__arrow--dir_left"></button>',
        nextArrow: '<button class="news__arrow news__arrow--dir_right"></button>',
        responsive: [{
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

const block = $('#human__slider');
let arrowsBlock = $('.block').find('.block__arrows');
block.slick({
    infinite: false,
    slidesToShow: 5,
    draggable: true,
    fade: false,
    arrows: true,
    appendArrows: arrowsBlock,
    prevArrow: '<button class="block__arrow block__arrow--dir_left"></button>',
    nextArrow: '<button class="block__arrow block__arrow--dir_right"></button>',
    responsive: [{
            breakpoint: 1250,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// const block = $('.block__holder');
// if (block.length > 0) {

//     const blockWrap = block[0];
//     let slides = {};
//     let arrowsBlock = $('.block').find('.block__arrows');

//     $.ajax({
//         url: 'https://api.npoint.io/ce735686624664ea86bb'
//     }).done((slides) => {
//         slides = Object.values(slides);
//         let elem = '';
//         for (let item of slides) {
//             elem += `<div class="block__item" data-elem="${item.type}">
//     <div class="block__image">
//         <img src="${item.img}" alt="">
//     </div>
//     <p class="block__title">${item.name}</p>
//     <p class="block__info">${item.age}</p>
//     <div class="block__wrap">
//         <p class="block__bar" data-elem="bar" data-value="${item.left}" data-max="${item.target}"></p>
//     </div>
//     <p class="block__desc">Не хватает</p>
//     <p class="block__number"><span></span> ₴</p>
//     <div class="block__content">
//         <p>${item.value}</p>
//     </div>
//     </div>`;
//         }
//         blockWrap.innerHTML = elem;

//         block.slick({
//             infinite: false,
//             // speed: 600,
//             slidesToShow: 5,
//             // autoplay: true,
//             //autoplaySpeed:5000,
//             draggable: true,
//             fade: false,
//             arrows: true,
//             appendArrows: arrowsBlock,
//             prevArrow: '<button class="block__arrow block__arrow--dir_left"></button>',
//             nextArrow: '<button class="block__arrow block__arrow--dir_right"></button>',
//             responsive: [{
//                     breakpoint: 1250,
//                     settings: {
//                         slidesToShow: 4,
//                     }
//                 },
//                 {
//                     breakpoint: 1050,
//                     settings: {
//                         slidesToShow: 3,
//                     }
//                 },
//                 {
//                     breakpoint: 960,
//                     settings: {
//                         slidesToShow: 2,
//                     }
//                 },
//                 {
//                     breakpoint: 650,
//                     settings: {
//                         slidesToShow: 1,
//                     }
//                 }
//             ]
//         });

//         if ($('.block__holder--search').length > 0) {
//             $('.block__holder--search').slick('unslick');
//         }

//         $('.block__item').each(function () {
//             const $this = $(this);
//             const progressBar = $this.find("[data-elem='bar']");
//             const value = progressBar.data('value');
//             const desc = $this.find('.block__number span');

//             const max = progressBar.data('max');
//             let count = (value * 100) / max;

//             progressBar.width(`${count}%`);
//             desc.text(splitDigits(value));

//         });

//     });

// };
var select_obj = {};

(function () {

    $('.select__wrap').each(function () {
        var id = $(this).attr('id');
        checkActive(this);
        var placeholder = $(this).find('.select__placeholder').html();
        select_obj[id] = placeholder;
    });

    $('.select__wrap').on('click', '.select__placeholder', function () {
        $('.select__list').removeClass('select__list--active');
        $('.select__placeholder').removeClass('changed');
        $(this).next().toggleClass('select__list--active');
        $(this).toggleClass('changed');
    });

    $('.select__wrap').on('click', '.select__item', function (e) {
        if ($(e.target).is('.select__item--disabled, .select__item--search, .select__item--search input')) {
            return false;
        } else {
            var container = $(this).parents('.select__wrap').attr('id');
            if ($('#' + container + ' .select__item--active').length == 1) {

                if (!$(this).hasClass('select__item--active')) {
                    $('#' + container + ' .select__item').removeClass('select__item--active');
                    $(this).addClass('select__item--active');
                    setPlaceholder(this);
                }

            } else {
                setPlaceholder(this);
                $(this).toggleClass('select__item--active');
            }
            $(this).parent().removeClass('select__list--active');
            $(this).parents('.select__wrap').find('.select__placeholder').removeClass('changed');
        }
    });

    $('body').on('click', function (e) {
        if (!$(e.target).is('.changed, .select__list, .select__item')) {
            $('.select__list').removeClass('select__list--active');
        }
    });

    function setPlaceholder(self) {
        var value = $(self).data('value');
        var value_pl = $(self).html();
        $(self).parents('.select__wrap').find('.select__placeholder').html(value_pl);
    }

    function checkActive(self) {
        var text = $(self).find('.select__item--active').text();
        if (text === undefined || text === '') {
            text = $(self).find('.select__item:eq(0)').addClass('select__item--active').text();
        }
        $(self).find('.select__placeholder').val(text);
    }

})();

function toggleSelect(id, value) {
    $(id).find('.select__item').removeClass('select__item--active');
    $(id).find('.select__item[data-value="' + value + '"]').addClass('select__item--active');
    $(id).find('.select__placeholder').html(value);
}

function getSelValue(id) {
    return $(id).find('.select__item--active').data('value');
}


var fileInput = $('.data__file');
var droparea = $('.data__file-drop');

fileInput.on('change', function () {
    var filesCount = $(this)[0].files.length;
    var textInfo = $('.data__desc');

    if (filesCount === 1) {
        // если выбран один файл, показать имя файла
        var fileName = $(this).val().split('\\').pop();
        textInfo.text(fileName);
    } else {
        textInfo.text(filesCount + ' вибраних файла');
    }
});

$('.single__col--block').each(function () {
    const $this = $(this);
    const progressBar = $this.find("[data-elem='bar']");
    let bar = $this.find('.block__bar');
    let block = $('.result__value span');
    let need = $('.result__need span');
    let single = $('.single__info span')
    let all = $('.result__all span');

    let max = bar.data('max');
    let value = bar.data('value');
    let least = max - value;

    let count = (value * 100) / max;

    progressBar.width(`${count}%`);

    all.text(splitDigits(max));
    block.text(splitDigits(value));
    need.text(splitDigits(least));
    single.text(splitDigits(least));
});

let elem = $('#h_sum, #d_sum');
elem.on('keypress', function () {
    return (event.charCode >= 48 && event.charCode <= 57 && /^\d{0,14}$/.test(this.value));
})

function validate(input, length, regExp, error, phone) {

    $(input).on('blur keyup', function () {
        var value = $(this).val();
        var that = $(this);

        regExp = regExp == '' ? /./ : regExp;

        if (phone === true) {
            bool_reg = !regExp.test(value);
        } else {
            bool_reg = regExp.test(value);
        }

        if (value.length > length && value !== '' && bool_reg) {
            that.removeClass('form-fail').addClass('form-done');
            $(error).slideUp();
        } else {
            that.removeClass('form-done').addClass('form-fail');
            $(error).slideDown();
        }
    });

}

// деакцивация кнопки если есть поле с ошибкой

function disBtn(input, btn, bool) {
    var input = $(input);
    input.on('blur keyup', function () {

        if (input.hasClass('form-fail') || bool == true) {
            $(btn).attr('disabled', 'disabled');
        } else {
            $(btn).removeAttr('disabled');
        }

    });

}

// для проверки при нажатии

function valClick(input, length, regExp, error, phone) {
    var value = $(input).val();

    regExp = regExp == '' ? /./ : regExp;

    if (phone === true) {
        bool_reg = regExp.test(value);
    } else {
        bool_reg = !regExp.test(value);
    }

    if (value.length < length && value === '' && bool_reg) {
        $(input).addClass('form-fail');
        $(error).slideDown();
    }
}

//  деакцивация кнопки при нажатии

function disBtnClick(input, btn) {
    var input = $(input);

    if (input.hasClass('form-fail')) {
        $(btn).attr('disabled', 'disabled');
        return false;
    } else {
        return true;
    }

}

var regName = /^[a-zA-Zа-яА-ЯёЁ]+/;
var regPhone = /[_]/i;
var regEmail = /.+@.+\..+/i;
var regNumber = /^\d{1,}$/;

function validateCheck(input) {
    $(input).on('change', function () {
        var check = $(this).prop('checked');
        var that = $(this);

        if (check) {
            that.removeClass('input-fail').addClass('input-done');
        } else {
            that.removeClass('input-done').addClass('input-fail');
        }
    });
}

validate('#h_sum', 1, regNumber);
validate('.mailing__input', 1, regEmail);
disBtn('.mailing__input', '.btn--mailing');

validate('#d_fio', 1, regName, '.data__error--fio');
disBtn('#d_fio', '.btn--pay', true);

validate('#q_fio', 1, regName, '.question__error--fio');
validate('#q_age', 1, regName, '.question__error--age');
validate('#q_phone', 1, regName, '.question__error--phone');
validate('#q_country', 1, regName, '.question__error--country');
validate('#q_region', 1, regName, '.question__error--region');
validate('#q_city', 1, regName, '.question__error--city');
validate('#q_address', 1, regName, '.question__error--address');
validate('#q_ask1', 1, regName, '.question__error--ask1');
validate('#q_ask2', 1, regName, '.question__error--ask2');

validate('#q_fio-2', 1, regName, '.question__error--fio-2');
validate('#q_is', 1, regName, '.question__error--is');
validate('#q_phone-2', 1, regName, '.question__error--q_phone-2');
validate('#q_diagnos', 1, regName, '.question__error--diagnos');
validate('#day-injury', 1, regName, '.question__error--day-injury');
validate('#q_ask-3', 1, regName, '.question__error--ask-3');
validate('#q_ask-4', 1, regName, '.question__error--ask-4');
validate('#q_ask-5', 1, regName, '.question__error--ask-5');
validate('#q_ask-6', 1, regName, '.question__error--ask-6');
validate('#q_ask-7', 1, regName, '.question__error--ask-7');
validate('#q_ask-8', 1, regName, '.question__error--ask-8');
validate('#q_ask-9', 1, regName, '.question__error--ask-9');
disBtn('#q_fio, #q_age, #q_phone, #q_country, #q_region, #q_city, #q_address, #q_ask1, #q_ask2, #q_fio-2, #q_is, #q_phone-2, #q_diagnos, #day-injury, #q_ask-3,  #q_ask-4, #q_ask-5, #q_ask-6, #q_ask-7, #q_ask-8, #q_ask-9', '.btn--question');



function ValInput(elem, btn) {
    const input = $(elem);
    const btnSend = $(btn);
    input.on('click', () => input[0].checked ? btnSend.prop('disabled', false) : btnSend.prop('disabled', true));
}

ValInput('#h_processing', '.btn--help');

ValInput('#h_processing2', '.btn--pay');

});


function splitDigits(number) {
let block = String(number);
return block.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}

function InitCustomRange(param = {}) {
let $ranges = document.querySelectorAll(typeof param.selector != "undefined" ? param.selector : ".custom-range");
let customRanges = [];
let dragging = false;
let activRange = null;
let startX, startLayerX;
let rangeOfValues;
let formating = typeof param.formating != "undefined" ? param.formating : true;

// init

$ranges.forEach(function ($range) {
    let selector = `[data-id-custom-range="${$range.dataset.idCustomRange}"]`;
    let $min = document.querySelector(`.custom-range__min${selector}`);
    let $max = document.querySelector(`.custom-range__max${selector}`);
    let $maxVal = document.querySelector(`.custom-range__max-value${selector}`);
    let $minVal = document.querySelector(`.custom-range__min-value${selector}`);
    let data = {
        $range,
        $min,
        $max,
        $maxVal,
        $minVal,
        min: parseInt($minVal.dataset.min || $min.textContent),
        max: parseInt($maxVal.dataset.max || $max.textContent),
        persentMin: 0,
        persentMax: 100,
    }

    if ($min) setValueToNode($min, data.min);
    if ($max) setValueToNode($max, data.max);

    data.rangeOfValues = data.max - data.min;

    initValue.call(data, $minVal);
    initValue.call(data, $maxVal);
    updateRange.call(data);

    let style = getComputedStyle($range);
    data.paddingLeft = parseInt(style.getPropertyValue('padding-left'));
    data.paddingRight = parseInt(style.getPropertyValue('padding-right'));

    customRanges.push(data);

    // events

    let onMouseDown_ = onMouseDown.bind(data);
    let onKeyDown_ = onKeyDown.bind(data);
    let onInput_ = debounceTwo(onInput.bind(data), 1000);
    let input_ = function (event) {
        if (event.inputType == "insertReplacementText" || event.inputType == undefined) {
            onInput_.forcedСall.apply(this, arguments);
        } else {
            onInput_.debounce.apply(this, arguments);
        }
    }

    addListenerMulti([$range], "mousedown touchstart", onMouseDown_, {
        passive: false
    });
    addListenerMulti([$range], "keydown", onKeyDown_);
    if ($minVal.tagName == "INPUT" && $maxVal.tagName == "INPUT") {
        addListenerMulti([$minVal, $maxVal], "input", input_);
    }

    // возможность удалить обрабочики

    data.unInstall = function () {
        removeListenerMulti([$range], "mousedown touchstart", onMouseDown_, {
            passive: false
        });
        removeListenerMulti([$range], "keydown", onKeyDown_);
        removeListenerMulti([$minVal, $maxVal], "input", input_);
    }
})

return customRanges;


/* 
    Обработчик события зажатия мыши на слайдере (mousedown, touchstart) 
    this: объект слайдера
*/

function onMouseDown(event) {
    event.preventDefault();
    event.target.focus();

    addMouseListeners();
    dragging = true;
    activRange = this;
    startX = getPropsEvent(event, "pageX");

    let box = this.$range.getBoundingClientRect();
    startLayerX = startX - box.left + pageXOffset;

    let realX = startLayerX - this.paddingLeft;
    let realWidth = this.$range.clientWidth - this.paddingLeft - this.paddingRight;
    let persent = minMax((realX / realWidth) * 100, 0, 100);
    let m1 = Math.abs(this.persentMin - persent);
    let m2 = Math.abs(this.persentMax - persent);

    if (m1 < m2 || m1 == m2 && this.persentMin > persent) {
        this.control = "min";
        this.persentMin = persent;
    } else {
        this.control = "max";
        this.persentMax = persent;
    }

    updateRange.call(this);
}


/* 
    Обработчик события перемещения курсора по document (mousemove, touchmove) 
*/

function onMouseMove(event) {
    if (!dragging) return;

    event.preventDefault();

    let realX = (startLayerX + getPropsEvent(event, "pageX") - startX) - activRange.paddingLeft;
    let realWidth = activRange.$range.clientWidth - activRange.paddingLeft - activRange.paddingRight;
    let persent = minMax((realX / realWidth) * 100, 0, 100);

    switch (activRange.control) {
        case "min":
            activRange.persentMin = minMax(persent, 0, activRange.persentMax);
            break

        case "max":
            activRange.persentMax = minMax(persent, activRange.persentMin, 100);
            break
    }

    updateRange.call(activRange);
}


/* 
    Обработчик события (mouseup, touchend) на document 
*/

function onMouseUp(event) {
    removeMouseListeners();
    dragging = false;
}


/* 
    Обработчик события input на элементах ввода 
    this: объект слайдера
*/

function onInput(event) {
    initValue.call(this, event.target);
    updateRange.call(this);
}


/* 
    Обработчик события keydown на слайдере 
    this: объект слайдера
*/

function onKeyDown(event) {
    let inc = 0;
    if (event.keyCode == '39') {
        inc = 1;
    } else if (event.keyCode == '37') {
        inc = -1;
    } else {
        return;
    }

    let node = activRange.control == "min" ? this.$minVal : this.$maxVal;
    setValueToNode(node, parseInt(getValueToNode(node)) + inc);

    initValue.call(this, node);
    updateRange.call(this);
}


/* 
    Достаёт из event (объект события mouse или touch) значение параметра name 
*/

function getPropsEvent(event, name) {
    return event[name] ? event[name] : (event.touches !== undefined ? event.touches[0][name] : 0);
}


/* 
    Вписывает числовое значение value в диапазон между min and max 
*/

function minMax(value, min, max) {
    return Math.max(min, Math.min(max, value));
}


/* 
    Корректирует value [0 - 100] так, чтобы его значение соответствовало целому числу диапазона range 
*/

function stepping(value, range) {
    return (Math.round((value / 100) * range) / range) * 100;
}


/* 
    Обновляет значение в input и css variables 
    this: объект слайдера
*/

function updateRange() {
    this.persentMin = stepping(this.persentMin, this.rangeOfValues);
    this.persentMax = stepping(this.persentMax, this.rangeOfValues);

    let minVal = this.min + Math.round((this.persentMin / 100) * this.rangeOfValues);
    setValueToNode(this.$minVal, minMax(minVal, this.min, this.max));

    let maxVal = this.min + Math.round((this.persentMax / 100) * this.rangeOfValues);
    setValueToNode(this.$maxVal, minMax(maxVal, this.min, this.max));

    this.$range.style.setProperty('--persent-min', this.persentMin + "%");
    this.$range.style.setProperty('--persent-max', this.persentMax + "%");
}


/* 
    Извлекает данные из input и переводит в проценты 
    this: объект слайдера
    target: input node
*/

function initValue(target) {
    switch (target) {
        case this.$minVal:
            this.persentMin = ((getValueToNode(this.$minVal) - this.min) / this.rangeOfValues) * 100;
            this.persentMin = minMax(this.persentMin, 0, this.persentMax);
            break;

        case this.$maxVal:
            this.persentMax = ((getValueToNode(this.$maxVal) - this.min) / this.rangeOfValues) * 100;
            this.persentMax = minMax(this.persentMax, this.persentMin, 100);
            break;
    }
}


/* 
    Получает значение узла
*/

function getValueToNode(node) {
    return (node.tagName == "INPUT" ? node.value : node.textContent).replace(/\D/g, '');
}


/* 
    Устанавливает значение узлу
*/

function setValueToNode(node, value) {
    if (formating && node.type != "number") value = value.toLocaleString();
    node.tagName == "INPUT" ? node.value = value : node.textContent = value;
}


/* 
    Установка обработчиков событий на document 
*/

function addMouseListeners() {
    addListenerMulti([document], "mousemove touchmove", onMouseMove, {
        passive: false
    });
    addListenerMulti([document], "mouseup touchend", onMouseUp);
}


/* 
    Удаление обработчиков событий с document 
*/

function removeMouseListeners() {
    removeListenerMulti([document], "mousemove touchmove", onMouseMove, {
        passive: false
    });
    removeListenerMulti([document], "mouseup touchend", onMouseUp);
}


/* 
    Создаёт объект с debounce функкцией для fn, 
    которую можно принудительно выполнить с помощью forcedСall
*/

function debounceTwo(fn, timeout) {
    let timer;

    return {
        debounce: function () {
            let args = arguments,
                ctx = this;

            clearTimeout(timer);

            timer = setTimeout(function () {
                fn.apply(ctx, args);
                timer = null;
            }, timeout);
        },

        forcedСall: function () {
            fn.apply(this, arguments);

            clearTimeout(timer);
        }
    }
}


/* 
    Добавление обработчика (fn) для нескольких событий (s), 
    указанных строкой через пробел на узел (node) 
*/

function addListenerMulti(node, s, fn, options = false) {
    node.forEach(n => s.split(' ').forEach(e => n.addEventListener(e, fn, options)));
}


/* 
    Удаление обработчика (fn) для нескольких событий (s), 
    указанных строкой через пробел на узел (node) 
*/

function removeListenerMulti(node, s, fn, options = false) {
    node.forEach(n => s.split(' ').forEach(e => n.removeEventListener(e, fn, options)));
}
}


// param: {selector: string, formating: boolean}
InitCustomRange();