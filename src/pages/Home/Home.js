import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import { TextField, MenuItem, Button } from "@mui/material";
import Categories from "../../Data/Categories";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Icon } from '@iconify/react';

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <div className="content home">
      <img src="/img/imagen-2.png" alt="imagen quiz" />
      <h2>Welcome to the trivia Challenge</h2>

      <p>Set your quiz and play the game</p>

      <div className="settings__select">
        {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
        <TextField
          label="Enter your name"
          variant="outlined"
          color="primary"
          size="small"
          fullWidth
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          select
          label="Select a category"
          variant="outlined"
          size="small"
          fullWidth
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          {Categories.map((cat) => (
            <MenuItem key={cat.category} value={cat.value}>
              {cat.category}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Select Difficulty"
          size="small"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          variant="outlined"
        >
          <MenuItem key="Easy" value="easy">
            Easy
          </MenuItem>
          <MenuItem key="Medium" value="medium">
            Medium
          </MenuItem>
          <MenuItem key="Hard" value="hard">
            Hard
          </MenuItem>
        </TextField>

        <Button
          variant="container"
          color="primary"
          className="boton"
          onClick={handleSubmit}
        >
          Start <Icon icon="majesticons:rocket-3-start" />
        </Button>
      </div>
    </div>
  );
};

export default Home;
