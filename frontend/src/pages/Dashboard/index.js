import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from '../../services/api';

import "./styles.css";
import m1 from "../../assets/userMentor1.jpg"
import m2 from "../../assets/userMentor2.jpg"
import m3 from "../../assets/userMentor3.jpg"
import m4 from "../../assets/userMentor4.jpg"
import m5 from "../../assets/userMentor5.jpg"
import m6 from "../../assets/userMentor6.jpg"
import m7 from "../../assets/userMentor7.jpg"
import m8 from "../../assets/userMentor8.jpg"
import m9 from "../../assets/userMentor9.jpg"
import m10 from "../../assets/userMentor10.jpg"


export default function Dashboard({ history }) {
  const [mentors, setMentors] = useState([]);

  const images = [
    m1,
    m2,
    m3,
    m4,
    m5,
    m6,
    m7,
    m8,
    m9,
    m10,
  ];

  useEffect(() => {
    api
      .get('/mentors')
      .then(({ data }) => {
        let mentorsData = data.mentors.data

        mentorsData = mentorsData.map((mentor, index) => {
          mentor.thumbnail_url = images[index];

          return mentor;
        });

        setMentors(mentorsData);
      })
      .catch(err => console.log(err));
  }, []);

  function handleClick() {
    history.push("/details");
  }

  return (
    <>
      <h2>Mentores</h2>
      <ul className="mentor-list">
      {mentors.map(mentor => (
        <li key={mentor.name} onClick={() => handleClick()}>
          <img className="mentor-thumbnail" src={mentor.thumbnail_url} />
          <div className="details">
            <p><strong>{mentor.name}</strong></p>
            <p>{mentor.course}</p>
            <p>{mentor.university}</p>
            <p><span>{mentor.semester}º semestre</span></p>
          </div>
          
          <div className="detail-price">
            <p><span>{mentor.price ? `R$ ${mentor.price}` : "Gratuito"}</span></p>
            <p className="mentor">Mentoria</p>
            <button onClick={() => handleClick()}>Ver detalhes</button>
          </div>

        </li>
      ))}
      </ul>
    </>
  );
}
