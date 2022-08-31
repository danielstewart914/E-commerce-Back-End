const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categories = await Category.findAll( {
      include: [ Product ]
    } );
    res.status(200).json( categories );
  } catch ( err ) {
    res.status(500).json( err )
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const category = await Category.findByPk( req.params.id, {
      include: [ Product ]
    } );

    if ( !category ) {
      res.status(404).json( { message: `Could not find Category with Id: ${ req.params.id }` } );
      return;
    }

    res.status(200).json( category );
  } catch ( err ) {
    res.status(500).json( err )
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const category = await Category.create( req.body );
    res.status(200).json( category );
  } catch ( err ) {
    res.status(500).json( err )
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update( req.body, {
      where: {
        id: req.params.id
      }
    } );

    res.status(200).json( { message: updatedCategory[0] ? `Category has been updated to: ${ req.body.category_name }` : 'Nothing Updated' } );
  } catch ( err ) {
    res.status(500).json( err )
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleted = await Category.destroy( { 
      where: {
        id: req.params.id
      }
     } );

    if ( !deleted ) {
      res.status(404).json( { message: `Could not find Category with Id: ${ req.params.id }` } );
      return;
    }

    res.status(200).json( { message: `Category has been deleted` } );
  } catch ( err ) {
    res.status(500).json( err )
  }
});

module.exports = router;
