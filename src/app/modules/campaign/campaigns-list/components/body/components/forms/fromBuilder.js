import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import ClearIcon from "@material-ui/icons/Clear";

const options1 = [
  "Short answer",
  "Paragraph",
  "Multiple choice",
  "Checkboxes",
  "Drop-down",
  "Date",
  "Time",
];

const Checkboxes = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <p>Short answer-text</p>
        <hr style={{ marginTop: "-0.7rem", width: "200%" }} />
      </div>
    </div>
  );
};
const Shortanswer = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <p>Short answer-text</p>
        <hr style={{ marginTop: "-0.7rem", width: "200%" }} />
      </div>
    </div>
  );
};
const Paragraph = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <p>Long answer-text</p>
        <hr style={{ marginTop: "-0.7rem", width: "200%" }} />
      </div>
    </div>
  );
};
const MultipleChoice = () => {
  const [optionFields, setOptionFields] = useState([
    {
      id: uuidv4(),
      option: `Option 1 `,
    },
  ]);
  const handleChangeInput1 = (id, event) => {
    const newOptionFields = optionFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setOptionFields(newOptionFields);
  };
  console.log(optionFields, "DEF");
  const handleAddOptionFields = () => {
    setOptionFields([
      ...optionFields,
      {
        id: uuidv4(),
        option: `Option ${optionFields.length + 1} `,
      },
    ]);
  };
  const handleRemoveOptionFields = (id) => {
    const values = [...optionFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setOptionFields(values);
  };

  return (
    <>
      {optionFields.map((optionField) => (
        <div>
          <div style={{ display: "flex" }}>
            <RadioButtonUncheckedIcon />
            <input
              name="option"
              type="text"
              value={optionField.option}
              onChange={(event) => handleChangeInput1(optionField.id, event)}
              style={{
                borderTopStyle: "hidden",
                borderRightStyle: "hidden",
                borderLeftStyle: "hidden",
                borderBottomStyle: "groove",
                width: "100%",
                fontSize: "1rem",
                outline: "none",
                marginBottom: "1rem",
              }}
            />
            <IconButton
              disabled={optionFields.length === 1}
              onClick={() => handleRemoveOptionFields(optionFields.id)}
            >
              <ClearIcon />
            </IconButton>
          </div>
        </div>
      ))}
      <div onClick={handleAddOptionFields} style={{ display: "flex" }}>
        <RadioButtonUncheckedIcon />
        <p>Add Option</p>
      </div>
    </>
  );
};

const options = [
  {
    buttonName: "Short answer",
    inputType: <Shortanswer />,
  },
  {
    buttonName: "Paragraph",
    inputType: <Paragraph />,
  },
  {
    buttonName: "Multiple choice",
    inputType: <MultipleChoice />,
  },
  {
    buttonName: "Checkboxes",
    inputType: <Checkboxes />,
  },
  {
    buttonName: "Drop-down",
    inputType: <h1>Drop-down</h1>,
  },
  {
    buttonName: "Date",
    inputType: <h1>Date</h1>,
  },
  // {
  //   buttonName: "Time",
  //   inputType: <h1>Time</h1>,
  // },
];

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function FormBuilder() {
  const classes = useStyles();
  const [formDetails, setFormDetails] = useState({
    id: uuidv4(),
    formTitle: "Untitled Form",
    formDescription: "Form description",
  });
  const [flag, setFlag] = useState(false);

  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      question: "Untitled question",
      buttonName: "Short answer",
      inputType: <Shortanswer />,
    },
  ]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (id, index) => {
    const newButtonName = inputFields.map((i) => {
      if (id === i.id) {
        i.buttonName = options[index].buttonName;
        i.inputType = options[index].inputType;
      }
      return i;
    });
    setAnchorEl(null);
    setInputFields(newButtonName);
  };

  console.log(inputFields, "buttontexts");
  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(true);
    const data = [...inputFields, formDetails];
    console.log(inputFields, "InputFields");
  };

  const handleChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };
  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        id: uuidv4(),
        question: "Untitled question",
        buttonName: "Short answer",
        inputType: <Shortanswer />,
      },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          paddingInline: "20%",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "2px solid gray",
            borderRadius: "5px",
            padding: "30px",
          }}
        >
          <input
            name="formTitle"
            label="formTitle"
            type="text"
            value={formDetails.formTitle}
            onChange={handleChange}
            style={{
              borderTopStyle: "hidden",
              borderRightStyle: "hidden",
              borderLeftStyle: "hidden",
              borderBottomStyle: "groove",
              width: "100%",
              fontSize: "3rem",
              outline: "none",
            }}
          />
          <input
            name="formDescription"
            type="text"
            value={formDetails.formDescription}
            onChange={handleChange}
            style={{
              marginTop: "2rem",
              borderTopStyle: "hidden",
              borderRightStyle: "hidden",
              borderLeftStyle: "hidden",
              borderBottomStyle: "groove",
              width: "100%",
              outline: "none",
            }}
          />
        </div>
        <div>
          {inputFields.map((inputField) => (
            <div
              style={{
                border: "2px solid gray",
                borderRadius: "5px",
                padding: "30px",
                marginTop: "1rem",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                // key={inputField.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <input
                  name="question"
                  type="text"
                  value={inputField.question}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                  style={{
                    borderTopStyle: "hidden",
                    borderRightStyle: "hidden",
                    borderLeftStyle: "hidden",
                    borderBottomStyle: "groove",
                    width: "50%",
                    fontSize: "1rem",
                    outline: "none",
                    marginBottom: "2rem",
                  }}
                />

                <Button
                  variant="outlined"
                  endIcon={<ArrowDropDownIcon />}
                  onClick={handleClick}
                  style={{ height: "40px", width: "200px" }}
                >
                  {inputField.buttonName}
                </Button>

                <div>
                  <div>
                    <Menu
                      id="long-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "30ch",
                          paddingInline: "1rem",
                        },
                      }}
                    >
                      {options.map((option, index) => (
                        <MenuItem
                          style={{ padding: "1rem" }}
                          // key={inputField.id}
                          selected={option === "Pyxis"}
                          onClick={() => {
                            handleClose(inputField.id, index);
                          }}
                        >
                          {option.buttonName}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                </div>
              </div>
              <div key={inputField.id}>{inputField.inputType}</div>
              <IconButton
                disabled={inputFields.length === 1}
                onClick={() => handleRemoveFields(inputField.id)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          ))}
        </div>

        <div>
          {" "}
          <IconButton onClick={handleAddFields}>
            <AddIcon />
          </IconButton>
        </div>

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Send
        </Button>
        <div>
          {flag ? (
            <a href={`http://localhost:4005/websocCRM/form/${formDetails?.id}`}>
              <h1 style={{ color: "red" }}>
                http://localhost:4005/websocCRM/form/{formDetails?.id}
              </h1>
            </a>
          ) : null}
        </div>
      </form>
    </>
  );
}

export default FormBuilder;
