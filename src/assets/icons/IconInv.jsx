import PropTypes from 'prop-types';

function IconInv({ sel }) {
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
                d="M620.435-148.304 451-317.739l57.087-57.652 112.348 112.347 234.217-234.217 57.087 57.087-291.304 291.87Zm238.956-425.435h-83.739v-203.217h-57.174v103.217H241.522v-103.217h-57.174v591.869h246.217v83.174H184.348q-35.197 0-59.185-23.616-23.989-23.616-23.989-59.558v-591.869q0-35.943 23.22-59.841 23.22-23.899 59.954-23.899h184.565q10-34.869 40.369-58.217 30.37-23.348 71.178-23.348 39.236 0 69.584 23.065 30.347 23.066 42.478 58.5h183.13q36.734 0 60.237 23.899 23.502 23.898 23.502 59.841v203.217ZM480.717-783.043q15.718 0 27.718-12.066 12-12.065 12-28.217 0-16.717-12-28.217t-28-11.5q-16.435 0-28.218 11.5-11.782 11.5-11.782 28.5 0 15.869 11.782 27.934 11.783 12.066 28.5 12.066Z"
                fill={color}
            />
        </svg>
    );
}

IconInv.propTypes = {
    sel: PropTypes.bool, // sel prop is of type boolean
};

export default IconInv;
