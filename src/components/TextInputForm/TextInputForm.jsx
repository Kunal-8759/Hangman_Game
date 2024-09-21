import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ inputType, handleTextInputChange , handleShowHideClick, handleFormSubmit}){
    return (
        <>
            <div>
            <TextInput 
                type={inputType}
                label={"Enter a word or a phrase"}
                placeholder="Enter a word or phrase here"
                onChangeHandler={handleTextInputChange}
            />
        </div>

        <div>
            <Button 
                text={inputType==="password" ? "Show" : "Hide"}
                styleType="warning"
                onClickHandler={handleShowHideClick}
            />
        </div>

        <div>
            <Button
                text={"Submit"}
                styleType="primary"
                type="Submit"
                onClickHandler={handleFormSubmit}
            />
        </div>
        </>
    );
}

export default TextInputForm;