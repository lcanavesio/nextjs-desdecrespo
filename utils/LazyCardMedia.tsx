import React, {useState, useEffect, useRef} from 'react'
import { CardMedia } from '@material-ui/core'

interface ICardMediaProp {
  component: string,
  image: string,
  alt: string,
  title: string,
  className: any
}
export default (props: ICardMediaProp) => {
    const [visible, setVisible] = useState<boolean>(false);
    const placeholderRef = useRef<HTMLDivElement>(null);
    useEffect(() => {

      if (!visible && placeholderRef.current) {
        const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
          if (intersectionRatio > 0) {
            setVisible(true);
          }
        });
        observer.observe(placeholderRef.current);
        return () => observer.disconnect();
      }
    }, [visible, placeholderRef]);
  
    return (visible
      ? 
      <CardMedia
        style={{ minWidth: "100%" }}
        component='img'
        title={props.title}
        image={props.image}
        alt={props.alt}
        className={props.className}
      />
      : 
      <div style={{ backgroundColor: '#EEE'}} aria-label={props.alt} ref={placeholderRef} />
    );
  };