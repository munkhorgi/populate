module.exports.paginationFunction =
  (databaseModel) => async (req, res, next) => {
    const content = {};
    const pageNumber = parseInt(req.query.page || 1); // hervee page baihgui bol ehnii page
    const limitCount = parseInt(req.query.limit || 10); // hervee limit baihgui bol default data limit 10

    const startIndex = (pageNumber - 1) * limitCount;
    const endIndex = pageNumber * limitCount;

    if (startIndex > 0) {
      content.previousPage = {
        page: pageNumber - 1,
        limit: limitCount,
      };
    }
    if (endIndex < (await databaseModel.estimatedDocumentCount())) {
      content.nextPage = {
        page: pageNumber + 1,
        limit: limitCount,
      };
    }

    try {
      content.data = await databaseModel
        .find({})
        .limit(limitCount)
        .skip(startIndex);
      res.status(200).json({ data: content });
      next();
    } catch (err) {
      res.send(500).send(err.message);
    }
  };