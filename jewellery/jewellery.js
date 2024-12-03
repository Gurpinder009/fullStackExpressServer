import express from "express";
import JewelleryModel from "../database/jewelleryModel.js";
import verifyJsonToken from "../utilities/verifyToken.js";
// import {uploads} from "../utilities/fileUploads.js"

export const jwlRouter = express.Router();

jwlRouter.get("/", async (req, res) => {

  try {
    let data = await JewelleryModel.find();
    res.status(200).json(data);
  } catch (ex) {
    res.status(400).json(ex);
  }
});

jwlRouter.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    console.log(id)
    let data = await JewelleryModel.findById(id);
    res.status(200).json(data);
  } catch (ex) {
    res.status(400).json(ex);
  }
});

jwlRouter.get("/category/:name", async (req, res) => {
  try {
    let { name } = req.params;
    name = String(name).charAt(0).toUpperCase() + String(name).slice(1);
    let data = await JewelleryModel.find({
      category: name
    });
    res.status(200).json(data);
  } catch (ex) {
    res.status(400).json(ex);
  }
});

jwlRouter.post( "/",verifyJsonToken,async (req, res) => {
  try {
        const newData = req.body;
        console.log(newData);
         const data = await JewelleryModel.create({
          name:newData.name,
          description:newData.description,
          price:newData.price,
          category:newData.category,
          image:newData.image,
        });
        let result = await JewelleryModel.create(data);
        res.status(200).json(result);
      } catch (ex) {
        console.log(ex);
      res.status(400).json(ex);
    }
  }
);




jwlRouter.patch("/:id", verifyJsonToken,  async (req, res) => {
  try {
    let { id } = req.params;
    const newData = req.body;

    newData.id = id;
    let result = await JewelleryModel.updateOne(newData);
    res.status(200).json(result);
  } catch (ex) {
    res.status(400).json(ex);
  }
});

jwlRouter.delete("/:id", verifyJsonToken, async (req, res) => {
  try {
    let { id } = req.params;
   

    let result = await JewelleryModel.deleteOne({
      _id: id,
    });
    res.status(200).json(result);
  } catch (ex) {
    res.status(400).json(ex);
  }

});





  // { name: "Diamond Ring", description: "Elegant diamond solitaire ring", price: 1200, category: "Rings", image: "diamond_ring.jpg" },
  // { name: "Gold Necklace", description: "24k gold chain necklace", price: 1500, category: "Necklaces", image: "gold_necklace.jpg" },
  // { name: "Pearl Earrings", description: "Classic freshwater pearl earrings", price: 200, category: "Earrings", image: "pearl_earrings.jpg" },
  // { name: "Silver Bracelet", description: "Sterling silver charm bracelet", price: 300, category: "Bracelets", image: "silver_bracelet.jpg" },
  // { name: "Ruby Pendant", description: "Ruby gemstone pendant in gold setting", price: 850, category: "Necklaces", image: "ruby_pendant.jpg" },
  // { name: "Sapphire Ring", description: "Blue sapphire ring with diamond accents", price: 950, category: "Rings", image: "sapphire_ring.jpg" },
  // { name: "Gold Hoop Earrings", description: "18k gold hoop earrings", price: 400, category: "Earrings", image: "gold_hoop_earrings.jpg" },
  // { name: "Emerald Necklace", description: "Emerald necklace with gold chain", price: 1100, category: "Necklaces", image: "emerald_necklace.jpg" },
  // { name: "Platinum Wedding Band", description: "Plain platinum wedding band", price: 600, category: "Rings", image: "platinum_band.jpg" },
  // { name: "Diamond Stud Earrings", description: "Timeless diamond stud earrings", price: 700, category: "Earrings", image: "diamond_stud_earrings.jpg" },
  // { name: "Silver Anklet", description: "Delicate silver anklet", price: 150, category: "Anklets", image: "silver_anklet.jpg" },
  // { name: "Rose Gold Bracelet", description: "Rose gold bangle bracelet", price: 350, category: "Bracelets", image: "rose_gold_bracelet.jpg" },
  // { name: "Amethyst Ring", description: "Purple amethyst ring in silver setting", price: 500, category: "Rings", image: "amethyst_ring.jpg" },
  // { name: "Pearl Choker", description: "Vintage pearl choker necklace", price: 750, category: "Necklaces", image: "pearl_choker.jpg" },
  // { name: "Gold Cuff Bracelet", description: "Solid gold cuff bracelet", price: 1200, category: "Bracelets", image: "gold_cuff_bracelet.jpg" },
  // { name: "Turquoise Earrings", description: "Boho-style turquoise drop earrings", price: 180, category: "Earrings", image: "turquoise_earrings.jpg" },
  // { name: "Silver Locket", description: "Sterling silver heart locket", price: 250, category: "Necklaces", image: "silver_locket.jpg" },
  // { name: "Garnet Ring", description: "Deep red garnet ring in gold setting", price: 550, category: "Rings", image: "garnet_ring.jpg" },
  // { name: "Crystal Bracelet", description: "Sparkling crystal bead bracelet", price: 220, category: "Bracelets", image: "crystal_bracelet.jpg" },
  // { name: "Diamond Tennis Bracelet", description: "Diamond tennis bracelet in white gold", price: 3000, category: "Bracelets", image: "diamond_tennis_bracelet.jpg" },
  // { name: "Gold Pendant", description: "Simple gold pendant with chain", price: 400, category: "Necklaces", image: "gold_pendant.jpg" },
  // { name: "Onyx Earrings", description: "Black onyx stud earrings", price: 300, category: "Earrings", image: "onyx_earrings.jpg" },
