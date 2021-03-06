export default (res, error) => {
  const errorResponse = {
    status: 500,
    extraInfo: error.message ? error.message : 'Something went wrong'
  };
  res.status(errorResponse.status);
  res.json(errorResponse);
};
