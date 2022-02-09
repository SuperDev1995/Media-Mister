
import SlideToggle from 'react-slide-toggle';
import { navItems } from '~/contents/navbar';
import ALink from '../features/alink';

const MobileItem = (props) => {
    const {name} = props;
    const subname = navItems[name].content;
    return (
        <>
        <SlideToggle collapsed={ true }>
            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                    <ALink href="#" className="sf-with-ul">
                        {name}
                    <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span>
                    </ALink>

                    <ul ref={ setCollapsibleElement }>
                        {subname.map((item,idx) => <li key={idx} ><ALink href={"/media/"+ name + " "+ item} scroll={ false }>{item}</ALink></li>)}
                    </ul>
                </li>
            ) }
        </SlideToggle>
        </>
    )
}

export default MobileItem;