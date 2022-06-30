import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='tiktok'></img>
                </div>

                <div className={cx('search')}>
                    <input placeholder='Search accounts or videos' spellCheck = {false}></input>
                    <button className={cx('clear')}>
                        {/* clear */}
                    </button>

                    {/* icon loading */}

                    <button className={cx('search-btn')}>

                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
