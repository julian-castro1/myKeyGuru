import PropTypes from 'prop-types';

function IconTran({ sel }) {
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
                d="M223.957-48q-54.932 0-91.836-37.612-36.904-37.612-36.904-91.393V-321h134.218v-573.435l63.93 63.565 63.365-63.565 63.366 63.565 63.93-63.565 62.8 63.565 64.131-63.565 63 63.565 63.565-63.565 63.565 63.565 64.696-63.565v717.696q0 53.515-37.777 91.127-37.778 37.613-90.963 37.613H223.957Zm513.369-83.739q18.717 0 31.717-12.7t13-32.013V-768.13H312.609V-321h379.434v144.261q0 19.435 12.783 32.217 12.783 12.783 32.5 12.783ZM364.435-604.391v-63.956h230.739v63.956H364.435Zm0 136.782v-63.956h230.739v63.956H364.435Zm323.107-136.782q-12.977 0-22.346-9.816-9.37-9.815-9.37-22.108 0-12.293 9.246-22.162 9.245-9.87 22.391-9.87 13.146 0 22.732 9.746 9.587 9.745 9.587 22.207 0 12.461-9.631 22.232-9.632 9.771-22.609 9.771Zm0 131.782q-12.977 0-22.346-9.884-9.37-9.884-9.37-22.278 0-12.394 9.246-22.094 9.245-9.7 22.391-9.7 13.146 0 22.732 9.7 9.587 9.7 9.587 22.094 0 12.394-9.631 22.278-9.632 9.884-22.609 9.884Zm-464.585 340.87h385.912V-237.26H178.957v60.521q0 19.435 12.65 32.217 12.65 12.783 31.35 12.783Zm-44 0V-237.26v105.521Z"
                fill={color}
            />
        </svg>
    );
}

IconTran.propTypes = {
    sel: PropTypes.bool, // sel prop is of type boolean
};

export default IconTran;