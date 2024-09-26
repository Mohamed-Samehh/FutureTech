// Function to import all images dynamically from a folder
const importAllImages = (requireContext) => {
    let images = {};
    requireContext.keys().forEach((key) => {
        images[key.replace('./', '')] = requireContext(key);
    });
    return images;
};

// Usage of the function
const images = importAllImages(require.context('./images', false, /\.(png|jpe?g|svg)$/));

export default images;
