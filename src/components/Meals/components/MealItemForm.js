import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const inputParams = {
    id: `amount_${props.id}`,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };

  return (
    <form className={classes.form}>
      <Input label="Amount" input={inputParams} />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
