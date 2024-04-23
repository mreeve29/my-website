import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

type Props = {
    images?: string[];
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

    const indicators = () => (
        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" className="indicator" fill='#e6e3e3' >
            <circle r="9" cx="10" cy="10" />
        </svg>
    );

    return (
        (images ?
            <Slide autoplay={false} transitionDuration={250} easing='ease' cssClass='rounded' indicators={indicators}>
                {imgDivs}
            </Slide>
            : <></>)
    );
};

export default SlideShow;