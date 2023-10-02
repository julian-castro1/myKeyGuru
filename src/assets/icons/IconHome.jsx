import PropTypes from 'prop-types';

function IconHome({ sel }) {
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
                d="M225.522-185.087h131.782v-257h246.392v257h130.782v-382.217L480-757.913 225.522-567.638v382.551Zm-83.174 83.174v-507.478L480-862.479l338.218 253.088v507.478H526.739V-365.13h-92.478v263.217H142.348ZM480-472Z" 
                fill={color}
            />
        </svg>
    );
}

IconHome.propTypes = {
    sel: PropTypes.bool, // sel prop is of type boolean
};

export default IconHome;
