import './index.scss';
import pfp from '../../../assets/images/IMG_1781.png'

const Picture = () => {

    return (
        <div className = 'pic-container'>
            <img className = 'solid-pic' src = {pfp} alt="pfp"/>
        </div>
    )
}

export default Picture;