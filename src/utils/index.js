import resolveAssetSource from 'resolveAssetSource'

export function getImageSize(image, {width, height}){
  const imDim = resolveAssetSource(image)
  if (width) {
    return {width, height: imDim.height *  width / imDim.width}
  } else if (height) {
    return {height, width: imDim.width *  height / imDim.height}
  }
  return imDim
}
