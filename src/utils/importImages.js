const importAll = (requireContext) =>
  requireContext.keys().reduce((images, path) => {
    const key = path.replace('./', ''); // Removes './' from the key
    images[key] = requireContext(path); // Adds the image to the object
    return images;
  }, {});

// Dynamically import all images from the directory
const images = importAll(require.context('../app/image/dashboard', false, /\.(png|jpe?g|svg)$/));

export default images;
