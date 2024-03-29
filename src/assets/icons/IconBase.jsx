import PropTypes from 'prop-types';

function IconBase({ color, percent}) {
    
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="48" 
            viewBox="0 -960 960 960" 
            width="48" 
            fill={color}
            style={{ width: percent ? percent : '60%', height: percent ? percent : '60%' }}
        >
            <path 
                d="M56-88.913v-769.173h429.348v169.695h418.651v599.477H56.001Zm76.957-76.957h105.739v-105.739H132.957v105.739Zm0-169.695h105.739V-441.87H132.957v106.305Zm0-170.13h105.739v-106.304H132.957v106.304Zm0-170.26h105.739v-105.739H132.957v105.739ZM302.652-165.87h105.739v-105.739H302.652v105.739Zm0-169.695h105.739V-441.87H302.652v106.305Zm0-170.13h105.739v-106.304H302.652v106.304Zm0-170.26h105.739v-105.739H302.652v105.739ZM472.348-165.87h354.695v-446.129H472.348v106.304h80.739v63.956h-80.739v106.174h80.739v63.956h-80.739v105.739Zm185.869-275.869v-63.956h63.956v63.956h-63.956Zm0 170.13v-63.956h63.956v63.956h-63.956Z"
                fill={color}
            />
        </svg>
    );
}

IconBase.propTypes = {
    color: PropTypes.string, // sel prop is of type boolean
};

export default IconBase;
