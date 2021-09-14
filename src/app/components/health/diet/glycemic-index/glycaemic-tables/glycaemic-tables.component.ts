import { Component, OnInit } from '@angular/core';
import {IGlaecemic} from '../../../../../shared/interfaces';

@Component({
  selector: 'app-glycaemic-tables',
  templateUrl: './glycaemic-tables.component.html',
  styleUrls: ['./glycaemic-tables.component.scss']
})
export class GlycaemicTablesComponent implements OnInit {

  config: any;

  // lowBread: IGlaecemic[] = [];
  mediumBread: IGlaecemic[] = [];
  highBread: IGlaecemic[] = [];

  lowCarbs: IGlaecemic[] = [];
  mediumCarbs: IGlaecemic[] = [];
  highCarbs: IGlaecemic[] = [];

  lowFruit: IGlaecemic[] = [];
  mediumFruit: IGlaecemic[] = [];
  highFruit: IGlaecemic[] = [];

  lowVeg: IGlaecemic[] = [];
  mediumVeg: IGlaecemic[] = [];
  highVeg: IGlaecemic[] = [];

  lowCereal: IGlaecemic[] = [];
  mediumCereal: IGlaecemic[] = [];
  highCereal: IGlaecemic[] = [];

  lowDeserts: IGlaecemic[] = [];
  mediumDeserts: IGlaecemic[] = [];
  highDeserts: IGlaecemic[] = [];

  lowSweets: IGlaecemic[] = [];
  mediumSweets: IGlaecemic[] = [];
  highSweets: IGlaecemic[] = [];


  lowBread = [
    {id: 1, name: 'Tortilla Wraps', gi: 30},
    {id: 2, name: 'vogel\'s sunflower and barley brown bread',  gi: 40},
    {id: 3, name: 'Chapatis (made with fat)', gi: 50},
    {id: 4, name: 'Sourdough Bread', gi: 54},
  ];

  constructor() {
  }

  ngOnInit() {
    this.mediumBread = [
      {id: 1, name: 'Granary bread', gi: 62},
      {id: 2, name: 'Naan bread',  gi: 63},
      {id: 3, name: 'Wholemeal pitta bread', gi: 63},
      {id: 4, name: 'Ryvita crispbread', gi: 64},
      {id: 5, name: 'Croissant',  gi: 67},
      {id: 6, name: 'White pitta bread', gi: 67},
      {id: 7, name: 'Crumpets (toasted)', gi: 69},
    ];

    this.highBread = [
      {id: 1, name: 'Rye bread', gi: 70},
      {id: 2, name: 'Soda bread',  gi: 70},
      {id: 3, name: 'White bread (average)', gi: 72},
      {id: 4, name: 'Ciabatta', gi: 72},
      {id: 5, name: 'Bagels (plain)',  gi: 72},
      {id: 6, name: 'Breadsticks', gi: 72},
      {id: 7, name: 'Brown bread (average)', gi: 73},
      {id: 8, name: 'Wholemeal bread (average)', gi: 73},
      {id: 9, name: 'Soya & linseed bread (Burgen)',  gi: 74},
      {id: 10, name: 'Seeded Batch Loaf (Warburtons)', gi: 80},
      {id: 11, name: 'Crackerbread', gi: 85},
      {id: 12, name: 'French stick, white',  gi: 90},
    ];

    this.lowCarbs = [
      {id: 1, name: 'Wholemeal Spaghetti, boiled', gi: 37},
      {id: 2, name: 'Basmati rice, cooked (250g pack)',  gi: 43},
      {id: 3, name: 'Spaghetti, white, boiled', gi: 44},
      {id: 4, name: 'Macaroni. boiled', gi: 45},
      {id: 5, name: 'Pasta, fresh, cooked',  gi: 45},
      {id: 6, name: 'Wholemeal pastry. cooked', gi: 45},
      {id: 7, name: 'Ebly (bulgur wheat)', gi: 46},
      {id: 8, name: 'Noodles, plain, boiled', gi: 47},
      {id: 9, name: 'White rice, easy cook, boiled',  gi: 49},
      {id: 10, name: 'Brown rice. boiled', gi: 55},
    ];

    this.mediumCarbs = [
      {id: 1, name: 'Noodles, egg (boiled)', gi: 63},
      {id: 2, name: 'New potatoes (boiled)',  gi: 63},
      {id: 3, name: 'Dumplings', gi: 63},
      {id: 4, name: 'Egg fried rice (takeaway)', gi: 63},
      {id: 5, name: 'Pilau rice',  gi: 63},
      {id: 6, name: 'Long Grain rice, polished, boiled', gi: 64},
      {id: 7, name: 'Couscous', gi: 65},
      {id: 8, name: 'Yorkshire pudding', gi: 67},
      {id: 9, name: 'Pancakes, savoury, made with whole milk',  gi: 67},
      {id: 10, name: 'Pancakes, sweet, made with whole milk', gi: 67},
      {id: 11, name: 'Risotto, Plain', gi: 67},
    ];

    this.highCarbs = [
      {id: 1, name: 'Cornflour', gi: 70},
      {id: 2, name: 'Soya flour (full fat)',  gi: 70},
      {id: 3, name: 'Wholemeal flour (wheat)', gi: 70},
      {id: 4, name: 'White flour (wheat)', gi: 70},
      {id: 5, name: 'Oatmeal. raw',  gi: 70},
      {id: 6, name: 'Bran (wheat)', gi: 70},
      {id: 7, name: 'Rye flour, whole', gi: 70},
      {id: 8, name: 'Oven Chips, frozen (baked)', gi: 75},
      {id: 9, name: 'Chips, French fries, (retail)',  gi: 75},
      {id: 10, name: 'Potato, old (jacket/baked)', gi: 85},
      {id: 11, name: 'Potatoes, old (boiled)', gi: 85},
      {id: 12, name: 'Potato, old, mashed with butter',  gi: 85},
    ];

    this.lowFruit =  [
      {id: 1, name: 'Cherries', gi: 22},
      {id: 2, name: 'Grapefruit',  gi: 25},
      {id: 3, name: 'Apricots, dried', gi: 32},
      {id: 4, name: 'Innocent smoothie (average)', gi: 33},
      {id: 5, name: 'Pears',  gi: 38},
      {id: 6, name: 'Apples', gi: 38},
      {id: 7, name: 'Tomato juice', gi: 38},
      {id: 8, name: 'Plums', gi: 39},
      {id: 9, name: 'Strawberries',  gi: 40},
      {id: 10, name: 'Apple juice (unsweetened)', gi: 40},
      {id: 11, name: 'Dried mixed fruit', gi: 41},
      {id: 12, name: 'Satsumas',  gi: 42},
      {id: 13, name: 'Peaches', gi: 42},
      {id: 14, name: 'Oranges', gi: 42},
      {id: 15, name: 'Tomatoes. raw',  gi: 45},
      {id: 16, name: 'Raspberries. raw', gi: 45},
      {id: 17, name: 'Avocado', gi: 45},
      {id: 18, name: 'Grapes', gi: 46},
      {id: 19, name: 'Mangoes',  gi: 51},
      {id: 20, name: 'Banana', gi: 52},
      {id: 21, name: 'Orange juice (unsweetened)', gi: 52},
      {id: 22, name: 'Kiwi fruit', gi: 53},
    ];

    this.mediumFruit = [
      {id: 1, name: 'Apricots', gi: 57},
      {id: 2, name: 'Sultanas',  gi: 58},
      {id: 3, name: 'Pineapple', gi: 59},
      {id: 4, name: 'Cranberry juice', gi: 59},
      {id: 5, name: 'Figs',  gi: 61},
      {id: 6, name: 'Dates, dried', gi: 61},
      {id: 7, name: 'Raisins', gi: 64},
    ];

    this.highFruit = [
      {id: 1, name: 'Blackcurrants. raw', gi: 70},
      {id: 2, name: 'Cranberries',  gi: 70},
      {id: 3, name: 'Melon (all types, average)', gi: 72},
      {id: 4, name: 'Watermelon', gi: 72},
      {id: 5, name: 'Lychees',  gi: 79},
    ];
    this.lowVeg =  [
      {id: 1, name: 'Processed peas, canned (drained and heated)', gi: 39},
      {id: 2, name: 'Mushy peas, canned (heated)',  gi: 39},
      {id: 3, name: 'Runner beans, boiled', gi: 45},
      {id: 4, name: 'Green salad', gi: 45},
      {id: 5, name: 'Onions (raw)',  gi: 45},
      {id: 6, name: 'Celery (raw)', gi: 45},
      {id: 7, name: 'Broccoli, green (boiled)', gi: 45},
      {id: 8, name: 'Brussels sprouts (boiled)', gi: 45},
      {id: 9, name: 'Cauliflower (boiled)',  gi: 45},
      {id: 10, name: 'Tomatoes, tinned (whole contents)', gi: 45},
      {id: 11, name: 'Mushrooms (raw)', gi: 45},
      {id: 12, name: 'Mixed vegetables, frozen (boiled)',  gi: 45},
      {id: 13, name: 'Curly kale. boiled in salted water', gi: 45},
      {id: 14, name: 'Courgette (boiled)', gi: 45},
      {id: 15, name: 'Asparagus (boiled)',  gi: 45},
      {id: 16, name: 'Red peppers, capsicum', gi: 45},
      {id: 17, name: 'Green peppers, capsicum', gi: 45},
      {id: 18, name: 'Bamboo shoots, canned', gi: 45},
      {id: 19, name: 'Butternut squash (baked)',  gi: 45},
      {id: 20, name: 'Spinach', gi: 45},
      {id: 21, name: 'Carrots (boiled)', gi: 47},
      {id: 22, name: 'Peas, frozen (boiled)', gi: 48},
      {id: 23, name: 'Sweetcorn, canned', gi: 55},
    ];

    this.mediumVeg = [
      {id: 1, name: 'Sweet potato (baked)', gi: 61},
      {id: 2, name: 'Turnip (boiled)',  gi: 63},
      {id: 3, name: 'Beetroot, pickled', gi: 64},
    ];

    this.highVeg = [
      {id: 1, name: 'Swede (boiled)', gi: 72},
      {id: 2, name: 'Pumpkin (boiled)',  gi: 75},
      {id: 3, name: 'Broad Beans (boiled)', gi: 79},
      {id: 4, name: 'Parsnip (boiled)', gi: 97},
    ];

    this.lowCereal = [
      {id: 1, name: 'Kelloggs All Bran', gi: 45},
      {id: 2, name: 'Porridge (made with water)',  gi: 51},
      {id: 3, name: 'Porridge (made with milk)', gi: 51},
      {id: 4, name: 'Oatso Simple syrup swirl porridge (Quaker)', gi: 51},
      {id: 5, name: 'Ready Brek',  gi: 51},
      {id: 6, name: 'Alpen muesli original (Weetabix)', gi: 55},
      {id: 7, name: 'Oatibix', gi: 55},
    ];

    this.mediumCereal = [
      {id: 1, name: 'Quaker Porridge Oats', gi: 58},
      {id: 2, name: 'Just Right (Kelloggs)',  gi: 60},
      {id: 3, name: 'Kelloggs Fruit and fibre', gi: 68},
      {id: 4, name: 'Special K', gi: 69},
    ];

    this.highCereal = [
      {id: 1, name: 'Sugar Puffs', gi: 70},
      {id: 2, name: 'Nutri-Grain',  gi: 70},
      {id: 3, name: 'Shreddies', gi: 70},
      {id: 4, name: 'Weetos', gi: 70},
      {id: 5, name: 'Crunchy Nut Corn Flakes',  gi: 72},
      {id: 6, name: 'Cheerios', gi: 74},
      {id: 7, name: 'Bran Flakes', gi: 74},
      {id: 8, name: 'Shredded Wheat', gi: 75},
      {id: 9, name: 'Weetabix',  gi: 75},
      {id: 10, name: 'Coco Pops', gi: 77},
      {id: 11, name: 'Rice Krispies', gi: 81},
      {id: 12, name: 'Corn Flakes',  gi: 93},
    ];

    this.lowDeserts =  [
      {id: 1, name: 'Fruit sorbet', gi: 34},
      {id: 2, name: 'Custard tart (individual)',  gi: 34},
      {id: 3, name: 'Chocolate fudge cake', gi: 38},
      {id: 4, name: 'Swiss rolls, chocolate (individual)', gi: 38},
      {id: 5, name: 'Mr Kipling Angel Slices ',  gi: 42},
      {id: 6, name: 'Sponge cake, jam filled', gi: 42},
      {id: 7, name: 'Lemon tart', gi: 45},
      {id: 8, name: 'Trifle, fruit', gi: 45},
      {id: 9, name: 'Chocolate mousse',  gi: 45},
      {id: 10, name: 'Tiramisu ', gi: 45},
      {id: 11, name: 'Suet pudding', gi: 45},
      {id: 12, name: 'Sponge cake with dairy cream and jam',  gi: 45},
      {id: 13, name: 'Mince pies (individual)', gi: 45},
      {id: 14, name: 'Sponge pudding with jam or treacle', gi: 46},
      {id: 15, name: 'Go Ahead Cake Bars (McVities)',  gi: 46},
      {id: 16, name: 'Chocolate chip muffins (Tesco). raw', gi: 53},
      {id: 17, name: 'Bourbon biscuits', gi: 55},
      {id: 18, name: 'Rich Tea biscuits', gi: 55},
    ];

    this.mediumDeserts = [
      {id: 1, name: 'Oatcakes', gi: 57},
      {id: 2, name: 'Blueberry Muffin',  gi: 59},
      {id: 3, name: 'Hobnobs', gi: 59},
      {id: 4, name: 'Digestive biscuits', gi: 59},
      {id: 5, name: 'Ice cream, non-dairy, vanilla',  gi: 61},
      {id: 6, name: 'Cheesecake', gi: 63},
      {id: 7, name: 'Fruit crumble', gi: 63},
      {id: 8, name: 'Carrot cake (with topping)', gi: 63},
      {id: 9, name: 'Chocolate Eclairs, fresh',  gi: 63},
      {id: 10, name: 'Profiteroles', gi: 63},
      {id: 11, name: 'Lemon meringue pie', gi: 63},
      {id: 12, name: 'Pandoro Italian cake', gi: 63},
      {id: 13, name: 'Danish pastries', gi: 63},
      {id: 14, name: 'Christmas pudding', gi: 63},
      {id: 15, name: 'Fruit pie (individual)', gi: 63},
      {id: 16, name: 'Flapjacks',  gi: 63},
      {id: 17, name: 'Jam tarts', gi: 63},
      {id: 18, name: 'Shortbread', gi: 65},
      {id: 19, name: 'Chocolate fingers (Cadburys)', gi: 65},
      {id: 20, name: 'Chocolate chip cookies',  gi: 65},
      {id: 21, name: 'Chocolate digestive biscuits', gi: 65},
      {id: 22, name: 'Fruit cake, rich, iced', gi: 65},
      {id: 23, name: 'Weight Watchers choc chip cookie', gi: 63},
      {id: 24, name: 'Oreo biscuits', gi: 63},
      {id: 25, name: 'Jaffa cakes', gi: 63},
      {id: 26, name: 'Gingernut biscuits',  gi: 63},
      {id: 27, name: 'Amaretti biscuits (Doria)', gi: 65},
      {id: 28, name: 'Meringue', gi: 68},
    ];

    this.highDeserts = [
      {id: 1, name: 'Banoffee pie', gi: 70},
      {id: 2, name: 'Snowballs (Tunnock\'s) ',  gi: 70},
      {id: 3, name: 'Jammie Dodgers', gi: 70},
      {id: 4, name: 'Hot cross buns', gi: 72},
      {id: 5, name: 'Doughnut, jam',  gi: 76},
      {id: 6, name: 'Scones. plain', gi: 92},
    ];

    this.lowSweets =  [
      {id: 1, name: 'Whole Nut Chocolate bar (Cadbury\'s)', gi: 43},
      {id: 2, name: 'Ripple (Galaxy)',  gi: 43},
      {id: 3, name: 'Organic dark chocolate 70% cocoa (Green&Blacks)', gi: 43},
      {id: 4, name: 'Wispa (Cadbury)', gi: 43},
      {id: 5, name: 'Mint Aero (Nestle)',  gi: 43},
      {id: 6, name: 'Minstrels', gi: 43},
      {id: 7, name: 'Twix', gi: 44},
      {id: 8, name: 'Twister ice lolly', gi: 45},
      {id: 9, name: 'Fruit and nut bar (Cadbury\'s)',  gi: 45},
      {id: 10, name: 'Lion Bar (Nestle)', gi: 45},
      {id: 11, name: 'Mint crisp chocolates', gi: 45},
      {id: 12, name: 'Quality Street chocolates ',  gi: 45},
      {id: 13, name: 'After Eights', gi: 45},
      {id: 14, name: 'Milky Way', gi: 45},
      {id: 15, name: 'Alpen Bar (Strawberry & Yoghurt)',  gi: 51},
      {id: 16, name: 'Snickers', gi: 55},
    ];

    this.mediumSweets =  [
      {id: 1, name: 'Tracker bar', gi: 57},
      {id: 2, name: 'Kellogg\'s Fruit & Fibre Bar',  gi: 57},
      {id: 3, name: 'Bounty bar', gi: 63},
      {id: 4, name: 'Maltesers (Mars)', gi: 63},
      {id: 5, name: 'Kit Kat',  gi: 63},
      {id: 6, name: 'Double Decker', gi: 63},
      {id: 7, name: 'Chocolate covered caramels', gi: 63},
      {id: 8, name: 'Rolo', gi: 63},
      {id: 9, name: 'Nutrigrain bar, chocolate (Kelloggs)',  gi: 63},
      {id: 10, name: 'Curly Wurly', gi: 63},
      {id: 11, name: 'Creme egg', gi: 63},
      {id: 12, name: 'Cadbury\'s Fudge',  gi: 63},
      {id: 13, name: 'Crunchie (Cadbury\'s)', gi: 63},
      {id: 14, name: 'Mars bar', gi: 65},
      {id: 15, name: 'Foam sweets',  gi: 68},
      {id: 16, name: 'Boiled sweets', gi: 68},
      {id: 17, name: 'Peppermint creams', gi: 68},
    ];

    this.highSweets =  [
      {id: 1, name: 'Slim Fast yogurt muesli meal bar', gi: 70},
      {id: 2, name: 'Nutty crunch bar (Jordans)',  gi: 70},
      {id: 3, name: 'Raisin & Hazelnut Fruisli Bar (Jordans)', gi: 70},
      {id: 4, name: 'Nature Valley granola bar', gi: 70},
      {id: 5, name: 'Toffees, mixed',  gi: 70},
      {id: 6, name: 'Coco-pops cereal & milk bar (Kelloggs)', gi: 70},
      {id: 7, name: 'Nestle Fitnesse Apricot Bar', gi: 70},
      {id: 8, name: 'Kelloggs Special K Bar', gi: 70},
      {id: 9, name: 'Liquorice allsorts',  gi: 70},
      {id: 10, name: 'Fudge', gi: 70},
      {id: 11, name: 'Marshmallows', gi: 70},
      {id: 12, name: 'Wine gums',  gi: 78},
      {id: 13, name: 'Jelly Babies', gi: 78},
      {id: 14, name: 'Starmix sweets (Haribo)', gi: 78},
      {id: 15, name: 'Fruit pastilles',  gi: 78},
      {id: 16, name: 'Chew sweets', gi: 78},
      {id: 17, name: 'Skittles', gi: 78},
    ];

  }

  getColor() {
    { return 'black'; }
  }
  getMediumColor() {
   { return 'darkgreen'; }
  }

  getHighColor() {
    { return 'red'; }
  }

}
