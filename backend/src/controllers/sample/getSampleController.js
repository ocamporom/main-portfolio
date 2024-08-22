function getSampleController(req, res) {
  const arrayWithRandomNumbers = (length, min = 0, max = 1) => {
    if (length < 0) {
      throw new Error('Length must be a non-negative number');
    }
    if (min > max) {
      throw new Error('Min must be less than or equal to max');
    }

    return Array.from({ length }, () => Math.random() * (max - min) + min);
  };

  res.status(200).json({
    data: arrayWithRandomNumbers(5),
  });
}

export default getSampleController;
