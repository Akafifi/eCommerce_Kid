const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({})
});

router.get('/:id', (req, res) => {
    // find one category by its `id` value
  // be sure to include its associated Products
  Book.findByPK(req.params.id).then((categoryData) => {
    res.json(categoryData);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err)
    })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      name: req.body.name,

    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
  .then((updatedId) => {
    res.json(updatedId)
  })
  .catch((err) => {
    console.log(err);
    res.json(err);
  });
});
// -------------------------------------------------------------------------------------
  router.put('/:category_id', async (req, res) => {
    try{
        //Calls the update method on the Category model
        const updateCategory = await Category.update(
      {
        // All the fields you can update and the data attached to the request body.
        id: req.body.id,
        product_name: req.body.product_name,
        price: req.body.price,
        stock: req.body.stock,
        category_id: req.body.category_id,
      },
      {
        // Gets a category on the category_id given in the request parameters
        where: {
          category_id: req.params.category_id,
        }
      })
      res.status(404).json(updateCategory)
      } catch(err) {
        console.log(err);
        res.json(err);
      }
    });

// ----------------------------------------------------------------------------

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
try {
  const categoryData = await Category.destroy({
    where: {
      id: req.params.id
    }
  });

  if (!categoryData) {
    res.status(404).json({ message: 'No category found with this id!' });
    return;
  }

  res.status(200).json(Data);
} catch (err) {
  res.status(500).json(err);
}
});
module.exports = router;
