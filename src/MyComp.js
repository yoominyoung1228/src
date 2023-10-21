import PropTypes from 'prop-types'

const MyComp = ({name, tel, children}) => {
    // const {name, tel, children} = props;
    return (
        <>
        <h2>안녕하세요</h2>
        <p>{name} / {tel}</p>
        <p>{children}</p>
        </>
    )
}

MyComp.defaultProps = {
    name: '기본이름'
}

MyComp.propTypes = {
    name: PropTypes.string
}

export default MyComp;