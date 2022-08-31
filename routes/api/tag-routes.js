const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tags = await Tag.findAll( {
      include: [ { model: Product, through: ProductTag, as: 'products' } ]
    } );
    res.status(200).json( tags );
  } catch ( err ) {
    res.status(500).json( err )
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tag = await Tag.findByPk( req.params.id, {
      include: [ { model: Product, through: ProductTag, as: 'products' } ]
    } );

    if ( !tag ) {
      res.status(404).json( { message:  `Could not find Tag with Id: ${ req.params.id }` } );
      return;
    }

    res.status(200).json( tag );
  } catch ( err ) {
    res.status(500).json( err )
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tag = await Tag.create( req.body );
    res.status(200).json( tag );
  } catch ( err ) {
    res.status(500).json( err )
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = await Tag.update( req.body, { 
      where: {
        id: req.params.id
      }
     } );

    res.status(200).json( { message: updatedTag[0] ? `Tag has been updated to: ${ req.body.tag_name }` : 'Nothing Updated' } );
  } catch ( err ) {
    res.status(500).json( err )
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleted = await Tag.destroy( { 
      where: {
        id: req.params.id
      }
     } );

    if ( !deleted ) {
      res.status(404).json( { message: `Could not find Tag with Id: ${ req.params.id }` } );
      return;
    }

    res.status(200).json( { message: `Tag has been deleted` } );
  } catch ( err ) {
    res.status(500).json( err )
  }
});

module.exports = router;
