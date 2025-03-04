import { useState } from "react";

const InputField = ({type, placeholder, icon}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    return (
        <div className="input-wrapper">
            <input
            type={isPasswordVisible ? 'text' : type} 
            placeholder={placeholder} 
            className="input-field"
            required
            />
            <i className="material-symbols-rounded">{icon}</i>
            {type === 'password' && (
                <i  onClick={() => 
                    setIsPasswordVisible(prevState => !prevState)}
                    className="material-symbols-rounded eye-icon">
                    {isPasswordVisible ? 'visibility_off' : 'visibility'}
                </i>
            )}
        </div>
    )
}

export default InputField;