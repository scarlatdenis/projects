
import CheckNumInputs from './checkNumInputs';

const ChangeModalState = (state) => {

    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    CheckNumInputs('#width');
    CheckNumInputs('#height');

    function bindActionToElements(event, element, prop) {
        element.forEach((item, i) => {

            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;

                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {

                            i === 0 ? state[prop] = 'Cold' : state[prop] = 'Warm';  // avem 2 checkbox`suri, index 0 si 1.
                            element.forEach((box, j) => {                         // omitem posibilitatea de ceck`ui 2 checkboxuri
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;

                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
                console.log(state);

            });
        });
    }

    bindActionToElements('click', windowForm, 'form');
    bindActionToElements('input', windowHeight, 'height');
    bindActionToElements('input', windowWidth, 'width');
    bindActionToElements('change', windowType, 'type');
    bindActionToElements('change', windowProfile, 'profile');
};

export default ChangeModalState;