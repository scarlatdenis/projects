
const Timer = (id, deadline) => {

    const addZero = (n) => {

        if (n <= 9) {
            return '0' + n;
        } else {
            return n;
        }
    }

    const getTimeRemaining = (endtime) => {

        const t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            days = Math.floor((t / (1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    const setClock = (selector, endtime) => {

        const timer = document.querySelector(selector),
            days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        //
        updateClock(); // chemam functia ca sa nu vedem timpul introdus in html

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";       // adaugam zero in fata in caz ca avem cifra
                minutes.textContent = "00";
                seconds.textContent = "00";
                //
                clearInterval(timeInterval);
            }
        }
    };

    setClock(id, deadline);
};

export default Timer;