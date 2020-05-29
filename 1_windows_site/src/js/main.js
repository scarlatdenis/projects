
import './slider';
import Modals from './modules/modals';
import Tabs from './modules/tabs';
import Forms from './modules/forms';
import ChangeModalState from './modules/changeModalState';
import Timer from './modules/timer';
import Images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
    "use strict"

    let modalState = {};

    let deadLine = '2020-06-15';  // timer deadline

    ChangeModalState(modalState);

    Modals();
    Tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    Tabs('.decoration_slider', '.no_click', '.decoration_content >div >div', 'after_click');
    Tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');  //calculator tab  //.big_img > img -- direct children

    Timer('.container1', deadLine);
    
    Forms(modalState);

    Images();

});
