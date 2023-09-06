const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  try {
      // find all tags
  const tagData = Tag.findAll();
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
  const tagData = Tag.findByPk(req.params.id)
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

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name,

    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
  .then((updatedTag) => {
    res.json(updatedTag)
  })
  .catch((err) => {
    console.log(err);
    res.json(err);
  });
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

  res.status(200).json(Data);
} catch (err) {
  res.status(500).json(err);
}
});

module.exports = router;
