// Write your code here.
import './index.css'

const Thumbnail = props => {
  const {list, updateImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = list

  const activeImage = () => {
    updateImage(id)
  }

  const classNameItem = isActive ? 'image-opacity' : ''

  return (
    <li className="thumbnail">
      <button className="button" type="button" onClick={activeImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={classNameItem}
        />
      </button>
    </li>
  )
}

export default Thumbnail
