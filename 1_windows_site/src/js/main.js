
import './slider';
import Modals from './modules/modals';
import Tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
    Modals();
    Tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active')
});
