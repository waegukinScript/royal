/**
 * GET /blog
 * Blog form page.
 */
exports.getAccomodation = (req, res) => {
    //const unknownUser = !(req.user);
  
    res.render('accomodation', {
      title: 'Accomodation',
      //unknownUser,
    });
  };
  