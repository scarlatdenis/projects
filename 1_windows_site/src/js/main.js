
import './slider';
import Modals from './modules/modals';
import Tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {

    Modals();
    Tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    Tabs('.decoration_slider', '.no_click', '.decoration_content >div >div', 'after_click');
});
