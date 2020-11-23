//npm import
//import PropTypes from 'prop-types';

//local import
import ItemProduct from "./ItemProduct";

let test = [
  {
    id: 46,
    brand: "bcl",
    name: "aha clear peeling lotion",
    ingredient_list: [
      "water",
      "alcohol",
      "butylene glycol",
      "methyl gluceth-20",
      "glucose",
      "ceramide 2",
      "ceramide 3",
      "ceramide 6",
      "japanese green tea extract",
      "ascorbyl tetraisopalmitate",
      "sodium hyaluronate",
      "phytosphingosine",
      "vitis vinifera (grape) leaf extract",
      "betaine",
      "pentylene glycol",
      "saccharide isomerate",
      "hot spring water",
      "hydrolyzed collagen",
      "hydrolyzed hyalyronic acid",
      "peg-60 hydrogenated castor oil",
      "citric acid",
      "sodium citrate",
      "glycolic acid",
      "sodium stearoyl lactylate",
      "behenyl alcohol",
      "polyglyceryl-10 pentastearate",
      "malic acid",
      "lactic acid",
      "disodium edta",
      "phenoxyethanol",
      "methylparaben",
      "fragrance",
    ],
  },
  {
    id: 70,
    brand: "benton",
    name: "snail bee high content lotion",
    ingredient_list: [
      "snail secretion filtrate",
      "butylene glycol",
      "glycerin",
      "cetyl ethyl hexanoate",
      "sodium hyaluronate",
      "niacinamide",
      "zanthoxylum piperitum fruit extract",
      "pulsatilla koreana extract",
      "usnea barbata (lichen) extract",
      "cetearyl olivate",
      "sorbitan olivate",
      "squalane",
      "urea",
      "human ogliopeptide-1",
      "bee venom",
      "argania spinosa (argan) kernel oil",
      "helianthus annuus (sunflower) seed oil",
      "carthamus tinctorius (safflower) seed oil",
      "pentylene glycol",
      "glyceryl stearate",
      "stearic acid",
      "cetostearyl alcohol",
      "xanthan gum",
      "tocopheryl acetate",
      "bacillus ferment",
      "azealic acid",
      "alcea rosea root extract",
      "aloe barbadensis leaf extract",
      "panthenol",
      "beta-glucan",
      "diospyros kaki leaf extract",
      "salix alba (willow) bark extract",
      "plantago asiatica extract",
      "laminaria digitata extract",
      "ulmus campestris (elm) extract",
      "aloe barbadensis leaf juice",
      "adenosine",
    ],
  },
  {
    id: 91,
    brand: "ciracle",
    name: "anti-redness k lotion",
    ingredient_list: [
      "water",
      "butylene glycol",
      "propylene glycol",
      "glycerin",
      "1 2-hexanediol",
      "oryza sativa (rice) bran extract",
      "carthamus tinctorius (safflower) flower extract",
      "allium cepa (onion) bulb extract",
      "commiphora myrrha resin extract",
      "myrtus communis extract",
      "wine extract",
      "scutellaria baicalensis root extract",
      "asparagus officinalis extract",
      "peucedanum japonicum extract",
      "brassica oleracea italica (broccoli) extract",
      "camellia sinensis leaf extract",
      "peg-60 hydrogenated castor oil",
      "ethylhexylglycerin",
      "arginine",
      "carbomer",
      "ammonium acryloyldimethyltaurate/vp copolymer",
      "dipotassium glycyrrhizate",
      "propanediol",
      "allantoin",
      "lavandula angustifolia (lavender) oil",
      "beta-glucan",
      "bisabolol",
      "glycine soja (soybean) sterols",
      "phenoxyethanol",
    ],
  },
];
const Display = (/*{ products }*/) => {
  return (
    <div id="display">
      <main>
        <ul>
          <ItemProduct products={/*products*/ test} />
        </ul>
      </main>
    </div>
  );
};

/*ItemProduct.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};*/

export default Display;
