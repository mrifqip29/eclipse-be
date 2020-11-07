export const welcomeController = (req, res) => {
  res.status(200).json({ message: 'Welcome to Eclipse Website API' });
};
