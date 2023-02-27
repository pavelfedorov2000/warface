//import checkIcon from '../assets/images/icons/check.svg';

const FormAgree = () => {
    return (
        <label className="form-agree">
            <input className="check-box" type="checkbox" />
            <span className="check-style">
                
            </span>
            <span className="check-text">
                Я принимаю <a href="#">Пользовательское соглашение</a> о конфиденциальности
            </span>
        </label>
    );
}

export default FormAgree;

// <span style={{ backgroundImage: `url(${checkIcon})` }}></span>