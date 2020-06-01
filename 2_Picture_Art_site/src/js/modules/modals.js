
const Modals = () => {

    let btnPressed = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');  // popup windows

        let scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (destroy) {
                    item.remove();
                }

                btnPressed = true;

                if (e.target) {
                    e.preventDefault();
                }
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';   // blocam scrollul din spatele elementului block deschis 
                document.body.style.marginRight = `${scroll}px`;
                // document.body.classList.add('modal-open');      // hide overflow with bootstrap
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
            // document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                // document.body.classList.remove('modal-open');
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });
            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
                let scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
            }
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        // let scrollWidth = div.offsetWidth - div.clientWidth;
        let scrollWidth = 15;
        div.remove();
        return scrollWidth;
    }

    // onscroll popup, lucreaza daca nu ai accesat niciun buton
    window.onscroll = function () {
        var d = document.documentElement;
        var offset = d.scrollTop + window.innerHeight;
        var height = d.offsetHeight;
        // console.log('offset = ' + offset);
        // console.log('height = ' + height);      
        if (!btnPressed && (offset >= height)) {
            document.querySelector('.fixed-gift').click();
        }
    };

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);

    // showModalByTime('.popup-consultation', 60000);



};

export default Modals;