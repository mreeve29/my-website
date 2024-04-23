import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

type Props = {
    images: string[];
}

const SlideShow = ({ images }: Props) => {
    const style: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    }

    const imgDivs = images?.map((imgURL: string) => {
        return (<div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${imgURL})`, ...style }} className='h-60 lg:h-[475px]'>
            </div>
        </div>)
    });

    return (
        (images ?
            <Slide autoplay={false} transitionDuration={250} easing='ease' cssClass='rounded mb-2'>

                {imgDivs}

            </Slide>
            : <></>)
    );
};

export default SlideShow;