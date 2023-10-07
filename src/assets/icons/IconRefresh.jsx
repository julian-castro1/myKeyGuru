
import PropTypes from 'prop-types';

function IconRefresh({ color }) {
    
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="48" 
            viewBox="0 -960 960 960" 
            width="48" 
            fill={color}
            style={{ width: '100%', height: '100%' }}
        >
            <path 
                d="M160-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T400-790v84q-72 26-116 88.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H160Zm400-10v-84q72-26 116-88.5T720-482q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 111-66.5 197.5T560-170Z"
                fill={color}
            />
        </svg>
    );
}

IconRefresh.propTypes = {
    color: PropTypes.string, // sel prop is of type boolean
};

export default IconRefresh;