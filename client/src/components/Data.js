import CamoThai_menu from "../images/menu/Camo_Thai_menu.jpg";
import CamoThai_modal from "../images/menu/Camo_Thai_modal.jpg";
import OmomoMatcha_menu from "../images/menu/Omomo_Matcha_menu.jpg";
import OmomoMatcha_modal from "../images/menu/Omomo_Matcha_modal.jpg";
import OreoBrulee_menu from "../images/menu/Oreo_Brulee_GMT_menu.jpg";
import OreoBrulee_modal from "../images/menu/Oreo_Brulee_GMT_modal.jpeg";
import StrawberryT_menu from "../images/menu/Fruit_Tornado_Strawberry_menu.jpeg";
import StrawberryT_modal from "../images/menu/Fruit_Tornado_Strawberry_modal.jpeg";
import MatchaCortado_menu from "../images/menu/Matcha_Cortado_C_menu.jpg";
import MatchaCortado_modal from "../images/menu/Matcha_Cortado_C_modal.jpeg";

import OreoBrulee_home from "../images/menu/Oreo_Brulee_GMT-500.jpeg";
import JasmineCreamomo_home from "../images/menu/Jasmine_C-500.jpeg";
import UjiGMT_home from "../images/menu/Uji_GMT-500.jpeg";
import CafeLatte_home from "../images/menu/Cafe_Latte-500.jpeg";
import StrawberryGT_home from "../images/menu/Strawberry_Green_Tea-500.jpeg";
import FourSeasons_home from "../images/menu/Four_Seasons-500.jpeg";

export const MenuData = [
  {
    id: "d1",
    name: "CAMO THAI",
    abbr: "CAMO THAI",
    price: 4.75,
    imgMenu: CamoThai_menu,
    imgModal: CamoThai_modal,
  },
  {
    id: "d2",
    name: "OMOMO MATCHA",
    abbr: "OMOMO MATCHA",
    price: 5.5,
    imgMenu: OmomoMatcha_menu,
    imgModal: OmomoMatcha_modal,
  },
  {
    id: "d3",
    name: "OREO BRULEE GREEN MILK TEA",
    abbr: "OREO BR. GMT",
    price: 5.25,
    imgMenu: OreoBrulee_menu,
    imgModal: OreoBrulee_modal,
  },
  {
    id: "d4",
    name: "FRUIT TORNADO STRAWBERRY",
    abbr: "FRUIT T. STRWBRY",
    price: 6.0,
    imgMenu: StrawberryT_menu,
    imgModal: StrawberryT_modal,
  },
  {
    id: "d5",
    name: "MATCHA CORTADO CREAMOMO",
    abbr: "MATCHA CORTADO",
    price: 5.5,
    imgMenu: MatchaCortado_menu,
    imgModal: MatchaCortado_modal,
  },
];

export const HomeMenuData = [
  {
    name: "Oreo Brulee Green Milk Tea",
    imgPath: OreoBrulee_home,
  },
  {
    name: "Jasmine Creamomo",
    imgPath: JasmineCreamomo_home,
  },
  {
    name: "Uji Green Milk Tea",
    imgPath: UjiGMT_home,
  },
  {
    name: "Cafe Latte",
    imgPath: CafeLatte_home,
  },
  {
    name: "Strawberry Green Tea",
    imgPath: StrawberryGT_home,
  },
  {
    name: "Four Seasons Tea",
    imgPath: FourSeasons_home,
  },
];
