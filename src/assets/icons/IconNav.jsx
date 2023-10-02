import PropTypes from 'prop-types';

function IconNav({ sel }) {
    const color = sel ? '#F2F2F2' : '#A3A3A3';
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="48" 
            viewBox="0 -960 960 960" 
            width="48" 
            fill={color}
            style={{ width: '60%', height: '60%' }}
        >
            <path 
                d="m181.783-85.782-45.044-45.479L480-914.218l343.261 782.957-45.044 45.479L480-220.956 181.783-85.782Zm86.522-130.566L480-309.826l211.695 93.478L480-708.347 268.305-216.348ZM480-309.826Z"
                fill={color}
            />
        </svg>
    );
}

IconNav.propTypes = {
    sel: PropTypes.bool, // sel prop is of type boolean
};

export default IconNav;
