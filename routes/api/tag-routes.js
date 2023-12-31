const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
      // find all tags
  const tagData = await Tag.findAll({
    include: [{model: Product, through: ProductTag,
    attributes: ['id', 'product_name', 'price', 'stock'],
  }]
  });
  res.status(200).json(tagData)
  // be sure to include its associated Product data
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
      // find a single tag by its `id`
  // be sure to include its associated Product data
  const tagData = await Tag.findByPk(req.params.id, {
    include: [{ model: Product, through: ProductTag,
    attributes: ['id', 'product_name', 'price', 'stock'],
  }]
  });

  if (!tagData) {
    res.status(404).json({ message: 'No category found with this id!'})
    return;
  }
  
  res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
      // create a new tag
  const tagData = await Tag.create(req.body);
  res.status(200).json(tagData);
  } catch(err) {
    res.status(400).json(err);
  }
});
router.put('/:id', async (req, res) => {
  try{
      //Calls the update method on the Tag model
      const updateTag = await Tag.update(
    {
      // All the fields you can update and the data attached to the request body.
      id: req.body.id,
      tag_name: req.body.tag_name,
    },
    {
      // Gets a tag based on the id given in the request parameters
      where: {
        id: req.params.id,
      }
    })
    res.status(404).json(updateTag)
    } catch(err) {
      console.log(err);
      res.json(err);
    }
  });

router.delete('/:id', async (req, res) => {
  // delete one tag by its `id` value
try {
  const tagData = await Tag.destroy({
    where: {
      id: req.params.id
    }
  });

  if (!tagData) {
    res.status(404).json({ message: 'No tag found with this id!' });
    return;
  }

  res.status(200).json(tagData);
} catch (err) {
  res.status(500).json(err);
}
});

module.exports = router;
